(()=>{"use strict";var e={28:(e,t,r)=>{r.d(t,{Z:()=>C});var n=r(81),o=r.n(n),a=r(645),i=r.n(a),s=r(667),c=r.n(s),l=new URL(r(302),r.b),d=new URL(r(266),r.b),p=new URL(r(751),r.b),u=new URL(r(540),r.b),f=new URL(r(789),r.b),h=new URL(r(311),r.b),m=i()(o()),g=c()(l),L=c()(d),y=c()(p),v=c()(u),b=c()(f),k=c()(h);m.push([e.id,'@font-face {\r\n  font-family: "B52"; \r\n  src: url('+g+') format("truetype"); \r\n  font-style: normal; \r\n  font-weight: normal; \r\n  } \r\n\r\n  @font-face {\r\n    font-family: "DS"; \r\n    src: url('+L+') format("truetype"); \r\n    font-style: normal; \r\n    font-weight: normal; \r\n    } \r\n  \r\n.body {\r\nbackground-image: url('+y+');\r\nbackground-size: cover;\r\nmargin: 0;\r\n}\r\n\r\n.filter {\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: #000;\r\n  opacity: 0.8;\r\n  display: flex;\r\n}\r\n\r\n.start-title {\r\n  margin: auto;\r\n  color: #ecd9d9;\r\n  font-size: 80px;\r\n  font-family: "DS", sans-serif;\r\n}\r\n\r\n.filter_display_none {\r\n  display: none;\r\n}\r\n\r\n.header {\r\nheight: 47px;\r\n}\r\n\r\n.header__title {\r\n  width: 426px;\r\n  margin: auto;\r\n  font-family: "DS", sans-serif;\r\n  text-align: left;\r\n}\r\n\r\n.p-os,\r\n.p-lang\r\n {\r\n  font-family: "DS", sans-serif;\r\n  text-align: left;\r\n  font-size: 20px;\r\n}\r\n.wrapper {\r\n  display: flex;\r\n}\r\n\r\n.text-area {\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.text-area .wrapper {\r\n  margin: auto;\r\n  width: 600px;\r\n  height: 94%;\r\n  background-image: url('+v+');\r\n  background-size: cover;\r\n  \r\n}\r\n\r\n.text-area__text-area {\r\n  background: transparent;\r\n  background-size: cover;\r\n  padding: 50px 50px;\r\n  margin: auto;\r\n  font-family: "DS", sans-serif;\r\n  font-size: 20px;\r\n  border: 0;\r\n  outline:none;\r\n  resize: none;\r\n}\r\n\r\n.left-block-keyboard,\r\n.right-block-keyboard\r\n {\r\n  padding-left: 30px;\r\n  width: 20%;\r\n}\r\n\r\n.key-container {\r\n  margin: auto;\r\n}\r\n\r\n.key-row {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 3px 0;\r\n}\r\n\r\nbutton {\r\n  font-size: 20px;\r\n  border-radius: 20px;\r\n  font-family: "DS", sans-serif;\r\n  height: 40px;\r\n  min-width: 40px;\r\n  margin-right: 5px;\r\n  background-image: url('+b+");\r\n  background-size: cover;\r\n  outline: none;\r\n}\r\n\r\n.paper-retro {\r\n  background-image: url("+k+");\r\n}\r\n\r\nbutton:hover {\r\n  background-image: url("+k+");\r\n  cursor: pointer;\r\n}\r\n\r\n.space {\r\n  min-width: 133px;\r\n}",""]);const C=m},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);n&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=n.base?c[0]+n.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=r(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var h=o(f,n);n.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var c=n(e,o),l=0;l<a.length;l++){var d=r(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},302:(e,t,r)=>{e.exports=r.p+"e7bb1d7229c6f2dcef70.ttf"},266:(e,t,r)=>{e.exports=r.p+"2f9be3d1a0cd9c4e82a3.ttf"},789:(e,t,r)=>{e.exports=r.p+"57463641ade3b3bebef5.jpg"},540:(e,t,r)=>{e.exports=r.p+"7ab3d519b3181004315e.png"},311:(e,t,r)=>{e.exports=r.p+"ad1426e58d4e659e632f.png"},751:(e,t,r)=>{e.exports=r.p+"e3065b0ec8febfd24fb4.jpg"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{var e=r(379),t=r.n(e),n=r(795),o=r.n(n),a=r(569),i=r.n(a),s=r(565),c=r.n(s),l=r(216),d=r.n(l),p=r(589),u=r.n(p),f=r(28),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=document.querySelector("body"),g=document.createElement("div"),L=document.createElement("p"),y=document.createElement("header"),v=document.createElement("h1"),b=document.createElement("main"),k=document.createElement("section"),C=document.createElement("div"),S=document.createElement("textarea"),E=document.createElement("section"),w=document.createElement("div"),x=document.createElement("div"),D=document.createElement("p"),A=document.createElement("p"),R=document.createElement("div"),T=document.createElement("div"),K=document.createElement("footer"),B=[document.createElement("div"),document.createElement("div"),document.createElement("div"),document.createElement("div"),document.createElement("div")];B.map((e=>e.classList.add("key-row")));class O{constructor(e,t,r,n,o){this.en={lower:{shiftOff:e,shiftOn:I.includes(r)?e:n},upper:{shiftOff:I.includes(r)?e:e.toUpperCase(),shiftOn:j.includes(r)||z.includes(r)||P.includes(r)?n:e}},this.ru={lower:{shiftOff:t,shiftOn:I.includes(r)?t:j.includes(r)||P.includes(r)?o:t.toUpperCase()},upper:{shiftOff:I.includes(r)?t:t.toUpperCase(),shiftOn:j.includes(r)||P.includes(r)?o:t}}}}const M=[[..."`1234567890-=","Backspace"],["TAB",..."qwertyuiop[]","\\","Del"],["Caps Lock",..."asdfghjkl;'","Enter"],["Shift",..."zxcvbnm,./","⇧","Shift"],["Ctrl","Win","Alt"," ","Alt","Ctrl","⇦","⇩","⇨"]],q=[[..."ё1234567890-=","Backspace"],["TAB",..."йцукенгшщзхъ","\\","Del"],["Caps Lock",..."фывапролджэ","Enter"],["Shift",..."ячсмитьбю.","⇧","Shift"],["Ctrl","Win","Alt"," ","Alt","Ctrl","⇦","⇩","⇨"]],_=[[..."~!@#$%^&*()_+","Backspace"],["TAB",..."QWERTYUIOP{}|","DEL"],["Caps Lock",...'ASDFGHJKL:"',"Enter"],["Shift",..."ZXCVBNM<>?","⇧","Shift"],["Ctrl","Win","Alt"," ","Alt","Ctrl","⇦","⇩","⇨"]],U=[[...'Ё!"№;%:?*()_+',"Backspace"],["TAB",..."ЙЦУКЕНГШЩЗХЪ/","DEL"],["Caps Lock",..."ФЫВАПРОЛДЖЭ","Enter"],["Shift",..."ЯЧСМИТЬБЮ,","⇧","Shift"],["Ctrl","Win","Alt"," ","Alt","Ctrl","⇦","⇩","⇨"]],$=[["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace"],["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","Delete"],["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter"],["ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight"],["ControlLeft","MetaLeft","AltLeft","Space","AltRight","ControlRight","ArrowLeft","ArrowDown","ArrowRight"]],I=["Backspace","Delete","CapsLock","Enter","ShiftLeft","ShiftRight","ControlLeft","MetaLeft","AltLeft","AltRight","ControlRight"],j=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0"],z=["Backquote","BracketLeft","BracketRight","Semicolon","Quote","Comma","Period"],P=["Minus","Equal","Backslash","Slash"],N=[[],[],[],[],[]],W={};M.forEach(((e,t)=>{e.forEach(((e,r)=>{const n=new O(e,q[t][r],$[t][r],_[t][r],U[t][r]);N[t].push(n),W[$[t][r]]=n}))}));const Z={positionCursor:void 0,lang:"en",capsLock:"lower",shiftLeft:!1,shiftRight:!1,shift:()=>Z.shiftLeft||Z.shiftRight?"shiftOn":"shiftOff",alt:!1,ctrl:!1},H=[[],[],[],[],[]];function F(){N.forEach(((e,t)=>{e.forEach(((e,r)=>{H[t][r].innerHTML=e[Z.lang][Z.capsLock][Z.shift()]}))})),"upper"===Z.capsLock?document.querySelector(".capslock").classList.add("paper-retro"):document.querySelector(".capslock").classList.remove("paper-retro"),!0===Z.shiftLeft?document.querySelector(".shiftleft").classList.add("paper-retro"):document.querySelector(".shiftleft").classList.remove("paper-retro"),!0===Z.shiftRight?document.querySelector(".shiftright").classList.add("paper-retro"):document.querySelector(".shiftright").classList.remove("paper-retro"),Z.ctrl&&Z.alt&&(document.querySelector(".altleft").classList.add("paper-retro"),document.querySelector(".controlleft").classList.add("paper-retro"))}function Q(e,t){return`${e.slice(0,S.selectionStart)}${t}${e.slice(S.selectionStart)}`}function J(e){Z.positionCursor=S.selectionStart;const t=S.value;let r;if(I.includes(e))if("Delete"===e)r=function(e){return`${e.slice(0,S.selectionStart)}${e.slice(S.selectionStart+1)}`}(t);else if("Enter"===e)r=function(e){return`${e.slice(0,S.selectionStart)}\n${e.slice(S.selectionStart)}`}(t),Z.positionCursor++;else{if("Backspace"!==e||0===S.selectionStart)return;r=function(e){return`${e.slice(0,S.selectionStart-1)}${e.slice(S.selectionStart)}`}(t),Z.positionCursor--}else"Tab"===e?(r=Q(t,"    "),Z.positionCursor+=4):(r=Q(t,W[e][Z.lang][Z.capsLock][Z.shift()]),Z.positionCursor++);S.value=r,S.setSelectionRange(Z.positionCursor,Z.positionCursor),S.focus()}function V(e){var t=document.getElementById(e);t.volume=1,t.play()}const Y="RSS VIRTUAL KEYBOARD",G="OS Windows Pro 11",X="En/Ru => CtrlLeft + AltLeft";function ee(){return[300,350,400,450,500,550][Math.round(5*Math.random())]}var te;localStorage.getItem("capsLock")&&(Z.capsLock=localStorage.getItem("capsLock")),S.setAttribute("cols","45"),S.setAttribute("rows","11"),S.id="textarea",m.classList.add("body"),g.classList.add("filter"),m.appendChild(g),L.classList.add("start-title"),L.innerText="Click to start",g.appendChild(L),y.classList.add("header"),m.appendChild(y),v.classList.add("header__title"),v.innerText="     ",y.appendChild(v),b.classList.add("main"),m.appendChild(b),k.classList.add("text-area"),b.appendChild(k),C.classList.add("wrapper"),k.appendChild(C),S.classList.add("text-area__text-area"),C.appendChild(S),E.classList.add("keyboard"),b.appendChild(E),w.classList.add("wrapper"),E.appendChild(w),x.classList.add("left-block-keyboard"),w.appendChild(x),D.classList.add("p-os"),A.classList.add("p-lang"),x.appendChild(D),x.appendChild(A),R.classList.add("key-container"),w.appendChild(R),T.classList.add("right-block-keyboard"),w.appendChild(T),K.classList.add("footer"),m.appendChild(K),S.focus(),N.forEach(((e,t)=>{R.appendChild(B[t]),e.forEach(((e,r)=>{const n=document.createElement("button");n.id=$[t][r],n.classList.add($[t][r].toLowerCase()),n.innerHTML=e[Z.lang][Z.capsLock][Z.shift()],B[t].appendChild(n),H[t].push(n)}))})),(te=new Audio).src="./enter.mp3",te.id="enter",m.appendChild(te),function(){var e=new Audio;e.src="./press.mp3",e.id="press",m.appendChild(e)}(),document.addEventListener("keydown",(e=>{e.preventDefault()})),document.querySelector(".filter").addEventListener("mouseup",(()=>{g.classList.add("filter_display_none"),function(){let e=0;Y.split("").forEach(((t,r)=>{e+=ee(),setTimeout((()=>{V("press"),v.innerText=Y.slice(0,r+1)}),e)})),e+=ee(),G.split("").forEach(((t,r)=>{e+=ee(),setTimeout((()=>{V("press"),D.innerText=G.slice(0,r+1)}),e)})),setTimeout((()=>{V("enter")}),e),e+=1e3,X.split("").forEach(((t,r)=>{e+=ee(),setTimeout((()=>{V("press"),A.innerText=X.slice(0,r+1)}),e)}))}(),document.addEventListener("keydown",(e=>{"Enter"===e.code?V("enter"):V("press"),e.preventDefault(),J(e.code)})),window.addEventListener("click",(e=>{"BUTTON"===e.target.tagName&&("CapsLock"===e.target.id?("upper"===Z.capsLock?Z.capsLock="lower":Z.capsLock="upper",F()):"ShiftLeft"===e.target.id?(!1===Z.shiftLeft?Z.shiftLeft=!0:Z.shiftLeft=!1,F()):"ShiftRight"===e.target.id?(!1===Z.shiftRight?Z.shiftRight=!0:Z.shiftRight=!1,F()):"AltLeft"===e.target.id||"AltRight"===e.target.id?("altOff"===Z.alt?Z.alt="altOn":Z.alt="altOff",console.log(Z)):"ControlLeft"===e.target.id||"ControlRight"===e.target.id?("ctrlOff"===Z.ctrl?Z.ctrl="ctrlOn":Z.alt="ctrlOff",console.log(Z)):J(e.target.id))})),document.addEventListener("keydown",(e=>{"ShiftLeft"===e.code?(Z.shiftLeft=!0,F()):"ShiftRight"===e.code?(Z.shiftRight=!0,F()):"CapsLock"===e.code?("upper"===Z.capsLock?Z.capsLock="lower":Z.capsLock="upper",F()):"ControlLeft"===e.code?(Z.ctrl=!0,console.log(Z)):"AltLeft"===e.code&&(Z.alt=!0,console.log(Z))})),document.addEventListener("keydown",(()=>{Z.ctrl&&Z.alt&&("en"===Z.lang?Z.lang="ru":Z.lang="en",F())})),document.addEventListener("keyup",(e=>{"ShiftLeft"===e.code?(Z.shiftLeft=!1,F()):"ShiftRight"===e.code?(Z.shiftRight=!1,F()):"ControlLeft"===e.code?(Z.ctrl=!1,console.log(Z)):"AltLeft"===e.code&&(Z.alt=!1,console.log(Z))})),document.addEventListener("keydown",(e=>{document.querySelector(`.${e.code.toLowerCase()}`).classList.add("paper-retro")})),document.addEventListener("keyup",(e=>{("CapsLock"!==e.code||"lower"===Z.capsLock)&&document.querySelector(`.${e.code.toLowerCase()}`).classList.remove("paper-retro")})),window.onbeforeunload=()=>{localStorage.setItem("capsLock",Z.capsLock)}}))})()})();