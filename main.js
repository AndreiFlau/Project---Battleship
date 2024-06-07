(()=>{"use strict";var n={288:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,"/*! modern-normalize v2.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\nhtml {\n\t/* Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3) */\n\tfont-family:\n\t\tsystem-ui,\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n\tline-height: 1.15; /* 1. Correct the line height in all browsers. */\n\t-webkit-text-size-adjust: 100%; /* 2. Prevent adjustments of font size after orientation changes in iOS. */\n\t-moz-tab-size: 4; /* 3. Use a more readable tab size (opinionated). */\n\ttab-size: 4; /* 3 */\n}\n\n/*\nSections\n========\n*/\n\nbody {\n\tmargin: 0; /* Remove the margin in all browsers. */\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n",""]);const s=a},365:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,"* {\n  color: purple;\n}\n\nh1 {\n  display: flex;\n  justify-content: center;\n}\n\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.gameboard {\n  display: grid;\n  grid-template-columns: repeat(10, 50px);\n  grid-template-rows: repeat(10, 50px);\n}\n\n.battleshipdialog {\n  margin-top: 700px;\n}\n\n.boards {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n}\n\n.player,\n.computer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.player .gameboard div,\n.computer .gameboard div {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: black;\n}\n\n.unclickable.gameboard div {\n  cursor: default;\n}\n\n.shot.hit,\n.shot.miss {\n  cursor: default !important;\n}\n\n.win {\n  display: flex;\n  justify-content: center;\n}\n\n.water {\n  background-color: rgb(0, 140, 255);\n}\n\n.ship {\n  background-color: grey;\n}\n\n.hit {\n  background-color: red;\n}\n\n.miss {\n  background-color: rgb(173, 216, 230);\n}",""]);const s=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,h="".concat(l," ").concat(d);i[l]=d+1;var p=t(h),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=o(u,r);r.byIndex=s,e.splice(s,0,{identifier:h,updater:m,references:1})}a.push(h)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{class n{constructor(n,e=0){this.length=n,this.hits=e,this.sunk=!1}hit(){this.hits+=1,this.isSunk()}isSunk(){this.hits===this.length&&(this.sunk=!0)}}const e={playerWon:!1,computerWon:!1};function r(t,r,a,s,c){const l=document.querySelector(r),d=document.querySelector(a),h=document.createElement("div"),p=document.createElement("div"),u=document.querySelector(`${s}`);h.className="unclickable gameboard",p.className="gameboard";const m=t.board,f=t.board.board,b=c.board,g=c.board.board;if(m.checkGameOver()&&!1===e.computerWon){const n=document.createElement("div"),t=document.createElement("h2");t.innerText="Computer Won!",n.appendChild(t),n.className="win",u.insertAdjacentElement("afterend",n),e.computerWon=!0}else if(b.checkGameOver()&&!1===e.playerWon){const n=document.createElement("div"),t=document.createElement("h2");t.innerText="You Won!",n.appendChild(t),n.className="win",u.insertAdjacentElement("afterend",n),e.playerWon=!0}for(let e=0;e<f.length;e++)for(let t=0;t<f.length;t++){const r=document.createElement("div");"X"===f[e][t]?(r.innerText="X",r.className="shot hit"):"M"===f[e][t]?(r.innerText="+",r.className="shot miss"):f[e][t]instanceof n?(r.className="ship",r.innerText="S"):(r.className="water",r.innerText="-"),h.appendChild(r),l.appendChild(h)}for(let n=0;n<g.length;n++)for(let l=0;l<g.length;l++){const h=document.createElement("div");"X"===g[n][l]?(h.innerText="X",h.className="shot hit"):"M"===g[n][l]?(h.innerText="+",h.className="shot miss"):(g[n][l],e.playerWon||e.computerWon||h.addEventListener("click",(()=>{b.receiveAttack(n,l),o(m),i(0,t,r,a,s,c),i(0,t,r,a,s,c)})),h.className="water",h.innerText="-"),p.appendChild(h),d.appendChild(p)}}function o(n){let e=Math.floor(10*Math.random()),t=Math.floor(10*Math.random());for(;"X"===n.board[e][t]||"M"===n.board[e][t];)e=Math.floor(10*Math.random()),t=Math.floor(10*Math.random());n.receiveAttack(e,t)}function i(n,e,t,o,i,a){const s=document.querySelector(`${t} .gameboard`),c=document.querySelector(`${o} .gameboard`);s.remove(),c.remove(),r(e,t,o,i,a)}class a{constructor(){this.board=[["-","-","-","-","-","-","-","-","-","-"],["-","-","-","-","-","-","-","-","-","-"],["-","-","-","-","-","-","-","-","-","-"],["-","-","-","-","-","-","-","-","-","-"],["-","-","-","-","-","-","-","-","-","-"],["-","-","-","-","-","-","-","-","-","-"],["-","-","-","-","-","-","-","-","-","-"],["-","-","-","-","-","-","-","-","-","-"],["-","-","-","-","-","-","-","-","-","-"],["-","-","-","-","-","-","-","-","-","-"]],this.continue=!1,this.ships=[]}addShip(e,t,r,o){const i=e.length;let a=e.length,s=0;for(let c=0;c<this.board.length;c++)for(let l=0;l<this.board.length;l++){if(c===t&&l===r&&s<i&&"vertical"===o){if(this.board[c][l]instanceof n)throw"Your ship cannot be placed on top of another ship!";if(a>this.board.length-c&&i>1)throw"Ship is vertically bigger than the board!";this.board[c][l]=e,t+=1,s+=1,a-=1,this.ships.push(e)}if(c===t&&l===r&&s<i&&"horizontal"===o){if(this.board[c][l]instanceof n)throw"Your ship cannot be placed on top of another ship!";if(a>this.board[l].length-l&&i>1)throw"Ship is horizontally bigger than the board!";this.board[c][l]=e,r+=1,s+=1,a-=1,this.ships.push(e)}}}receiveAttack(e,t){for(let r=0;r<this.board.length;r++)for(let o=0;o<this.board.length;o++){if(r===e&&o===t&&("X"===this.board[r][o]||"M"===this.board[r][o]))throw"You already shot at these coordinates!";r===e&&o===t&&this.board[r][o]instanceof n?(this.board[r][o].hit(),this.board[r][o]="X",this.continue=!0):r!==e||o!==t||this.board[r][o]instanceof n||(this.board[r][o]="M",this.continue=!1)}}checkGameOver(){let n=0;for(let e=0;e<this.ships.length;e++)!0===this.ships[e].sunk&&(n+=1);return n===this.ships.length}}class s{constructor(n,e){this.name=n,this.type=e,this.board=new a}placeShip(n,e,t,r){this.board.addShip(n,e,t,r)}}var c=t(72),l=t.n(c),d=t(825),h=t.n(d),p=t(659),u=t.n(p),m=t(56),f=t.n(m),b=t(540),g=t.n(b),y=t(113),v=t.n(y),x=t(365),w={};w.styleTagTransform=v(),w.setAttributes=f(),w.insert=u().bind(null,"head"),w.domAPI=h(),w.insertStyleElement=g(),l()(x.A,w),x.A&&x.A.locals&&x.A.locals;var S=t(288),k={};k.styleTagTransform=v(),k.setAttributes=f(),k.insert=u().bind(null,"head"),k.domAPI=h(),k.insertStyleElement=g(),l()(S.A,k),S.A&&S.A.locals&&S.A.locals;let M=new s("Human","Human");const C=new s("Computer","AI"),A=new n(5),z=new n(4),E=new n(3),I=new n(3),T=new n(2),X=new n(5),j=new n(4),N=new n(3),Y=new n(3),R=new n(2),F=document.querySelector(".battleshipdialog"),O=document.querySelector(".battleshipform");O.addEventListener("submit",(n=>{n.preventDefault();const e=new FormData(O),t={carrier:{y:parseInt(e.get("carrierY")),x:parseInt(e.get("carrierX")),direction:e.get("carrierdirection")},battleship:{y:parseInt(e.get("battleshipY")),x:parseInt(e.get("battleshipX")),direction:e.get("battleshipdirection")},submarine:{y:parseInt(e.get("submarineY")),x:parseInt(e.get("submarineX")),direction:e.get("submarinedirection")},destroyer:{y:parseInt(e.get("destroyerY")),x:parseInt(e.get("destroyerX")),direction:e.get("destroyerdirection")},patrolBoat:{y:parseInt(e.get("patrolboatY")),x:parseInt(e.get("patrolboatX")),direction:e.get("patrolboatdirection")}};try{M.placeShip(A,t.carrier.y,t.carrier.x,t.carrier.direction),M.placeShip(z,t.battleship.y,t.battleship.x,t.battleship.direction),M.placeShip(E,t.submarine.y,t.submarine.x,t.submarine.direction),M.placeShip(I,t.destroyer.y,t.destroyer.x,t.destroyer.direction),M.placeShip(T,t.patrolBoat.y,t.patrolBoat.x,t.patrolBoat.direction),F.close(),r(M,".player",".computer",".boards",C)}catch(n){alert(n),M=new s("Human","Human")}}));let D=P(),L=P(),W=P(),q=P(),H=P();for(;;)try{C.placeShip(X,D.Y,D.X,D.Direction);break}catch(n){D=P()}for(;;)try{C.placeShip(j,L.Y,L.X,L.Direction);break}catch(n){L=P()}for(;;)try{C.placeShip(N,W.Y,W.X,W.Direction);break}catch(n){W=P()}for(;;)try{C.placeShip(Y,q.Y,q.X,q.Direction);break}catch(n){q=P()}for(;;)try{C.placeShip(R,H.Y,H.X,H.Direction);break}catch(n){H=P()}function P(){let n=Math.floor(10*Math.random()),e=Math.floor(10*Math.random());const t=["horizontal","vertical"];let r=t[Math.floor(2*Math.random())];for(;"S"===M.board.board[n][e];)n=Math.floor(10*Math.random()),e=Math.floor(10*Math.random()),r=t[Math.floor(2*Math.random())];return{Y:n,X:e,Direction:r}}document.querySelector(".reset").addEventListener("click",(()=>{location.reload()}))})()})();