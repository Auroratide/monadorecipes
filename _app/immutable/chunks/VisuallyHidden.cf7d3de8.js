import{S as k,i as R,s as j,k as h,a as I,l as f,m as V,c as C,h as _,Z as g,n as u,b as E,G as v,H as d,V as H}from"./index.7251b7a2.js";const w=({useFilter:a=!1}={})=>`elevated${a?" elevated-use-filter":""}`;function p(a,e,r){const t=a.slice();return t[2]=e[r][0],t[3]=e[r][1],t}function y(a){let e,r,t;return{c(){e=h("source"),this.h()},l(n){e=f(n,"SOURCE",{srcset:!0,type:!0}),this.h()},h(){u(e,"srcset",r=a[3].map(b).join(", ")),u(e,"type",t="image/"+a[2])},m(n,i){E(n,e,i)},p(n,i){i&1&&r!==(r=n[3].map(b).join(", "))&&u(e,"srcset",r),i&1&&t!==(t="image/"+n[2])&&u(e,"type",t)},d(n){n&&_(e)}}}function O(a){let e,r,t,n,i=Object.entries(a[0].sources),c=[];for(let l=0;l<i.length;l+=1)c[l]=y(p(a,i,l));return{c(){e=h("picture");for(let l=0;l<c.length;l+=1)c[l].c();r=I(),t=h("img"),this.h()},l(l){e=f(l,"PICTURE",{class:!0});var o=V(e);for(let s=0;s<c.length;s+=1)c[s].l(o);r=C(o),t=f(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(_),this.h()},h(){g(t.src,n=a[0].fallback.src)||u(t,"src",n),u(t,"alt",a[1]),u(t,"class","svelte-vz356y"),u(e,"class","svelte-vz356y")},m(l,o){E(l,e,o);for(let s=0;s<c.length;s+=1)c[s]&&c[s].m(e,null);v(e,r),v(e,t)},p(l,[o]){if(o&1){i=Object.entries(l[0].sources);let s;for(s=0;s<i.length;s+=1){const m=p(l,i,s);c[s]?c[s].p(m,o):(c[s]=y(m),c[s].c(),c[s].m(e,r))}for(;s<c.length;s+=1)c[s].d(1);c.length=i.length}o&1&&!g(t.src,n=l[0].fallback.src)&&u(t,"src",n),o&2&&u(t,"alt",l[1])},i:d,o:d,d(l){l&&_(e),H(c,l)}}}const b=a=>`${a.src} ${a.w}w`;function S(a,e,r){let{image:t}=e,{alt:n}=e;return a.$$set=i=>{"image"in i&&r(0,t=i.image),"alt"in i&&r(1,n=i.alt)},[t,n]}class z extends k{constructor(e){super(),R(this,e,S,O,j,{image:0,alt:1})}}const G=()=>"visually-hidden";export{w as E,z as R,G as V};
