import{H as P}from"./control.pJ1mnnAb.js";import{C as Q,s as z,e as y,a as F,c as w,k as J,b as K,d as g,Q as G,l as c,i as V,m as b,n as A,R as L,S as W,B as X}from"./scheduler.xjkRoe0O.js";import{b as Y,t as Z,S as B,i as D}from"./index.fBQ727At.js";import{A as $,s as x}from"./description.B9PiyCqf.js";function H(t){return t?.length!==void 0?t:Array.from(t)}function ie(t,e){Y(t,1,1,()=>{e.delete(t.key)})}function ce(t,e,i,n,o,l,r,a,h,s,f,d){let u=t.length,E=l.length,v=u;const T={};for(;v--;)T[t[v].key]=v;const M=[],O=new Map,R=new Map,j=[];for(v=E;v--;){const m=d(o,l,v),_=i(m);let p=r.get(_);p?n&&j.push(()=>p.p(m,e)):(p=s(_,m),p.c()),O.set(_,M[v]=p),_ in T&&R.set(_,Math.abs(v-T[_]))}const C=new Set,q=new Set;function S(m){Z(m,1),m.m(a,f),r.set(m.key,m),f=m.first,E--}for(;u&&E;){const m=M[E-1],_=t[u-1],p=m.key,k=_.key;m===_?(f=m.first,u--,E--):O.has(k)?!r.has(p)||C.has(p)?S(m):q.has(k)?u--:R.get(p)>R.get(k)?(q.add(p),S(m)):(C.add(k),u--):(h(_,r),u--)}for(;u--;){const m=t[u];O.has(m.key)||h(m,r)}for(;E;)S(M[E-1]);return Q(j),M}function ue(t,e){throw new P(t,e)}new TextEncoder;const he=({useFilter:t=!1}={})=>`elevated${t?" elevated-use-filter":""}`;function I(t,e,i){const n=t.slice();return n[2]=e[i][0],n[3]=e[i][1],n}function N(t){let e,i,n;return{c(){e=y("source"),this.h()},l(o){e=w(o,"SOURCE",{srcset:!0,type:!0}),this.h()},h(){W(e,i=t[3].map(U).join(", "))||c(e,"srcset",i),c(e,"type",n="image/"+t[2])},m(o,l){V(o,e,l)},p(o,l){l&1&&i!==(i=o[3].map(U).join(", "))&&c(e,"srcset",i),l&1&&n!==(n="image/"+o[2])&&c(e,"type",n)},d(o){o&&g(e)}}}function ee(t){let e,i,n,o,l=H(Object.entries(t[0].sources)),r=[];for(let a=0;a<l.length;a+=1)r[a]=N(I(t,l,a));return{c(){e=y("picture");for(let a=0;a<r.length;a+=1)r[a].c();i=F(),n=y("img"),this.h()},l(a){e=w(a,"PICTURE",{class:!0});var h=J(e);for(let s=0;s<r.length;s+=1)r[s].l(h);i=K(h),n=w(h,"IMG",{src:!0,alt:!0,class:!0}),h.forEach(g),this.h()},h(){G(n.src,o=t[0].fallback.src)||c(n,"src",o),c(n,"alt",t[1]),c(n,"class","svelte-vz356y"),c(e,"class","svelte-vz356y")},m(a,h){V(a,e,h);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(e,null);b(e,i),b(e,n)},p(a,[h]){if(h&1){l=H(Object.entries(a[0].sources));let s;for(s=0;s<l.length;s+=1){const f=I(a,l,s);r[s]?r[s].p(f,h):(r[s]=N(f),r[s].c(),r[s].m(e,i))}for(;s<r.length;s+=1)r[s].d(1);r.length=l.length}h&1&&!G(n.src,o=a[0].fallback.src)&&c(n,"src",o),h&2&&c(n,"alt",a[1])},i:A,o:A,d(a){a&&g(e),L(r,a)}}}const U=t=>`${t.src} ${t.w}w`;function te(t,e,i){let{image:n}=e,{alt:o}=e;return t.$$set=l=>{"image"in l&&i(0,n=l.image),"alt"in l&&i(1,o=l.alt)},[n,o]}class me extends B{constructor(e){super(),D(this,e,te,ee,z,{image:0,alt:1})}}const fe=()=>"visually-hidden";function ne(t){let e,i,n,o,l,r,a,h,s,f;return{c(){e=y("meta"),n=y("meta"),l=y("meta"),a=y("meta"),s=y("meta"),this.h()},l(d){const u=X("svelte-1ws9bah",document.head);e=w(u,"META",{property:!0,content:!0}),n=w(u,"META",{property:!0,content:!0}),l=w(u,"META",{property:!0,content:!0}),a=w(u,"META",{property:!0,content:!0}),s=w(u,"META",{property:!0,content:!0}),u.forEach(g),this.h()},h(){c(e,"property","og:title"),c(e,"content",i=t[0].title),c(n,"property","og:description"),c(n,"content",o=t[0].description),c(l,"property","og:image"),c(l,"content",r=t[0].image),c(a,"property","og:url"),c(a,"content",h=t[0].url),c(s,"property","og:site_name"),c(s,"content",f=t[0].siteName)},m(d,u){b(document.head,e),b(document.head,n),b(document.head,l),b(document.head,a),b(document.head,s)},p(d,[u]){u&1&&i!==(i=d[0].title)&&c(e,"content",i),u&1&&o!==(o=d[0].description)&&c(n,"content",o),u&1&&r!==(r=d[0].image)&&c(l,"content",r),u&1&&h!==(h=d[0].url)&&c(a,"content",h),u&1&&f!==(f=d[0].siteName)&&c(s,"content",f)},i:A,o:A,d(d){g(e),g(n),g(l),g(a),g(s)}}}function se(t,e,i){let{value:n}=e;return t.$$set=o=>{"value"in o&&i(0,n=o.value)},[n]}class de extends B{constructor(e){super(),D(this,e,se,ne,z,{value:0})}}const _e=t=>({siteName:"Monado Recipes",url:$(t.relativeUrl),description:x,...t});export{he as E,de as O,me as R,fe as V,H as a,_e as b,ue as e,ie as o,ce as u};
