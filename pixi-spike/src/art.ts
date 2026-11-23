import { Container, Graphics } from 'pixi.js'
import { Node2D, type Vector2 } from 'sapling2d'
import { registerNodeContent, type NodeContent, type RenderContext } from 'sapling2d/render'

export type Element = 'fire' | 'ice' | 'heavy' | 'lightning' | 'split' | 'void'
export const ELEMENTS: Record<Element, {name:string;color:number;light:number;dark:number;radius:number;mass:number;speed:number;damage:number}> = {
  fire:{name:'烈焰核心',color:0xff6b45,light:0xffd29b,dark:0x772b48,radius:19,mass:.72,speed:820,damage:17},
  ice:{name:'极寒晶核',color:0x68dfff,light:0xd7fbff,dark:0x245d9a,radius:17,mass:.58,speed:900,damage:15},
  heavy:{name:'陨星重核',color:0xf6bf63,light:0xffefb6,dark:0x78502e,radius:25,mass:1.65,speed:650,damage:30},
  lightning:{name:'雷暴之眼',color:0xb28bff,light:0xf0deff,dark:0x44318d,radius:15,mass:.45,speed:1040,damage:13},
  split:{name:'裂变之种',color:0x70e2ac,light:0xd4ffeb,dark:0x276c68,radius:18,mass:.62,speed:780,damage:12},
  void:{name:'虚空奇点',color:0xb786ff,light:0xf0ddff,dark:0x2c174f,radius:22,mass:1.05,speed:700,damage:18},
}
function poly(g:Graphics,points:number[],color:number,alpha=1,stroke?:number){g.poly(points).fill({color,alpha});if(stroke!==undefined)g.poly(points).stroke({color:stroke,width:2,alpha:Math.min(1,alpha+.15)})}

export class BackdropArt extends Node2D {}
class BackdropContent implements NodeContent<BackdropArt>{
 readonly display:Graphics
 constructor(){
  const g=new Graphics();this.display=g
  g.rect(-100,-80,1640,900).fill({color:0x080d24})
  g.ellipse(720,260,650,420).fill({color:0x211b50,alpha:.4})
  g.ellipse(720,330,420,290).fill({color:0x39266c,alpha:.2})
  for(let i=0;i<6;i++){const y=100+i*34;g.moveTo(-40,y+28).bezierCurveTo(260,y-64,420,y+90,720,y+8).bezierCurveTo(1020,y-78,1190,y+78,1490,y-12).stroke({color:i%2?0x4d8dc8:0x8e69c9,width:17-i*1.6,alpha:.035})}
  g.circle(720,224,116).fill({color:0x8e78bc,alpha:.075});g.circle(720,224,94).fill({color:0xe7d8ff,alpha:.16});g.circle(720,224,75).fill({color:0xffeacb,alpha:.88});g.circle(748,196,76).fill({color:0x171435,alpha:.98});g.circle(720,224,105).stroke({color:0xc7a5ff,width:2,alpha:.42})
  poly(g,[35,442,145,400,246,420,312,475,272,512,102,509],0x141936,.96,0x6b64a5);poly(g,[1150,463,1238,398,1358,415,1414,468,1370,516,1200,520],0x141936,.96,0x6b64a5)
  poly(g,[430,518,476,478,517,514,558,458,596,504,635,444,676,502,720,451,762,502,804,448,845,505,884,460,924,512,968,466,1012,520],0x11172f,.95,0x474775)
  g.rect(490,500,460,122).fill({color:0x0f1731,alpha:.96})
  for(let i=0;i<7;i++){const x=520+i*65;g.roundRect(x,504,25,114,8).fill({color:0x293253,alpha:.8});g.roundRect(x+5,508,4,105,2).fill({color:0x81b1ca,alpha:.22});g.circle(x+12,514,3).fill({color:0x9bdbf2,alpha:.8})}
  g.rect(468,492,504,17).fill({color:0x4b427c});g.rect(468,492,504,3).fill({color:0xd3b6ff,alpha:.72})
  for(let i=0;i<10;i++){const x=185+i*119,h=34+((i*37)%70);poly(g,[x-12,574,x,574-h,x+13,574],i%2?0x347f9f:0x7656a7,.7,i%2?0x9deaff:0xd4b8ff)}
  poly(g,[-80,636,120,608,342,628,546,604,720,620,930,602,1138,625,1364,606,1510,640,1510,850,-80,850],0x10182f,1,0x544b80)
  g.rect(-60,638,1560,175).fill({color:0x070c1e,alpha:.75});g.moveTo(-20,640).lineTo(1460,640).stroke({color:0x83d5ed,width:3,alpha:.5})
  for(let i=0;i<116;i++){const x=(i*173+(i%7)*29)%1440,y=(i*89+(i%11)*17)%575,r=i%13===0?2.7:(i%4===0?1.8:1.1);g.circle(x,y,r+3).fill({color:0x8ccfff,alpha:.035});g.circle(x,y,r).fill({color:i%5===0?0xffe6bd:0xc6c8ff,alpha:.35+(i%3)*.12})}
  for(const x of [26,1414]){g.roundRect(x-18,276,36,360,8).fill({color:0x1a2143,alpha:.92});g.roundRect(x-22,268,44,20,6).fill({color:0x4d4c81});g.roundRect(x-3,292,6,322,3).fill({color:0x7ab9d5,alpha:.26});g.circle(x,281,6).fill({color:0xf0cc91,alpha:.85})}
 }
 sync(_n:BackdropArt,_c:RenderContext,_changed:boolean):void{}
 destroy(){this.display.destroy()}
}
registerNodeContent(BackdropArt,()=>new BackdropContent())

export class OrbArt extends Node2D{
 phase=0
 constructor(readonly element:Element,readonly radius:number,readonly frozen=false){super({})}
 override process(dt:number){this.phase+=dt*(this.frozen?1.35:2.4)}
}
class OrbContent implements NodeContent<OrbArt>{
 readonly display:Container
 private readonly aura:Graphics
 private readonly orbit:Graphics
 private readonly core:Graphics
 constructor(node:OrbArt){
  const spec=ELEMENTS[node.element],r=node.radius
  const root=new Container();this.display=root;this.aura=new Graphics();this.orbit=new Graphics();this.core=new Graphics();root.addChild(this.aura,this.orbit,this.core)
  this.aura.circle(0,0,r+20).fill({color:spec.color,alpha:.045});this.aura.circle(0,0,r+12).stroke({color:spec.color,width:5,alpha:.16});this.aura.circle(0,0,r+7).stroke({color:spec.light,width:1.5,alpha:.38})
  this.orbit.circle(0,0,r+4).stroke({color:spec.light,width:1.3,alpha:.52});this.orbit.ellipse(0,0,r+8,Math.max(5,r*.34)).stroke({color:spec.color,width:2.2,alpha:.86});this.orbit.circle(r+8,0,3.4).fill({color:spec.light,alpha:.95});this.orbit.circle(-r-8,0,2.2).fill({color:spec.color,alpha:.85})
  this.core.circle(0,0,r).fill({color:spec.dark});this.core.circle(0,0,r-3).fill({color:spec.color,alpha:.98});this.core.circle(-r*.17,-r*.18,r*.61).fill({color:spec.light,alpha:.24});this.core.ellipse(-r*.28,-r*.43,r*.33,r*.15).fill({color:0xffffff,alpha:.45});this.core.circle(0,0,r-2).stroke({color:spec.light,width:1.6,alpha:.76})
  drawSigil(this.core,node.element,r,spec.light)
  if(node.frozen){this.core.circle(0,0,r+9).stroke({color:0xffffff,width:2,alpha:.5});this.core.circle(0,0,r+15).stroke({color:0x9eeaff,width:1.2,alpha:.48})}
 }
 sync(node:OrbArt){this.orbit.rotation=node.phase;this.aura.alpha=.72+Math.sin(node.phase*1.6)*.14;this.core.scale.set(1+Math.sin(node.phase*1.2)*.025)}
 destroy(){this.display.destroy({children:true})}
}
function drawSigil(g:Graphics,element:Element,r:number,color:number){
 const s=Math.max(5,r*.44)
 if(element==='fire'){g.moveTo(0,-s*1.25).bezierCurveTo(s*1.05,-s*.25,s*.42,s*.2,0,s).bezierCurveTo(-s*.85,s*.22,-s*.72,-s*.42,0,-s*1.25).fill({color,alpha:.93});g.circle(0,s*.25,s*.24).fill({color:0xffffff,alpha:.75})}
 else if(element==='ice'){g.moveTo(0,-s*1.25).lineTo(s*.42,0).lineTo(0,s*1.25).lineTo(-s*.42,0).closePath().fill({color,alpha:.9});g.moveTo(-s,0).lineTo(s,0).stroke({color:0xffffff,width:2,alpha:.7});g.moveTo(0,-s).lineTo(0,s).stroke({color:0xffffff,width:2,alpha:.7})}
 else if(element==='heavy'){g.circle(0,0,s*.9).stroke({color,width:3,alpha:.88});g.circle(0,0,s*.48).fill({color,alpha:.9});g.circle(0,0,s*.18).fill({color:0xffffff,alpha:.9})}
 else if(element==='lightning'){g.moveTo(s*.18,-s*1.1).lineTo(-s*.5,s*.05).lineTo(-s*.04,s*.05).lineTo(-s*.22,s*1.1).lineTo(s*.56,-s*.16).lineTo(s*.1,-s*.16).closePath().fill({color,alpha:.96})}
 else if(element==='split'){for(let i=0;i<3;i++){const a=-Math.PI/2+i*Math.PI*2/3;g.circle(Math.cos(a)*s*.62,Math.sin(a)*s*.62,s*.32).fill({color,alpha:.9})}g.circle(0,0,s*.24).fill({color:0xffffff,alpha:.8})}
 else{g.circle(0,0,s*.9).fill({color:0x150d2e,alpha:.95});g.circle(s*.18,-s*.12,s*.54).stroke({color,width:3,alpha:.95});g.circle(-s*.28,s*.35,s*.12).fill({color:0xffffff,alpha:.9})}
}
registerNodeContent(OrbArt,(node)=>new OrbContent(node))

export class CannonArt extends Node2D{
 aimAngle=-.8
 recoil=0
 override process(dt:number){this.recoil=Math.max(0,this.recoil-dt*4)}
}
class CannonContent implements NodeContent<CannonArt>{
 readonly display:Container
 private readonly barrel:Graphics
 private readonly glow:Graphics
 constructor(){
  const root=new Container(),base=new Graphics();this.glow=new Graphics();this.barrel=new Graphics()
  base.ellipse(0,28,78,23).fill({color:0x100d2d,alpha:.75});base.ellipse(0,24,65,19).fill({color:0x29365e});base.ellipse(0,18,54,15).stroke({color:0x8a9acb,width:3,alpha:.7})
  base.roundRect(-43,6,86,35,12).fill({color:0x283459});base.roundRect(-39,9,78,7,4).fill({color:0xe1c58b,alpha:.9});base.circle(-30,28,4).fill({color:0x70dfff});base.circle(30,28,4).fill({color:0x70dfff})
  this.glow.circle(0,-32,63).fill({color:0x7f70d9,alpha:.08});this.glow.circle(0,-32,48).stroke({color:0x9bb9ff,width:2,alpha:.35})
  this.barrel.roundRect(-25,-99,50,106,17).fill({color:0x26365f});this.barrel.roundRect(-18,-105,36,86,12).fill({color:0x52678e});this.barrel.roundRect(-12,-104,24,78,10).fill({color:0x111a37});this.barrel.roundRect(-28,-107,56,18,8).fill({color:0xe1c38b});this.barrel.roundRect(-22,-105,44,5,2).fill({color:0xffffff,alpha:.55})
  for(const y of [-83,-50])this.barrel.roundRect(-26,y,52,7,3).fill({color:0x87b7d7,alpha:.78})
  root.addChild(this.glow,base,this.barrel);this.display=root
 }
 sync(node:CannonArt){this.barrel.rotation=node.aimAngle;this.barrel.y=node.recoil*7;this.glow.alpha=.65+Math.sin(node.aimAngle*2)*.1}
 destroy(){this.display.destroy({children:true})}
}
registerNodeContent(CannonArt,()=>new CannonContent())

export class PillarArt extends Node2D{
 constructor(readonly width:number,readonly height:number,readonly tint=0x697bb4){super({})}
}
class PillarContent implements NodeContent<PillarArt>{
 readonly display:Graphics
 constructor(node:PillarArt){
  const g=new Graphics();this.display=g;const w=node.width,h=node.height
  g.roundRect(-w/2,-h/2,w,h,15).fill({color:0x111a38});g.roundRect(-w/2+8,-h/2+12,w-16,h-24,10).fill({color:0x29385e});g.roundRect(-w/2+15,-h/2+18,7,h-36,4).fill({color:node.tint,alpha:.55});g.roundRect(-w/2-8,-h/2-9,w+16,18,6).fill({color:0x8279b5});g.roundRect(-w/2-4,h/2-9,w+8,17,5).fill({color:0x45517d});g.roundRect(-w/2+4,-h/2-5,w-8,4,2).fill({color:node.tint,alpha:.9})
  for(let y=-h/2+38;y<h/2-20;y+=42)g.circle(0,y,3).fill({color:0xe6d1a2,alpha:.75})
 }
 sync(){}
 destroy(){this.display.destroy()}
}
registerNodeContent(PillarArt,(node)=>new PillarContent(node))

export class MothArt extends Node2D{
 phase=0
 shield=0
 override process(dt:number){this.phase+=dt*1.8}
}
class MothContent implements NodeContent<MothArt>{
 readonly display:Container
 private readonly leftWing:Graphics
 private readonly rightWing:Graphics
 private readonly halo:Graphics
 private readonly core:Graphics
 constructor(){
  const root=new Container();this.display=root;this.halo=new Graphics();this.leftWing=new Graphics();this.rightWing=new Graphics();this.core=new Graphics();root.addChild(this.halo,this.leftWing,this.rightWing,this.core)
  this.halo.circle(0,0,112).stroke({color:0x9f8be8,width:2,alpha:.34});this.halo.circle(0,0,97).stroke({color:0xe2c5ff,width:1,alpha:.24});this.halo.ellipse(0,0,132,35).stroke({color:0x8cdcf1,width:2,alpha:.46});this.halo.circle(0,0,125).fill({color:0x876be5,alpha:.035})
  drawMothWing(this.leftWing,-1);drawMothWing(this.rightWing,1)
  this.core.ellipse(0,3,28,55).fill({color:0x2e235b});this.core.ellipse(0,0,20,46).fill({color:0xc3a4ec,alpha:.88});this.core.ellipse(-5,-14,7,22).fill({color:0xffffff,alpha:.44});this.core.circle(0,-47,9).fill({color:0xffe5b4});this.core.circle(0,-47,17).stroke({color:0xeacbff,width:2,alpha:.8});this.core.moveTo(-23,-58).lineTo(-10,-83).lineTo(0,-62).lineTo(12,-86).lineTo(24,-58).stroke({color:0xffdfa9,width:4,alpha:.92});this.core.circle(0,-85,4).fill({color:0xffffff});this.core.ellipse(0,0,31,62).stroke({color:0xf1d8ff,width:2,alpha:.65})
 }
 sync(node:MothArt){const flap=Math.sin(node.phase)*.16;this.leftWing.rotation=-.15-flap;this.rightWing.rotation=.15+flap;this.halo.rotation=node.phase*.12;this.halo.alpha=node.shield>0?1:.58;this.core.scale.set(1+Math.sin(node.phase*1.5)*.025)}
 destroy(){this.display.destroy({children:true})}
}
function drawMothWing(g:Graphics,side:number){
 const s=side
 g.moveTo(0,-24).bezierCurveTo(s*38,-106,s*128,-112,s*130,-38).bezierCurveTo(s*132,14,s*75,54,s*26,34).bezierCurveTo(s*8,25,s*2,8,0,-24).fill({color:0x9174d0,alpha:.36})
 g.moveTo(0,-24).bezierCurveTo(s*38,-106,s*128,-112,s*130,-38).bezierCurveTo(s*132,14,s*75,54,s*26,34).bezierCurveTo(s*8,25,s*2,8,0,-24).stroke({color:0xe6c9ff,width:3,alpha:.88})
 g.moveTo(s*8,-22).bezierCurveTo(s*36,-60,s*89,-80,s*112,-40).bezierCurveTo(s*94,-12,s*70,16,s*30,25).stroke({color:0x9ce8ff,width:2,alpha:.84})
 g.moveTo(s*12,-12).bezierCurveTo(s*52,-22,s*74,9,s*65,32).stroke({color:0xffdba9,width:2,alpha:.72});g.circle(s*78,-40,17).stroke({color:0xd3c8ff,width:3,alpha:.7});g.circle(s*78,-40,8).fill({color:0xc7f3ff,alpha:.62});g.circle(s*47,20,5).fill({color:0xffdcae,alpha:.78})
}
registerNodeContent(MothArt,()=>new MothContent())

export type FusionStyle='steam'|'plasma'|'ice'|'nova'|'storm'|'shards'|'eclipse'
export class FusionArt extends Node2D{
 age=0
 constructor(readonly color:number,readonly style:FusionStyle,options:{position?:Vector2;zIndex?:number}={}){super(options)}
 override process(dt:number){this.age+=dt;if(this.age>.78)this.queueFree()}
}
class FusionContent implements NodeContent<FusionArt>{
 readonly display:Container
 private readonly rings:Graphics[]=[]
 private readonly shards:Graphics[]=[]
 private readonly sparks:Graphics
 constructor(node:FusionArt){
  const root=new Container();this.display=root
  for(let i=0;i<4;i++){const ring=new Graphics();ring.circle(0,0,50+i*16).stroke({color:i%2?0xffffff:node.color,width:5-i*.65,alpha:.86-i*.12});root.addChild(ring);this.rings.push(ring)}
  for(let i=0;i<22;i++){const shard=new Graphics(),a=i/22*Math.PI*2,len=12+(i%5)*5;poly(shard,[0,-len,4+(i%3)*2,0,0,len*.55,-4-(i%3)*2,0],i%2?0xffffff:node.color,.92);shard.position.set(Math.cos(a)*10,Math.sin(a)*10);root.addChild(shard);this.shards.push(shard)}
  this.sparks=new Graphics();this.sparks.circle(0,0,25).fill({color:0xffffff,alpha:.9});this.sparks.circle(0,0,43).stroke({color:node.color,width:9,alpha:.42});root.addChild(this.sparks)
 }
 sync(node:FusionArt){
  const p=Math.max(0,Math.min(1,node.age/.72));this.display.scale.set(.25+p*1.55);this.display.alpha=1-p
  for(let i=0;i<this.rings.length;i++){this.rings[i]!.scale.set(.48+p*(1.2+i*.22));this.rings[i]!.rotation=(i%2?-1:1)*node.age*(.8+i*.45)}
  for(let i=0;i<this.shards.length;i++){const a=i/this.shards.length*Math.PI*2+node.age*(i%2?1.2:-.85),dist=28+p*(80+(i%4)*14),shard=this.shards[i]!;shard.position.set(Math.cos(a)*dist,Math.sin(a)*dist);shard.rotation=a+node.age*2}
  this.sparks.scale.set(1-p*.82)
 }
 destroy(){this.display.destroy({children:true})}
}
registerNodeContent(FusionArt,(node)=>new FusionContent(node))

export class AimArt extends Node2D{points:Vector2[]=[]}
class AimContent implements NodeContent<AimArt>{
 readonly display:Graphics
 constructor(){this.display=new Graphics()}
 sync(node:AimArt){
  const g=this.display;g.clear();if(node.points.length<2)return
  g.moveTo(node.points[0]!.x,node.points[0]!.y)
  for(let i=1;i<node.points.length;i++)g.lineTo(node.points[i]!.x,node.points[i]!.y)
  g.stroke({color:0xd7c5ff,width:2.5,alpha:.68})
  for(let i=0;i<node.points.length;i+=3){const p=node.points[i]!;g.circle(p.x,p.y,i===0?4:2.5).fill({color:0xf2deff,alpha:.7-(i/node.points.length)*.45})}
 }
 destroy(){this.display.destroy()}
}
registerNodeContent(AimArt,()=>new AimContent())
