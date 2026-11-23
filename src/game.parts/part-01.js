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
  mqPixelRatio = info.pixelRatio || mqPixelRatio || 1;
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
