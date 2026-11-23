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
 const boss=enemies.find(e=>e.boss&&e.boss.alive);
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
function vibe(v){try{navigator.vibrate?.(v)}catch(_){}}
function tone(freq,dur=.09,wave='sine',vol=.035){if(!soundOn)return;try{audio=audio||new(window.AudioContext||window.webkitAudioContext)();if(audio.state==='suspended')audio.resume();let o=audio.createOscillator(),g=audio.createGain();o.type=wave;o.frequency.setValueAtTime(freq,audio.currentTime);g.gain.setValueAtTime(vol,audio.currentTime);g.gain.exponentialRampToValueAtTime(.0001,audio.currentTime+dur);o.connect(g);g.connect(audio.destination);o.start();o.stop(audio.currentTime+dur);}catch(_){}}
function noise(dur=.12,vol=.04){if(!soundOn)return;try{audio=audio||new(window.AudioContext||window.webkitAudioContext)();let n=Math.floor(audio.sampleRate*dur),buf=audio.createBuffer(1,n,audio.sampleRate),data=buf.getChannelData(0);for(let i=0;i<n;i++)data[i]=(Math.random()*2-1)*Math.pow(1-i/n,2);let src=audio.createBufferSource(),g=audio.createGain();src.buffer=buf;g.gain.value=vol;src.connect(g);g.connect(audio.destination);src.start();}catch(_){}}
function launcherShot(side,t){let a=launchers[side];a.recoil=1;burst(a.x+Math.cos(a.angle)*80,a.y+Math.sin(a.angle)*80,t.color,20,5,'spark');ring(a.x+Math.cos(a.angle)*86,a.y+Math.sin(a.angle)*86,t.glow,75,18,5);tone(t===TYPES.heavy?105:t===TYPES.ice?680:t===TYPES.lightning?850:260,.12,t===TYPES.heavy?'triangle':'sawtooth',.045);vibe(t===TYPES.heavy?24:12);shake=Math.max(shake,t===TYPES.heavy?5:2.5);}
function burst(x,y,color,count=20,power=5,shape='dot'){for(let i=0;i<count;i++){let a=Math.random()*TAU,s=(.4+Math.random()*power);particles.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:18+Math.random()*36,max:54,size:1.5+Math.random()*5,color,shape,rot:Math.random()*TAU,spin:(Math.random()-.5)*.2});}}
function ring(x,y,color,max=90,life=22,width=5){rings.push({x,y,color,r:5,max,life,maxLife:life,width});}
function textPop(x,y,txt,color='#fff',size=19){texts.push({x,y,txt,color,size,life:55,max:55});}
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
