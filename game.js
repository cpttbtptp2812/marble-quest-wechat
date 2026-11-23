// Marble Quest - WeChat Mini Game adapter.
// This is a native Mini Game project (compileType: game), not a WebView mini-program page.
const MQ_W = 1440;
const MQ_H = 810;
const mqInfo = (wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync());
let mqWindowW = mqInfo.windowWidth || mqInfo.screenWidth || 960;
let mqWindowH = mqInfo.windowHeight || mqInfo.screenHeight || 540;
let mqPixelRatio = mqInfo.pixelRatio || 1;
let mqScale = 1;
let mqOffsetX = 0;
let mqOffsetY = 0;
const mqCanvas = wx.createCanvas();
const mqCtx = mqCanvas.getContext('2d');

function mqResize(){
  const info = (wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync());
  mqWindowW = info.windowWidth || info.screenWidth || mqWindowW;
  mqWindowH = info.windowHeight || info.screenHeight || mqWindowH;
  mqPixelRatio = Math.min(info.pixelRatio || mqPixelRatio || 1, 1.25);
  mqScale = Math.min(mqWindowW / MQ_W, mqWindowH / MQ_H);
  mqOffsetX = (mqWindowW - MQ_W * mqScale) / 2;
  mqOffsetY = (mqWindowH - MQ_H * mqScale) / 2;
  mqCanvas.width = Math.floor(mqWindowW * mqPixelRatio);
  mqCanvas.height = Math.floor(mqWindowH * mqPixelRatio);
  if (mqCtx.setTransform) mqCtx.setTransform(mqPixelRatio * mqScale, 0, 0, mqPixelRatio * mqScale, mqPixelRatio * mqOffsetX, mqPixelRatio * mqOffsetY);
  else { mqCtx.scale(mqPixelRatio * mqScale, mqPixelRatio * mqScale); }
}
mqResize();

// Mini Game Canvas does not expose DOM pointer events; map wx touch callbacks to the small event surface used by the browser prototype.
const mqPointerHandlers = {};
const mqCanvasFacade = {
  width: MQ_W,
  height: MQ_H,
  getContext: function(){ return mqCtx; },
  getBoundingClientRect: function(){ return {left: mqOffsetX, top: mqOffsetY, width: MQ_W * mqScale, height: MQ_H * mqScale}; },
  addEventListener: function(type, fn){ mqPointerHandlers[type] = fn; },
  setPointerCapture: function(){},
};

function mqNode(id){
  if (!mqNodes[id]) mqNodes[id] = {textContent:'', style:{}, handlers:{}, addEventListener:function(type,fn){this.handlers[type]=fn;}};
  return mqNodes[id];
}
const mqNodes = {};
const mqTypes = ['fire','ice','heavy','lightning','split','void'];
const mqCards = mqTypes.map(type=>({dataset:{type},handlers:{},classList:{toggle:function(){}},addEventListener:function(name,fn){this.handlers[name]=fn;}}));
const document = {
  getElementById: function(id){ return id==='game' ? mqCanvasFacade : mqNode(id); },
  querySelectorAll: function(selector){ return selector==='.orb-card' ? mqCards : []; }
};
const window = {addEventListener:function(){}, AudioContext:null, webkitAudioContext:null};
const navigator = {vibrate:function(pattern){try{if(wx.vibrateShort)wx.vibrateShort({type:'medium'});}catch(e){}}};
const miniRAF = function(cb){
  if (mqCanvas.requestAnimationFrame) return mqCanvas.requestAnimationFrame(cb);
  if (typeof requestAnimationFrame === 'function') return requestAnimationFrame(cb);
  return setTimeout(function(){cb(Date.now());}, 16);
};

// Canvas compatibility for older base libraries.
if (!mqCtx.roundRect) {
  mqCtx.roundRect = function(x,y,w,h,r){
    const rr = Math.max(0, Math.min(r, Math.abs(w)/2, Math.abs(h)/2));
    this.moveTo(x+rr,y); this.arcTo(x+w,y,x+w,y+h,rr); this.arcTo(x+w,y+h,x,y+h,rr); this.arcTo(x,y+h,x,y,rr); this.arcTo(x,y,x+w,y,rr); this.closePath();
  };
}

function mqTouchPoint(t){
  if (!t) return null;
  return {x:(t.clientX!==undefined?t.clientX:(t.pageX!==undefined?t.pageX:t.x)), y:(t.clientY!==undefined?t.clientY:(t.pageY!==undefined?t.pageY:t.y)), id:t.identifier||1};
}
function mqVirtualPoint(t){
  const p=mqTouchPoint(t);if(!p)return null;
  return {x:(p.x-mqOffsetX)/mqScale, y:(p.y-mqOffsetY)/mqScale, id:p.id};
}
function mqEvent(p){return {clientX:p.x,clientY:p.y,pointerId:p.id,preventDefault:function(){}};}

wx.onTouchStart(function(e){
  const raw=(e.touches&&e.touches[0])||(e.changedTouches&&e.changedTouches[0]);const v=mqVirtualPoint(raw);if(!v)return;
  if(v.x<0||v.x>MQ_W||v.y<0||v.y>MQ_H)return;
  // Canvas-drawn HUD is handled before game-world input.
  if (mqHandleHudTouch(v.x,v.y)) return;
  if(mqPointerHandlers.pointerdown)mqPointerHandlers.pointerdown(mqEvent(mqTouchPoint(raw)));
});
wx.onTouchMove(function(e){
  const raw=(e.touches&&e.touches[0])||(e.changedTouches&&e.changedTouches[0]);const p=mqTouchPoint(raw);if(!p)return;
  if(mqPointerHandlers.pointermove)mqPointerHandlers.pointermove(mqEvent(p));
});
wx.onTouchEnd(function(e){
  const raw=(e.changedTouches&&e.changedTouches[0])||(e.touches&&e.touches[0]);const p=mqTouchPoint(raw);if(!p)return;
  if(mqPointerHandlers.pointerup)mqPointerHandlers.pointerup(mqEvent(p));
});
wx.onTouchCancel(function(){if(mqPointerHandlers.pointercancel)mqPointerHandlers.pointercancel({});});
if(wx.onWindowResize)wx.onWindowResize(function(){mqResize();});
let mqHidden=false;
if(wx.onHide)wx.onHide(function(){mqHidden=true;});
if(wx.onShow)wx.onShow(function(){mqHidden=false;});


function mqHandleHudTouch(x,y){
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
const canvas=document.getElementById('game');
let ctx=canvas.getContext('2d');
const mainCtx=ctx;
let backgroundCanvas=null;
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
 if(touched && touched.frozen){e.preventDefault();toggleStasis(touched);return;}
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
  setMessage(`${bt.name} 已停在空中！现在选择另一种弹珠，从任意炮台发射，直接撞击这颗定身球。`);
 }else{
  b.frozen=false;b.vx=b.savedVx||0;b.vy=b.savedVy||0;b.savedVx=0;b.savedVy=0;b.stasisPulse=1;
  ring(b.x,b.y,'#ffffff',85,24,6);burst(b.x,b.y,TYPES[b.type==='splitChild'?'split':b.type].color,20,5,'spark');textPop(b.x,b.y-b.r-22,'时间恢复','#fff3cc',16);tone(740,.08,'triangle',.03);
  setMessage('定身解除，弹珠恢复原来的运动。继续发射并布置新的空中碰撞。');
 }
 syncUI();
}
function pairKey(a,b){return [a.type==='splitChild'?'split':a.type,b.type==='splitChild'?'split':b.type].sort().join('+');}
const PAIR_META={
 'fire+fire':{title:'双日耀斑',mode:'flame',color:'#ff9a4d',hint:'灼热光束在两球之间流动'},
 'ice+ice':{title:'极光冰桥',mode:'crystal',color:'#a9f4ff',hint:'凝结出一条冰晶能量带'},
 'heavy+heavy':{title:'双星引爆',mode:'shock',color:'#ffe0a0',hint:'形成高压震荡带'},
 'lightning+lightning':{title:'天穹雷网',mode:'lightning',color:'#d7c4ff',hint:'持续跳跃的电弧连接两端'},
 'split+split':{title:'翡翠星群',mode:'shards',color:'#aaffd0',hint:'两球之间织出分裂晶片'},
 'void+void':{title:'双生星门',mode:'portal',color:'#d7afff',hint:'两端形成互通的虚空门'},
 'fire+ice':{title:'星雾蒸汽环',mode:'steam',color:'#d5f8ff',hint:'冷热交汇，形成脉冲蒸汽幕'},
 'fire+lightning':{title:'日冕等离子',mode:'plasma',color:'#ffc16f',hint:'形成灼热的等离子电弧'},
 'fire+heavy':{title:'熔核陨链',mode:'meteor',color:'#ffad61',hint:'沉重的熔岩能量沿连线冲击'},
 'fire+split':{title:'焰羽星网',mode:'shards',color:'#ffbd83',hint:'火焰晶片在连线间散射'},
 'fire+void':{title:'暗日吞焰',mode:'void',color:'#d89bff',hint:'暗焰沿着引力丝线流动'},
 'heavy+ice':{title:'冰川碎星',mode:'crystal',color:'#b9f4ff',hint:'形成坚固的冰晶桥与碎片'},
 'ice+lightning':{title:'极光棱镜',mode:'aurora',color:'#a9f2ff',hint:'电流在冰晶之间折射'},
 'ice+split':{title:'霜晶花冠',mode:'shards',color:'#c7f9ff',hint:'沿连线绽放多层冰晶'},
 'ice+void':{title:'零度裂隙',mode:'void',color:'#c3caff',hint:'低温引力场减缓经过的物体'},
 'heavy+lightning':{title:'雷铸冲击',mode:'lightning',color:'#e4d7ff',hint:'重力脉冲放大电弧冲击'},
 'heavy+split':{title:'星陨弹片',mode:'shards',color:'#ffe1a3',hint:'沿连线迸射金色碎片'},
 'heavy+void':{title:'引力坍缩',mode:'void',color:'#d1a5ff',hint:'两端之间形成压缩引力带'},
 'lightning+split':{title:'千鸟电网',mode:'lightning',color:'#d5c3ff',hint:'多段电弧编织成捕获网'},
 'lightning+void':{title:'虚空风暴',mode:'portal',color:'#d9c0ff',hint:'电弧穿过两端的微型星门'},
 'split+void':{title:'暗星蜂群',mode:'void',color:'#d6b3ff',hint:'虚空牵引多枚分裂晶体'},
};
function formPairLink(a,b){
 const key=pairKey(a,b),meta=PAIR_META[key]||{title:'星界共鸣',mode:'ribbon',color:'#e7d5ff',hint:'两种能量交织成魔法连线'};
 activePair={aId:a.id,bId:b.id,key,meta,formedAt:clock,primed:false,crossings:0,bossOpened:false,lastBossCheck:-999};
 const mx=(a.x+b.x)/2,my=(a.y+b.y)/2;
 ring(mx,my,meta.color,135,36,9);burst(mx,my,meta.color,56,8,meta.mode==='crystal'||meta.mode==='shards'?'shard':'spark');
 ring(a.x,a.y,TYPES[a.type==='splitChild'?'split':a.type].glow,90,26,5);ring(b.x,b.y,TYPES[b.type==='splitChild'?'split':b.type].glow,90,26,5);
 textPop(mx,my-48,meta.title,meta.color,23);shakeHit(9);vibe([18,28]);tone(meta.mode==='lightning'?820:meta.mode==='void'||meta.mode==='portal'?180:560,.22,'sine',.055);
 setMessage(`双球共鸣形成：${meta.title}。${meta.hint}。再发射第三颗弹珠穿过连线，释放共鸣冲击！`);
 syncUI();
}

function frozenAnchors(){return balls.filter(b=>b.frozen&&!b.dead).slice(0,2);}
function triggerStarline(a,b,mover,x,y){
 const pair=activePair||{meta:PAIR_META[pairKey(a,b)]||{title:'星界共鸣',color:'#e7d5ff',mode:'ribbon'},primed:false,crossings:0};
 const meta=pair.meta,color=meta.color;
 tetherPulses.push({x,y,ax:a.x,ay:a.y,bx:b.x,by:b.y,color,life:42,max:42,mode:meta.mode});
 const boss=enemies.find(e=>e.boss&&e.alive);
 if(boss){boss.shieldOpen=Math.max(boss.shieldOpen||0,250);boss.shieldPulse=1;}
 arcs.push({x1:a.x,y1:a.y,x2:x,y2:y,life:30,max:30,color});
 arcs.push({x1:b.x,y1:b.y,x2:x,y2:y,life:30,max:30,color});
 ring(x,y,color,165,38,11);burst(x,y,color,58,10,meta.mode==='crystal'||meta.mode==='shards'?'shard':'spark');burst(x,y,'#ffffff',22,6,'shard');
 if(!pair.primed){comboReaction(a,b,x,y);pair.primed=true;}
 else{ring(x,y,color,105,24,7);textPop(x,y-35,'共鸣脉冲',color,17);enemies.forEach(en=>{if(en.alive&&Math.hypot(en.x-x,en.y-y)<130)dmgEnemy(en,22,a.type==='splitChild'?'split':a.type,3);});}
 if(a.anchorCharge>=3||b.anchorCharge>=3){a.anchorCharge=0;b.anchorCharge=0;ring(x,y,'#fff0c4',245,45,15);burst(x,y,'#fff0c4',100,14,'shard');textPop(x,y-72,'星界超载！','#fff0c4',28);shakeHit(19);flash=.25;score+=450;}
 pair.crossings=(pair.crossings||0)+1;if(activePair)activePair.crossings=pair.crossings;
 mover.starlineCooldown=clock+55;combo++;comboTimer=260;score+=180;syncUI();shakeHit(13);vibe([18,28,45]);tone(660,.2,'sine',.06);
 setMessage(`${meta.title}被穿越触发！元素共鸣爆发，蝶后的月蚀护盾短暂打开。`);
}

function checkStarlineForBall(mover){
 if(!mover||mover.dead||mover.frozen||clock<(mover.starlineCooldown||0))return false;
 const a=frozenAnchors();if(a.length<2)return false;const A=a[0],B=a[1];
 if(mover===A||mover===B)return false;
 const q=segDist(mover.x,mover.y,A.x,A.y,B.x,B.y);
 if(q.d<mover.r+11){triggerStarline(A,B,mover,q.x,q.y);return true;}return false;
}
function updateStarline(){
 const current=frozenAnchors();if(current.length<2)activePair=null;
 balls.forEach(checkStarlineForBall);
 const anchors=frozenAnchors(),boss=enemies.find(e=>e.boss&&e.alive);
 if(anchors.length===2&&activePair&&boss&&!activePair.bossOpened){
  const q=segDist(boss.x,boss.y,anchors[0].x,anchors[0].y,anchors[1].x,anchors[1].y);
  if(q.d<boss.r+17){activePair.bossOpened=true;boss.shieldOpen=260;boss.shieldPulse=1;ring(q.x,q.y,activePair.meta.color,170,34,10);burst(q.x,q.y,activePair.meta.color,54,8,'spark');textPop(q.x,q.y-55,'护盾共振破裂！','#fff0c8',21);shakeHit(11);flash=.12;tone(480,.22,'sine',.055);setMessage('元素连线穿过蝶后核心！护盾被共振打开，趁现在发射弹珠攻击核心。');syncUI();}
 }
}
function checkPortalPair(b){
 if(b.frozen||b.dead||b.portalCooldown>0)return;
 const portals=balls.filter(x=>x.frozen&&!x.dead&&x.type==='void');if(portals.length<2)return;
 for(let i=0;i<2;i++){const p=portals[i],other=portals[1-i];if(Math.hypot(b.x-p.x,b.y-p.y)<p.r+b.r+5){
  const speed=Math.max(8,Math.hypot(b.vx,b.vy)),ang=Math.atan2(b.vy,b.vx)+Math.PI*.42;
  b.x=other.x+Math.cos(ang)*(other.r+b.r+10);b.y=other.y+Math.sin(ang)*(other.r+b.r+10);
  b.vx=Math.cos(ang)*speed*1.08;b.vy=Math.sin(ang)*speed*1.08;b.portalCooldown=48;
  ring(p.x,p.y,'#d6aaff',90,24,7);ring(other.x,other.y,'#d6aaff',110,28,8);burst(p.x,p.y,'#cf9cff',24,6,'spark');burst(other.x,other.y,'#cf9cff',30,7,'spark');textPop(other.x,other.y-36,'星门跃迁','#efd9ff',17);shakeHit(5);tone(360,.14,'sine',.05);return;
 }}
}
function vibe(v){try{if(navigator.vibrate) navigator.vibrate(v)}catch(_){}}
function tone(freq,dur=.09,wave='sine',vol=.035){if(!soundOn)return;try{audio=audio||new(window.AudioContext||window.webkitAudioContext)();if(audio.state==='suspended')audio.resume();let o=audio.createOscillator(),g=audio.createGain();o.type=wave;o.frequency.setValueAtTime(freq,audio.currentTime);g.gain.setValueAtTime(vol,audio.currentTime);g.gain.exponentialRampToValueAtTime(.0001,audio.currentTime+dur);o.connect(g);g.connect(audio.destination);o.start();o.stop(audio.currentTime+dur);}catch(_){}}
function noise(dur=.12,vol=.04){if(!soundOn)return;try{audio=audio||new(window.AudioContext||window.webkitAudioContext)();let n=Math.floor(audio.sampleRate*dur),buf=audio.createBuffer(1,n,audio.sampleRate),data=buf.getChannelData(0);for(let i=0;i<n;i++)data[i]=(Math.random()*2-1)*Math.pow(1-i/n,2);let src=audio.createBufferSource(),g=audio.createGain();src.buffer=buf;g.gain.value=vol;src.connect(g);g.connect(audio.destination);src.start();}catch(_){}}
function launcherShot(side,t){let a=launchers[side];a.recoil=1;burst(a.x+Math.cos(a.angle)*80,a.y+Math.sin(a.angle)*80,t.color,20,5,'spark');ring(a.x+Math.cos(a.angle)*86,a.y+Math.sin(a.angle)*86,t.glow,75,18,5);tone(t===TYPES.heavy?105:t===TYPES.ice?680:t===TYPES.lightning?850:260,.12,t===TYPES.heavy?'triangle':'sawtooth',.045);vibe(t===TYPES.heavy?24:12);shake=Math.max(shake,t===TYPES.heavy?5:2.5);}
function burst(x,y,color,count=20,power=5,shape='dot'){count=Math.min(count,72);if(particles.length>190)particles.splice(0,particles.length-150);for(let i=0;i<count;i++){let a=Math.random()*TAU,s=(.4+Math.random()*power);particles.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:18+Math.random()*36,max:54,size:1.5+Math.random()*5,color,shape,rot:Math.random()*TAU,spin:(Math.random()-.5)*.2});}}
function ring(x,y,color,max=90,life=22,width=5){if(rings.length>52)rings.splice(0,rings.length-40);rings.push({x,y,color,r:5,max,life,maxLife:life,width});}
function textPop(x,y,txt,color='#fff',size=19){if(texts.length>36)texts.splice(0,texts.length-28);texts.push({x,y,txt,color,size,life:55,max:55});}
function shakeHit(power){shake=Math.max(shake,power);hitStop=Math.max(hitStop,power>8?3:1);}
function circleHit(b,c,e=.84){let dx=b.x-c.x,dy=b.y-c.y,dist=Math.hypot(dx,dy),min=b.r+c.r;if(dist<min&&dist>.001){let nx=dx/dist,ny=dy/dist,ov=min-dist;b.x+=nx*(ov+.3);b.y+=ny*(ov+.3);let v=b.vx*nx+b.vy*ny;if(v<0){b.vx-=(1+e)*v*nx;b.vy-=(1+e)*v*ny;}b.hits++;return true;}return false;}
function rectHit(b,r,e=.75){let cx=Math.max(r.x,Math.min(b.x,r.x+r.w)),cy=Math.max(r.y,Math.min(b.y,r.y+r.h)),dx=b.x-cx,dy=b.y-cy,dist=Math.hypot(dx,dy);if(dist<b.r&&dist>.001){let nx=dx/dist,ny=dy/dist,ov=b.r-dist;b.x+=nx*(ov+.4);b.y+=ny*(ov+.4);let v=b.vx*nx+b.vy*ny;if(v<0){b.vx-=(1+e)*v*nx;b.vy-=(1+e)*v*ny;}b.hits++;return true;}return false;}
function segDist(px,py,x1,y1,x2,y2){let dx=x2-x1,dy=y2-y1,t=Math.max(0,Math.min(1,((px-x1)*dx+(py-y1)*dy)/(dx*dx+dy*dy))),x=x1+t*dx,y=y1+t*dy;return{x,y,d:Math.hypot(px-x,py-y)};}
function dmgEnemy(en,amount,type,impulse=0){if(!en.alive)return;if(en.boss&&en.shieldOpen<=0&&amount>0){en.shieldPulse=1;ring(en.x,en.y,TYPES[type].glow,65,16,4);textPop(en.x,en.y-en.r-20,'护盾吸收','#d9d0ff',13);tone(260,.07,'triangle',.025);return;}en.hp-=amount;en.flash=1;en.knock+=impulse;en.hurt=8;score+=Math.round(amount*4);combo++;comboTimer=150;syncUI();textPop(en.x,en.y-en.r-18,'-'+Math.round(amount),TYPES[type].color,17);burst(en.x,en.y,TYPES[type].color,10,3,'spark');if(en.hp<=0){en.hp=0;en.alive=false;burst(en.x,en.y,'#fff1bd',54,8,'shard');burst(en.x,en.y,TYPES[type].color,36,7);ring(en.x,en.y,TYPES[type].glow,150,34,8);textPop(en.x,en.y-45,en.boss?'蝶后净化！':'GUARDIAN DOWN!','#ffe5a4',24);score+=500;shakeHit(12);tone(170,.26,'sawtooth',.06);vibe([22,35,22]);}else{shakeHit(type==='heavy'?8:4);tone(type==='heavy'?110:430,.08,type==='heavy'?'triangle':'sine',.03);}}
function damageProp(p,amount,type,b){if(!p.alive)return false;p.hp-=amount;p.flash=1;p.angle+=(b.vx*.0008);if(p.hp<=0){p.alive=false;const c=p.kind==='wood'?'#c68c56':p.kind==='barrel'?'#ff914f':p.kind==='stone'?'#aab4c3':'#8ee9ff';burst(p.x+p.w/2,p.y+p.h/2,c,p.kind==='barrel'?48:28,p.kind==='barrel'?8:5,p.kind==='stone'?'shard':'spark');ring(p.x+p.w/2,p.y+p.h/2,c,p.kind==='barrel'?140:90,24,6);textPop(p.x+p.w/2,p.y,'破坏！',c);shakeHit(p.kind==='barrel'?13:6);if(p.kind==='barrel'){areaDamage(p.x+p.w/2,p.y+p.h/2,145,50,type);flash=.45;}score+=150;return true;}return false;}
function areaDamage(x,y,r,damage,type){enemies.forEach(en=>{if(en.alive){let dd=Math.hypot(en.x-x,en.y-y);if(dd<r+en.r){dmgEnemy(en,damage*(1-dd/(r+en.r)),type,4);}}});ring(x,y,TYPES[type].glow,r,28,8);burst(x,y,TYPES[type].color,40,8,'spark');shakeHit(8);}
function effect(type,b,x,y){if(b.special)return;b.special=true;const t=TYPES[type];
 if(type==='fire'){areaDamage(x,y,102,32,'fire');burst(x,y,'#ffb35d',45,8,'flame');ring(x,y,'#ff7a39',125,27,8);textPop(x,y-35,'IGNITE!','#ffd28d');props.forEach(p=>{if(p.alive&&p.kind==='wood'&&Math.hypot(p.x+p.w/2-x,p.y+p.h/2-y)<150){p.hp-=80;if(p.hp<=0)damageProp(p,100,'fire',b);}});}
 if(type==='ice'){enemies.forEach(en=>{if(en.alive&&Math.hypot(en.x-x,en.y-y)<150){en.freeze=180;dmgEnemy(en,24,'ice',-2);}});ring(x,y,'#8df1ff',145,32,9);burst(x,y,'#c6faff',50,6,'snow');textPop(x,y-35,'FROST NOVA!','#d9fbff');for(let i=0;i<9;i++){let a=i*TAU/9;particles.push({x,y,vx:Math.cos(a)*2.5,vy:Math.sin(a)*2.5,life:65,max:65,size:5,color:'#a8eeff',shape:'shard',rot:a,spin:.06});}shakeHit(5);tone(740,.18,'sine',.055);}
 if(type==='heavy'){areaDamage(x,y,122,44,'heavy');props.forEach(p=>{if(p.alive&&Math.hypot(p.x+p.w/2-x,p.y+p.h/2-y)<165)damageProp(p,100,'heavy',b);});burst(x,y,'#ffdc91',60,10,'shard');ring(x,y,'#ffd88b',175,30,12);textPop(x,y-42,'METEOR IMPACT!','#ffe9aa',22);flash=.24;shakeHit(15);tone(78,.25,'sawtooth',.08);noise(.18,.055);vibe([35,25,35]);}
 if(type==='lightning'){let nearby=enemies.filter(e=>e.alive).sort((a,b)=>Math.hypot(a.x-x,a.y-y)-Math.hypot(b.x-x,b.y-y)).slice(0,3);nearby.forEach((en,i)=>{if(Math.hypot(en.x-x,en.y-y)<320){arcs.push({x1:x,y1:y,x2:en.x,y2:en.y,life:18,max:18,color:'#d6baff'});dmgEnemy(en,i===0?42:28,'lightning',2);}});gates.forEach(g=>{if(Math.hypot(g.x-x,g.y-y)<300){g.active=true;ring(g.x,g.y,'#d8bdff',76,26,5);}});burst(x,y,'#dfcaff',32,7,'spark');textPop(x,y-34,'CHAIN LIGHTNING!','#ead7ff',18);flash=.18;shakeHit(7);tone(920,.22,'sawtooth',.05);}
 if(type==='split'){burst(x,y,'#a8ffd0',36,7,'shard');ring(x,y,'#a8ffd0',88,23,5);for(let i=-1;i<=1;i++){let a=Math.atan2(b.vy,b.vx)+i*.42;balls.push({type:'splitChild',x,y,vx:Math.cos(a)*13,vy:Math.sin(a)*13,r:9,life:220,age:0,spin:0,hits:0,special:true,trail:[],hitCd:{},dead:false,child:true,glow:0});}textPop(x,y-30,'TRIPLE SPLIT!','#c8ffdd');}
 if(type==='void'){ring(x,y,'#d5a4ff',210,48,13);burst(x,y,'#c9a2ff',42,5,'dot');vortices.push({x,y,life:92,max:92,r:235,type:'void'});enemies.forEach(en=>{if(en.alive&&Math.hypot(en.x-x,en.y-y)<245){en.hp-=12;en.flash=.5;}});textPop(x,y-38,'SINGULARITY!','#e7d1ff');shakeHit(9);tone(140,.24,'sine',.06);}
}
function hitWorld(b){
 // Elemental environment: fire severs the suspended chain; ice turns the lower channel into a temporary bridge.
 if(b.type==='fire'&&!chain.burned){const q=segDist(b.x,b.y,740,92,740,205);if(q.d<b.r+9){chain.burned=true;burst(740,150,'#ff9a4a',42,7,'flame');ring(740,150,'#ffb35f',118,28,8);textPop(740,118,'CHAIN BURNED!','#ffd19a',17);shakeHit(7);tone(185,.18,'sawtooth',.05);b.special=true;}}
 if(b.type==='ice'&&!chain.ice&&b.x>555&&b.x<790&&b.y>665&&b.y<730){chain.ice=true;ring(b.x,690,'#a5f3ff',170,34,8);burst(b.x,690,'#c8fbff',48,6,'snow');textPop(b.x,650,'FROZEN CHANNEL!','#ddfbff',17);shakeHit(5);tone(720,.2,'sine',.05);b.special=true;b.vy=-Math.abs(b.vy)*.8;}
 // arena boundaries
 if(b.x-b.r<18){b.x=18+b.r;b.vx=Math.abs(b.vx)*.78;b.hits++;impact(b.x,b.y,(TYPES[b.type] ? TYPES[b.type].glow : null)||'#b7f0ff',.25);}
 if(b.x+b.r>W-18){b.x=W-18-b.r;b.vx=-Math.abs(b.vx)*.78;b.hits++;impact(b.x,b.y,(TYPES[b.type] ? TYPES[b.type].glow : null)||'#b7f0ff',.25);}
 if(b.y-b.r<60){b.y=60+b.r;b.vy=Math.abs(b.vy)*.72;b.hits++;}
 if(b.y+b.r>GROUND){b.y=GROUND-b.r;b.vy=-Math.abs(b.vy)*((TYPES[b.type] ? TYPES[b.type].restitution : null)||.85);b.vx*=.96;b.hits++;impact(b.x,GROUND,(TYPES[b.type] ? TYPES[b.type].glow : null)||'#b7f0ff',.35);}
 platforms.forEach(p=>{if(rectHit(b,p,p.kind==='metal'?.88:.72)){impact(b.x,b.y,p.kind==='metal'?'#a6eaff':'#d7c29d',.45);}});
 props.forEach(p=>{if(!p.alive)return;let rect={x:p.x,y:p.y,w:p.w,h:p.h};if(rectHit(b,rect,.72)){let dealt=((TYPES[b.type] ? TYPES[b.type].damage : null)||12)*.7;damageProp(p,dealt,b.type,b);if(!b.special&&b.type!=='splitChild'&&['fire','heavy'].includes(b.type))effect(b.type,b,b.x,b.y);impact(b.x,b.y,(TYPES[b.type] ? TYPES[b.type].glow : null)||'#fff',.8);}});
 enemies.forEach(en=>{if(!en.alive||b.hitCd[en.id]>b.age) return;if(circleHit(b,en,.84)){b.hitCd[en.id]=b.age+18;let type=b.type==='splitChild'?'split':b.type,def=TYPES[type];let dmg=type==='heavy'?def.damage:type==='fire'?22:type==='ice'?18:type==='lightning'?18:type==='void'?17:14;dmgEnemy(en,dmg,type,Math.max(1,Math.hypot(b.vx,b.vy)*.36));if(type==='fire')en.burn=150;if(type==='ice')en.freeze=130;if(type==='lightning'&&!b.special)effect(type,b,b.x,b.y);if(type==='void'&&!b.special)effect(type,b,b.x,b.y);if(type==='split'&&!b.special)effect(type,b,b.x,b.y);if(type==='fire'&&!b.special)effect(type,b,b.x,b.y);if(type==='ice'&&!b.special)effect(type,b,b.x,b.y);if(type==='heavy'&&!b.special)effect(type,b,b.x,b.y);impact(b.x,b.y,def.color,1);}}
 );
 gates.forEach(g=>{if(!g.active&&Math.hypot(b.x-g.x,b.y-g.y)<b.r+g.r){g.active=true;ring(g.x,g.y,'#d8bdff',80,26,5);burst(g.x,g.y,'#ddc4ff',22,4);score+=100;textPop(g.x,g.y-25,'RUNE!','#eadcff');}});
}
function impact(x,y,color,p=1){ring(x,y,color,25+58*p,13,2+p*3);burst(x,y,color,6+Math.round(9*p),2+p*2,'spark');}
function updateBall(b,step){b.age+=step;b.portalCooldown=Math.max(0,(b.portalCooldown||0)-step);if(b.frozen){b.stasisAge=(b.stasisAge||0)+step;b.stasisPulse=Math.max(0,(b.stasisPulse||0)-.025*step);if(b.age%2<step){const ft=TYPES[b.type==='splitChild'?'split':b.type];particles.push({x:b.x+(Math.random()-.5)*b.r*2,y:b.y+(Math.random()-.5)*b.r*2,vx:(Math.random()-.5)*.4,vy:-.5-Math.random()*.5,life:24,max:24,size:1.5+Math.random()*2,color:ft.glow,shape:'spark',rot:0,spin:.03});}return;}b.life-=step;const type=b.type==='splitChild'?'split':b.type,t=TYPES[type];b.spin+=step*(type==='heavy'?.12:type==='ice'?.19:.25);b.glow=Math.max(0,(b.glow||0)-.06*step);b.vy+=t.gravity*step;b.vx*=Math.pow(t.drag,step);b.vy*=Math.pow(t.drag,step);let sp=Math.hypot(b.vx,b.vy),limit=t.speed*1.35;if(sp>limit){b.vx*=limit/sp;b.vy*=limit/sp;}let sub=Math.max(1,Math.ceil(step*2.1));for(let i=0;i<sub;i++){b.x+=b.vx/sub*step;b.y+=b.vy/sub*step;hitWorld(b);}if(b.age%1.2<step){b.trail.push({x:b.x,y:b.y,life:type==='heavy'?30:24,color:t.color,size:b.r*(type==='heavy'?.34:.22)});if(b.trail.length>26)b.trail.shift();}b.trail.forEach(p=>p.life-=step);b.trail=b.trail.filter(p=>p.life>0);if(b.hits>12||b.life<=0||b.y>H+120||b.x<-100||b.x>W+100){b.dead=true;burst(b.x,b.y,t.color,12,3,type==='ice'?'snow':'spark');}}
function comboReaction(a,b,x,y){
 if(!a.combinedWith)a.combinedWith={};if(!b.combinedWith)b.combinedWith={};if(a.combinedWith[b.id]||b.combinedWith[a.id])return;a.combinedWith[b.id]=true;b.combinedWith[a.id]=true;
 const pair=[a.type==='splitChild'?'split':a.type,b.type==='splitChild'?'split':b.type].sort().join('+');
 const combos={
  'fire+fire':{title:'双日耀斑',color:'#ffb45e',radius:185,damage:54,mode:'meteor'},
  'ice+ice':{title:'极光冰环',color:'#aef5ff',radius:175,damage:38,mode:'aurora'},
  'heavy+heavy':{title:'双星坠击',color:'#ffe0a0',radius:205,damage:65,mode:'shatter'},
  'lightning+lightning':{title:'天穹雷暴',color:'#d8c2ff',radius:195,damage:58,mode:'thunder'},
  'split+split':{title:'翡翠星群',color:'#b8ffd7',radius:160,damage:42,mode:'shards'},
  'void+void':{title:'永夜奇点',color:'#d7b2ff',radius:220,damage:62,mode:'collapse'},
  'fire+ice':{title:'星雾蒸汽环',color:'#d9f9ff',radius:142,damage:35,mode:'steam'},
  'fire+lightning':{title:'日冕等离子',color:'#ffc36f',radius:185,damage:52,mode:'plasma'},
  'fire+heavy':{title:'熔核陨爆',color:'#ff9d55',radius:175,damage:58,mode:'meteor'},
  'fire+split':{title:'焰羽散射',color:'#ffba78',radius:132,damage:30,mode:'shards'},
  'fire+void':{title:'暗日吞焰',color:'#dc9cff',radius:205,damage:48,mode:'eclipse'},
  'heavy+ice':{title:'冰川碎星',color:'#baf5ff',radius:175,damage:48,mode:'shatter'},
  'ice+lightning':{title:'极光棱镜',color:'#a9f8ff',radius:165,damage:42,mode:'aurora'},
  'ice+split':{title:'霜晶花冠',color:'#c8fbff',radius:145,damage:30,mode:'snow'},
  'ice+void':{title:'零度奇点',color:'#c5c8ff',radius:190,damage:45,mode:'frostvoid'},
  'heavy+lightning':{title:'雷铸冲击',color:'#e5d7ff',radius:180,damage:55,mode:'thunder'},
  'heavy+split':{title:'星陨弹片',color:'#ffe2a5',radius:155,damage:40,mode:'shards'},
  'heavy+void':{title:'引力坍缩',color:'#d1a5ff',radius:205,damage:52,mode:'collapse'},
  'lightning+split':{title:'千鸟电网',color:'#d5c3ff',radius:170,damage:40,mode:'web'},
  'lightning+void':{title:'虚空风暴',color:'#d9c0ff',radius:205,damage:48,mode:'storm'},
  'split+void':{title:'暗星蜂群',color:'#d6b3ff',radius:178,damage:42,mode:'swarm'}
 };
 const c=combos[pair]||{title:'元素共鸣',color:'#fff1bd',radius:125,damage:26,mode:'nova'};
 const palette=pair.split('+').map(k=>(TYPES[k] ? TYPES[k].color : null)||'#fff');
 impactBursts.push({x,y,color:c.color,radius:c.radius*1.5,life:64,max:64,rot:Math.random()*TAU});
 screenPulse=Math.max(screenPulse,.9);
 // Distinct, readable reaction silhouettes.
 if(c.mode==='steam'){burst(x,y,'#fff7e5',78,10,'smoke');burst(x,y,'#89e7ff',48,8,'snow');for(let i=0;i<3;i++)ring(x,y+i*5,'#d8faff',c.radius*(.7+i*.23),26+i*6,6);flash=.14;}
 else if(c.mode==='plasma'||c.mode==='thunder'||c.mode==='web'){for(let i=0;i<7;i++){let ang=i*TAU/7;arcs.push({x1:x+Math.cos(ang)*20,y1:y+Math.sin(ang)*20,x2:x+Math.cos(ang)*c.radius,y2:y+Math.sin(ang)*c.radius,life:24,max:24,color:c.color});}burst(x,y,c.color,70,10,'spark');ring(x,y,c.color,c.radius,28,10);flash=.3;}
 else if(c.mode==='meteor'||c.mode==='shatter'||c.mode==='shards'){burst(x,y,'#fff2c9',78,12,'shard');burst(x,y,palette[0],40,10,'spark');ring(x,y,c.color,c.radius,28,12);shakeHit(15);flash=.28;}
 else if(c.mode==='eclipse'||c.mode==='collapse'||c.mode==='storm'||c.mode==='frostvoid'){vortices.push({x,y,life:120,max:120,r:c.radius*1.5,type:'void'});for(let i=0;i<3;i++)ring(x,y,c.color,c.radius*(.7+i*.35),30+i*9,8-i);burst(x,y,c.color,64,8,'dot');flash=.24;shakeHit(12);}
 else if(c.mode==='aurora'||c.mode==='snow'){for(let i=0;i<4;i++){let ang=i*TAU/4;arcs.push({x1:x+Math.cos(ang)*15,y1:y+Math.sin(ang)*15,x2:x+Math.cos(ang)*c.radius,y2:y+Math.sin(ang)*c.radius,life:25,max:25,color:palette[i%palette.length]});}burst(x,y,c.color,65,8,'snow');ring(x,y,c.color,c.radius,30,9);}
 else{burst(x,y,c.color,58,8,'spark');ring(x,y,c.color,c.radius,30,9);}
 const boss=enemies.find(en=>en.boss&&en.alive);if(boss){boss.shieldOpen=Math.max(boss.shieldOpen||0,220);boss.shieldPulse=1;ring(boss.x,boss.y,c.color,125,30,8);textPop(boss.x,boss.y-boss.r-30,'护盾共鸣破裂！','#fff0cb',19);}
 const sourceType=a.type==='splitChild'?'split':a.type;enemies.forEach(en=>{if(en.alive){let dd=Math.hypot(en.x-x,en.y-y);if(dd<c.radius+en.r)dmgEnemy(en,c.damage*(1-dd/(c.radius+en.r)),sourceType,3);}});
 // A magical collision pushes nearby free balls away, while a time-anchored orb remains fixed as the catalyst.
 balls.forEach(o=>{if(o===a||o===b||o.dead||o.frozen)return;let dx=o.x-x,dy=o.y-y,dd=Math.hypot(dx,dy)||1;if(dd<c.radius*1.35){let f=(1-dd/(c.radius*1.35))*5.5;o.vx+=dx/dd*f;o.vy+=dy/dd*f;}});
 ring(x,y,c.color,c.radius*1.42,36,10);textPop(x,y-48,c.title,c.color,22);combo++;comboTimer=240;syncUI();score+=220;shakeHit(Math.max(shake, c.mode==='plasma'||c.mode==='meteor'?19:13));hitStop=Math.max(hitStop,5);flash=Math.max(flash,.13);vibe([18,28,45]);tone(c.mode==='steam'?520:c.mode==='collapse'?110:760,.25,c.mode==='meteor'?'sawtooth':'sine',.06);
}
function collideBalls(){
 for(let i=0;i<balls.length;i++)for(let j=i+1;j<balls.length;j++){
  let a=balls[i],b=balls[j];if(a.dead||b.dead)continue;
  let dx=b.x-a.x,dy=b.y-a.y,dd=Math.hypot(dx,dy),min=a.r+b.r;
  if(dd>=min)continue;
  const safeD=dd>.001?dd:1,nx=dd>.001?dx/safeD:1,ny=dd>.001?dy/safeD:0;
  const overlap=min-dd,ia=a.frozen?0:1,ib=b.frozen?0:1,sum=ia+ib;
  if(sum>0){a.x-=nx*overlap*(ia/sum);a.y-=ny*overlap*(ia/sum);b.x+=nx*overlap*(ib/sum);b.y+=ny*overlap*(ib/sum);}
  const rel=(b.vx-a.vx)*nx+(b.vy-a.vy)*ny;
  if(rel<0&&sum>0){const impulse=-(1+.94)*rel/sum;if(ia){a.vx-=impulse*nx;a.vy-=impulse*ny;}if(ib){b.vx+=impulse*nx;b.vy+=impulse*ny;}}
  const mx=(a.x+b.x)/2,my=(a.y+b.y)/2;
  const anchor=(a.frozen&&!b.frozen)?a:((b.frozen&&!a.frozen)?b:null);
  const striker=anchor?(anchor===a?b:a):null;
  if(anchor&&striker&&!anchor.triggered&&striker.age>1){
   anchor.triggered=true;
   const impactSpeed=Math.hypot(striker.vx,striker.vy);
   comboReaction(anchor,striker,mx,my);
   // The suspended orb is consumed as a magical trigger; the incoming orb keeps moving after the rebound.
   anchor.dead=true;
   striker.vx*=1.12;striker.vy*=1.12;striker.hits++;
   const col=TYPES[anchor.type==='splitChild'?'split':anchor.type].glow;
   ring(anchor.x,anchor.y,col,anchor.r+72,24,7);burst(anchor.x,anchor.y,'#fff4d6',24,7,'shard');
   textPop(mx,my-72,'实体撞击 · 元素融合','#fff1cb',19);
   setMessage(`${TYPES[anchor.type==='splitChild'?'split':anchor.type].name} × ${TYPES[striker.type==='splitChild'?'split':striker.type].name}：发生实体碰撞！两种元素融合，冲击力 ${Math.round(impactSpeed)}。`);
   shakeHit(impactSpeed>15?16:11);vibe([18,26,35]);
  }else if(!anchor&&a.age>2&&b.age>2){
   // Two moving marbles simply bounce; only a moving orb striking a frozen orb triggers fusion.
   impact(mx,my,'#f4e5ff',.7);
  }
 }
}
function update(step){balls.forEach(b=>updateBall(b,step));collideBalls();balls=balls.filter(b=>!b.dead);enemies.forEach(en=>{if(!en.alive)return;if(en.freeze>0)en.freeze-=step;if(en.burn>0){en.burn-=step;if(Math.floor(en.burn)%24<step){en.hp-=4;en.flash=.4;textPop(en.x,en.y-en.r,'BURN','#ffb26f',12);if(en.hp<=0){dmgEnemy(en,0,'fire',0);}}}en.flash=Math.max(0,en.flash-.045*step);en.knock*=Math.pow(.9,step);en.y+=Math.sin(clock*.055+en.phase)*.12*step;});vortices.forEach(v=>{v.life-=step;enemies.forEach(en=>{if(!en.alive)return;let dx=v.x-en.x,dy=v.y-en.y,dd=Math.hypot(dx,dy)||1;if(dd<v.r){let pull=(1-dd/v.r)*.72*step;en.x+=dx/dd*pull;en.y+=dy/dd*pull;}});balls.forEach(ball=>{if(ball.dead||ball.frozen)return;let dx=v.x-ball.x,dy=v.y-ball.y,dd=Math.hypot(dx,dy)||1;if(dd<v.r){let pull=(1-dd/v.r)*.42*step;ball.vx+=dx/dd*pull;ball.vy+=dy/dd*pull;}});});vortices=vortices.filter(v=>v.life>0);
 enemies.forEach(en=>{if(!en.boss||!en.alive)return;en.attackClock+=step;en.shieldOpen=Math.max(0,(en.shieldOpen||0)-step);en.shieldPulse=Math.max(0,(en.shieldPulse||0)-.035*step);en.x=820+Math.sin(clock*.012)*24;en.y=390+Math.cos(clock*.018)*14;if(en.hp<en.max*.5&&en.phaseLevel===1){en.phaseLevel=2;ring(en.x,en.y,'#e5c8ff',260,48,14);burst(en.x,en.y,'#d8c5ff',90,11,'shard');textPop(en.x,en.y-130,'第二阶段 · 月蚀降临','#f0dcff',24);flash=.18;shakeHit(14);tone(220,.35,'sawtooth',.05);}});
particles.forEach(p=>{p.x+=p.vx*step;p.y+=p.vy*step;p.vx*=Math.pow(.986,step);p.vy=p.vy*.986+.035*step;p.life-=step;p.rot+=p.spin*step;});particles=particles.filter(p=>p.life>0);rings.forEach(r=>{r.r+=(r.max-r.r)*.17*step;r.life-=step;});rings=rings.filter(r=>r.life>0);texts.forEach(t=>{t.y-=.48*step;t.life-=step;});texts=texts.filter(t=>t.life>0);arcs.forEach(a=>a.life-=step);arcs=arcs.filter(a=>a.life>0);Object.keys(launchers).forEach(k=>launchers[k].recoil=Math.max(0,launchers[k].recoil-.055*step));if(Math.floor(clock)%8===0)syncUI();comboTimer=Math.max(0,comboTimer-step);if(comboTimer<=0)combo=0;shake*=Math.pow(.84,step);flash=Math.max(0,flash-.035*step);if(enemies.every(e=>!e.alive)&&!win){win=true;ring(830,430,'#ffe59b',360,60,13);burst(830,430,'#ffe4a4',100,10,'spark');textPop(830,325,'TEMPLE CLEARED!','#fff0bd',30);tone(880,.4,'sine',.06);vibe([25,40,30]);setMessage('月蚀蝶后已净化！战场已清理。');}}
function round(x,y,w,h,r,fill,stroke,lw=1){ctx.beginPath();ctx.roundRect(x,y,w,h,r);if(fill){ctx.fillStyle=fill;ctx.fill();}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=lw;ctx.stroke();}}
function glow(x,y,r,color,a=1){ctx.save();ctx.globalAlpha=a;ctx.fillStyle=color;ctx.shadowColor=color;ctx.shadowBlur=Math.min(14,r*1.25);ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.fill();ctx.restore();}
function poly(points,fill,stroke,lw=1){ctx.beginPath();ctx.moveTo(points[0][0],points[0][1]);for(let i=1;i<points.length;i++)ctx.lineTo(points[i][0],points[i][1]);ctx.closePath();ctx.fillStyle=fill;ctx.fill();if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=lw;ctx.stroke();}}
function drawCloud(x,y,s,a){ctx.save();ctx.globalAlpha=a;ctx.fillStyle='#c0d0e5';ctx.shadowColor='#a5c5ea';ctx.shadowBlur=25;ctx.beginPath();ctx.ellipse(x,y,70*s,18*s,0,0,TAU);ctx.ellipse(x-37*s,y-11*s,29*s,24*s,0,0,TAU);ctx.ellipse(x+1*s,y-20*s,39*s,34*s,0,0,TAU);ctx.ellipse(x+40*s,y-7*s,30*s,22*s,0,0,TAU);ctx.fill();ctx.restore();}
function drawCrystal(x,y,s,color='#8ce9ef',rot=0,alpha=1){
 ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.globalAlpha=alpha;let g=ctx.createLinearGradient(-s*.5,-s,-s*.1,s);g.addColorStop(0,'#ffffff');g.addColorStop(.22,color);g.addColorStop(.62,'#526a9e');g.addColorStop(1,'#111a36');ctx.shadowColor=color;ctx.shadowBlur=s*.28;poly([[0,-s], [s*.34,-s*.2],[s*.24,s*.82],[-s*.12,s],[-s*.46,-s*.18]],g,'#e9ffffaa',Math.max(1,s*.025));ctx.shadowBlur=0;poly([[0,-s],[s*.34,-s*.2],[0,s*.22]],'#ffffff44');poly([[0,-s],[-s*.46,-s*.18],[-s*.12,s]],'#ffffff20');ctx.strokeStyle='#ffffff70';ctx.lineWidth=Math.max(1,s*.018);ctx.beginPath();ctx.moveTo(0,-s*.82);ctx.lineTo(s*.08,s*.75);ctx.stroke();ctx.restore();
}
function drawRuneDisk(x,y,r,color,rot=0,alpha=.5){
 ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.globalAlpha=alpha;ctx.strokeStyle=color;ctx.shadowColor=color;ctx.shadowBlur=16;ctx.lineWidth=2;ctx.beginPath();ctx.arc(0,0,r,0,TAU);ctx.stroke();ctx.setLineDash([7,9]);ctx.lineDashOffset=-clock*.35;ctx.lineWidth=1.4;ctx.beginPath();ctx.arc(0,0,r*.82,0,TAU);ctx.stroke();ctx.setLineDash([]);for(let i=0;i<8;i++){let a=i*TAU/8;ctx.save();ctx.rotate(a);poly([[0,-r-5],[4,-r+5],[0,-r+12],[-4,-r+5]],'#d9c8ff88',color,1);ctx.restore();}ctx.beginPath();ctx.moveTo(-r*.58,0);ctx.lineTo(r*.58,0);ctx.moveTo(0,-r*.58);ctx.lineTo(0,r*.58);ctx.stroke();ctx.restore();
}
function drawBg(){
 // Deep astral sky with layered nebulae.
 let sky=ctx.createLinearGradient(0,0,0,H);sky.addColorStop(0,'#080d25');sky.addColorStop(.28,'#1a2850');sky.addColorStop(.58,'#503960');sky.addColorStop(.78,'#442f54');sky.addColorStop(1,'#101a36');ctx.fillStyle=sky;ctx.fillRect(0,0,W,H);
 const nebulae=[[220,180,410,'#4c78aa'],[1140,210,450,'#7c4eaa'],[740,430,480,'#bb6b83']];nebulae.forEach(([x,y,r,c],i)=>{let g=ctx.createRadialGradient(x,y,2,x,y,r);g.addColorStop(0,c+'55');g.addColorStop(.35,c+'2a');g.addColorStop(1,c+'00');ctx.fillStyle=g;ctx.fillRect(x-r,y-r,r*2,r*2);});
 // Distant starfield with twinkling clusters.
 for(let i=0;i<175;i++){let x=(i*173+31)%W,y=(i*79+17)%545,a=.18+.62*(.5+.5*Math.sin(clock*.035+i*1.7)),sz=i%17===0?3.2:i%5===0?2:1;ctx.globalAlpha=a;ctx.fillStyle=i%7===0?'#ffdcae':i%3===0?'#a8e8ff':'#eeeaff';ctx.fillRect(x,y,sz,sz);if(i%17===0){ctx.strokeStyle='#fff1d2';ctx.globalAlpha=a*.5;ctx.beginPath();ctx.moveTo(x-7,y);ctx.lineTo(x+7,y);ctx.moveTo(x,y-7);ctx.lineTo(x,y+7);ctx.stroke();}}
 ctx.globalAlpha=1;
 // Great eclipsed moon and its orbital astrolabe.
 let moonPulse=1+Math.sin(clock*.018)*.012;ctx.save();ctx.translate(760,178);ctx.scale(moonPulse,moonPulse);
 let halo=ctx.createRadialGradient(0,0,55,0,0,330);halo.addColorStop(0,'#f5d7ff22');halo.addColorStop(.44,'#9b8be933');halo.addColorStop(.76,'#72d7df12');halo.addColorStop(1,'#72d7df00');ctx.fillStyle=halo;ctx.fillRect(-340,-340,680,680);
 ctx.strokeStyle='#9de8f0';ctx.globalAlpha=.25;ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(0,0,275,85,-.14,0,TAU);ctx.stroke();ctx.strokeStyle='#e5c0ff';ctx.globalAlpha=.3;ctx.beginPath();ctx.ellipse(0,0,240,130,.42,0,TAU);ctx.stroke();
 ctx.shadowColor='#e7c5ff';ctx.shadowBlur=55;let mg=ctx.createRadialGradient(-22,-27,5,0,0,95);mg.addColorStop(0,'#fff8e7');mg.addColorStop(.27,'#e7d5f4');mg.addColorStop(.72,'#9b87c3');mg.addColorStop(1,'#2c3159');ctx.fillStyle=mg;ctx.beginPath();ctx.arc(0,0,82,0,TAU);ctx.fill();ctx.shadowBlur=0;
 // Moon craters / shadow crescent.
 ctx.fillStyle='#4d4d78aa';[[ -33,-25,15],[26,-42,10],[18,26,19],[-43,35,9]].forEach(([x,y,r])=>{ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.fill();});ctx.fillStyle='#172343';ctx.beginPath();ctx.arc(34,-16,83,0,TAU);ctx.fill();
 for(let i=0;i<16;i++){let a=i*TAU/16+clock*.002;let rr=111;glow(Math.cos(a)*rr,Math.sin(a)*rr,2.7,i%2?'#a5f2ef':'#f6d8ff',.8);}
 ctx.restore();
 // Animated aurora veils, slow broad strokes.
 ctx.save();ctx.globalAlpha=.19;for(let band=0;band<5;band++){let base=98+band*49;ctx.beginPath();ctx.moveTo(-80,base);for(let x=0;x<=W+80;x+=45){let y=base+Math.sin(x*.004+clock*.012+band*.8)*26+Math.cos(x*.009-clock*.009)*13;ctx.lineTo(x,y);}let col=['#66e8d3','#91baff','#d3a0fa','#f3b7d4','#81d7f0'][band];ctx.strokeStyle=col;ctx.lineWidth=18+band*2;ctx.shadowColor=col;ctx.shadowBlur=38;ctx.stroke();}ctx.restore();
 // Shafts of moonlight behind the central boss.
 ctx.save();ctx.globalAlpha=.075;for(let i=-4;i<=4;i++){let x=760+i*76;ctx.fillStyle=i%2?'#c2b2ff':'#b1efff';poly([[760,170],[x-17,560],[x+45,560]],ctx.fillStyle);}ctx.restore();
 // Distant mountain silhouettes and layered floating islands.
 poly([[0,485],[95,366],[168,410],[285,275],[375,385],[478,304],[595,421],[695,304],[790,414],[912,275],[1018,390],[1126,284],[1220,398],[1334,286],[1440,420],[1440,740],[0,740]],'#141f3c');
 poly([[0,535],[125,414],[238,470],[350,354],[480,475],[606,390],[742,492],[854,372],[990,468],[1106,355],[1240,475],[1360,390],[1440,465],[1440,740],[0,740]],'#202747');
 // Distant citadel with glowing windows and layered rooflines.
 ctx.save();ctx.globalAlpha=.76;ctx.fillStyle='#101a34';ctx.fillRect(574,267,370,260);poly([[535,295],[760,170],[982,295]],'#172441','#8a80a6',2);poly([[610,273],[760,211],[910,273]],'#253357','#8e83aa',2);for(let i=0;i<7;i++){let x=598+i*50;ctx.fillStyle='#111a36';round(x,285,25,240,8,'#111a36','#72688d',2);ctx.fillStyle=i%2?'#6fe0e3':'#d7b2ff';ctx.globalAlpha=.38+.15*Math.sin(clock*.04+i);round(x+8,326,8,55,4,ctx.fillStyle,null);round(x+8,420,8,45,4,ctx.fillStyle,null);}ctx.globalAlpha=.72;for(let i=0;i<5;i++){let x=635+i*60;ctx.strokeStyle='#bca5e8';ctx.lineWidth=2;ctx.beginPath();ctx.arc(x,286,18,Math.PI,TAU);ctx.stroke();}ctx.restore();
 // Floating islands with waterfalls and crystal growth.
 for(let i=0;i<4;i++){let x=[170,1150,1000,420][i],y=[357,345,275,305][i]+Math.sin(clock*.016+i*1.8)*8,s=[.85,1.08,.65,.5][i];ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.shadowColor='#7fd8db';ctx.shadowBlur=11;poly([[-112,0],[-78,-32],[-18,-42],[55,-28],[107,-2],[64,29],[43,85],[-25,88],[-76,42]],'#263452','#7182a3',2);ctx.shadowBlur=0;poly([[-85,-2],[-55,-22],[-12,-29],[57,-20],[86,-2]],'#7e7897','#c4b6b8',1);for(let k=0;k<5;k++){let cx=-52+k*25;ctx.strokeStyle='#6b8e90';ctx.globalAlpha=.7;ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(cx,27);ctx.quadraticCurveTo(cx-8,65,cx+Math.sin(clock*.02+k)*7,112);ctx.stroke();}drawCrystal(-44,-28,27,'#6de2e7',-.1,.86);drawCrystal(38,-28,22,'#b99bff',.12,.75);ctx.restore();}
 // Ancient temple arch and rune columns.
 ctx.save();ctx.globalAlpha=.7;ctx.strokeStyle='#5e6688';ctx.lineWidth=34;ctx.beginPath();ctx.arc(720,506,372,Math.PI,TAU);ctx.stroke();ctx.strokeStyle='#d2b57e';ctx.lineWidth=2.5;ctx.beginPath();ctx.arc(720,506,352,Math.PI,TAU);ctx.stroke();ctx.strokeStyle='#8c87b5';ctx.lineWidth=4;ctx.beginPath();ctx.arc(720,506,389,Math.PI,TAU);ctx.stroke();for(let x=350;x<=1090;x+=74){ctx.fillStyle='#202c4c';round(x,204,19,320,5,'#202c4c','#9886ac',2);ctx.strokeStyle='#c3a7cb';ctx.globalAlpha=.34;ctx.lineWidth=1.3;for(let y=228;y<486;y+=34){ctx.beginPath();ctx.moveTo(x+4,y);ctx.lineTo(x+15,y+8);ctx.moveTo(x+15,y);ctx.lineTo(x+4,y+8);ctx.stroke();}}ctx.restore();
 // Crystal clusters frame the arena.
 drawCrystal(110,535,105,'#5de0dc',-.12,.9);drawCrystal(1330,530,116,'#bd8cf5',.09,.9);drawCrystal(205,644,52,'#72c9eb',.12,.85);drawCrystal(1224,633,58,'#d18bdb',-.1,.85);
 // Tall foreground pillars and ornate capitals.
 drawPillar(24,160,480);drawPillar(1334,150,490);
 // Waterfalls with animated highlights.
 for(let i=0;i<4;i++){let x=[232,1192,1260,310][i],y=[398,380,418,424][i],w=i%2?18:13;ctx.save();let g=ctx.createLinearGradient(x,0,x+w,0);g.addColorStop(0,'#60c9da22');g.addColorStop(.45,'#bdf9ff99');g.addColorStop(1,'#6397e833');ctx.fillStyle=g;ctx.fillRect(x,y,w,286);for(let k=0;k<6;k++){let xx=x+2+k*2.3,off=(clock*(1.15+k*.18)+k*41+i*23)%48;ctx.strokeStyle=k%2?'#d4fbff99':'#72dbeaaa';ctx.lineWidth=k%2?1.3:2;ctx.beginPath();ctx.moveTo(xx,y+off);ctx.bezierCurveTo(xx+Math.sin(clock*.04+k)*3,y+off+50,xx-2,y+off+130,xx+Math.cos(clock*.03+i)*2,y+286);ctx.stroke();}ctx.restore();}
 // Large floor and foreground magical inlay.
 let floor=ctx.createLinearGradient(0,GROUND-25,0,H);floor.addColorStop(0,'#786b86');floor.addColorStop(.12,'#3d4165');floor.addColorStop(.55,'#202b4b');floor.addColorStop(1,'#0a142b');ctx.fillStyle=floor;ctx.fillRect(0,GROUND,W,H-GROUND);
 ctx.fillStyle='#b6a0b2';ctx.fillRect(0,GROUND-10,W,12);ctx.fillStyle='#f8dba4';ctx.fillRect(0,GROUND-10,W,2);ctx.fillStyle='#6ee7e1';ctx.globalAlpha=.55;ctx.fillRect(0,GROUND-2,W,2);ctx.globalAlpha=1;
 for(let x=0;x<W;x+=78){let g=ctx.createLinearGradient(0,GROUND,0,GROUND+55);g.addColorStop(0,'#5e5873');g.addColorStop(1,'#1a2441');round(x+2,GROUND+8,70,44,4,g,'#a89bb4',1.3);ctx.strokeStyle='#dfc99f66';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x+8,GROUND+13);ctx.lineTo(x+65,GROUND+13);ctx.stroke();ctx.fillStyle='#111b34';ctx.beginPath();ctx.arc(x+11,GROUND+30,2.5,0,TAU);ctx.arc(x+61,GROUND+30,2.5,0,TAU);ctx.fill();}
 // A central rune seal slowly turns under the battlefield.
 drawRuneDisk(720,748,108,'#8cdbe4',clock*.004,.23);drawRuneDisk(720,748,82,'#d7b3ff',-clock*.007,.19);
 // Hanging star fragments and ambient dust motes.
 for(let i=0;i<64;i++){let x=(i*197+clock*(.17+i%4*.07))%W,y=260+((i*67-clock*(.2+i%3*.09))%445+445)%445,a=.12+.42*(.5+.5*Math.sin(clock*.055+i));ctx.globalAlpha=a;glow(x,y,i%11===0?2.8:1.4,i%4===0?'#9ef4ef':i%4===1?'#fbd6a5':'#c9baff',.75);}ctx.globalAlpha=1;
 // Flame braziers and drifting cloud veils.
 drawTorch(52,482);drawTorch(1385,478);drawTorch(285,615);drawTorch(1160,615);
 drawCloud((clock*.18+100)%1650-100,235,1.25,.17);drawCloud((clock*.12+700)%1750-100,310,.92,.13);drawCloud((W-(clock*.15%1650)),155,.82,.14);
}
function drawPillar(x,y,h){ctx.save();let g=ctx.createLinearGradient(x,0,x+82,0);g.addColorStop(0,'#252a41');g.addColorStop(.25,'#767083');g.addColorStop(.52,'#45445d');g.addColorStop(1,'#22283f');round(x,y,82,h,9,g,'#a18c88',3);round(x-10,y-15,102,24,7,'#9a8d8b','#d4b99c',2);round(x-7,y+h-5,96,26,6,'#8b7c7e','#bba18e',2);ctx.strokeStyle='#c6a985';ctx.globalAlpha=.55;ctx.lineWidth=2;for(let yy=y+28;yy<y+h-20;yy+=48){ctx.beginPath();ctx.moveTo(x+15,yy);ctx.lineTo(x+67,yy+12);ctx.moveTo(x+67,yy);ctx.lineTo(x+15,yy+12);ctx.stroke();}ctx.restore();}
function drawTorch(x,y){ctx.save();ctx.fillStyle='#524253';round(x-8,y,16,58,5,'#514453','#bc9d85',2);ctx.fillStyle='#ad825d';round(x-14,y-10,28,14,4,'#ae845f','#e2bd8b',2);let f=1+Math.sin(clock*.3+x)*.12;ctx.shadowColor='#ff8c48';ctx.shadowBlur=32;let g=ctx.createRadialGradient(x,y-24,1,x,y-20,18*f);g.addColorStop(0,'#fff9c0');g.addColorStop(.35,'#ffcf69');g.addColorStop(1,'#f15b35');ctx.fillStyle=g;ctx.beginPath();ctx.ellipse(x,y-21,8*f,17*f,Math.sin(clock*.08+x)*.16,0,TAU);ctx.fill();ctx.restore();}
function drawPlatform(p){ctx.save();let g=ctx.createLinearGradient(0,p.y,0,p.y+p.h);g.addColorStop(0,p.kind==='metal'?'#b8d4d4':p.kind==='wood'?'#d49a68':'#a39b9a');g.addColorStop(.18,p.kind==='metal'?'#5f7e88':p.kind==='wood'?'#88543d':'#626276');g.addColorStop(1,'#272d45');round(p.x,p.y,p.w,p.h,7,g,'#d4c2a8',2);ctx.fillStyle=p.kind==='wood'?'#ecc18a':'#c3d5d5';round(p.x+8,p.y+3,p.w-16,3,2,ctx.fillStyle,null);for(let x=p.x+14;x<p.x+p.w-8;x+=34){ctx.fillStyle='#1f293d';ctx.beginPath();ctx.arc(x,p.y+p.h/2,2.5,0,TAU);ctx.fill();}ctx.restore();}
function prepareBackgroundCache(){
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
function drawEnvironment(){// hanging chain and relic ring
 ctx.save();if(!chain.burned){ctx.strokeStyle='#7b8398';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(740,90);ctx.lineTo(740,205);ctx.stroke();for(let y=98;y<203;y+=14){ctx.strokeStyle='#c4b19b';ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(740,y,5,8,.3,0,TAU);ctx.stroke();}}else{ctx.strokeStyle='#b17a58';ctx.lineWidth=4;ctx.setLineDash([7,8]);ctx.beginPath();ctx.moveTo(740,92);ctx.lineTo(740,142);ctx.moveTo(740,171);ctx.lineTo(740,205);ctx.stroke();ctx.setLineDash([]);}ctx.translate(740,216);ctx.rotate(Math.sin(clock*.018)*.05);ctx.shadowColor='#bba2ff';ctx.shadowBlur=24;ctx.fillStyle='#453e69';ctx.strokeStyle='#b8a2ff';ctx.lineWidth=4;ctx.beginPath();ctx.arc(0,0,32,0,TAU);ctx.fill();ctx.stroke();glow(0,0,12,'#b69bff',.9);ctx.restore();
 // water channel becomes a luminous ice bridge when struck by an ice core
 ctx.save();if(chain.ice){let ig=ctx.createLinearGradient(0,672,0,716);ig.addColorStop(0,'#f2ffff');ig.addColorStop(.28,'#8beaff');ig.addColorStop(1,'#286b9b');ctx.shadowColor='#83eaff';ctx.shadowBlur=11;ctx.fillStyle=ig;ctx.beginPath();ctx.moveTo(560,690);ctx.quadraticCurveTo(670,666,780,690);ctx.lineTo(780,714);ctx.lineTo(560,714);ctx.closePath();ctx.fill();ctx.shadowBlur=0;ctx.strokeStyle='#f3ffff';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(570,686);ctx.quadraticCurveTo(670,663,770,686);ctx.stroke();for(let i=0;i<8;i++){let x=580+i*25,y=686+Math.sin(i*1.7+clock*.02)*5;ctx.strokeStyle='#d9fbff99';ctx.beginPath();ctx.moveTo(x-5,y+8);ctx.lineTo(x+5,y-7);ctx.stroke();}}else{ctx.fillStyle='#173e57';ctx.beginPath();ctx.moveTo(560,690);ctx.quadraticCurveTo(670,666,780,690);ctx.lineTo(780,714);ctx.lineTo(560,714);ctx.closePath();ctx.fill();let wave=clock*.035;ctx.strokeStyle='#66d4ec88';ctx.lineWidth=2;for(let i=0;i<5;i++){ctx.beginPath();ctx.moveTo(575,693+i*4);ctx.quadraticCurveTo(650,686+Math.sin(wave+i)*4,765,694+i*4);ctx.stroke();}}ctx.restore();
 // relic pillars
 gates.forEach((g,i)=>{ctx.save();ctx.translate(g.x,g.y);let pulse=1+Math.sin(clock*.06+i)*.08;ctx.scale(pulse,pulse);ctx.shadowColor=g.active?'#c7a6ff':'#7c6d9d';ctx.shadowBlur=g.active?30:15;ctx.fillStyle=g.active?'#d3bdff':'#41445f';ctx.strokeStyle=g.active?'#fff0ff':'#9b8daf';ctx.lineWidth=3;ctx.beginPath();ctx.arc(0,0,g.r,0,TAU);ctx.fill();ctx.stroke();ctx.shadowBlur=0;ctx.fillStyle=g.active?'#fff':'#b7a0d0';ctx.beginPath();ctx.arc(0,0,7,0,TAU);ctx.fill();ctx.restore();});
 platforms.forEach(drawPlatform);
 // distant ornamental machinery
 ctx.save();ctx.translate(710,530);ctx.rotate(clock*.003);ctx.strokeStyle='#b49a72';ctx.lineWidth=6;ctx.beginPath();ctx.arc(0,0,65,0,TAU);ctx.stroke();for(let i=0;i<12;i++){let a=i*TAU/12;ctx.beginPath();ctx.moveTo(Math.cos(a)*58,Math.sin(a)*58);ctx.lineTo(Math.cos(a)*78,Math.sin(a)*78);ctx.stroke();}ctx.restore();
}
function drawProp(p){if(!p.alive)return;ctx.save();ctx.translate(p.x+p.w/2,p.y+p.h/2);ctx.rotate(p.angle||0);if(p.kind==='wood'){let gr=ctx.createLinearGradient(-p.w/2,0,p.w/2,0);gr.addColorStop(0,'#694532');gr.addColorStop(.5,'#bb8350');gr.addColorStop(1,'#65422f');round(-p.w/2,-p.h/2,p.w,p.h,9,gr,'#efc18b',3);ctx.strokeStyle='#e0ac72';ctx.lineWidth=4;for(let y=-p.h/2+14;y<p.h/2;y+=17){ctx.beginPath();ctx.moveTo(-p.w/2+8,y);ctx.bezierCurveTo(-15,y-5,15,y+6,p.w/2-7,y-1);ctx.stroke();}ctx.fillStyle='#4c302a';ctx.fillRect(-6,-p.h/2,12,p.h);}if(p.kind==='barrel'){let gr=ctx.createLinearGradient(-p.w/2,0,p.w/2,0);gr.addColorStop(0,'#6f3642');gr.addColorStop(.5,'#d26a4b');gr.addColorStop(1,'#633448');round(-p.w/2,-p.h/2,p.w,p.h,12,gr,'#f3bd82',3);ctx.fillStyle='#b7a7a1';ctx.fillRect(-p.w/2,-17,p.w,7);ctx.fillRect(-p.w/2,13,p.w,7);glow(0,0,9,'#ffb04d',.8);}if(p.kind==='stone'){let gr=ctx.createLinearGradient(-p.w/2,-p.h/2,p.w/2,p.h/2);gr.addColorStop(0,'#9b9bac');gr.addColorStop(.5,'#5f657c');gr.addColorStop(1,'#303a57');round(-p.w/2,-p.h/2,p.w,p.h,6,gr,'#c2b8aa',3);ctx.strokeStyle='#e1cfa5';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(-22,-p.h/2+3);ctx.lineTo(-5,-8);ctx.lineTo(8,1);ctx.lineTo(0,17);ctx.stroke();}if(p.kind==='crystal'){ctx.shadowColor='#b996ff';ctx.shadowBlur=11;poly([[-p.w/2,10],[-p.w/3,-p.h/2],[0,-p.h/2-10],[p.w/2,-8],[p.w/3,p.h/2],[0,p.h/2+5]],'#7665ac','#d5c2ff',3);ctx.shadowBlur=0;poly([[-8,-30],[8,-38],[3,28]],'#d8cbff88');}ctx.restore();if(p.hp<p.max){ctx.fillStyle='#11182a';round(p.x,p.y-11,p.w,6,4,'#11182a');round(p.x,p.y-11,p.w*Math.max(0,p.hp/p.max),6,4,p.kind==='barrel'?'#ff9b65':'#b3dcff');}}

function drawCelestialBoss(e){
 const bob=Math.sin(clock*.032)*8,wing=Math.sin(clock*.082)*.19,open=e.shieldOpen>0,phase=e.phaseLevel||1;
 const wingA=phase===2?'#ffb7e8':'#c7b9ff',wingB=phase===2?'#ff77c8':'#71d9e8';
 ctx.save();ctx.translate(e.x,e.y+bob);ctx.scale(1+e.flash*.07,1-e.flash*.04);
 // Cosmic mandala behind the guardian.
 ctx.save();ctx.rotate(clock*.003);ctx.globalAlpha=.46;ctx.strokeStyle=phase===2?'#ffa9df':'#aeb0fa';ctx.shadowColor=ctx.strokeStyle;ctx.shadowBlur=15;ctx.lineWidth=2.2;for(let k=0;k<3;k++){ctx.beginPath();ctx.ellipse(0,0,176-k*19,105-k*17,k*.55,0,TAU);ctx.stroke();}for(let i=0;i<12;i++){let a=i*TAU/12;ctx.beginPath();ctx.moveTo(Math.cos(a)*122,Math.sin(a)*78);ctx.lineTo(Math.cos(a)*184,Math.sin(a)*112);ctx.stroke();}ctx.restore();
 // Orbiting moon shards.
 for(let i=0;i<9;i++){let a=clock*.012+i*TAU/9,rr=174+Math.sin(clock*.02+i)*7;ctx.save();ctx.translate(Math.cos(a)*rr,Math.sin(a)*rr*.55);ctx.rotate(a+clock*.015);drawCrystal(0,0,9+i%3*2,i%2?'#c7baff':'#a9f1ed',.15,.8);ctx.restore();}
 // Four translucent wings, with layered silhouette, veins and eye-like constellations.
 for(const side of [-1,1]){for(let layer=0;layer<2;layer++){
  ctx.save();ctx.scale(side,1);ctx.rotate(wing*(layer===0?1:-.55));ctx.translate(layer*10,layer*24);
  const wg=ctx.createLinearGradient(6,-45,158,90);wg.addColorStop(0,'#fffdf4ed');wg.addColorStop(.18,phase===2?'#ffd5f0dd':'#e0d8ffdd');wg.addColorStop(.48,layer===0?wingA+'bb':wingB+'aa');wg.addColorStop(.78,'#465d9b99');wg.addColorStop(1,'#15254c08');
  ctx.fillStyle=wg;ctx.shadowColor=phase===2?'#ff9be0':'#a996ff';ctx.shadowBlur=open?54:32;ctx.beginPath();
  if(layer===0){ctx.moveTo(8,-12);ctx.bezierCurveTo(36,-145,176,-169,174,-64);ctx.bezierCurveTo(173,2,112,45,29,34);ctx.bezierCurveTo(111,59,134,149,64,145);ctx.bezierCurveTo(7,139,-18,65,8,-12);}
  else{ctx.moveTo(1,6);ctx.bezierCurveTo(-34,-76,-126,-100,-137,-28);ctx.bezierCurveTo(-145,28,-78,68,8,36);ctx.bezierCurveTo(-50,90,-47,145,7,121);ctx.closePath();}
  ctx.closePath();ctx.fill();ctx.strokeStyle='#f4edffcc';ctx.lineWidth=2.3;ctx.stroke();ctx.shadowBlur=0;
  // Fine veins and shimmering filaments.
  ctx.strokeStyle=layer===0?'#c6f7f1b8':'#f6dcff9c';ctx.lineWidth=1.7;for(let i=0;i<7;i++){ctx.beginPath();ctx.moveTo(12,8+i*4);ctx.bezierCurveTo(58,-24+i*11,111,-80+i*19,160,-90+i*28);ctx.stroke();}
  // Crescent eye marking at the outer wing.
  ctx.strokeStyle='#fff0c7';ctx.lineWidth=3.2;ctx.beginPath();ctx.ellipse(112,-55,18,30,-.62,0,TAU);ctx.stroke();glow(112,-55,5,phase===2?'#fff0f8':'#fff1c9',.9);ctx.restore();
 }}
 // Trailing silk ribbons, animated independently.
 ctx.save();ctx.strokeStyle=phase===2?'#ffb9dc':'#c9b6ff';ctx.globalAlpha=.78;ctx.lineWidth=4.5;ctx.shadowColor=ctx.strokeStyle;ctx.shadowBlur=12;for(let i=0;i<5;i++){let x=-24+i*12;ctx.beginPath();ctx.moveTo(x,35);ctx.bezierCurveTo(x-54,83+Math.sin(clock*.028+i)*15,x+58,112+Math.cos(clock*.025+i)*18,x+8,174+Math.sin(clock*.025+i*2)*16);ctx.stroke();}ctx.restore();
 // Pearl body with segmented abdomen and luminous markings.
 let body=ctx.createRadialGradient(-24,-53,3,0,0,92);body.addColorStop(0,'#fffef8');body.addColorStop(.18,phase===2?'#ffe4f6':'#f4eaff');body.addColorStop(.43,phase===2?'#dc8fcb':'#b6a1ea');body.addColorStop(.75,'#555c9b');body.addColorStop(1,'#121f45');ctx.fillStyle=body;ctx.shadowColor=open?'#fff0bf':phase===2?'#ff8bd1':'#b89cff';ctx.shadowBlur=open?66:43;ctx.beginPath();ctx.ellipse(0,8,43,82,.02,0,TAU);ctx.fill();ctx.shadowBlur=0;
 for(let i=0;i<5;i++){ctx.globalAlpha=.48;ctx.strokeStyle=i%2?'#e7cfff':'#8be6e6';ctx.lineWidth=1.5;ctx.beginPath();ctx.ellipse(0,15+i*13,31-i*3,5,0,0,TAU);ctx.stroke();}ctx.globalAlpha=1;
 let head=ctx.createRadialGradient(-10,-52,2,0,-34,37);head.addColorStop(0,'#fff');head.addColorStop(.42,'#f4eaff');head.addColorStop(1,phase===2?'#9b5794':'#635aab');ctx.fillStyle=head;ctx.beginPath();ctx.ellipse(0,-43,31,33,0,0,TAU);ctx.fill();
 // Triple crescent crown and antennae.
 ctx.strokeStyle=phase===2?'#ffd1ef':'#ffe8b5';ctx.lineWidth=5;ctx.shadowColor=ctx.strokeStyle;ctx.shadowBlur=12;ctx.beginPath();ctx.arc(0,-72,36,Math.PI*1.07,Math.PI*1.93);ctx.stroke();ctx.beginPath();ctx.arc(0,-76,48,Math.PI*1.2,Math.PI*1.8);ctx.stroke();for(const side of [-1,1]){ctx.beginPath();ctx.moveTo(side*14,-70);ctx.quadraticCurveTo(side*38,-111,side*26,-136);ctx.stroke();glow(side*26,-136,5,'#fff1ce',1);}
 glow(-10,-45,4.5,'#fff7df',1);glow(10,-45,4.5,'#fff7df',1);
 // Heart-shaped astral core, pulsing when vulnerable.
 const cr=26+Math.sin(clock*.11)*(open?5:2);let core=ctx.createRadialGradient(-5,-7,1,0,8,cr);core.addColorStop(0,'#fff');core.addColorStop(.26,open?'#fff5bd':phase===2?'#ffc7ed':'#e0d0ff');core.addColorStop(.68,open?'#ffb87a':phase===2?'#cb65bf':'#8c75d0');core.addColorStop(1,'#292354');ctx.fillStyle=core;ctx.shadowColor=open?'#ffe1a0':phase===2?'#ff7dcd':'#bba1ff';ctx.shadowBlur=open?70:34;ctx.beginPath();ctx.arc(0,8,cr,0,TAU);ctx.fill();
 // Four rotating prism shields. They fall away visually when the core opens.
 for(let i=0;i<4;i++){let a=clock*.012+i*TAU/4,rr=open?126:91,sx=Math.cos(a)*rr,sy=Math.sin(a)*rr*.58;ctx.save();ctx.translate(sx,sy);ctx.rotate(a+Math.PI/2);ctx.globalAlpha=open?.38:.94;let sg=ctx.createLinearGradient(-14,-22,15,22);sg.addColorStop(0,'#fff');sg.addColorStop(.44,phase===2?'#ffb8e6':'#d8caff');sg.addColorStop(1,'#394978');poly([[0,-26],[17,-6],[10,20],[0,26],[-10,20],[-17,-6]],sg,'#fff0e7',2);ctx.strokeStyle='#ffffffb9';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(0,-18);ctx.lineTo(0,18);ctx.stroke();glow(0,0,4,phase===2?'#ffd7f1':'#e1f7ff',1);ctx.restore();}
 // Shield cage.
 if(!open){ctx.strokeStyle=phase===2?'#ff9ed6':'#bca9ff';ctx.globalAlpha=.78;ctx.lineWidth=4;ctx.setLineDash([11,8]);ctx.lineDashOffset=-clock*.8;ctx.shadowColor=ctx.strokeStyle;ctx.shadowBlur=14;ctx.beginPath();ctx.ellipse(0,8,121,91,0,0,TAU);ctx.stroke();ctx.setLineDash([]);}
 else{ctx.strokeStyle='#fff1bd';ctx.lineWidth=4;ctx.shadowColor='#ffe2a0';ctx.shadowBlur=45;ctx.beginPath();ctx.arc(0,8,53+Math.sin(clock*.18)*9,0,TAU);ctx.stroke();}
 if(e.flash>0){ctx.globalAlpha=e.flash*.5;ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(0,0,185,166,0,0,TAU);ctx.fill();}
 ctx.restore();
 // Refined boss title and health crest, aligned high above the body.
 const bw=390,by=112;ctx.save();ctx.globalAlpha=.92;round(e.x-bw/2,by,bw,22,10,'#080f28d9','#d9c8ff88',1.2);round(e.x-bw/2+3,by+3,(bw-6)*Math.max(0,e.hp/e.max),16,7,phase===2?'#e87fc8':'#9c8be8');round(e.x-bw/2+3,by+3,(bw-6)*Math.max(0,e.hp/e.max),5,4,'#fff4ff66');ctx.restore();
 ctx.save();ctx.textAlign='center';ctx.font='950 14px system-ui';ctx.fillStyle='#fff4e3';ctx.shadowColor='#160f35';ctx.shadowBlur=13;ctx.fillText(phase===2?'月蚀蝶后 · 真身降临':'月蚀蝶后',e.x,by-10);ctx.font='800 10px system-ui';ctx.fillStyle=open?'#ffe1a1':'#d7cafa';ctx.fillText(open?'✦ 核心暴露 · 以元素碰撞击破 ✦':'四重星界护盾 · 组合弹珠触发共鸣',e.x,by+39);ctx.restore();
}
function drawEnemy(e){
 if(!e.alive)return;if(e.boss){drawCelestialBoss(e);return;}let bob=Math.sin(clock*.045+e.phase)*5,hit=e.flash;
 ctx.save();ctx.translate(e.x,e.y+bob+(e.knock||0));ctx.scale(1+hit*.1,1-hit*.08);
 // Floating halo and orbiting rune shards
 ctx.save();ctx.rotate(clock*.009+e.phase);ctx.strokeStyle=e.kind==='deer'?'#f7d79b':e.kind==='moth'?'#b9d7ff':'#c4a0ff';ctx.lineWidth=2;ctx.globalAlpha=.72;ctx.shadowColor=ctx.strokeStyle;ctx.shadowBlur=9;ctx.beginPath();ctx.ellipse(0,-e.r*.28,e.r*1.24,e.r*.32,-.18,0,TAU);ctx.stroke();for(let i=0;i<5;i++){let a=i*TAU/5;glow(Math.cos(a)*e.r*1.22,-e.r*.28+Math.sin(a)*e.r*.32,2.8,'#fff0cc',.9);}ctx.restore();
 if(e.kind==='deer'){
  // elegant moon stag spirit: flowing mane, crystal body and crescent antlers
  ctx.save();ctx.shadowColor='#79f0df';ctx.shadowBlur=hit?42:24;
  let body=ctx.createRadialGradient(-15,-18,3,0,0,60);body.addColorStop(0,'#effff4');body.addColorStop(.22,'#92f0d7');body.addColorStop(.62,'#397d91');body.addColorStop(1,'#172e59');
  ctx.fillStyle=body;ctx.beginPath();ctx.ellipse(-2,8,37,29,-.16,0,TAU);ctx.fill();
  // neck and head
  ctx.fillStyle='#5cc8c3';ctx.beginPath();ctx.moveTo(8,5);ctx.quadraticCurveTo(30,-18,20,-42);ctx.quadraticCurveTo(47,-49,48,-19);ctx.quadraticCurveTo(44,4,25,17);ctx.closePath();ctx.fill();
  let face=ctx.createRadialGradient(36,-41,2,38,-27,24);face.addColorStop(0,'#f9ffff');face.addColorStop(.45,'#bcefff');face.addColorStop(1,'#4d719a');ctx.fillStyle=face;ctx.beginPath();ctx.ellipse(37,-29,21,25,.18,0,TAU);ctx.fill();
  ctx.fillStyle='#f8deaa';for(let x of [30,44]){ctx.beginPath();ctx.ellipse(x,-31,3.5,5.5,0,0,TAU);ctx.fill();}ctx.fillStyle='#25395a';ctx.beginPath();ctx.arc(37,-18,3,0,TAU);ctx.fill();
  // branching crystal antlers
  ctx.strokeStyle='#f5dda6';ctx.lineWidth=5;ctx.lineCap='round';ctx.shadowColor='#f3d99d';ctx.shadowBlur=10;for(let s of [-1,1]){ctx.beginPath();ctx.moveTo(32+s*7,-48);ctx.bezierCurveTo(22+s*18,-67,21+s*24,-85,31+s*29,-91);ctx.moveTo(23+s*13,-67);ctx.lineTo(7+s*28,-79);ctx.moveTo(26+s*18,-77);ctx.lineTo(18+s*30,-96);ctx.stroke();glow(31+s*29,-91,4,'#fff0bd');}
  // ribbon tail and legs
  ctx.strokeStyle='#72ded4';ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(-30,10);ctx.quadraticCurveTo(-56,24,-48,48);ctx.quadraticCurveTo(-33,41,-26,29);ctx.stroke();ctx.strokeStyle='#a8f1df';ctx.lineWidth=4;for(let i=0;i<4;i++){let x=-22+i*16;ctx.beginPath();ctx.moveTo(x,24);ctx.lineTo(x-3+(i%2)*5,43);ctx.stroke();}
  ctx.restore();
 }
 if(e.kind==='moth'){
  // lunar moth oracle with layered translucent wings and prism markings
  ctx.save();ctx.shadowColor='#bba6ff';ctx.shadowBlur=hit?40:26;
  for(let side of [-1,1]){
   ctx.save();ctx.scale(side,1);let wg=ctx.createLinearGradient(5,-22,63,34);wg.addColorStop(0,'#fff7ff');wg.addColorStop(.3,'#c6beff');wg.addColorStop(.72,'#729bd8');wg.addColorStop(1,'#324a86');ctx.fillStyle=wg;ctx.beginPath();ctx.moveTo(5,-12);ctx.bezierCurveTo(24,-65,78,-76,72,-25);ctx.bezierCurveTo(69,7,39,15,14,18);ctx.bezierCurveTo(54,42,51,67,21,57);ctx.bezierCurveTo(1,45,-3,22,5,-12);ctx.fill();ctx.strokeStyle='#e6dcff';ctx.lineWidth=2.2;ctx.stroke();ctx.strokeStyle='#8ee4f5';ctx.lineWidth=1.4;for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(12,3+i*9);ctx.quadraticCurveTo(39,-18+i*8,64,-34+i*12);ctx.stroke();}ctx.fillStyle='#fff2c7';ctx.beginPath();ctx.ellipse(43,-28,7,12,-.5,0,TAU);ctx.fill();ctx.restore();
  }
  let g=ctx.createRadialGradient(-5,-19,2,0,0,29);g.addColorStop(0,'#fff');g.addColorStop(.35,'#f4e5ff');g.addColorStop(.75,'#9a80df');g.addColorStop(1,'#463774');ctx.fillStyle=g;ctx.beginPath();ctx.ellipse(0,3,16,32,0,0,TAU);ctx.fill();ctx.fillStyle='#fff6d8';ctx.beginPath();ctx.arc(-5,-4,3,0,TAU);ctx.arc(5,-4,3,0,TAU);ctx.fill();
  ctx.strokeStyle='#f2ddad';ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(-5,-23);ctx.quadraticCurveTo(-23,-48,-17,-60);ctx.moveTo(5,-23);ctx.quadraticCurveTo(23,-48,17,-60);ctx.stroke();glow(0,-59,4,'#fff0c5');ctx.restore();
 }
 if(e.kind==='wyrm'){
  // elegant astral serpent, segmented crystal body and crescent horns
  ctx.save();ctx.shadowColor='#b88cff';ctx.shadowBlur=hit?40:25;
  ctx.beginPath();ctx.moveTo(-52,21);ctx.bezierCurveTo(-76,-34,-24,-65,15,-40);ctx.bezierCurveTo(62,-9,56,40,14,47);ctx.bezierCurveTo(-22,53,-36,22,-9,2);ctx.bezierCurveTo(12,-15,42,-6,38,15);
  let grad=ctx.createLinearGradient(-60,-55,60,55);grad.addColorStop(0,'#e9d8ff');grad.addColorStop(.35,'#9b75db');grad.addColorStop(.7,'#4d579b');grad.addColorStop(1,'#1a2d5b');ctx.strokeStyle=grad;ctx.lineWidth=24;ctx.lineCap='round';ctx.lineJoin='round';ctx.stroke();ctx.strokeStyle='#e3d2ff';ctx.globalAlpha=.7;ctx.lineWidth=3;ctx.stroke();ctx.globalAlpha=1;
  // luminous scales
  for(let i=0;i<8;i++){let a=i*TAU/8+clock*.005;glow(Math.cos(a)*42,Math.sin(a)*32,3.4,i%2?'#b5eaff':'#f5d6ff',.9);}
  // head and crest
  let head=ctx.createRadialGradient(40,-24,2,43,-12,27);head.addColorStop(0,'#fff');head.addColorStop(.38,'#d7c2ff');head.addColorStop(1,'#544485');ctx.fillStyle=head;ctx.beginPath();ctx.ellipse(42,-15,25,20,-.3,0,TAU);ctx.fill();ctx.fillStyle='#fff0cb';ctx.beginPath();ctx.arc(51,-20,4,0,TAU);ctx.fill();ctx.strokeStyle='#f4d89e';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(34,-29);ctx.quadraticCurveTo(20,-57,34,-66);ctx.moveTo(48,-30);ctx.quadraticCurveTo(61,-53,56,-68);ctx.stroke();ctx.restore();
 }
 // elemental/status rings, hit flare and health
 if(e.freeze>0){ctx.strokeStyle='#c6f6ff';ctx.lineWidth=3;ctx.shadowColor='#9cecff';ctx.shadowBlur=12;ctx.beginPath();ctx.arc(0,0,e.r+17,-.5,5.4);ctx.stroke();for(let i=0;i<6;i++){let a=i*TAU/6+clock*.01;poly([[Math.cos(a)*(e.r+11),Math.sin(a)*(e.r+11)],[Math.cos(a+.17)*(e.r+25),Math.sin(a+.17)*(e.r+25)],[Math.cos(a-.17)*(e.r+25),Math.sin(a-.17)*(e.r+25)]],'#dffcff','#fff',1);}}
 if(e.burn>0){for(let i=0;i<5;i++){let a=i*TAU/5+clock*.08;glow(Math.cos(a)*(e.r*.7),Math.sin(a)*(e.r*.7),4+Math.sin(clock*.2+i)*2,'#ff9e61',.85);}}
 if(hit>0){ctx.globalAlpha=hit*.4;ctx.strokeStyle='#fff';ctx.lineWidth=6;ctx.beginPath();ctx.arc(0,0,e.r+6,0,TAU);ctx.stroke();}
 ctx.restore();
 const bw=e.r*2.4,by=e.y-e.r-38+bob;round(e.x-bw/2,by,bw,8,5,'#080f24cc','#d8cbff88',1);round(e.x-bw/2+1,by+1,(bw-2)*Math.max(0,e.hp/e.max),6,4,e.hp/e.max<.3?'#ff9dba':'#8be6d9');ctx.save();ctx.textAlign='center';ctx.font='900 11px system-ui';ctx.fillStyle='#f4ecff';ctx.shadowColor='#16102d';ctx.shadowBlur=8;ctx.fillText(e.name,e.x,by-9);ctx.restore();
}
function drawCannon(side){
 let a=launchers[side],identity=side==='left'?'#ffad6a':'#82dfff',load=TYPES[selected],col=load.color,sel=(aim ? aim.side : null)===side,recoil=a.recoil||0;
 ctx.save();ctx.translate(a.x,a.y);let idle=Math.sin(clock*.055+(side==='left'?0:1.8));
 // Ground projection and arcane summoning plate.
 ctx.save();ctx.globalAlpha=.32;ctx.fillStyle=identity;ctx.shadowColor=identity;ctx.shadowBlur=40;ctx.beginPath();ctx.ellipse(0,24,90,27,0,0,TAU);ctx.fill();ctx.restore();
 drawRuneDisk(0,25,65,identity,clock*.007*(side==='left'?1:-1),.42);
 let base=ctx.createLinearGradient(0,-7,0,68);base.addColorStop(0,'#f4dfbd');base.addColorStop(.16,'#8892a9');base.addColorStop(.45,'#34435f');base.addColorStop(1,'#101b34');round(-58,8,116,51,15,base,'#e0c99f',3);round(-43,-1,86,18,8,'#bdad9e','#f7e2ba',2);
 for(let k=-1;k<=1;k++){glow(k*35,20,3,'#ffe2a5',.85);}
 // Recoil body pivots in its own direction.
 ctx.save();let angle=a.angle;if(aim&&aim.side===side)angle=Math.atan2(aim.pointer.y-a.y,aim.pointer.x-a.x);ctx.rotate(angle);ctx.translate(-recoil*18,0);
 // Ornate lower cradle.
 let cg=ctx.createLinearGradient(0,-34,0,35);cg.addColorStop(0,'#e9d4aa');cg.addColorStop(.18,side==='left'?'#a86151':'#397e9e');cg.addColorStop(.48,'#3b486a');cg.addColorStop(1,'#101a31');round(-27,-31,102,63,19,cg,'#f1dbb1',3);round(-17,-24,84,49,14,'#1d2c4b','#6d83a8',2);
 // Barrel with layered metal rings.
 let tube=ctx.createLinearGradient(0,-18,0,18);tube.addColorStop(0,'#fff1cf');tube.addColorStop(.13,side==='left'?'#e38c68':'#77d7e6');tube.addColorStop(.36,'#586b89');tube.addColorStop(.7,'#25344f');tube.addColorStop(1,'#0c1429');round(35,-21,77,42,16,tube,'#f2d4a5',3);round(42,-14,62,28,11,'#101a32','#8da2bd',1.4);
 for(let x of [43,96]){let rg=ctx.createLinearGradient(0,-22,0,22);rg.addColorStop(0,'#fff4d9');rg.addColorStop(.25,identity);rg.addColorStop(.55,'#5c6385');rg.addColorStop(1,'#1a2945');round(x,-24,10,48,5,rg,'#f8dfad',1.7);}
 // Inner barrel energy coil.
 ctx.save();ctx.globalAlpha=.68;ctx.strokeStyle=identity;ctx.shadowColor=identity;ctx.shadowBlur=17;ctx.lineWidth=2.4;for(let i=0;i<4;i++){ctx.beginPath();ctx.ellipse(53+i*12,0,5,15,0,0,TAU);ctx.stroke();}ctx.restore();
 // Loaded marble and muzzle aperture.
 let core=ctx.createRadialGradient(92,-7,1,98,0,19);core.addColorStop(0,'#fff');core.addColorStop(.25,load.light);core.addColorStop(.68,load.color);core.addColorStop(1,load.dark);ctx.fillStyle=core;ctx.shadowColor=load.glow;ctx.shadowBlur=sel?42:22;ctx.beginPath();ctx.arc(98,0,14+Math.sin(clock*.09)*1.1,0,TAU);ctx.fill();ctx.shadowBlur=0;
 ctx.strokeStyle='#fff0c4';ctx.lineWidth=3;ctx.beginPath();ctx.ellipse(112,0,7,21,0,0,TAU);ctx.stroke();ctx.strokeStyle=identity;ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(115,0,11,26,0,0,TAU);ctx.stroke();
 // Muzzle flare, rune marks and identity crest.
 ctx.save();ctx.translate(116,0);ctx.rotate(clock*.025*(side==='left'?1:-1));ctx.strokeStyle=identity;ctx.shadowColor=identity;ctx.shadowBlur=9;ctx.lineWidth=2;ctx.beginPath();ctx.arc(0,0,22,-1.2,1.2);ctx.stroke();ctx.beginPath();ctx.arc(0,0,29,Math.PI-.9,Math.PI+.9);ctx.stroke();for(let i=0;i<5;i++){let q=i*TAU/5;poly([[Math.cos(q)*31,Math.sin(q)*31],[Math.cos(q+.1)*38,Math.sin(q+.1)*38],[Math.cos(q-.1)*38,Math.sin(q-.1)*38]],identity+'aa','#fff2d4',.8);}ctx.restore();
 // Recoil energy vapor.
 if(recoil>.03){ctx.globalAlpha=recoil*.55;ctx.strokeStyle=identity;ctx.lineWidth=4;ctx.shadowColor=identity;ctx.shadowBlur=24;ctx.beginPath();ctx.moveTo(-22,-18);ctx.quadraticCurveTo(-52,-33-recoil*12,-66,-8);ctx.moveTo(-22,18);ctx.quadraticCurveTo(-52,33+recoil*12,-66,8);ctx.stroke();}
 ctx.restore();
 // Floating side label and charge meter.
 ctx.save();ctx.globalAlpha=.85;ctx.textAlign='center';ctx.font='900 11px system-ui';ctx.fillStyle=identity;ctx.shadowColor='#060c1d';ctx.shadowBlur=8;ctx.fillText(side==='left'?'A · SOLAR CANNON':'B · ASTRAL CANNON',0,88);ctx.restore();
 ctx.restore();
}
function drawAim(){if(!aim)return;const a=launchers[aim.side],t=TYPES[selected],dx=aim.pointer.x-a.x,dy=aim.pointer.y-a.y,len=Math.hypot(dx,dy);if(len<20)return;const ux=dx/len,uy=dy/len,speed=t.speed*(.62+Math.min(1,len/480)*.5);let x=a.x+ux*88,y=a.y+uy*88,vx=ux*speed,vy=uy*speed;ctx.save();ctx.strokeStyle=t.color;ctx.lineWidth=3;ctx.globalAlpha=.42;ctx.beginPath();ctx.moveTo(a.x+ux*55,a.y+uy*55);ctx.lineTo(aim.pointer.x,aim.pointer.y);ctx.stroke();ctx.globalAlpha=.95;for(let i=0;i<42;i++){x+=vx*.75;y+=vy*.75;vy+=t.gravity*.75;if(x<20||x>W-20)vx*=-.8;if(y<60)vy=Math.abs(vy)*.7;if(y>GROUND-t.r){y=GROUND-t.r;vy=-Math.abs(vy)*t.restitution;vx*=.98;}if(i%2===0){ctx.globalAlpha=.9-i/50;ctx.fillStyle=t.color;ctx.shadowColor=t.glow;ctx.shadowBlur=10;ctx.beginPath();ctx.arc(x,y,Math.max(2.2,5-i*.06),0,TAU);ctx.fill();}}ctx.globalAlpha=1;ctx.strokeStyle=t.light;ctx.lineWidth=2;ctx.beginPath();ctx.arc(aim.pointer.x,aim.pointer.y,12+Math.sin(clock*.15)*2,0,TAU);ctx.stroke();ctx.fillStyle='#fff';ctx.font='900 12px system-ui';ctx.fillText(Math.round(Math.min(100,len/480*100))+'%',aim.pointer.x+17,aim.pointer.y-13);ctx.restore();}
function drawBall(b){
 const baseType=b.type==='splitChild'?'split':b.type,t=TYPES[baseType],r=b.r;
 // Energy tail: layered streaks taper toward the previous path.
 if(b.trail&&b.trail.length>1){ctx.save();ctx.lineCap='round';for(let i=1;i<b.trail.length;i++){let p=b.trail[i],q=b.trail[i-1],a=(i/b.trail.length)*.42;ctx.globalAlpha=a;ctx.strokeStyle=p.color;ctx.shadowColor=p.color;ctx.shadowBlur=12;ctx.lineWidth=Math.max(1,p.size*(i/b.trail.length)*1.35);ctx.beginPath();ctx.moveTo(q.x,q.y);ctx.lineTo(p.x,p.y);ctx.stroke();}ctx.restore();}
 ctx.save();ctx.translate(b.x,b.y);ctx.rotate(b.spin||0);
 // Outer energy corona and orbiting shards.
 let pulse=1+Math.sin(clock*.12+((b.id ? b.id.length : 0)||0))*.055;ctx.save();ctx.globalAlpha=b.frozen?.38:.2;ctx.fillStyle=t.glow;ctx.shadowColor=t.glow;ctx.shadowBlur=14;ctx.beginPath();ctx.arc(0,0,r*1.24*pulse,0,TAU);ctx.fill();ctx.restore();
 // Each orb has a distinct silhouette and inner material.
 if(baseType==='fire'){
  for(let i=0;i<7;i++){let a=i*TAU/7+clock*.018;ctx.save();ctx.rotate(a);let fg=ctx.createLinearGradient(0,-r*.5,0,-r*1.55);fg.addColorStop(0,'#fff6b9');fg.addColorStop(.42,i%2?'#ffb24b':'#ff7449');fg.addColorStop(1,'#8f294b00');ctx.fillStyle=fg;ctx.shadowColor='#ff743d';ctx.shadowBlur=10;ctx.beginPath();ctx.moveTo(-r*.23,-r*.42);ctx.quadraticCurveTo(-r*.85,-r*1.1,-r*.06,-r*1.74);ctx.quadraticCurveTo(r*.8,-r*1.08,r*.28,-r*.36);ctx.closePath();ctx.fill();ctx.restore();}
  let g=ctx.createRadialGradient(-r*.32,-r*.4,1,0,0,r);g.addColorStop(0,'#fffbe2');g.addColorStop(.2,'#ffe9aa');g.addColorStop(.52,'#ff8c3f');g.addColorStop(.82,'#bd3b45');g.addColorStop(1,'#441b3a');ctx.fillStyle=g;ctx.shadowColor='#ff633b';ctx.shadowBlur=14;ctx.beginPath();ctx.arc(0,0,r*.78,0,TAU);ctx.fill();
  ctx.shadowBlur=0;ctx.strokeStyle='#fff0ba';ctx.lineWidth=1.7;ctx.beginPath();ctx.arc(0,0,r*.64,-1.2,1.15);ctx.stroke();
 }else if(baseType==='ice'){
  ctx.shadowColor='#88eaff';ctx.shadowBlur=14;let g=ctx.createRadialGradient(-r*.33,-r*.42,1,0,0,r*1.15);g.addColorStop(0,'#fff');g.addColorStop(.26,'#e7ffff');g.addColorStop(.62,'#74e6ff');g.addColorStop(1,'#24539c');ctx.fillStyle=g;poly([[0,-r*1.06],[r*.46,-r*.52],[r*.96,-r*.12],[r*.66,r*.72],[0,r],[ -r*.7,r*.55],[-r*.94,-r*.17],[-r*.42,-r*.7]],g,'#f1ffff',2.2);ctx.shadowBlur=0;poly([[0,-r*.82],[r*.25,-r*.22],[0,r*.55],[-r*.22,-r*.2]],'#ffffff88');ctx.strokeStyle='#fff';ctx.lineWidth=1.7;for(let i=0;i<6;i++){let a=i*TAU/6;ctx.beginPath();ctx.moveTo(Math.cos(a)*r*.12,Math.sin(a)*r*.12);ctx.lineTo(Math.cos(a)*r*.75,Math.sin(a)*r*.75);ctx.stroke();}for(let i=0;i<3;i++){ctx.save();ctx.rotate(i*TAU/3+clock*.014);ctx.strokeStyle='#d9ffff';ctx.lineWidth=1.6;ctx.beginPath();ctx.moveTo(0,-r*.4);ctx.lineTo(0,-r*.78);ctx.moveTo(0,-r*.67);ctx.lineTo(-r*.12,-r*.55);ctx.moveTo(0,-r*.67);ctx.lineTo(r*.12,-r*.55);ctx.stroke();ctx.restore();}
 }else if(baseType==='heavy'){
  let g=ctx.createRadialGradient(-r*.38,-r*.45,2,0,0,r*1.25);g.addColorStop(0,'#fff7cf');g.addColorStop(.2,'#efc778');g.addColorStop(.5,'#a97843');g.addColorStop(.8,'#4a3a4b');g.addColorStop(1,'#171d37');ctx.fillStyle=g;ctx.shadowColor='#ffd080';ctx.shadowBlur=11;ctx.beginPath();ctx.arc(0,0,r,0,TAU);ctx.fill();ctx.shadowBlur=0;for(let j=0;j<3;j++){ctx.strokeStyle=j===1?'#fff0bb':'#815b3f';ctx.lineWidth=j===1?4:2.5;ctx.beginPath();ctx.ellipse(0,0,r*(.48+j*.19),r*(.25+j*.09),.65+j*.4,0,TAU);ctx.stroke();}for(let i=0;i<8;i++){let a=i*TAU/8+clock*.008;glow(Math.cos(a)*r*.77,Math.sin(a)*r*.77,2.3,'#fff0c1',.85);}
 }else if(baseType==='lightning'){
  let g=ctx.createRadialGradient(-r*.36,-r*.4,1,0,0,r*1.2);g.addColorStop(0,'#fff');g.addColorStop(.32,'#f0e6ff');g.addColorStop(.68,'#ae8bff');g.addColorStop(1,'#342067');ctx.fillStyle=g;ctx.shadowColor='#c7aaff';ctx.shadowBlur=12;ctx.beginPath();ctx.arc(0,0,r*.83,0,TAU);ctx.fill();ctx.shadowBlur=0;ctx.strokeStyle='#fff';ctx.lineWidth=2.5;for(let i=0;i<4;i++){let a=i*TAU/4+clock*.018;ctx.beginPath();ctx.moveTo(Math.cos(a)*r*.16,Math.sin(a)*r*.16);ctx.lineTo(Math.cos(a+.16)*r*.43,Math.sin(a+.16)*r*.43);ctx.lineTo(Math.cos(a-.15)*r*.62,Math.sin(a-.15)*r*.62);ctx.lineTo(Math.cos(a+.1)*r*.95,Math.sin(a+.1)*r*.95);ctx.stroke();}for(let i=0;i<3;i++){let a=clock*.025+i*TAU/3;glow(Math.cos(a)*r*1.17,Math.sin(a)*r*1.17,2.5,'#f7ecff',.9);}
 }else if(baseType==='split'){
  let g=ctx.createRadialGradient(-r*.35,-r*.45,1,0,0,r);g.addColorStop(0,'#fff');g.addColorStop(.35,'#c9ffe0');g.addColorStop(.72,'#4ecb91');g.addColorStop(1,'#1a564a');ctx.fillStyle=g;ctx.shadowColor='#84ffc0';ctx.shadowBlur=12;ctx.beginPath();ctx.arc(0,0,r*.82,0,TAU);ctx.fill();for(let i=0;i<3;i++){let a=i*TAU/3+clock*.027;ctx.save();ctx.translate(Math.cos(a)*r*.63,Math.sin(a)*r*.63);ctx.rotate(a);ctx.fillStyle='#f1fff4';ctx.shadowColor='#a8ffd0';ctx.shadowBlur=9;poly([[0,-r*.25],[r*.13,0],[0,r*.25],[-r*.13,0]],'#eafff4','#7effb5',1);ctx.restore();}ctx.strokeStyle='#eafff3';ctx.lineWidth=1.4;ctx.beginPath();ctx.arc(0,0,r*.55,.3,5.8);ctx.stroke();
 }else if(baseType==='void'){
  ctx.shadowColor='#b78aff';ctx.shadowBlur=15;let g=ctx.createRadialGradient(-r*.18,-r*.2,1,0,0,r);g.addColorStop(0,'#ecd7ff');g.addColorStop(.18,'#9f6bd9');g.addColorStop(.55,'#352058');g.addColorStop(.86,'#100d2b');g.addColorStop(1,'#050915');ctx.fillStyle=g;ctx.beginPath();ctx.arc(0,0,r*.82,0,TAU);ctx.fill();ctx.shadowBlur=0;for(let i=0;i<3;i++){ctx.save();ctx.rotate(clock*.023*(i%2?1:-1)+i*1.9);ctx.strokeStyle=i%2?'#e4c9ff':'#9b78ff';ctx.lineWidth=2.5;ctx.globalAlpha=.86;ctx.beginPath();ctx.ellipse(0,0,r*(.72+i*.14),r*(.31+i*.08),.4,0,TAU);ctx.stroke();ctx.restore();}glow(0,0,r*.19,'#090b1b',1);glow(-r*.12,-r*.16,3.5,'#fff',1);
 }
 // Shared glass caustics and specular shell.
 ctx.save();ctx.globalAlpha=.52;let shell=ctx.createRadialGradient(-r*.42,-r*.52,1,-r*.1,-r*.1,r*1.2);shell.addColorStop(0,'#ffffffa8');shell.addColorStop(.24,'#ffffff24');shell.addColorStop(.58,'#ffffff04');shell.addColorStop(1,'#07122866');ctx.fillStyle=shell;ctx.beginPath();ctx.arc(0,0,r*.82,0,TAU);ctx.fill();ctx.restore();
 ctx.strokeStyle='#ffffffbd';ctx.lineWidth=1.3;ctx.beginPath();ctx.arc(0,0,r*.81,.1,TAU-.1);ctx.stroke();ctx.fillStyle='#fff';ctx.globalAlpha=.86;ctx.beginPath();ctx.ellipse(-r*.27,-r*.39,r*.2,r*.095,-.58,0,TAU);ctx.fill();ctx.globalAlpha=1;
 ctx.restore();
 // Frozen-in-time state gets a complete temporal sigil and hovering rune fragments.
 if(b.frozen){ctx.save();let pulse=1+Math.sin(clock*.15)*.07;ctx.translate(b.x,b.y);ctx.scale(pulse,pulse);ctx.strokeStyle='#f5eaff';ctx.lineWidth=3;ctx.shadowColor='#c6a4ff';ctx.shadowBlur=32;ctx.beginPath();ctx.arc(0,0,b.r+13,0,TAU);ctx.stroke();ctx.rotate(-clock*.025);ctx.strokeStyle='#9feaff';ctx.lineWidth=2;ctx.setLineDash([4,8]);ctx.lineDashOffset=clock*1.8;ctx.beginPath();ctx.arc(0,0,b.r+25,0,TAU);ctx.stroke();ctx.setLineDash([]);for(let i=0;i<8;i++){let a=i*TAU/8;ctx.save();ctx.rotate(a);poly([[0,-b.r-34],[6,-b.r-21],[0,-b.r-13],[-6,-b.r-21]],'#f2e8ff','#bca6ff',1.2);ctx.restore();}for(let i=0;i<3;i++){let a=clock*.03+i*TAU/3;glow(Math.cos(a)*(b.r+39),Math.sin(a)*(b.r+39),3.2,'#e6d7ff',.9);}ctx.restore();}
}
function burstEmber(x,y,color){
  // Tiny deterministic embers are drawn inline; no persistent particle is created per frame.
  ctx.save();ctx.globalAlpha=.45+.4*Math.sin(clock*.2+x*.03);ctx.fillStyle=color;ctx.shadowColor=color;ctx.shadowBlur=9;ctx.beginPath();ctx.arc(x,y,1.8+Math.sin(clock*.16+y*.02),0,TAU);ctx.fill();ctx.restore();
}
function drawStarline(){
 const anchors=frozenAnchors();if(anchors.length<2)return;const A=anchors[0],B=anchors[1],meta=(activePair&&activePair.meta)||PAIR_META[pairKey(A,B)]||{title:'星界共鸣',mode:'ribbon',color:'#e7d5ff'};
 const dx=B.x-A.x,dy=B.y-A.y,len=Math.hypot(dx,dy)||1,px=-dy/len,py=dx/len,pulse=.62+.27*Math.sin(clock*.13);
 ctx.save();ctx.lineCap='round';ctx.lineJoin='round';
 // Wide magical aura
 let grad=ctx.createLinearGradient(A.x,A.y,B.x,B.y);grad.addColorStop(0,TYPES[A.type==='splitChild'?'split':A.type].glow);grad.addColorStop(.5,meta.color);grad.addColorStop(1,TYPES[B.type==='splitChild'?'split':B.type].glow);
 ctx.globalAlpha=.15+pulse*.2;ctx.strokeStyle=grad;ctx.lineWidth=28;ctx.shadowColor=meta.color;ctx.shadowBlur=35;ctx.beginPath();ctx.moveTo(A.x,A.y);ctx.lineTo(B.x,B.y);ctx.stroke();
 ctx.globalAlpha=.9;ctx.shadowBlur=10;ctx.strokeStyle=grad;ctx.lineWidth=5;
 const mode=meta.mode;
 if(mode==='flame'){
  for(let k=-1;k<=1;k++){ctx.beginPath();for(let i=0;i<=30;i++){let t=i/30,w=Math.sin(t*17-clock*.12+k*2.2)*(10+Math.sin(clock*.07+k)*3)+k*7,x=A.x+dx*t+px*w,y=A.y+dy*t+py*w;if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.strokeStyle=k===0?'#fff0b7':(k<0?'#ffb45f':'#ff7048');ctx.globalAlpha=.76-Math.abs(k)*.16;ctx.lineWidth=k===0?4:7;ctx.shadowColor='#ff8a42';ctx.shadowBlur=24;ctx.stroke();}
  for(let i=0;i<12;i++){let t=(clock*.012+i/12)%1,x=A.x+dx*t,y=A.y+dy*t;burstEmber(x+px*Math.sin(clock*.1+i)*7,y+py*Math.sin(clock*.1+i)*7,meta.color);}
 }else if(mode==='shock'){
  ctx.strokeStyle='#ffe4a8';ctx.lineWidth=9+Math.sin(clock*.2)*3;ctx.globalAlpha=.72;ctx.shadowColor='#ffc66f';ctx.shadowBlur=32;ctx.beginPath();ctx.moveTo(A.x,A.y);ctx.lineTo(B.x,B.y);ctx.stroke();
  for(let i=1;i<7;i++){let t=i/7,x=A.x+dx*t,y=A.y+dy*t,r=8+((clock*1.4+i*9)%16);ctx.globalAlpha=.3;ctx.strokeStyle='#fff0bd';ctx.lineWidth=2;ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.stroke();}
 }else if(['lightning','plasma'].includes(mode)){
  ctx.beginPath();ctx.moveTo(A.x,A.y);for(let i=1;i<18;i++){let t=i/18,j=Math.sin(clock*.3+i*2.1)*9+(Math.random()-.5)*7;ctx.lineTo(A.x+dx*t+px*j,A.y+dy*t+py*j);}ctx.lineTo(B.x,B.y);ctx.stroke();
  for(let k=0;k<4;k++){let t=(clock*.012+k*.25)%1,x=A.x+dx*t,y=A.y+dy*t;glow(x,y,4+Math.sin(clock*.2+k)*1.4,'#fff');}
 }else if(mode==='steam'){
  for(let k=-2;k<=2;k++){ctx.globalAlpha=.22+(.08*Math.sin(clock*.1+k));ctx.strokeStyle=k%2?'#c6f5ff':'#fff0d4';ctx.lineWidth=5+Math.abs(k);ctx.beginPath();for(let i=0;i<=24;i++){let t=i/24,w=Math.sin(t*len*.035+clock*.08+k)* (8+Math.abs(k)*3);let x=A.x+dx*t+px*(w+k*5),y=A.y+dy*t+py*(w+k*5);if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.stroke();}
  for(let i=0;i<8;i++){let t=(clock*.004+i/8)%1,x=A.x+dx*t,y=A.y+dy*t;ctx.globalAlpha=.38;glow(x+px*Math.sin(clock*.06+i)*12,y+py*Math.sin(clock*.06+i)*12,7+Math.sin(clock*.08+i)*2,'#e9fbff');}
 }else if(['crystal','shards'].includes(mode)){
  ctx.globalAlpha=.72;ctx.strokeStyle=grad;ctx.lineWidth=4;ctx.setLineDash([12,7]);ctx.lineDashOffset=-clock*1.7;ctx.beginPath();ctx.moveTo(A.x,A.y);ctx.lineTo(B.x,B.y);ctx.stroke();ctx.setLineDash([]);
  for(let i=1;i<12;i++){let t=i/12,x=A.x+dx*t,y=A.y+dy*t,size=7+Math.sin(clock*.1+i)*2;ctx.save();ctx.translate(x,y);ctx.rotate(clock*.015+i*.7);poly([[0,-size*1.8],[size*.8,0],[0,size*1.8],[-size*.8,0]],i%2?'#dfffff88':'#d5bfff88','#ffffffaa',1.2);ctx.restore();}
 }else if(['void','portal'].includes(mode)){
  ctx.globalAlpha=.5;ctx.strokeStyle=meta.color;ctx.lineWidth=3;ctx.setLineDash([3,9]);ctx.lineDashOffset=clock*2;ctx.beginPath();ctx.moveTo(A.x,A.y);ctx.lineTo(B.x,B.y);ctx.stroke();ctx.setLineDash([]);
  for(let i=1;i<6;i++){let t=i/6,x=A.x+dx*t,y=A.y+dy*t;ctx.save();ctx.translate(x,y);ctx.rotate(clock*.035+i);ctx.strokeStyle=meta.color;ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(0,0,10+Math.sin(clock*.08+i)*3,19,0,0,TAU);ctx.stroke();ctx.restore();}
 }else if(mode==='aurora'){
  for(let k=-2;k<=2;k++){ctx.beginPath();for(let i=0;i<=30;i++){let t=i/30,w=Math.sin(t*13+clock*.05+k)*12+k*5,x=A.x+dx*t+px*w,y=A.y+dy*t+py*w;if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.strokeStyle=['#9bf2ff','#d6c1ff','#fff0c5','#a3f2e1','#d5b6ff'][(k+2)%5];ctx.globalAlpha=.55;ctx.lineWidth=4;ctx.stroke();}
 }else{
  ctx.globalAlpha=.8;ctx.strokeStyle=grad;ctx.lineWidth=5;ctx.setLineDash([15,9]);ctx.lineDashOffset=-clock*2;ctx.beginPath();ctx.moveTo(A.x,A.y);ctx.lineTo(B.x,B.y);ctx.stroke();ctx.setLineDash([]);
  ctx.globalAlpha=.5;ctx.strokeStyle='#fff';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(A.x,A.y);ctx.lineTo(B.x,B.y);ctx.stroke();
 }
 // Traveling motes make the link feel alive
 for(let i=0;i<5;i++){let t=(clock*.009+i/5)%1,x=A.x+dx*t,y=A.y+dy*t;glow(x,y,3.5+Math.sin(clock*.16+i)*1.4,'#fff8df',.95);}
 // Endpoint halos and floating pair sigils
 [A,B].forEach((b,i)=>{let bt=TYPES[b.type==='splitChild'?'split':b.type];ctx.globalAlpha=.75;ctx.strokeStyle=bt.glow;ctx.lineWidth=3;ctx.shadowColor=bt.glow;ctx.shadowBlur=9;ctx.beginPath();ctx.arc(b.x,b.y,b.r+20+Math.sin(clock*.1+i)*3,0,TAU);ctx.stroke();ctx.save();ctx.translate(b.x,b.y);ctx.rotate(clock*.012*(i?1:-1));ctx.strokeStyle=meta.color;ctx.globalAlpha=.72;ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(0,0,b.r+29,0,TAU);ctx.stroke();ctx.restore();});
 // Nameplate floating at the midpoint
 const mx=(A.x+B.x)/2,my=(A.y+B.y)/2;ctx.globalAlpha=.92;ctx.shadowBlur=14;ctx.font='900 13px system-ui';ctx.textAlign='center';ctx.fillStyle=meta.color;ctx.fillText(meta.title,mx,my-18);
 ctx.restore();
}

function drawEffects(){
 // Combo cinematics: expanding sigils, radial beams and a brief prismatic halo.
 impactBursts.forEach(v=>{let p=1-v.life/v.max,alpha=Math.max(0,v.life/v.max);ctx.save();ctx.translate(v.x,v.y);ctx.rotate(v.rot+p*.18);ctx.globalAlpha=alpha*.7;ctx.strokeStyle=v.color;ctx.shadowColor=v.color;ctx.shadowBlur=36;ctx.lineWidth=3+7*(1-p);ctx.beginPath();ctx.arc(0,0,20+p*v.radius,0,TAU);ctx.stroke();ctx.globalAlpha=alpha*.36;ctx.lineWidth=1.5;for(let i=0;i<16;i++){let a=i*TAU/16;ctx.beginPath();ctx.moveTo(Math.cos(a)*(35+p*12),Math.sin(a)*(35+p*12));ctx.lineTo(Math.cos(a)*(v.radius*(.65+.35*Math.sin(i*1.4))+p*20),Math.sin(a)*(v.radius*(.65+.35*Math.sin(i*1.4))+p*20));ctx.stroke();}ctx.globalAlpha=alpha*.55;ctx.rotate(-v.rot*2);ctx.strokeStyle=v.color;ctx.lineWidth=2;ctx.beginPath();ctx.arc(0,0,36+p*v.radius*.62,.2,Math.PI*1.35);ctx.stroke();ctx.restore();});
 // Active void vortices pull stardust into rotating spiral arms.
 vortices.forEach(v=>{ctx.save();let a=v.life/v.max;ctx.globalAlpha=a*.7;ctx.translate(v.x,v.y);ctx.rotate(clock*.035);for(let i=0;i<4;i++){ctx.strokeStyle=i%2?'#e4caff':'#a47bff';ctx.shadowColor='#b783ff';ctx.shadowBlur=32;ctx.lineWidth=5-i*.7;ctx.beginPath();ctx.ellipse(0,0,v.r*(.2+i*.12),v.r*(.12+i*.08),i*.8,clock*.02+i*1.3,clock*.02+i*1.3+Math.PI*1.65);ctx.stroke();}glow(0,0,11,'#f4e8ff',.8*a);ctx.restore();});
 // Impact rings now have a luminous inner edge.
 rings.forEach(r=>{ctx.save();let a=Math.max(0,r.life/r.maxLife),p=1-a;ctx.globalAlpha=a*.86;ctx.strokeStyle=r.color;ctx.lineWidth=r.width*Math.max(.22,a);ctx.shadowColor=r.color;ctx.shadowBlur=12;ctx.beginPath();ctx.arc(r.x,r.y,Math.max(.1,r.r),0,TAU);ctx.stroke();if(r.max>100){ctx.globalAlpha=a*.24;ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(r.x,r.y,Math.max(.1,r.r*.76),0,TAU);ctx.stroke();}ctx.restore();});
 // Rich particle vocabulary: embers, crystal splinters, smoke, stars and runic motes.
 particles.forEach(p=>{ctx.save();let a=Math.max(0,p.life/p.max);ctx.globalAlpha=a;ctx.translate(p.x,p.y);ctx.rotate(p.rot||0);ctx.fillStyle=p.color;ctx.strokeStyle=p.color;ctx.shadowColor=p.color;ctx.shadowBlur=p.shape==='smoke'?16:20;
  if(p.shape==='shard'||p.shape==='flame'||p.shape==='gem'){ctx.beginPath();ctx.moveTo(0,-p.size*2.2);ctx.lineTo(p.size*.9,-p.size*.1);ctx.lineTo(p.size*.55,p.size*1.45);ctx.lineTo(-p.size*.55,p.size*.85);ctx.closePath();ctx.fill();ctx.strokeStyle='#ffffff8c';ctx.lineWidth=.8;ctx.beginPath();ctx.moveTo(0,-p.size*1.7);ctx.lineTo(p.size*.2,p.size*.8);ctx.stroke();}
  else if(p.shape==='snow'||p.shape==='rune'){ctx.lineWidth=p.shape==='rune'?2:1.5;ctx.beginPath();ctx.moveTo(-p.size,0);ctx.lineTo(p.size,0);ctx.moveTo(0,-p.size);ctx.lineTo(0,p.size);ctx.moveTo(-p.size*.7,-p.size*.7);ctx.lineTo(p.size*.7,p.size*.7);ctx.moveTo(-p.size*.7,p.size*.7);ctx.lineTo(p.size*.7,-p.size*.7);ctx.stroke();}
  else if(p.shape==='smoke'){ctx.globalAlpha=a*.22;ctx.beginPath();ctx.arc(0,0,p.size*(1.2+(1-a)),0,TAU);ctx.fill();}
  else if(p.shape==='star'){ctx.beginPath();for(let i=0;i<10;i++){let rr=i%2?p.size*.35:p.size*1.6,ang=i*Math.PI/5;let x=Math.cos(ang)*rr,y=Math.sin(ang)*rr;if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.closePath();ctx.fill();}
  else{ctx.beginPath();ctx.arc(0,0,Math.max(.1,p.size*(.45+a*.55)),0,TAU);ctx.fill();}
  ctx.restore();});
 // Damage numbers and combo callouts.
 texts.forEach(t=>{ctx.save();let a=Math.min(1,t.life/16);ctx.globalAlpha=a;ctx.textAlign='center';ctx.font=`1000 ${t.size||18}px system-ui`;ctx.lineWidth=6;ctx.strokeStyle='#090d22e8';ctx.strokeText(t.txt,t.x,t.y);ctx.fillStyle=t.color;ctx.shadowColor=t.color;ctx.shadowBlur=11;ctx.fillText(t.txt,t.x,t.y);ctx.restore();});
 // Lightning arcs have a bright core and soft outer bloom.
 arcs.forEach(a=>{ctx.save();ctx.globalAlpha=a.life/a.max;ctx.strokeStyle=a.color;ctx.shadowColor=a.color;ctx.shadowBlur=12;ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(a.x1,a.y1);for(let i=1;i<8;i++){let q=i/8;ctx.lineTo(a.x1+(a.x2-a.x1)*q+(Math.sin(clock*.6+i*7)*.5)*28,a.y1+(a.y2-a.y1)*q+(Math.cos(clock*.7+i*5)*.5)*28);}ctx.lineTo(a.x2,a.y2);ctx.stroke();ctx.strokeStyle='#fff';ctx.shadowBlur=8;ctx.lineWidth=1.8;ctx.stroke();ctx.restore();});
 // The starline stays as a secondary visual only when two anchors exist.
 tetherPulses.forEach(t=>{ctx.save();let a=t.life/t.max;ctx.globalAlpha=a;ctx.strokeStyle=t.color;ctx.shadowColor=t.color;ctx.shadowBlur=32;ctx.lineWidth=6+12*(1-a);ctx.beginPath();ctx.moveTo(t.ax,t.ay);ctx.lineTo(t.x,t.y);ctx.lineTo(t.bx,t.by);ctx.stroke();ctx.restore();});
 tetherPulses=tetherPulses.filter(t=>{t.life-=1;return t.life>0;});
}
function drawAimFront(){if(aim){const a=launchers[aim.side];let x=aim.pointer.x,y=aim.pointer.y;ctx.save();ctx.strokeStyle='#fff';ctx.globalAlpha=.55;ctx.setLineDash([6,7]);ctx.beginPath();ctx.arc(x,y,17,0,TAU);ctx.stroke();ctx.setLineDash([]);ctx.restore();}}
function draw(){ctx.save();if(shake>0)ctx.translate((Math.random()-.5)*shake,(Math.random()-.5)*shake);ctx.clearRect(-30,-30,W+60,H+60);if(backgroundCanvas)ctx.drawImage(backgroundCanvas,0,0,W,H);else drawBg();drawAmbientStars();drawEnvironment();props.forEach(drawProp);enemies.forEach(drawEnemy);gates.forEach((g,i)=>{if(!g.active){ctx.save();ctx.translate(g.x,g.y);ctx.strokeStyle='#c8b0ff';ctx.globalAlpha=.6;ctx.lineWidth=2;ctx.beginPath();ctx.arc(0,0,g.r+9+Math.sin(clock*.1+i)*2,0,TAU);ctx.stroke();ctx.restore();}});balls.forEach(drawBall);drawEffects();drawCannon('left');drawCannon('right');drawAim();drawAimFront();if(flash>0){ctx.save();ctx.globalAlpha=flash;let fg=ctx.createRadialGradient(W*.5,H*.47,80,W*.5,H*.47,760);fg.addColorStop(0,'#fff8e9');fg.addColorStop(.22,'#d8bbff88');fg.addColorStop(1,'#9c7bff00');ctx.fillStyle=fg;ctx.fillRect(0,0,W,H);ctx.restore();}
 if(screenPulse>0){ctx.save();ctx.globalAlpha=screenPulse*.22;let vg=ctx.createRadialGradient(W*.5,H*.5,200,W*.5,H*.5,900);vg.addColorStop(0,'#ffffff00');vg.addColorStop(.74,'#b98aff00');vg.addColorStop(1,'#b98aff');ctx.fillStyle=vg;ctx.fillRect(0,0,W,H);ctx.restore();}if(win){ctx.save();ctx.fillStyle='#080e1c99';ctx.fillRect(0,0,W,H);round(390,260,660,245,30,'#142540ed','#ffe3a0',3);ctx.textAlign='center';ctx.fillStyle='#ffe3a0';ctx.font='1000 18px system-ui';ctx.fillText('THE ECLIPSE TEMPLE',720,317);ctx.fillStyle='#fff';ctx.font='1000 44px system-ui';ctx.fillText('神殿守护者已击败！',720,390);ctx.fillStyle='#b9cbe3';ctx.font='17px system-ui';ctx.fillText('实体碰撞 · 元素融合 · 星界封印解除',720,431);ctx.fillStyle='#ffdc94';ctx.font='bold 16px system-ui';ctx.fillText('点击「重置战场」再次挑战',720,474);ctx.restore();}ctx.restore();}
let ambient=0;function updateFx(step){
 // Combo-only cinematic layer; the core physics updater already advances particles, rings, arcs and camera shake.
 impactBursts.forEach(v=>{v.life-=step;});impactBursts=impactBursts.filter(v=>v.life>0);
 screenPulse=Math.max(0,screenPulse-.018*step);
}

function drawHudOrb(type,x,y,r){
 const t=TYPES[type];ctx.save();
 ctx.shadowColor=t.glow;ctx.shadowBlur=9;ctx.fillStyle=t.dark;ctx.beginPath();ctx.arc(x,y,r+3,0,TAU);ctx.fill();ctx.shadowBlur=0;
 const g=ctx.createRadialGradient(x-r*.35,y-r*.42,1,x,y,r*1.25);g.addColorStop(0,t.light);g.addColorStop(.25,t.glow);g.addColorStop(.72,t.color);g.addColorStop(1,t.dark);ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.fill();
 ctx.strokeStyle='#ffffffc9';ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(x,y,r-.8,.15,TAU-.15);ctx.stroke();
 ctx.globalAlpha=.75;ctx.strokeStyle='#fff';ctx.lineWidth=1.6;ctx.beginPath();ctx.ellipse(x-r*.26,y-r*.36,r*.24,r*.1,-.6,0,TAU);ctx.stroke();
 ctx.restore();
}
function drawWxHud(){
 ctx.save();
 // Top title panel.
 round(24,18,338,58,13,'#071323c9','#d6c4ff55',1.2);
 ctx.textAlign='left';ctx.fillStyle='#fff2d0';ctx.font='1000 20px sans-serif';ctx.fillText('MARBLE QUEST',42,44);
 ctx.fillStyle='#9db8d5';ctx.font='700 10px sans-serif';ctx.fillText('星界神殿  ·  双炮台魔法试炼',43,62);
 // Compact battle status.
 round(390,18,420,58,13,'#071323ad','#ffffff26',1);
 ctx.textAlign='center';ctx.fillStyle='#d8c9ff';ctx.font='900 11px sans-serif';ctx.fillText('MOONLIT SANCTUARY',600,40);
 ctx.fillStyle='#e9f5ff';ctx.font='700 13px sans-serif';ctx.fillText('定身空中弹珠，再用另一颗球主动撞击',600,60);
 // Right controls.
 round(1190,18,226,58,13,'#071323c9','#d6c4ff55',1.2);
 round(1202,27,96,39,9,'#273652','#a6b7d766',1);ctx.fillStyle='#f2eaff';ctx.font='900 12px sans-serif';ctx.textAlign='center';ctx.fillText(soundOn?'♫ 音效':'♫ 静音',1250,52);
 round(1308,27,96,39,9,'#4b385e','#e8c8ff88',1);ctx.fillStyle='#fff1ce';ctx.fillText('↻ 重置',1356,52);
 // Boss health strip.
 const boss=enemies.find(e=>e.boss&&e.alive);
 if(boss){round(510,87,420,13,7,'#07101dcc','#ffffff2c',1);round(512,89,416*Math.max(0,boss.hp/boss.max),9,5,boss.phaseLevel===2?'#ee8cc8':'#9d8ded');ctx.textAlign='center';ctx.fillStyle='#f4eaff';ctx.font='800 10px sans-serif';ctx.fillText('月蚀蝶后 · '+(boss.shieldOpen>0?'核心暴露':'护盾'),720,116);}
 // Bottom loadout tray, drawn in Canvas because Mini Games have no DOM.
 round(20,730,1400,69,15,'#071225e8','#b6c4ec66',1.2);
 ctx.textAlign='left';ctx.fillStyle='#91a8c7';ctx.font='800 9px sans-serif';ctx.fillText('选择弹珠  /  ANY CANNON · ANY ORB',35,744);
 const cardW=220,gap=10,start=32,cardY=750,cardH=42;
 ids.forEach((id,i)=>{
   const x=start+i*(cardW+gap),t=TYPES[id],active=id===selected;
   round(x,cardY,cardW,cardH,10,active?'#263b59':'#111f35',active?t.glow:'#ffffff24',active?2:1);
   if(active){ctx.save();ctx.globalAlpha=.14;ctx.fillStyle=t.color;ctx.shadowColor=t.color;ctx.shadowBlur=10;round(x+2,cardY+2,cardW-4,cardH-4,9,t.color,null);ctx.restore();}
   drawHudOrb(id,x+24,cardY+21,13);
   ctx.textAlign='left';ctx.fillStyle=active?'#fff':'#e5edff';ctx.font='900 12px sans-serif';ctx.fillText(t.name,x+47,cardY+17);
   ctx.fillStyle='#9fb2ce';ctx.font='700 9px sans-serif';ctx.fillText(t.desc.slice(0,14),x+47,cardY+31);
   if(active){ctx.fillStyle=t.light;ctx.font='900 8px sans-serif';ctx.textAlign='right';ctx.fillText('已选',x+cardW-9,cardY+14);}
 });
 // Status / tutorial chip.
 const msg=($('message').textContent||'拖动炮台瞄准发射；点击飞行中的球，让它停在空中。');
 round(395,674,650,38,10,'#071323cc','#ffffff26',1);
 ctx.textAlign='center';ctx.fillStyle='#e8e3ff';ctx.font='700 11px sans-serif';
 let display=msg.length>42?msg.slice(0,42)+'…':msg;ctx.fillText(display,720,698);
 ctx.restore();
}
function miniUiTouch(vx,vy){
 // Bottom six marble selectors.
 if(vy>=748&&vy<=798&&vx>=32&&vx<=1400){const cardW=220,gap=10,start=32;const idx=Math.floor((vx-start)/(cardW+gap));if(idx>=0&&idx<ids.length){selected=ids[idx];syncUI();setMessage(TYPES[selected].name+' 已装填到两座炮台。选择任意炮口发射。');tone(460,.045,'sine',.025);return true;}}
 // Top-right quick controls.
 if(vy>=20&&vy<=70&&vx>=1195&&vx<=1302){soundOn=!soundOn;if(soundOn)tone(620,.06,'sine',.03);return true;}
 if(vy>=20&&vy<=70&&vx>=1305&&vx<=1415){fresh();return true;}
 return false;
}

let lastDrawAt=0;
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
fresh();miniRAF(frame);
})();
