// Marble Quest — native WeChat Mini Game.
// Physics: Matter.js 0.14.2 (MIT); see THIRD_PARTY_NOTICES.md.
const Matter = require('./src/physics/matter.js');
const canvas = wx.createCanvas();
const ctx = canvas.getContext('2d');
const W = 960, H = 540;
let scale=1, ox=0, oy=0, dpr=1;
const engine=Matter.Engine.create({enableSleeping:true});
engine.gravity.x=0; engine.gravity.y=0.72;
engine.positionIterations=8; engine.velocityIterations=6;
const world=engine.world;
const C=['#ff805f','#78dcff','#ffd071','#b59aff','#70e4bf','#df91ff'];
const names=['烈焰','极寒','陨星','雷暴','裂变','虚空'];
const radii=[13,14,19,12,13,16], speeds=[13.5,12.5,10.5,15,13,11.5], damages=[16,13,25,15,14,22];
let balls=[], particles=[], selected=0, hp=100, shield=0, shots=0, aiming=false, side=0;
let aim={x:480,y:250}, last=Date.now(), won=false, message='让两颗弹珠相撞，触发共鸣并击破护盾';

function resize(){
 const info=wx.getSystemInfoSync(); dpr=Math.min(info.pixelRatio||1,2);
 canvas.width=Math.floor(info.windowWidth*dpr); canvas.height=Math.floor(info.windowHeight*dpr);
 scale=Math.min(canvas.width/W,canvas.height/H); ox=(canvas.width-W*scale)/2; oy=(canvas.height-H*scale)/2;
}
resize(); if(wx.onWindowResize) wx.onWindowResize(resize);
function point(t){return {x:(t.clientX*dpr-ox)/scale,y:(t.clientY*dpr-oy)/scale};}
function cannon(s){return {x:s===0?92:868,y:432};}
function rect(x,y,w,h,label){
 return Matter.Bodies.rectangle(x,y,w,h,{isStatic:true,label,restitution:.82,friction:.02,render:{visible:false}});
}
function circle(x,y,r,label){
 return Matter.Bodies.circle(x,y,r,{isStatic:true,label,restitution:.82,friction:.02,render:{visible:false}});
}
function setupWorld(){
 Matter.World.add(world,[
  rect(480,-24,1060,48,'wall'),rect(-24,270,48,650,'wall'),rect(984,270,48,650,'wall'),rect(480,564,1060,48,'wall'),
  rect(480,300,340,15,'bumper'),rect(480,365,220,13,'bumper'),circle(480,150,48,'boss')
 ]);
}
setupWorld();
function burst(x,y,color,n){
 for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,v=35+Math.random()*180;
  particles.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,life:.7,color});}
}
function reset(){
 balls.forEach(o=>Matter.World.remove(world,o.body)); balls=[]; particles=[];
 hp=100; shield=0; shots=0; won=false; message='让两颗弹珠相撞，触发共鸣并击破护盾';
}
function fire(p){
 if(won)return;
 const base=cannon(side); let dx=p.x-base.x,dy=p.y-base.y;
 if(side===0&&dx<0)dx=Math.abs(dx)*.35;
 if(side===1&&dx>0)dx=-Math.abs(dx)*.35;
 dy=Math.min(dy,-Math.max(55,Math.abs(dx)*.18));
 let len=Math.hypot(dx,dy)||1;
 const body=Matter.Bodies.circle(base.x+dx/len*34,base.y+dy/len*34,radii[selected],{
  label:'marble',density:.002+selected*.00015,restitution:.86,friction:.015,frictionAir:.0015,
  sleepThreshold:90,render:{visible:false}
 });
 body.gameType=selected; body.gameAge=0; Matter.Body.setVelocity(body,{x:dx/len*speeds[selected],y:dy/len*speeds[selected]});
 Matter.World.add(world,body); balls.push({body,type:selected,frozen:false}); shots++;
 burst(body.position.x,body.position.y,C[selected],9);
}
Matter.Events.on(engine,'collisionStart',e=>{
 for(const pair of e.pairs){
  const a=pair.bodyA,b=pair.bodyB;
  if(a.label==='marble'&&b.label==='marble'&&shield<=0){
   shield=3.8; message='共鸣成功！护盾已打开，攻击核心！';
   burst((a.position.x+b.position.x)/2,(a.position.y+b.position.y)/2,'#fff0a6',28);
  }
  const marble=a.label==='marble'?a:(b.label==='marble'?b:null);
  const target=marble===a?b:a;
  if(marble&&target.label==='boss'&&shield>0){
   hp=Math.max(0,hp-damages[marble.gameType||0]); burst(480,150,C[marble.gameType||0],18);
   Matter.World.remove(world,marble); balls=balls.filter(o=>o.body!==marble);
   if(hp===0){won=true;message='胜利！月蚀蝶后已被击败';}
  }
 }
});
function freezeAt(p){
 let hit=null,dist=Infinity;
 for(const o of balls){const d=Math.hypot(o.body.position.x-p.x,o.body.position.y-p.y);
  if(d<radii[o.type]+17&&d<dist){hit=o;dist=d;}}
 if(!hit)return false;
 hit.frozen=!hit.frozen; Matter.Body.setStatic(hit.body,hit.frozen);
 if(hit.frozen){Matter.Body.setVelocity(hit.body,{x:0,y:0});Matter.Body.setAngularVelocity(hit.body,0);}
 return true;
}
function rr(x,y,w,h,r,color){
 ctx.fillStyle=color;ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);
 ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();ctx.fill();
}
function draw(){
 ctx.setTransform(scale,0,0,scale,ox,oy);ctx.clearRect(-ox/scale,-oy/scale,canvas.width/scale,canvas.height/scale);
 const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#101f43');g.addColorStop(1,'#0b1430');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
 for(let i=0;i<75;i++){ctx.fillStyle='rgba(190,215,255,.3)';ctx.fillRect(i*137%W,i*83%H,2,2);}
 rr(18,16,924,508,22,'rgba(15,29,62,.72)');ctx.strokeStyle='rgba(130,170,245,.25)';ctx.strokeRect(30,28,900,484);
 rr(310,292,340,15,7,'#314d7b');rr(370,358,220,13,6,'#263f6b');
 // Boss and shield
 ctx.save();ctx.translate(480,150);
 if(shield>0){ctx.strokeStyle='#ffd477';ctx.lineWidth=8;ctx.shadowBlur=24;ctx.shadowColor='#ffd477';ctx.beginPath();ctx.arc(0,0,62,0,Math.PI*2);ctx.stroke();}
 ctx.shadowBlur=18;ctx.shadowColor='#aa8cff';ctx.fillStyle='#9279dc';ctx.beginPath();ctx.arc(0,0,46,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;
 ctx.fillStyle='#211d4b';ctx.beginPath();ctx.arc(-15,-5,6,0,Math.PI*2);ctx.arc(15,-5,6,0,Math.PI*2);ctx.fill();ctx.restore();
 balls.forEach(o=>{const p=o.body.position,r=radii[o.type];ctx.save();if(o.frozen){ctx.strokeStyle='#e2f8ff';ctx.lineWidth=3;ctx.beginPath();ctx.arc(p.x,p.y,r+7,0,Math.PI*2);ctx.stroke();}
  ctx.shadowBlur=17;ctx.shadowColor=C[o.type];ctx.fillStyle=C[o.type];ctx.beginPath();ctx.arc(p.x,p.y,r,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;
  ctx.fillStyle='rgba(255,255,255,.75)';ctx.beginPath();ctx.arc(p.x-r*.3,p.y-r*.3,r*.24,0,Math.PI*2);ctx.fill();ctx.restore();});
 particles.forEach(p=>{ctx.globalAlpha=Math.max(0,p.life/.7);ctx.fillStyle=p.color;ctx.beginPath();ctx.arc(p.x,p.y,2.5,0,Math.PI*2);ctx.fill();});ctx.globalAlpha=1;
 [0,1].forEach(s=>{const p=cannon(s);ctx.save();ctx.translate(p.x,p.y);ctx.fillStyle='#304d83';ctx.beginPath();ctx.arc(0,0,27,0,Math.PI*2);ctx.fill();
  const t=aiming&&side===s?aim:{x:s===0?260:700,y:260};ctx.rotate(Math.atan2(t.y-p.y,t.x-p.x));rr(-11,-56,22,64,8,'#a8c5f1');ctx.restore();});
 rr(48,38,250,47,13,'rgba(4,10,29,.78)');ctx.fillStyle='#edf4ff';ctx.font='bold 22px sans-serif';ctx.fillText('MARBLE QUEST',65,69);
 rr(700,43,190,13,7,'#26385e');rr(700,43,190*hp/100,13,7,shield>0?'#ffd477':'#79d9ff');ctx.fillStyle='#edf4ff';ctx.font='15px sans-serif';ctx.fillText('月蚀蝶后 '+hp+'/100',700,80);
 ctx.fillStyle=shield>0?'#ffe4a3':'#9eb5df';ctx.font='14px sans-serif';ctx.fillText(message,310,112);
 rr(260,456,440,58,15,'rgba(4,10,29,.86)');
 names.forEach((n,i)=>{const x=270+i*71;rr(x,464,65,42,10,selected===i?'#3c6096':'#1a2b50');ctx.fillStyle=C[i];ctx.beginPath();ctx.arc(x+13,485,6,0,Math.PI*2);ctx.fill();ctx.fillStyle='#edf4ff';ctx.font='12px sans-serif';ctx.fillText(n,x+23,489);});
 rr(775,456,128,48,12,'#314a78');ctx.fillStyle='#fff';ctx.font='17px sans-serif';ctx.fillText('重新开始',797,486);
 ctx.fillStyle='#9eb5df';ctx.font='13px sans-serif';ctx.fillText('按住拖动瞄准，松开发射 · 点击弹珠定身/解除',300,432);
 if(aiming){const p=cannon(side);ctx.save();ctx.setLineDash([8,8]);ctx.strokeStyle='#d3edff';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(aim.x,aim.y);ctx.stroke();ctx.setLineDash([]);ctx.restore();}
 if(won){rr(315,190,330,120,18,'rgba(5,10,30,.88)');ctx.fillStyle='#ffe7a6';ctx.font='bold 30px sans-serif';ctx.fillText('胜利！',435,240);}
}
function update(dt){
 Matter.Engine.update(engine,Math.min(dt,.033)*1000);
 balls=balls.filter(o=>{o.body.gameAge+=dt;const p=o.body.position;
  if(o.body.gameAge>22||p.y>H+100||p.x< -100||p.x>W+100){Matter.World.remove(world,o.body);return false;}return true;});
 shield=Math.max(0,shield-dt);if(shield<=0&&!won)message='让两颗弹珠相撞，触发共鸣并击破护盾';
 particles.forEach(p=>{p.x+=p.vx*dt;p.y+=p.vy*dt;p.life-=dt;});particles=particles.filter(p=>p.life>0);
}
function frame(){const now=Date.now(),dt=Math.min((now-last)/1000,.033);last=now;update(dt);draw();requestAnimationFrame(frame);}
function down(e){
 const p=point(e.changedTouches[0]);
 if(p.y>=450&&p.y<=520){if(p.x>=770){reset();return;}const i=Math.floor((p.x-270)/71);if(i>=0&&i<6){selected=i;return;}}
 if(freezeAt(p))return;side=p.x<W/2?0:1;aiming=true;aim=p;
}
function move(e){if(aiming)aim=point(e.changedTouches[0]);}
function up(e){if(!aiming)return;aim=point(e.changedTouches[0]);aiming=false;fire(aim);}
wx.onTouchStart(down);wx.onTouchMove(move);wx.onTouchEnd(up);wx.onTouchCancel(()=>{aiming=false;});
function tick(){frame();}
tick();
