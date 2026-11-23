#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const root = path.resolve(__dirname, '..');
const packedDir = path.join(root, 'src', 'packed');
const chunkSize = 6500;
const segments = [
  'game.js.deflate.b64.001',
  'game.js.deflate.b64.002',
  'game.js.deflate.b64.003',
  'game.js.deflate.b64.004',
  'game.js.deflate.b64.005',
  'game.js.deflate.b64.006',
  'game.js.deflate.b64.007'
];
try {
  const encoded = segments.map((name, index) => {
    const file = path.join(packedDir, name);
    if (!fs.existsSync(file)) throw new Error('Missing source segment: ' + path.relative(root, file));
    const part = fs.readFileSync(file, 'utf8').trim();
    if (index === 0) {
      if (part.length < chunkSize) throw new Error('Segment 001 is unexpectedly short');
      return part.slice(0, chunkSize);
    }
    return part;
  }).join('');
  if (encoded.length !== 44172) throw new Error('Unexpected base64 length: ' + encoded.length + ' (expected 44172)');
  let source = zlib.inflateRawSync(Buffer.from(encoded, 'base64')).toString('utf8');

  // Compatibility: avoid optional chaining unsupported by some Mini Game runtimes.
  const compatibilityReplacements = [
    ['if(touched?.frozen)', 'if(touched && touched.frozen)'],
    ['navigator.vibrate?.(v)', 'if(navigator.vibrate) navigator.vibrate(v)'],
    ['TYPES[b.type]?.glow', '(TYPES[b.type] ? TYPES[b.type].glow : null)'],
    ['TYPES[b.type]?.restitution', '(TYPES[b.type] ? TYPES[b.type].restitution : null)'],
    ['TYPES[b.type]?.damage', '(TYPES[b.type] ? TYPES[b.type].damage : null)'],
    ['TYPES[k]?.color', '(TYPES[k] ? TYPES[k].color : null)'],
    ['aim?.side', '(aim ? aim.side : null)'],
    ['b.id?.length', '(b.id ? b.id.length : 0)']
  ];
  for (const pair of compatibilityReplacements) {
    if (!source.includes(pair[0])) throw new Error('Expected compatibility token not found: ' + pair[0]);
    source = source.split(pair[0]).join(pair[1]);
  }
  if (/\?\.(?:[A-Za-z_$]|\[|\()/.test(source)) {
    throw new Error('Unsupported optional chaining remains in game.js');
  }

  // Lower Canvas pixel density on mobile / DevTools high-DPI windows.
  source = source.replace(
    'mqPixelRatio = info.pixelRatio || mqPixelRatio || 1;',
    'mqPixelRatio = Math.min(info.pixelRatio || mqPixelRatio || 1, 1.25);'
  );

  // Cache the expensive starfield / nebula / temple background on an offscreen canvas.
  source = source.replace(
    "const canvas=document.getElementById('game'),ctx=canvas.getContext('2d');",
    "const canvas=document.getElementById('game');\nlet ctx=canvas.getContext('2d');\nconst mainCtx=ctx;\nlet backgroundCanvas=null;"
  );
  const envMarker = 'function drawEnvironment(){// hanging chain and relic ring';
  const bgCache = `function prepareBackgroundCache(){
 try{
  if(!wx.createOffscreenCanvas)return;
  const off=wx.createOffscreenCanvas({type:'2d',width:W,height:H});
  const offctx=off&&off.getContext?off.getContext('2d'):null;
  if(!offctx)return;
  const previous=ctx;ctx=offctx;
  drawBg();
  ctx=previous;backgroundCanvas=off;
 }catch(e){ctx=mainCtx;backgroundCanvas=null;}
}
function drawAmbientStars(){
 ctx.save();
 for(let i=0;i<18;i++){
  const x=(i*191+Math.floor(clock*.22*(i%3+1)))%W;
  const y=(i*83+Math.floor(clock*.08*(i%4+1)))%560;
  const a=.16+.42*(.5+.5*Math.sin(clock*.035+i*1.9));
  ctx.globalAlpha=a;ctx.fillStyle=i%5===0?'#ffe4ba':'#d7f1ff';
  ctx.fillRect(x,y,i%6===0?2.5:1.4,i%6===0?2.5:1.4);
 }
 ctx.restore();
}
`;
  if (!source.includes(envMarker)) throw new Error('Background cache insertion point not found');
  source = source.replace(envMarker, bgCache + envMarker);
  source = source.replace(
    'ctx.clearRect(-30,-30,W+60,H+60);drawBg();drawEnvironment();',
    'ctx.clearRect(-30,-30,W+60,H+60);if(backgroundCanvas)ctx.drawImage(backgroundCanvas,0,0,W,H);else drawBg();drawAmbientStars();drawEnvironment();'
  );

  // Reduce Canvas shadow and particle overdraw on low / mid-range phones.
  source = source.split('ctx.shadowBlur=r*2;').join('ctx.shadowBlur=Math.min(14,r*1.25);');
  for (const pair of [['30','14'],['34','15'],['28','12'],['26','12'],['23','12'],['22','11'],['20','10'],['19','10'],['18','9']]) {
    source = source.split('ctx.shadowBlur=' + pair[0] + ';').join('ctx.shadowBlur=' + pair[1] + ';');
  }
  source = source.replace(
    "function burst(x,y,color,count=20,power=5,shape='dot'){for(let i=0;i<count;i++)",
    "function burst(x,y,color,count=20,power=5,shape='dot'){count=Math.min(count,72);if(particles.length>190)particles.splice(0,particles.length-150);for(let i=0;i<count;i++)"
  );
  source = source.replace(
    'function ring(x,y,color,max=90,life=22,width=5){rings.push',
    'function ring(x,y,color,max=90,life=22,width=5){if(rings.length>52)rings.splice(0,rings.length-40);rings.push'
  );
  source = source.replace(
    "function textPop(x,y,txt,color='#fff',size=19){texts.push",
    "function textPop(x,y,txt,color='#fff',size=19){if(texts.length>36)texts.splice(0,texts.length-28);texts.push"
  );
  source = source.replace(
    "ctx.save();ctx.globalAlpha=a;ctx.translate(p.x,p.y);ctx.rotate(p.rot||0);ctx.fillStyle=p.color;ctx.strokeStyle=p.color;ctx.shadowColor=p.color;ctx.shadowBlur=p.shape==='smoke'?16:20;",
    "ctx.save();ctx.globalAlpha=a;ctx.translate(p.x,p.y);ctx.rotate(p.rot||0);ctx.fillStyle=p.color;ctx.strokeStyle=p.color;ctx.shadowColor=p.color;ctx.shadowBlur=p.shape==='smoke'?6:10;"
  );

  // RAF timestamps are performance-relative; use Date.now consistently for the simulation clock.
  const oldFrame = 'function frame(now){let dt=Math.min(34,now-last||16.67),step=dt/16.67;last=now;if(hitStop>0)hitStop--;else update(step);clock+=step;updateFx(step);draw();drawWxHud();miniRAF(frame);}\nfresh();miniRAF(frame);';
  const newFrame = `let lastDrawAt=0;
function frame(){
 const now=Date.now();
 const dt=Math.min(50,Math.max(0,now-last||16.67));
 const step=dt/16.67;
 last=now;
 if(!mqHidden){
  if(hitStop>0)hitStop--;else update(step);
  clock+=step;updateFx(step);
  if(now-lastDrawAt>=22){draw();drawWxHud();lastDrawAt=now;}
 }else{lastDrawAt=now;}
 miniRAF(frame);
}
prepareBackgroundCache();
fresh();miniRAF(frame);`;
  if (!source.includes(oldFrame)) throw new Error('Animation loop patch point not found');
  source = source.replace(oldFrame, newFrame);

  const output = path.join(root, 'game.js');
  fs.writeFileSync(output, source, 'utf8');
  console.log('Restored compatible game.js (' + Buffer.byteLength(source, 'utf8').toLocaleString() + ' bytes)');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exitCode = 1;
}
