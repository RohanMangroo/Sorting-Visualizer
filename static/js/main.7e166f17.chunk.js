(this["webpackJsonpresume-sorting-visualizer"]=this["webpackJsonpresume-sorting-visualizer"]||[]).push([[0],{158:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(35),i=n.n(s),c=n(13),o=n(6),l="UPDATE_ALGO_BUTTON_SELECTION",u="UPDATE_MAIN_BUTTON",p={algoName:"bubbleSort",mainButton:"START"},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case l:return Object(o.a)(Object(o.a)({},e),{},{algoName:r.button});case u:return Object(o.a)(Object(o.a)({},e),{},{mainButton:r.name});default:return e}},d="UPDATE_BARS",b="UPDATE_BAR_COUNT",f="UPDATE_SPEED",g=function(e){return{type:b,payload:{barCount:e}}},m={nums:[],displayBars:[],initialHeights:[],barCount:100,speed:100},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case d:return Object(o.a)(Object(o.a)({},e),{},{nums:r.nums,displayBars:r.displayBars,initialHeights:r.initialHeights});case b:return Object(o.a)(Object(o.a)({},e),{},{barCount:r.barCount});case f:return Object(o.a)(Object(o.a)({},e),{},{speed:r.speed});default:return e}},x=n(2),v=n.n(x),O=n(5);function y(){return(y=Object(O.a)(v.a.mark((function e(t,n){var r,a,s,i,c,o,l,u,p,h,d;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.updateSwaps_,a=n.updateChecks_,s=n.updateMainButton_,i=t.nums,c=t.displayBars,o=t.speed,l=0,u=0,c=Array.from(c),p=i.length-1,h=0;case 7:if(!(h<i.length)){e.next=32;break}d=0;case 9:if(!(d<p)){e.next=27;break}return e.next=12,J([d],X.red,c,o);case 12:if(a(++u),!(i[d]>i[d+1])){e.next=21;break}return r(++l),F(d,d+1,i),e.next=18,J([d,d+1],X.orange,c,o);case 18:z(d,d+1,c),e.next=23;break;case 21:return e.next=23,J([d,d+1],X.green,c,4*o);case 23:J([d],"white",c);case 24:d++,e.next=9;break;case 27:J([p],X.sorted,c),p-=1;case 29:h++,e.next=7;break;case 32:s("NEW");case 33:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(O.a)(v.a.mark((function e(t,n){var r,a,s,i,c,o,l,u,p,h,d;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.updateSwaps_,a=n.updateChecks_,s=n.updateMainButton_,i=t.nums,c=t.displayBars,o=t.speed,l=0,u=0,c=Array.from(c),p=0;case 6:if(!(p<i.length)){e.next=27;break}h=p,d=p+1;case 9:if(!(d<i.length)){e.next=19;break}return J([h],X.red,c),J([p],X.green,c),a(++u),e.next=15,J([d],X.orange,c,o);case 15:i[d]<=i[h]?(J([d],X.red,c),J([h],"white",c),h=d):J([d],"white",c);case 16:d++,e.next=9;break;case 19:F(p,h,i),z(p,h,c),r(++l),J([p,h],"white",c),J([p],X.sorted,c);case 24:p++,e.next=6;break;case 27:s("NEW");case 28:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(O.a)(v.a.mark((function e(t,n){var r,a,s,i,c,o,l,u,p,h;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.updateSwaps_,a=n.updateChecks_,s=n.updateMainButton_,i=t.nums,c=t.displayBars,o=t.speed,l=0,u=0,c=Array.from(c),p=1;case 6:if(!(p<i.length)){e.next=26;break}h=p,a(++l),J([h-1],X.sorted,c,o);case 10:if(!(i[h]<i[h-1]&&h>0)){e.next=20;break}return e.next=13,J([h],X.red,c,o);case 13:F(h,h-1,i),z(h,h-1,c),J([h],X.sorted,c),h--,r(++u),e.next=10;break;case 20:return e.next=22,J([h],X.green,c,6*o);case 22:J([h],X.sorted,c,o);case 23:p++,e.next=6;break;case 26:s("NEW");case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(O.a)(v.a.mark((function e(t,n){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.displayBars=Array.from(t.displayBars),r={swaps:0,checks:0,splits:0,updates:n},e.next=4,T(0,t.nums.length-1,t,r);case 4:n.updateMainButton_("NEW");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t,n,r){return B.apply(this,arguments)}function B(){return(B=Object(O.a)(v.a.mark((function e(t,n,r,a){var s,i,c,o,l,u,p,h,d,b,f;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=a.updates,i=s.updateSwaps_,c=s.updateChecks_,o=s.updateRecursiveSplits_,l=r.nums,u=r.speed,p=r.displayBars,!(t>=n)){e.next=5;break}return t<l.length&&J([t],X.sorted,p),e.abrupt("return",l);case 5:J([h=t],X.green,p),d=t+1,b=n;case 9:if(!(d<=b)){e.next=36;break}return e.next=12,J([d,b],X.red,p,u);case 12:if(!(l[d]>l[h]&&l[b]<l[h])){e.next=20;break}return e.next=15,J([d,b],X.green,p,u);case 15:F(d,b,l),z(d,b,p),i(++a.swaps),e.next=34;break;case 20:if(!(l[d]<=l[h])){e.next=27;break}if(c(++a.checks),J([d],"white",p),!(++d<=l.length-1)){e.next=27;break}return e.next=27,J([d],X.red,p,u);case 27:if(!(l[b]>=l[h])){e.next=34;break}if(c(a.checks),J([b],"white",p),!(--b>=0)){e.next=34;break}return e.next=34,J([b],X.red,p,u);case 34:e.next=9;break;case 36:return J([h,b],X.green,p,u),F(h,b,l),z(h,b,p),J([b],X.sorted,p),i(++a.swaps),d<=l.length-1&&J([d],"white",p),J([h],"white",p),o(++a.splits),e.next=46,T(t,b-1,r,a);case 46:return e.next=48,T(b+1,n,r,a);case 48:for(f=t;f<=n+1;f++)f<l.length-1&&J([f],X.sorted,p);case 49:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(O.a)(v.a.mark((function e(t,n){var r,a,s,i,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.nums.length<=1)){e.next=2;break}return e.abrupt("return");case 2:return t.displayBars=Array.from(t.displayBars),r=t.nums,a=t.initialHeights,s={swaps:0,checks:0,splits:0,updates:n},i=r.slice(),c=a.slice(),e.next=9,_(0,r.length-1,r,i,a,c,t,s);case 9:n.updateMainButton_("NEW");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t,n,r,a,s,i,c){return A.apply(this,arguments)}function A(){return(A=Object(O.a)(v.a.mark((function e(t,n,r,a,s,i,c,o){var l,u,p,h;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=o.updates.updateRecursiveSplits_,u=c.displayBars,p=c.speed,t!==n){e.next=4;break}return e.abrupt("return");case 4:return h=Math.floor((t+n)/2),l(++o.splits),e.next=8,_(t,h,a,r,i,s,c,o);case 8:return e.next=10,_(h+1,n,a,r,i,s,c,o);case 10:return e.next=12,C(t,n,h,r,a,s,i,c,o);case 12:return e.next=14,G(t,n,u,s,p,o);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t,n,r,a,s,i,c,o){return E.apply(this,arguments)}function E(){return(E=Object(O.a)(v.a.mark((function e(t,n,r,a,s,i,c,o,l){var u,p,h,d,b,f;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=l.updates.updateChecks_,p=o.speed,h=o.displayBars,d=t,b=t,f=r+1;case 5:if(!(b<=r&&f<=n)){e.next=14;break}return u(++l.checks),e.next=9,J([d],X.red,h,p);case 9:s[b]<=s[f]?(a[d]=s[b],i[d]=c[b],b++):(a[d]=s[f],i[d]=c[f],f++),J([d],X.sorted,h),d++,e.next=5;break;case 14:if(!(b<=r)){e.next=25;break}return u(++l.checks),e.next=18,J([d],X.red,h,p);case 18:a[d]=s[b],i[d]=c[b],J([d],X.sorted,h,p),b++,d++,e.next=14;break;case 25:if(!(f<=n)){e.next=36;break}return u(++l.checks),e.next=29,J([d],X.red,h,p);case 29:a[d]=s[f],i[d]=c[f],J([d],X.sorted,h,p),f++,d++,e.next=25;break;case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return(M=Object(O.a)(v.a.mark((function e(t,n){var r,a,s,i,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.nums,a=t.displayBars,s=t.speed,i={swaps:0,checks:0,updates:n},a=Array.from(a),e.next=5,R(r,a,s,i);case 5:c=r.length-1;case 6:if(!(c>=0)){e.next=15;break}return P(0,c,r,a,i),e.next=10,J([c],X.sorted,a,s);case 10:return e.next=12,I(0,c-1,r,a,s,i);case 12:c--,e.next=6;break;case 15:J([0],X.sorted,a,s),n.updateMainButton_("NEW");case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e,t,n,r){return D.apply(this,arguments)}function D(){return(D=Object(O.a)(v.a.mark((function e(t,n,r,a){var s,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=Math.floor((t.length-2)/2),i=s;case 2:if(!(i>=0)){e.next=12;break}return e.next=5,J([i],X.green,n,r);case 5:return e.next=7,I(i,t.length-1,t,n,r,a);case 7:return e.next=9,J([i],"white",n,r);case 9:i--,e.next=2;break;case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t,n,r,a,s){return H.apply(this,arguments)}function H(){return(H=Object(O.a)(v.a.mark((function e(t,n,r,a,s,i){var c,o,l,u;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=i.updates.updateChecks_,o=2*t+1;case 2:if(!(o<=n)){e.next=31;break}return e.next=5,J([o],X.red,a,s);case 5:if(-1===(l=2*t+2<=n?2*t+2:-1)){e.next=9;break}return e.next=9,J([l],X.red,a,s);case 9:if(u=void 0,u=-1!==l&&r[l]>r[o]?l:o,c(++i.checks),J([o],"white",a),-1!==l&&J([l],"white",a,s),!(r[u]>r[t])){e.next=26;break}return e.next=17,J([u,t],X.green,a,s);case 17:return P(t,u,r,a,i),e.next=20,J([t],X.green,a,s);case 20:J([t],"white",a,s),o=2*(t=u)+1,J([u],"white",a),e.next=29;break;case 26:return e.next=28,J([t,u],"white",a,s);case 28:return e.abrupt("return");case 29:e.next=2;break;case 31:J([t],"white",a);case 32:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t,n,r,a){return W.apply(this,arguments)}function W(){return(W=Object(O.a)(v.a.mark((function e(t,n,r,a,s){var i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=s.updates.updateSwaps_,F(t,n,r),z(t,n,a),i(++s.swaps);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e,t,n){switch(t.algoName){case"bubbleSort":return function(e,t){return y.apply(this,arguments)}(e,n);case"selectionSort":return function(e,t){return w.apply(this,arguments)}(e,n);case"insertionSort":return function(e,t){return k.apply(this,arguments)}(e,n);case"quickSort":return function(e,t){return S.apply(this,arguments)}(e,n);case"mergeSort":return function(e,t){return N.apply(this,arguments)}(e,n);case"heapSort":return function(e,t){return M.apply(this,arguments)}(e,n);default:return}}function z(e,t,n){return L.apply(this,arguments)}function L(){return(L=Object(O.a)(v.a.mark((function e(t,n,r){var a,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=r[t].style.height,s=r[n].style.height,r[t].style.height=s,r[n].style.height=a;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){return V.apply(this,arguments)}function V(){return(V=Object(O.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout((function(){e()}),t)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e,t,n,r,a,s){return Q.apply(this,arguments)}function Q(){return(Q=Object(O.a)(v.a.mark((function e(t,n,r,a,s,i){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t;case 1:if(!(c<=n)){e.next=9;break}return r[c].style.height="".concat(a[c],"%"),i.updates.updateSwaps_(++i.swaps),e.next=6,q(s/3);case 6:c++,e.next=1;break;case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,t,n){return K.apply(this,arguments)}function K(){return K=Object(O.a)(v.a.mark((function e(t,n,r){var a,s,i=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=i.length>3&&void 0!==i[3]?i[3]:0,s=0;s<t.length;s++)r[t[s]].style.backgroundColor=n;return e.next=4,q(a/3);case 4:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}function F(e,t,n){var r=[n[t],n[e]];n[e]=r[0],n[t]=r[1]}var X={sorted:"#1c77c3",green:"#a2dfba",orange:"#ffdab7",red:"#e67188",blue:"#3481f5"};function Z(e,t,n){return e===t?"algo-btn active-btn":"START"!==n?"algo-btn disable-btn":"algo-btn algo-green"}var Y=n(0);var $=Object(c.b)((function(e){var t=e.buttonSelection;return{bars:e.bars,buttonSelection:t}}),(function(e){return{updates:{updateAlgoButtonSelection_:function(t){return e(function(e){return{type:l,payload:{button:e}}}(t))},updateBarCount_:function(t){return e(g(t))},updateSpeed_:function(t){return e({type:f,payload:{speed:t}})}}}}))((function(e){var t=e.bars,n=e.buttonSelection,r=e.updates,a=n.mainButton,s=n.algoName,i=t.barCount,c=t.speed;return Object(Y.jsxs)("div",{className:"controls-container",children:[Object(Y.jsx)("div",{className:"algo-buttons-container",children:Object(Y.jsxs)("div",{className:"algo-buttons",onClick:function(e){return function(e){e.target.value&&r.updateAlgoButtonSelection_(e.target.value)}(e)},children:[Object(Y.jsx)("button",{value:"bubbleSort",disabled:"START"!==a,className:Z(s,"bubbleSort",a),children:"BUBBLE"}),Object(Y.jsx)("button",{value:"selectionSort",disabled:"START"!==a,className:Z(s,"selectionSort",a),children:"SELECTION"}),Object(Y.jsx)("button",{value:"insertionSort",disabled:"START"!==a,className:Z(s,"insertionSort",a),children:"INSERTION"}),Object(Y.jsx)("button",{value:"quickSort",disabled:"START"!==a,className:Z(s,"quickSort",a),children:"QUICK"}),Object(Y.jsx)("button",{value:"mergeSort",disabled:"START"!==a,className:Z(s,"mergeSort",a),children:"MERGE"}),Object(Y.jsx)("button",{value:"heapSort",disabled:"START"!==a,className:Z(s,"heapSort",a),children:"HEAP"})]})}),Object(Y.jsxs)("div",{className:"sliders-container",children:[Object(Y.jsxs)("div",{className:"sliders bar-slider",children:[Object(Y.jsxs)("div",{children:[Object(Y.jsx)("label",{children:"Bars"}),Object(Y.jsx)("span",{children:i})]}),Object(Y.jsx)("input",{type:"range",name:"bars",disabled:"START"!==a,value:i,min:"5",max:"400",step:"5",className:"slider",onChange:function(e){return function(e){r.updateBarCount_(e.target.value)}(e)}})]}),Object(Y.jsxs)("div",{className:"sliders",children:[Object(Y.jsxs)("div",{children:[Object(Y.jsx)("label",{children:"Speed"}),Object(Y.jsx)("span",{children:c})]}),Object(Y.jsx)("input",{type:"range",name:"speed",disabled:"START"!==a,defaultValue:"100",min:"0",max:"2000",step:"5",className:"slider speed-slider",onChange:function(e){return function(e){r.updateSpeed_(e.target.value)}(e)}})]})]})]})})),ee=n(160);var te=Object(c.b)((function(e){var t=e.bars;return{initialHeights:t.initialHeights,barCount:t.barCount}}),(function(e){return{updateBars_:function(t,n,r){return e(function(e,t,n){return{type:d,payload:{nums:e,displayBars:t,initialHeights:n}}}(t,n,r))}}}))((function(e){var t=e.updateBars_,n=e.initialHeights,a=e.barCount,s=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=s.current.clientHeight,n=s.current.childNodes,r=function(e,t){for(var n,r,a=[],s=[],i=0;i<e;i++){var c=(n=5,r=t,Math.floor(Math.random()*(r-n+1)+n)),o=Math.floor(c/t*100);a.push(c),s.push(o)}return{nums:a,heightPercentages:s}}(a,e),i=r.nums,c=r.heightPercentages;t(i,n,c)}),[t,a]),Object(Y.jsx)("div",{ref:s,className:"bars-container",children:n.map((function(e){return Object(Y.jsx)("div",{className:"bar",style:{height:"".concat(e,"%")}},Object(ee.a)())}))})})),ne="UPDATE_SWAPS",re="UPDATE_CHECKS",ae="UPDATE_RECURSIVE_SPLITS",se="RESET_METRICS",ie={swaps:0,checks:0,splits:0},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case ne:return Object(o.a)(Object(o.a)({},e),{},{swaps:r.swaps});case re:return Object(o.a)(Object(o.a)({},e),{},{checks:r.checks});case ae:return Object(o.a)(Object(o.a)({},e),{},{splits:r.splits});case se:return Object(o.a)(Object(o.a)({},e),r);default:return e}};var oe=Object(c.b)((function(e){return{bars:e.bars,buttonSelection:e.buttonSelection}}),(function(e){return{updates:{updateMainButton_:function(t){return e(function(e){return{type:u,payload:{name:e}}}(t))},updateBarCount_:function(t){return e(g(t))},updateSwaps_:function(t){return e(function(e){return{type:ne,payload:{swaps:e}}}(t))},updateChecks_:function(t){return e(function(e){return{type:re,payload:{checks:e}}}(t))},updateRecursiveSplits_:function(t){return e(function(e){return{type:ae,payload:{splits:e}}}(t))},resetMetrics_:function(){return e({type:se,payload:{swaps:0,checks:0,splits:0}})}}}}))((function(e){var t=e.bars,n=e.buttonSelection,r=e.updates,a=n.mainButton,s=n.mainButton,i="".concat(n.mainButton.toLowerCase(),"-btn");return Object(Y.jsx)("div",{className:"".concat(i,"-container btn-container"),children:Object(Y.jsx)("button",{className:"btn ".concat(i),onClick:function(){return function(){switch(a){case"NEW":r.updateBarCount_(++t.barCount),r.updateMainButton_("START"),r.resetMetrics_();break;case"START":r.updateMainButton_("STOP"),U(t,n,r);break;default:window.location.reload()}}()},children:s})})}));var le=Object(c.b)((function(e){return{metrics:e.metrics,bars:e.bars}}),null)((function(e){var t=e.metrics,n=e.bars;return Object(Y.jsx)("div",{className:"metrics-container",children:Object(Y.jsxs)("div",{className:"metrics-sub-container",children:[Object(Y.jsxs)("div",{children:[Object(Y.jsx)("label",{children:"Bars:"}),Object(Y.jsx)("span",{children:n.barCount})]}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)("label",{children:"Speed:"}),Object(Y.jsx)("span",{children:n.speed})]}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)("label",{children:"Swaps:"}),Object(Y.jsx)("span",{children:t.swaps})]}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)("label",{children:"Checks:"}),Object(Y.jsx)("span",{children:t.checks})]}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)("label",{children:"Recursive Splits:"}),Object(Y.jsx)("span",{children:t.splits})]})]})})})),ue=n(97),pe={bubbleSort:{title:"Bubble Sort",algoDescript:"Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent element and swaps them if they are in the wrong order.",vizDescript:"Be on the look out for when bars turn green. This means the current compared values are already in sorted order so the algorigthm will NOT make a swap and simply move on with the next value",learningMode:"Bar: 50 Speed: 30",complexity:"Best: O(n) Time | O(1) Space\n    Average: O(n^2) Time | O(1) Space\n    Worst: O(n^2) Time | O(1) Space\n    "},selectionSort:{title:"Selection Sort",algoDescript:"The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from the unsorted partition and putting it at the beginning.",vizDescript:"Be on the look out for the red bar. This is the current smallest element that will be swapped with the anchor element(green bar)",learningMode:"Bar: 40 Speed: 40",complexity:"Best: O(n^2) Time | O(1) Space\n    Average: O(n^2) Time | O(1) Space\n    Worst: O(n^2) Time | O(1) Space\n    "},insertionSort:{title:"Insertion Sort",algoDescript:"Insertion sort, is a simple sorting algorithm that splits the input into two parts, sorted and unsorted. It will select the current unsorted element and find it's place in the sorted sub-array",vizDescript:"Be on the look out for the red bar travling back. This is the algorithm looking for it's correct place in the already sorted partition. When it finds it's position the bar will turn green",learningMode:"Bar: 30 Speed: 50",complexity:"Best: O(n) Time | O(1) Space\n    Average: O(n^2) Time | O(1) Space\n    Worst: O(n^2) Time | O(1) Space\n    "},quickSort:{title:"Quick Sort",algoDescript:"Quick sort is a pivot sorting recursive algorithm. It compares values based on an established pivot value and sections the array into elements less than the pivot and elements greater than the pivot. \n      \n      It recursively continues this work for every partition(less than partition, greater than partition) of the input array",vizDescript:"Be on the look out for the green bar(pivot) and two red bars moving closer and closer to each other. The green bar is the pivot, and the two red bars are the left and right pointers respectively. \n    \n    The left pointer is looking for values greater than the pivot value, the right pointer is looking for values less than the pivot. If they don't have what they need they move on, but if they BOTH have what they need they swap values(bars).\n    \n    Once the left and right pointers eclipse each other the pivot will take it's place at that intersection point and the result will be all values to the left are smaller than the pivot and all values to the right are bigger than the pivot.",learningMode:"Bar: 20 Speed: 60",complexity:"Best: O(nlog(n)) Time | O(log(n)) Space\n    Average: O(nlog(n)) Time | O(log(n)) Space\n    Worst: O(n^2) Time | O(log(n)) Space\n    "},mergeSort:{title:"Merge Sort",algoDescript:"Merge sort repeatedly breaks down a list into 'n' sublists until each sublist consists of a single element and merging those sublists in a manner that results into a sorted list.",vizDescript:"Merge sort will break down an array into single elements by splitting in half at each iteration(left half, right half). \n      \n    When it reaches it's base case(single element) it will return. Remember that a single element is by definition, sorted. At each return it will have a left sorted sub-array and a right sorted sub-array. \n      \n    It will merge these two sorted sub-arrays, producing a merged sorted sub-array for that recursive level, then return it. \n      \n    That returned sub-array is now one of the sorted halves that will be merged with the other sorted half from the opposite side of the recursive tree\n    \n    Be on the look out for the 'spiked' partitions. These are the sorted sub-arrays that will be merged into a larger sorted sub-array. Notice how the 'spiked' partitions are merged in two's(left half, right half)",learningMode:"Bar: 10 Speed: 70",complexity:"Best: O(nlog(n)) Time | O(nlog(n)) Space\n    Average: O(nlog(n)) Time | O(nlog(n)) Space\n    Worst: O(nlog(n)) Time | O(nlog(n)) Space\n    "},heapSort:{title:"Heap Sort",algoDescript:"Heapsort is a comparison-based sorting algorithm. Heapsort can be thought of as an improved selection sort: like selection sort, heapsort divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element from it and inserting it into the sorted region. \n      \n    Unlike selection sort, heapsort does not waste time with a linear-time scan of the unsorted region; rather, heap sort maintains the unsorted region in a heap data structure to more quickly find the largest element in each step.",vizDescript:"Heap sort will begin by building a MAX HEAP. This will guarantee that the largest number in the unsorted partition of the array is at the beginning of the array. \n    \n    After the max heap has been built it will swap the largest value, which is now located at the 0th index with the value at the last index. Then it will rebuild the max heap in the unsorted partition and once again grab the largest element at the 0th index and swap it with the last index in the unsorted partition.\n      \n    A max heap is built by conceptually viewing the array as a heap data structure, which is in essance a binary tree where every node is greater than or equal to it's two children nodes.\n    \n    Be on the look out for the green and red bars. The green bar is the 'parent' and the red bars are the 'children' of the parent. The 'parent' node will ask it self, 'Which one of my children is of greater value than I ?'. If a child of greater value is found the parent will swap positions with it.\n    \n    To calculate parent-child positional relationship use the following formula...\n    \n    leftChild = parentIndex * 2 + 1\n    rightChild = parentIndex * 2 + 2",learningMode:"Bar: 0 Speed: 80",complexity:"Best: O(nlog(n)) Time | O(1) Space\n    Average: O(nlog(n)) Time | O(1) Space\n    Worst: O(nlog(n)) Time | O(1) Space\n    "}},he=n(96);n(157);var de=Object(c.b)((function(e){return{selectedButton:e.buttonSelection.algoName}}),null)((function(e){var t=e.selectedButton,n=Object(r.useState)(pe.bubbleSort),a=Object(ue.a)(n,2),s=a[0],i=a[1];return Object(r.useEffect)((function(){i(function(e,t){return t[e]}(t,pe))}),[t]),Object(Y.jsx)("div",{className:"algo-description-container",children:Object(Y.jsx)(he.a,{className:"descrip-scroll",children:Object(Y.jsxs)("div",{className:"descrip-sub-container",children:[Object(Y.jsx)("h1",{className:"descrip-title",children:s.title}),Object(Y.jsxs)("div",{className:"descrip-body",children:[Object(Y.jsxs)("div",{className:"algo-description",children:[Object(Y.jsx)("h3",{children:"Algorithim Description"}),Object(Y.jsx)("p",{children:s.algoDescript})]}),Object(Y.jsxs)("div",{className:"viz-description",children:[Object(Y.jsx)("h3",{children:"Visualization Description"}),Object(Y.jsx)("p",{children:s.vizDescript})]}),Object(Y.jsxs)("div",{className:"complexity",children:[Object(Y.jsx)("h4",{children:"Complexity"}),Object(Y.jsx)("p",{children:s.complexity})]})]})]})})})}));function be(){return Object(Y.jsxs)("div",{className:"page",children:[Object(Y.jsxs)("div",{className:"page-top",children:[Object(Y.jsx)("div",{className:"page-top-left",children:Object(Y.jsx)(de,{})}),Object(Y.jsx)("div",{className:"page-top-right",children:Object(Y.jsx)(te,{})})]}),Object(Y.jsxs)("div",{className:"page-bottom",children:[Object(Y.jsx)("div",{className:"page-bottom-left",children:Object(Y.jsx)($,{})}),Object(Y.jsx)("div",{className:"page-bottom-mid",children:Object(Y.jsx)(oe,{})}),Object(Y.jsx)("div",{className:"page-bottom-right",children:Object(Y.jsx)(le,{})})]})]})}function fe(){return Object(Y.jsx)("nav",{className:"nav",children:Object(Y.jsx)("div",{className:"title",children:"SORTING VISUALIZER"})})}var ge=function(){return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(fe,{}),Object(Y.jsx)(be,{})]})},me=n(36),je=Object(me.a)({bars:j,buttonSelection:h,metrics:ce}),xe=Object(me.b)(je);i.a.render(Object(Y.jsx)(c.a,{store:xe,children:Object(Y.jsx)(a.a.StrictMode,{children:Object(Y.jsx)(ge,{})})}),document.getElementById("root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.7e166f17.chunk.js.map