const canvas = wx.createCanvas();
const ctx = canvas.getContext('2d');
const W = 1440, H = 810;
let scale = 1, ox = 0, oy = 0;
let balls = [], particles = [], shots = 0, hp = 100, shield = 0, selected = 0;
let aiming = false, pointer = null, aim = {x:720,y:300}, last = Date.now(), raf = 0;
const types = [
  {id:'fire',name:'烈焰',color:'#ff794f',light:'#ffc078',speed:790,r:17,mass:1,damage:15},
  {id:'ice',name:'极寒',color:'#75d9ff',light:'#d4f6ff',speed:690,r:18,mass:1,damage:12},
  {id:'heavy',name:'陨星',color:'#ffcc68',light:'#fff0b5',speed:570,r:25,mass:2.2,damage:23},
  {id:'lightning',name:'雷暴',color:'#b49aff',light:'#eee3ff',speed:900,r:15,mass:.8,damage:14},
  {id:'split',name:'裂变',color:'#6fe3bd',light:'#caffec',speed:740,r:16,mass:1,damage:13},
  {id:'void',name:'虚空',color:'#dc8dff',light:'#f4d0ff',speed:650,r:20,mass:1.4,damage:20}
];
function resize(){
  const info=wx.getSystemInfoSync(); const dpr=Math.min(info.pixelRatio||1,2);
  canvas.width=Math.floor(info.windowWidth*dpr); canvas.height=Math.floor(info.windowHeight*dpr);
  scale=Math.min(canvas.width/W,canvas.height/H); ox=(canvas.width-W*scale)/2; oy=(canvas.height-H*scale)/2;
}
resize(); wx.onWindowResize(resize);
function pos(t){return {x:(t.clientX*(canvas.width/(wx.getSystemInfoSync().windowWidth))-ox)/scale,y:(t.clientY*(canvas.height/(wx.getSystemInfoSync().windowHeight))-oy)/scale};}
function launcher(x){return {x:x< W/2?130:1310,y:660};}
function shoot(p){
 const side=p.x<W/2?0:1, base=launcher(side?W:0);
 let dx=p.x-base.x,dy=p.y-base.y, len=Math.hypot(dx,dy);
 if(len<22){dx=side?-0.5:0.5;dy=-.86;len=1;}
 const t=types[selected], speed=t.speed;
 balls.push({x:base.x+dx/len*58,y:base.y+dy/len*58,vx:dx/len*speed,vy:dy/len*speed,r:t.r,type:selected,age:0,frozen:false,trail:[]});
 shots++; burst(base.x+dx/len*62,base.y+dy/len*62,t.light,8);
}
function burst(x,y,c,n){for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,s=40+Math.random()*180;particles.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:.35+Math.random()*.45,color:c});}}
function reset(){balls=[];particles=[];hp=100;shield=0;shots=0;}
function rounded(x,y,w,h,r,c){ctx.fillStyle=c;ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fill();}
function draw(){
 ctx.setTransform(scale,0,0,scale,ox,oy);ctx.clearRect(-ox/scale,-oy/scale,canvas.width/scale,canvas.height/scale);
 const bg=ctx.createLinearGradient(0,0,0,H);bg.addColorStop(0,'#101c43');bg.addColorStop(1,'#080d20');ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
 for(let i=0;i<90;i++){const x=(i*173)%W,y=(i*97)%H;ctx.fillStyle='rgba(180,210,255,.35)';ctx.fillRect(x,y,2,2);}
 rounded(32,28,1376,754,28,'rgba(20,35,75,.75)');
 ctx.strokeStyle='rgba(125,170,255,.24)';ctx.lineWidth=3;ctx.strokeRect(50,48,1340,710);
 // platforms and bumpers
 rounded(360,390,720,24,12,'#314d7b');rounded(520,530,400,18,9,'#243e69');
 drawBoss();
 drawCannon(130);drawCannon(1310);
 balls.forEach(b=>{
  if(b.trail.length>1){ctx.beginPath();ctx.moveTo(b.trail[0].x,b.trail[0].y);for(const p of b.trail)ctx.lineTo(p.x,p.y);ctx.strokeStyle=types[b.type].color+'66';ctx.lineWidth=b.r*.75;ctx.stroke();}
  ctx.shadowBlur=22;ctx.shadowColor=types[b.type].color;ctx.fillStyle=types[b.type].color;ctx.beginPath();ctx.arc(b.x,b.y,b.r,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;
  ctx.fillStyle='rgba(255,255,255,.7)';ctx.beginPath();ctx.arc(b.x-b.r*.3,b.y-b.r*.3,b.r*.25,0,Math.PI*2);ctx.fill();
  if(b.frozen){ctx.strokeStyle='#d9f6ff';ctx.lineWidth=3;ctx.beginPath();ctx.arc(b.x,b.y,b.r+7,0,Math.PI*2);ctx.stroke();}
 });
 particles.forEach(p=>{ctx.globalAlpha=Math.max(0,p.life);ctx.fillStyle=p.color;ctx.beginPath();ctx.arc(p.x,p.y,3,0,Math.PI*2);ctx.fill();});ctx.globalAlpha=1;
 if(aiming){const base=launcher(pointer.x);ctx.setLineDash([10,10]);ctx.strokeStyle='#c4eaff';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(base.x,base.y);ctx.lineTo(aim.x,aim.y);ctx.stroke();ctx.setLineDash([]);ctx.beginPath();ctx.arc(aim.x,aim.y,10,0,Math.PI*2);ctx.stroke();}
 // HUD
 rounded(70,65,330,68,18,'rgba(4,10,29,.72)');ctx.fillStyle='#eaf2ff';ctx.font='bold 27px sans-serif';ctx.fillText('MARBLE QUEST',92,108);
 rounded(1050,70,270,18,9,'#26385e');rounded(1050,70,270*hp/100,18,9,shield>0?'#ffd477':'#79d9ff');
 ctx.fillStyle='#dce9ff';ctx.font='20px sans-serif';ctx.fillText('月蚀蝶后  '+hp+'/100',1050,120);
 ctx.fillStyle='#a9c2ed';ctx.font='18px sans-serif';ctx.fillText(shield>0?'护盾破裂！攻击核心':'先让两颗弹珠相撞，触发共鸣',560,92);
 rounded(370,695,700,82,20,'rgba(4,10,29,.82)');
 types.forEach((t,i)=>{const x=390+i*112;rounded(x,710,98,52,13,selected===i?'#365d91':'#1a2b50');ctx.fillStyle=t.color;ctx.beginPath();ctx.arc(x+22,736,10,0,Math.PI*2);ctx.fill();ctx.fillStyle='#edf4ff';ctx.font='17px sans-serif';ctx.fillText(t.name,x+39,742);});
 rounded(1190,690,170,62,16,'#314a78');ctx.fillStyle='#fff';ctx.font='22px sans-serif';ctx.fillText('重新开始',1217,730);
 ctx.fillStyle='#a9c2ed';ctx.font='17px sans-serif';ctx.fillText('拖动瞄准，松开发射 · 点击飞行弹珠可定身',470,665);
}
function drawCannon(x){ctx.save();ctx.translate(x,660);ctx.fillStyle='#314e82';ctx.beginPath();ctx.arc(0,0,38,0,Math.PI*2);ctx.fill();ctx.rotate(-.55);rounded(-17,-70,34,90,12,'#9ab8e8');ctx.restore();}
function drawBoss(){ctx.save();ctx.translate(720,235);ctx.shadowBlur=shield>0?35:18;ctx.shadowColor=shield>0?'#ffe28a':'#a78bff';ctx.fillStyle=shield>0?'#ffcf7a':'#9178db';ctx.beginPath();ctx.arc(0,0,58,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;ctx.fillStyle='#201c48';ctx.beginPath();ctx.arc(-19,-5,8,0,Math.PI*2);ctx.arc(19,-5,8,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#f4dcff';ctx.lineWidth=4;ctx.beginPath();ctx.arc(0,12,20,.2,Math.PI-.2);ctx.stroke();ctx.restore();}
function update(dt){
 balls.forEach(b=>{if(b.frozen)return;b.age+=dt;b.trail.push({x:b.x,y:b.y});if(b.trail.length>9)b.trail.shift();b.vy+=520*dt;b.x+=b.vx*dt;b.y+=b.vy*dt;
  if(b.x<b.r||b.x>W-b.r){b.x=Math.max(b.r,Math.min(W-b.r,b.x));b.vx*=-.78;}
  if(b.y>710-b.r){b.y=710-b.r;b.vy*=-.72;b.vx*=.985;}
  if(b.y<50+b.r){b.y=50+b.r;b.vy=Math.abs(b.vy)*.75;}
  if(Math.hypot(b.x-720,b.y-235)<b.r+60){if(shield>0){hp=Math.max(0,hp-types[b.type].damage);burst(720,235,types[b.type].light,14);}else burst(b.x,b.y,'#a8b8ff',5);b.age=99;}
 });
 // orb-to-orb collision; freeze the first hit as an anchor and open shield on resonance
 for(let i=0;i<balls.length;i++)for(let j=i+1;j<balls.length;j++){const a=balls[i],b=balls[j];if(a.age>20||b.age>20)continue;const d=Math.hypot(a.x-b.x,a.y-b.y);if(d<a.r+b.r){const nx=(b.x-a.x)/(d||1),ny=(b.y-a.y)/(d||1);if(a.frozen||b.frozen){shield=3.6;burst((a.x+b.x)/2,(a.y+b.y)/2,'#fff0a6',28);a.age=99;b.age=99;}else{const v=(a.vx-b.vx)*nx+(a.vy-b.vy)*ny;a.vx-=v*nx*.8;a.vy-=v*ny*.8;b.vx+=v*nx*.8;b.vy+=v*ny*.8;}}}
 balls=balls.filter(b=>b.age<24&&b.y<H+100);particles.forEach(p=>{p.x+=p.vx*dt;p.y+=p.vy*dt;p.life-=dt;});particles=particles.filter(p=>p.life>0);shield=Math.max(0,shield-dt);
}
function frame(){const now=Date.now(),dt=Math.min((now-last)/1000,.033);last=now;update(dt);draw();raf=requestAnimationFrame(frame);}
function onDown(e){const t=e.changedTouches[0],p=pos(t);pointer=p;
 if(p.y>690&&p.y<790){if(p.x>1170){reset();return;}const idx=Math.floor((p.x-390)/112);if(idx>=0&&idx<6){selected=idx;return;}}
 const hit=balls.find(b=>Math.hypot(b.x-p.x,b.y-p.y)<b.r+18);if(hit){hit.frozen=!hit.frozen;if(hit.frozen){hit.vx=0;hit.vy=0;}return;}
 aiming=true;aim=p;}
function onMove(e){if(!aiming)return;const t=e.changedTouches[0];aim=pos(t);pointer=aim;}
function onUp(e){if(!aiming)return;const p=pos(e.changedTouches[0]);aiming=false;shoot(p);}
wx.onTouchStart(onDown);wx.onTouchMove(onMove);wx.onTouchEnd(onUp);wx.onTouchCancel(()=>{aiming=false;});
frame();
