var G=Object.defineProperty;var z=(t,e,n)=>e in t?G(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>z(t,typeof e!="symbol"?e+"":e,n);function F(){}const ht=t=>t;function I(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function dt(){return Object.create(null)}function W(t){t.forEach(U)}function mt(t){return typeof t=="function"}function pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function k(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function D(t){return t.split(",").map(e=>e.trim().split(" ").filter(Boolean))}function yt(t,e){const n=D(t.srcset),i=D(e||"");return i.length===n.length&&i.every(([s,r],l)=>r===n[l][1]&&(k(n[l][0],s)||k(s,n[l][0])))}function gt(t){return Object.keys(t).length===0}function J(t,...e){if(t==null){for(const i of e)i(void 0);return F}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function bt(t,e,n){t.$$.on_destroy.push(J(e,n))}function xt(t,e,n,i){if(t){const s=C(t,e,n,i);return t[0](s)}}function C(t,e,n,i){return t[1]&&i?I(n.ctx.slice(),t[1](i(e))):n.ctx}function wt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],l=Math.max(e.dirty.length,s.length);for(let o=0;o<l;o+=1)r[o]=e.dirty[o]|s[o];return r}return e.dirty|s}return e.dirty}function Et(t,e,n,i,s,r){if(s){const l=C(e,n,i,r);t.p(l,s)}}function Nt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Tt(t){return t??""}let y=!1;function vt(){y=!0}function At(){y=!1}function K(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,a=(s>0&&e[n[s]].claim_order<=u?s+1:K(1,s,R=>e[n[R]].claim_order,u))-1;i[c]=n[a]+1;const A=a+1;n[A]=c,s=Math.max(A,s)}const r=[],l=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(r.push(e[c-1]);o>=c;o--)l.push(e[o]);o--}for(;o>=0;o--)l.push(e[o]);r.reverse(),l.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<l.length;c++){for(;u<r.length&&l[c].claim_order>=r[u].claim_order;)u++;const a=u<r.length?r[u]:null;t.insertBefore(l[c],a)}}function V(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function kt(t){const e=N("style");return e.textContent="/* empty */",Y(X(t),e),e.sheet}function Y(t,e){return V(t.head||t,e),e.sheet}function Z(t,e){if(y){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function tt(t,e,n){y&&!n?Z(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function Dt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function N(t){return document.createElement(t)}function M(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function Ht(){return T(" ")}function Lt(){return T("")}function jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ct(t){return function(e){return e.preventDefault(),t.call(this,e)}}function S(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const et=["width","height"];function nt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&et.indexOf(i)===-1?t[i]=e[i]:S(t,i,e[i])}function it(t,e){Object.keys(e).forEach(n=>{st(t,n,e[n])})}function st(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:S(t,e,n)}function Mt(t){return/-/.test(t)?it:nt}function St(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function Pt(t){return t.dataset.svelteH}function Ot(t){return Array.from(t.childNodes)}function P(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,e,n,i,s=!1){P(t);const r=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(e(o)){const c=n(o);return c===void 0?t.splice(l,1):t[l]=c,s||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(e(o)){const c=n(o);return c===void 0?t.splice(l,1):t[l]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function q(t,e,n,i){return O(t,s=>s.nodeName===e,s=>{const r=[];for(let l=0;l<s.attributes.length;l++){const o=s.attributes[l];n[o.name]||r.push(o.name)}r.forEach(l=>s.removeAttribute(l))},()=>i(e))}function qt(t,e,n){return q(t,e,n,N)}function Bt(t,e,n){return q(t,e,n,M)}function lt(t,e){return O(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>T(e),!0)}function Rt(t){return lt(t," ")}function H(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Gt(t,e){const n=H(t,"HTML_TAG_START",0),i=H(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new g(e);P(t);const s=t.splice(n,i-n+1);w(s[0]),w(s[s.length-1]);const r=s.slice(1,s.length-1);if(r.length===0)return new g(e);for(const l of r)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new g(e,r)}function zt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ft(t,e){t.value=e??""}function It(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function Ut(t,e,n){t.classList.toggle(e,!!n)}function rt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Wt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const r=s.textContent.trim();r===`HEAD_${t}_END`?(i-=1,n.push(s)):r===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class ct{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=M(n.nodeName):this.e=N(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)$(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(w)}}class g extends ct{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)tt(this.t,this.n[i],n)}}function Jt(t,e){return new t(e)}let p;function b(t){p=t}function v(){if(!p)throw new Error("Function called outside component initialization");return p}function Kt(t){v().$$.on_mount.push(t)}function Qt(t){v().$$.after_update.push(t)}function Vt(){const t=v();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const r=rt(e,n,{cancelable:i});return s.slice().forEach(l=>{l.call(t,r)}),!r.defaultPrevented}return!0}}const d=[],L=[];let h=[];const j=[],B=Promise.resolve();let E=!1;function ot(){E||(E=!0,B.then(at))}function Xt(){return ot(),B}function ut(t){h.push(t)}const x=new Set;let _=0;function at(){if(_!==0)return;const t=p;do{try{for(;_<d.length;){const e=d[_];_++,b(e),ft(e.$$)}}catch(e){throw d.length=0,_=0,e}for(b(null),d.length=0,_=0;L.length;)L.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];x.has(n)||(x.add(n),n())}h.length=0}while(d.length);for(;j.length;)j.pop()();E=!1,x.clear(),b(t)}function ft(t){if(t.fragment!==null){t.update(),W(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ut)}}function Yt(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{Ut as $,Xt as A,Wt as B,W as C,k as D,Dt as E,yt as F,X as G,kt as H,mt as I,ut as J,rt as K,ht as L,dt as M,at as N,gt as O,Yt as P,p as Q,b as R,U as S,d as T,ot as U,vt as V,At as W,Tt as X,jt as Y,M as Z,Bt as _,Ht as a,g as a0,Gt as a1,st as a2,St as a3,Ft as a4,Ct as a5,bt as a6,Vt as a7,Rt as b,qt as c,w as d,N as e,Ot as f,Pt as g,It as h,tt as i,Z as j,xt as k,lt as l,S as m,F as n,zt as o,Nt as p,wt as q,Lt as r,pt as s,T as t,Et as u,Mt as v,Qt as w,Kt as x,L as y,Jt as z};
