function hitWorld(b){
 // Elemental environment: fire severs the suspended chain; ice turns the lower channel into a temporary bridge.
 if(b.type==='fire'&&!chain.burned){const q=segDist(b.x,b.y,740,92,740,205);if(q.d<b.r+9){chain.burned=true;burst(740,150,'#ff9a4a',42,7,'flame');ring(740,150,'#ffb35f',118,28,8);textPop(740,118,'CHAIN BURNED!','#ffd19a',17);shakeHit(7);tone(185,.18,'sawtooth',.05);b.special=true;}}
 if(b.type==='ice'&&!chain.ice&&b.x>555&&b.x<790&&b.y>665&&b.y<730){chain.ice=true;ring(b.x,690,'#a5f3ff',170,34,8);burst(b.x,690,'#c8fbff',48,6,'snow');textPop(b.x,650,'FROZEN CHANNEL!','#ddfbff',17);shakeHit(5);tone(720,.2,'sine',.05);b.special=true;b.vy=-Math.abs(b.vy)*.8;}
 // arena boundaries
 if(b.x-b.r<18){b.x=18+b.r;b.vx=Math.abs(b.vx)*.78;b.hits++;impact(b.x,b.y,TYPES[b.type]?.glow||'#b7f0ff',.25);}
 if(b.x+b.r>W-18){b.x=W-18-b.r;b.vx=-Math.abs(b.vx)*.78;b.hits++;impact(b.x,b.y,TYPES[b.type]?.glow||'#b7f0ff',.25);}
 if(b.y-b.r<60){b.y=60+b.r;b.vy=Math.abs(b.vy)*.72;b.hits++;}
 if(b.y+b.r>GROUND){b.y=GROUND-b.r;b.vy=-Math.abs(b.vy)*(TYPES[b.type]?.restitution||.85);b.vx*=.96;b.hits++;impact(b.x,GROUND,TYPES[b.type]?.glow||'#b7f0ff',.35);}
 platforms.forEach(p=>{if(rectHit(b,p,p.kind==='metal'?.88:.72)){impact(b.x,b.y,p.kind==='metal'?'#a6eaff':'#d7c29d',.45);}});
 props.forEach(p=>{if(!p.alive)return;let rect={x:p.x,y:p.y,w:p.w,h:p.h};if(rectHit(b,rect,.72)){let dealt=(TYPES[b.type]?.damage||12)*.7;damageProp(p,dealt,b.type,b);if(!b.special&&b.type!=='splitChild'&&['fire','heavy'].includes(b.type))effect(b.type,b,b.x,b.y);impact(b.x,b.y,TYPES[b.type]?.glow||'#fff',.8);}});
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
 const palette=pair.split('+').map(k=>TYPES[k]?.color||'#fff');
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
