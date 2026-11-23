  if(y>=748&&y<=798&&x>=32&&x<=1400){
    const cardW=220,gap=10,start=32;const idx=Math.floor((x-start)/(cardW+gap));
    if(idx>=0&&idx<mqCards.length){const fn=mqCards[idx].handlers.click;if(fn)fn();return true;}
  }
  if(y>=20&&y<=70&&x>=1195&&x<=1302){
    const node=mqNode('soundBtn'); if(node.handlers.click) node.handlers.click(); else node.textContent=node.textContent==='♫ 音效关闭'?'♫ 音效开启':'♫ 音效关闭';return true;
  }
  if(y>=20&&y<=70&&x>=1305&&x<=1415){const node=mqNode('resetBtn');if(node.handlers.click)node.handlers.click();return true;}
  return false;
}


(()=>{
'use strict';
const canvas=document.getElementById('game'),ctx=canvas.getContext('2d');
const W=1440,H=810,GROUND=718,TAU=Math.PI*2;
const $=id=>document.getElementById(id);
const TYPES={
 fire:{name:'烈焰核心',short:'火',color:'#ff713e',glow:'#ff9a48',light:'#fff0b8',dark:'#8f251e',r:17,gravity:.18,restitution:.86,drag:.9992,speed:17,damage:34,life:560,desc:'命中爆燃，留下灼烧区域'},
 ice:{name:'极寒晶核',short:'冰',color:'#67dfff',glow:'#a3f2ff',light:'#efffff',dark:'#1c6eac',r:16,gravity:.13,restitution:.96,drag:.9996,speed:18,damage:24,life:610,desc:'冰爆冻结敌人，制造冰晶'},
 heavy:{name:'陨星重核',short:'重',color:'#f2bd61',glow:'#ffd88b',light:'#fff4c7',dark:'#73502b',r:24,gravity:.34,restitution:.58,drag:.9986,speed:14,damage:58,life:520,desc:'高质量冲击，震退并破甲'},
 lightning:{name:'雷暴之眼',short:'雷',color:'#b996ff',glow:'#ddc3ff',light:'#fff4ff',dark:'#4d318f',r:15,gravity:.07,restitution:.91,drag:.9998,speed:21,damage:23,life:540,desc:'命中后向附近目标跳跃电击'},
 split:{name:'裂变之种',short:'裂',color:'#77e6a9',glow:'#a4ffd0',light:'#effff7',dark:'#216b50',r:17,gravity:.16,restitution:.9,drag:.9993,speed:16,damage:18,life:500,desc:'首次命中分裂成三枚子弹'},
 void:{name:'虚空奇点',short:'虚',color:'#ba83ff',glow:'#dbbaff',light:'#fff2ff',dark:'#3c216e',r:20,gravity:.09,restitution:.82,drag:.9995,speed:13,damage:27,life:590,desc:'形成引力涡旋，吸附附近敌人'}
};
const ids=Object.keys(TYPES);
let selected='fire',aim=null,activePair=null,pairPulseClock=0,balls=[],particles=[],rings=[],texts=[],arcs=[],vortices=[],enemies=[],props=[],projectiles=[],tetherPulses=[],impactBursts=[],clock=0,last=Date.now(),shake=0,flash=0,hitStop=0,score=0,combo=0,comboTimer=0,win=false,soundOn=true,audio=null,launcherFX={left:0,right:0},shotCount=0,screenPulse=0;
const launchers={left:{x:115,y:665,angle:-.7,color:'#ffbd72',recoil:0,label:'A · 炎铸炮'},right:{x:1325,y:665,angle:-2.44,color:'#85dcff',recoil:0,label:'B · 星轨炮'}};
const platforms=[{x:345,y:355,w:200,h:20,kind:'stone'},{x:620,y:270,w:215,h:20,kind:'metal'},{x:930,y:540,w:200,h:20,kind:'stone'},{x:755,y:642,w:145,h:16,kind:'wood'}];
let gates=[],chain={burned:false,ice:false,rock:false,relay:false},floating=[];
function fresh(){
 balls=[];particles=[];rings=[];texts=[];arcs=[];vortices=[];projectiles=[];tetherPulses=[];impactBursts=[];screenPulse=0;score=0;combo=0;comboTimer=0;shotCount=0;win=false;shake=0;flash=0;hitStop=0;aim=null;clock=0;
 // No pre-placed anchors: the player creates both suspended orbs through live shots.
 activePair=null;pairPulseClock=0;
 enemies=[{id:'eclipse-queen',kind:'moth',boss:true,x:820,y:392,r:42,hp:920,max:920,freeze:0,burn:0,flash:0,knock:0,phase:0,alive:true,name:'月蚀蝶后',shieldOpen:0,shieldPulse:0,phaseLevel:1,attackClock:0}];
 props=[
  {kind:'wood',x:390,y:470,w:108,h:62,hp:70,max:70,angle:0,alive:true},
  {kind:'barrel',x:1080,y:440,w:58,h:58,hp:55,max:55,angle:0,alive:true},
  {kind:'stone',x:700,y:450,w:96,h:82,hp:100,max:100,angle:0,alive:true},
  {kind:'crystal',x:735,y:235,w:52,h:74,hp:80,max:80,angle:0,alive:true}
 ];
 gates=[{x:475,y:360,r:19,active:false},{x:970,y:270,r:19,active:false},{x:1200,y:385,r:19,active:false}];
 launchers.left.angle=-.68;launchers.right.angle=-2.46;launchers.left.recoil=0;launchers.right.recoil=0;
 syncUI();setMessage('从任意炮台发射第一颗球；飞行中点击场地任意位置，让它停在当前位置。再发射另一颗球，主动撞上它触发元素反应。');last=Date.now();
}
function setMessage(s){$('message').textContent=s;}
function syncUI(){
 document.querySelectorAll('.orb-card').forEach(el=>el.classList.toggle('active',el.dataset.type===selected));
 const boss=enemies.find(e=>e.boss),alive=enemies.filter(e=>e.alive).length;
 $('enemyCount').textContent=alive;
 $('combo').textContent='x'+combo;
 $('score').textContent=String(score).padStart(4,'0');
 $('stasisCount').textContent=balls.filter(b=>b.frozen&&!b.dead).length+'/2';
 $('statusMain').textContent=win?'蝶后已净化':(boss?(boss.shieldOpen>0?'月核暴露':'月蚀护盾'):'试炼完成');
 $('statusPct').textContent=boss?Math.round((1-boss.hp/boss.max)*100)+'%':'100%';
 $('progress').style.width=(boss?(1-boss.hp/boss.max)*100:100)+'%';
 const anchors=frozenAnchors();
 $('statusSub').textContent=win?'星界封印解除，通往下一片星域的门已开启。':(anchors.length===0?'发射一颗弹珠，然后点击场地空白处，让它停在空中。':anchors.length===1?'空中已有一颗定身弹珠。再发射另一颗球，主动撞击它，触发两球元素反应。':'已有两颗空中锚点。选择一颗作为目标，用新球撞击它触发组合。');
}
document.querySelectorAll('.orb-card').forEach(el=>el.addEventListener('click',()=>{selected=el.dataset.type;syncUI();setMessage(TYPES[selected].name+'：'+TYPES[selected].desc+'。左、右炮台都可以发射。');tone(460,.045,'sine',.025);}));
$('resetBtn').addEventListener('click',fresh);$('soundBtn').addEventListener('click',()=>{$('soundBtn').textContent=soundOn?'♫ 音效关闭':'♫ 音效开启';soundOn=!soundOn;if(soundOn)tone(620,.06,'sine',.03);});
window.addEventListener('keydown',e=>{if('123456'.includes(e.key)){selected=ids[Number(e.key)-1];syncUI();setMessage(TYPES[selected].name+'已装填到两座炮台。');}if(e.key.toLowerCase()==='r')fresh();});
function pxy(e){const r=canvas.getBoundingClientRect();return{x:(e.clientX-r.left)/r.width*W,y:(e.clientY-r.top)/r.height*H};}
function d(a,b){return Math.hypot(a.x-b.x,a.y-b.y)}
canvas.addEventListener('pointerdown',e=>{
 if(win||aim)return;
 const p=pxy(e);
 // Tapping a frozen orb releases it. Tapping a moving orb freezes that exact orb.
 const touched=[...balls].reverse().find(b=>!b.dead&&d(p,b)<Math.max(27,b.r+14));
 if(touched?.frozen){e.preventDefault();toggleStasis(touched);return;}
 // Keep cannon dragging intuitive: touches near either launcher begin aiming.
 let side=null;for(const k of ['left','right'])if(d(p,launchers[k])<115)side=k;
 if(side){e.preventDefault();canvas.setPointerCapture(e.pointerId);aim={side,pointer:p,start:p};return;}
 // A tap anywhere in the arena freezes the most recently fired moving orb.
 // If the player tapped directly on a flying orb, freeze that particular one.
 const target=touched||[...balls].reverse().find(b=>!b.dead&&!b.frozen);
 if(target){e.preventDefault();toggleStasis(target);return;}
 setMessage('先从任意炮台发射一颗球；飞行时点击场地空白处，就能把最近发射的球定在当前位置。');
});
canvas.addEventListener('pointermove',e=>{if(aim){aim.pointer=pxy(e);e.preventDefault();}});
canvas.addEventListener('pointerup',e=>{
 if(!aim)return;
 const p=pxy(e),side=aim.side,a=launchers[side],len=d(p,a);aim=null;
 if(len<35){setMessage('向目标反方向拖动更远一点，再松开发射。');return;}
 if(balls.length>15){setMessage('场上弹珠太多啦，等几颗回收后再发射。');return;}
 const t=TYPES[selected],dx=p.x-a.x,dy=p.y-a.y,l=Math.hypot(dx,dy),ux=dx/l,uy=dy/l,power=Math.min(1,Math.max(.18,len/480)),speed=t.speed*(.62+power*.5);
 const b={id:'shot-'+(++shotCount),type:selected,x:a.x+ux*80,y:a.y+uy*80,vx:ux*speed,vy:uy*speed,r:t.r,life:t.life,age:0,spin:Math.random()*TAU,hits:0,special:false,trail:[],hitCd:{},combinedWith:{},dead:false,side,child:false,glow:0,anchorCharge:0,starlineCooldown:0,portalCooldown:0,triggered:false};
 balls.push(b);launchers[side].angle=Math.atan2(dy,dx);launchers[side].recoil=1;launcherShot(side,t);shotCount++;
 setMessage(`${side==='left'?'左侧炎铸炮':'右侧星轨炮'} 发射了 ${t.name}！飞行中点击场地任意位置，可以把它定在空中。`);
});
canvas.addEventListener('pointercancel',()=>aim=null);
function toggleStasis(b){
 const frozen=balls.filter(x=>x.frozen&&!x.dead).length;
 if(!b.frozen){
  if(frozen>=2){setMessage('最多同时定身两颗弹珠。点击一颗空中锚点释放后，再布置新的碰撞组合。');tone(180,.08,'square',.025);return;}
  b.savedVx=b.vx;b.savedVy=b.vy;b.frozen=true;b.stasisPulse=1;b.vx=0;b.vy=0;b.stasisAge=0;b.anchorCharge=0;b.triggered=false;
  const bt=TYPES[b.type==='splitChild'?'split':b.type];
  ring(b.x,b.y,bt.glow,110,30,7);burst(b.x,b.y,bt.color,34,6,'spark');
  ring(b.x,b.y,'#ffffff',48,18,3);textPop(b.x,b.y-b.r-28,'时空定身','#eff7ff',18);
  shakeHit(4);tone(560,.13,'sine',.04);vibe(16);
