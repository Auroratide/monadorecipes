import{S as C,i as q,s as U,a as j,e as p,c as z,b,d as h,f as P,g as d,h as g,j as W,o as F,k as G,l as H,m as J,n as A,p as m,q as K,r as M,u as Q,v as y,w as D,x as E,y as v,z as I,A as R,B as L}from"../chunks/index.3fa9fd24.js";const X="modulepreload",Y=function(a,e){return new URL(a,e).href},O={},w=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Y(f,i),f in O)return;O[f]=!0;const t=f.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!i)for(let l=s.length-1;l>=0;l--){const u=s[l];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${r}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":X,t||(o.as="script",o.crossOrigin=""),o.href=f,document.head.appendChild(o),t)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e())},ie={};function Z(a){let e,n,i;var s=a[1][0];function f(t){return{props:{data:t[3],form:t[2]}}}return s&&(e=E(s,f(a)),a[12](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&I(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&4&&(_.form=t[2]),r&2&&s!==(s=t[1][0])){if(e){y();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=E(s,f(t)),t[12](e),v(e.$$.fragment),d(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&d(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[12](null),t&&g(n),e&&L(e,t)}}}function $(a){let e,n,i;var s=a[1][0];function f(t){return{props:{data:t[3],$$slots:{default:[x]},$$scope:{ctx:t}}}}return s&&(e=E(s,f(a)),a[11](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&I(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&8215&&(_.$$scope={dirty:r,ctx:t}),r&2&&s!==(s=t[1][0])){if(e){y();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=E(s,f(t)),t[11](e),v(e.$$.fragment),d(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&d(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[11](null),t&&g(n),e&&L(e,t)}}}function x(a){let e,n,i;var s=a[1][1];function f(t){return{props:{data:t[4],form:t[2]}}}return s&&(e=E(s,f(a)),a[10](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&I(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){const _={};if(r&16&&(_.data=t[4]),r&4&&(_.form=t[2]),r&2&&s!==(s=t[1][1])){if(e){y();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=E(s,f(t)),t[10](e),v(e.$$.fragment),d(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&d(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[10](null),t&&g(n),e&&L(e,t)}}}function T(a){let e,n=a[6]&&V(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=J(e);n&&n.l(s),s.forEach(g),this.h()},h(){A(e,"id","svelte-announcer"),A(e,"aria-live","assertive"),A(e,"aria-atomic","true"),m(e,"position","absolute"),m(e,"left","0"),m(e,"top","0"),m(e,"clip","rect(0 0 0 0)"),m(e,"clip-path","inset(50%)"),m(e,"overflow","hidden"),m(e,"white-space","nowrap"),m(e,"width","1px"),m(e,"height","1px")},m(i,s){b(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=V(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&g(e),n&&n.d()}}}function V(a){let e;return{c(){e=K(a[7])},l(n){e=M(n,a[7])},m(n,i){b(n,e,i)},p(n,i){i&128&&Q(e,n[7])},d(n){n&&g(e)}}}function ee(a){let e,n,i,s,f;const t=[$,Z],r=[];function _(l,u){return l[1][1]?0:1}e=_(a),n=r[e]=t[e](a);let o=a[5]&&T(a);return{c(){n.c(),i=j(),o&&o.c(),s=p()},l(l){n.l(l),i=z(l),o&&o.l(l),s=p()},m(l,u){r[e].m(l,u),b(l,i,u),o&&o.m(l,u),b(l,s,u),f=!0},p(l,[u]){let k=e;e=_(l),e===k?r[e].p(l,u):(y(),h(r[k],1,1,()=>{r[k]=null}),P(),n=r[e],n?n.p(l,u):(n=r[e]=t[e](l),n.c()),d(n,1),n.m(i.parentNode,i)),l[5]?o?o.p(l,u):(o=T(l),o.c(),o.m(s.parentNode,s)):o&&(o.d(1),o=null)},i(l){f||(d(n),f=!0)},o(l){h(n),f=!1},d(l){r[e].d(l),l&&g(i),o&&o.d(l),l&&g(s)}}}function te(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:f}=e,{components:t=[]}=e,{form:r}=e,{data_0:_=null}=e,{data_1:o=null}=e;W(i.page.notify);let l=!1,u=!1,k=null;F(()=>{const c=i.page.subscribe(()=>{l&&(n(6,u=!0),n(7,k=document.title||"untitled page"))});return n(5,l=!0),c});function N(c){D[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function S(c){D[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function B(c){D[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,s=c.page),"constructors"in c&&n(1,f=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,r=c.form),"data_0"in c&&n(3,_=c.data_0),"data_1"in c&&n(4,o=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,f,r,_,o,l,u,k,i,s,N,S,B]}class se extends C{constructor(e){super(),q(this,e,te,ee,U,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const re=[()=>w(()=>import("../chunks/0.ea6e0f19.js"),["../chunks/0.ea6e0f19.js","../chunks/_layout.da46b06b.js","./layout.svelte.b2723e91.js","../chunks/index.3fa9fd24.js"],import.meta.url),()=>w(()=>import("../chunks/1.df826dd2.js"),["../chunks/1.df826dd2.js","./_error.svelte.4ecc195e.js","../chunks/index.3fa9fd24.js","../chunks/Page.1ab4d5f2.js","../chunks/BackdropScene.d19b3686.js","../chunks/Url.20df9a93.js","../chunks/paths.68da2f59.js","../assets/BackdropScene.74c44b78.css","../assets/Page.444a7ce9.css","../chunks/BasicPanel.650ace10.js","../assets/BasicPanel.9fd0fbf3.css"],import.meta.url),()=>w(()=>import("../chunks/2.82dd7207.js"),["../chunks/2.82dd7207.js","../chunks/_page.e6a7f6a1.js","../chunks/index.2defaa64.js","../chunks/control.e7f5239e.js","../chunks/Url.20df9a93.js","../chunks/paths.68da2f59.js","./_page.svelte.bf7a2f55.js","../chunks/index.3fa9fd24.js","../chunks/BackdropScene.d19b3686.js","../assets/BackdropScene.74c44b78.css","../chunks/VisuallyHidden.d3a48b3c.js","../assets/VisuallyHidden.384d1c6c.css","../chunks/TriangleCorners.d3b43205.js","../assets/TriangleCorners.7daf0df2.css","../chunks/singletons.2f611f03.js","../assets/_page.0623298a.css"],import.meta.url),()=>w(()=>import("../chunks/3.45016bc9.js"),["../chunks/3.45016bc9.js","./about-page.svelte.00d14c1a.js","../chunks/index.3fa9fd24.js","../chunks/Page.1ab4d5f2.js","../chunks/BackdropScene.d19b3686.js","../chunks/Url.20df9a93.js","../chunks/paths.68da2f59.js","../assets/BackdropScene.74c44b78.css","../assets/Page.444a7ce9.css","../chunks/BasicPanel.650ace10.js","../assets/BasicPanel.9fd0fbf3.css"],import.meta.url),()=>w(()=>import("../chunks/4.8465d213.js"),["../chunks/4.8465d213.js","./legal-disclaimers-page.svelte.84b11733.js","../chunks/index.3fa9fd24.js","../chunks/Page.1ab4d5f2.js","../chunks/BackdropScene.d19b3686.js","../chunks/Url.20df9a93.js","../chunks/paths.68da2f59.js","../assets/BackdropScene.74c44b78.css","../assets/Page.444a7ce9.css","../chunks/TitledPanel.af7ada22.js","../chunks/TriangleCorners.d3b43205.js","../assets/TriangleCorners.7daf0df2.css","../assets/TitledPanel.1375e929.css"],import.meta.url),()=>w(()=>import("../chunks/5.987df1ed.js"),["../chunks/5.987df1ed.js","../chunks/_page.31a8446b.js","../chunks/_page.e6a7f6a1.js","../chunks/index.2defaa64.js","../chunks/control.e7f5239e.js","../chunks/Url.20df9a93.js","../chunks/paths.68da2f59.js","./recipes-page.svelte.195a24fb.js","../chunks/index.3fa9fd24.js","./_page.svelte.bf7a2f55.js","../chunks/BackdropScene.d19b3686.js","../assets/BackdropScene.74c44b78.css","../chunks/VisuallyHidden.d3a48b3c.js","../assets/VisuallyHidden.384d1c6c.css","../chunks/TriangleCorners.d3b43205.js","../assets/TriangleCorners.7daf0df2.css","../chunks/singletons.2f611f03.js","../assets/_page.0623298a.css"],import.meta.url),()=>w(()=>import("../chunks/6.e7701c88.js"),["../chunks/6.e7701c88.js","../chunks/_page.fb1188d7.js","../chunks/index.2defaa64.js","../chunks/control.e7f5239e.js","../chunks/Url.20df9a93.js","../chunks/paths.68da2f59.js","./recipes-_id_-page.svelte.11718235.js","../chunks/index.3fa9fd24.js","../chunks/Page.1ab4d5f2.js","../chunks/BackdropScene.d19b3686.js","../assets/BackdropScene.74c44b78.css","../assets/Page.444a7ce9.css","../chunks/TitledPanel.af7ada22.js","../chunks/TriangleCorners.d3b43205.js","../assets/TriangleCorners.7daf0df2.css","../assets/TitledPanel.1375e929.css","../chunks/VisuallyHidden.d3a48b3c.js","../assets/VisuallyHidden.384d1c6c.css","../chunks/BasicPanel.650ace10.js","../assets/BasicPanel.9fd0fbf3.css","../assets/_page.01e7b0c6.css"],import.meta.url)],oe=[],ae={"/":[2],"/about":[3],"/legal-disclaimers":[4],"/recipes":[5],"/recipes/[id]":[6]},le={handleError:({error:a})=>{console.error(a)}};export{ae as dictionary,le as hooks,ie as matchers,re as nodes,se as root,oe as server_loads};
