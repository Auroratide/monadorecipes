import{s as k,e as h,a as _,c as d,f as j,b as y,d as l,h as D,i as c,j as F,n as T,g}from"../chunks/scheduler.9wOHTztG.js";import{S as I,i as q,c as w,a as v,m as C,t as x,b,d as P}from"../chunks/index.DkAvxXcx.js";import{P as z}from"../chunks/Page.B7rWmSZd.js";import{T as U}from"../chunks/TitledPanel.DPpsky9J.js";import{B}from"../chunks/site-info.BlpqrfTx.js";function L(f){let t,o="This site may make use of copyrighted material the use of which has not always been specifically authorized by the copyright owner.",e,n,r='This constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the US Copyright Law. In accordance with Title 17 U.S.C. Section 107, the material on this site is offered publicly and without profit, to the public users of the internet for comment and nonprofit educational and informational purposes.',i,a,$='Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted. No copyright(s) is/are claimed.',p,u,S='The site owner gains no profit from posted content, so it falls under "Fair Use" guidelines.';return{c(){t=h("p"),t.textContent=o,e=_(),n=h("p"),n.textContent=r,i=_(),a=h("p"),a.textContent=$,p=_(),u=h("p"),u.textContent=S},l(s){t=d(s,"P",{"data-svelte-h":!0}),g(t)!=="svelte-x4bm0y"&&(t.textContent=o),e=y(s),n=d(s,"P",{"data-svelte-h":!0}),g(n)!=="svelte-9q7u2t"&&(n.textContent=r),i=y(s),a=d(s,"P",{"data-svelte-h":!0}),g(a)!=="svelte-j4a479"&&(a.textContent=$),p=y(s),u=d(s,"P",{"data-svelte-h":!0}),g(u)!=="svelte-6ei78n"&&(u.textContent=S)},m(s,m){c(s,t,m),c(s,e,m),c(s,n,m),c(s,i,m),c(s,a,m),c(s,p,m),c(s,u,m)},p:T,d(s){s&&(l(t),l(e),l(n),l(i),l(a),l(p),l(u))}}}function N(f){let t,o="We do not share personal information with third-parties nor do we store information we collect about your visit to this site for use other than to analyze content performance through the use of cookies, which you can turn off at anytime by modifying your internet browser's settings. We are not responsible for the republishing of the content found on this site on other websites or media without our permission. This privacy policy is subject to change without notice.";return{c(){t=h("p"),t.textContent=o},l(e){t=d(e,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1a36h8p"&&(t.textContent=o)},m(e,n){c(e,t,n)},p:T,d(e){e&&l(t)}}}function W(f){let t,o,e,n,r;return o=new U({props:{title:"Fair Use Notice",$$slots:{default:[L]},$$scope:{ctx:f}}}),n=new U({props:{title:"Privacy Policy",$$slots:{default:[N]},$$scope:{ctx:f}}}),{c(){t=h("div"),w(o.$$.fragment),e=_(),w(n.$$.fragment),this.h()},l(i){t=d(i,"DIV",{});var a=j(t);v(o.$$.fragment,a),e=y(a),v(n.$$.fragment,a),a.forEach(l),this.h()},h(){D(t,"view-transition-name","legal")},m(i,a){c(i,t,a),C(o,t,null),F(t,e),C(n,t,null),r=!0},p(i,a){const $={};a&1&&($.$$scope={dirty:a,ctx:i}),o.$set($);const p={};a&1&&(p.$$scope={dirty:a,ctx:i}),n.$set(p)},i(i){r||(x(o.$$.fragment,i),x(n.$$.fragment,i),r=!0)},o(i){b(o.$$.fragment,i),b(n.$$.fragment,i),r=!1},d(i){i&&l(t),P(o),P(n)}}}function A(f){let t,o;return t=new B({props:{slot:"header-icon"}}),{c(){w(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,n){C(t,e,n),o=!0},p:T,i(e){o||(x(t.$$.fragment,e),o=!0)},o(e){b(t.$$.fragment,e),o=!1},d(e){P(t,e)}}}function E(f){let t,o;return t=new z({props:{title:"Legal Disclaimers",$$slots:{"header-icon":[A],default:[W]},$$scope:{ctx:f}}}),{c(){w(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,n){C(t,e,n),o=!0},p(e,[n]){const r={};n&1&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){o||(x(t.$$.fragment,e),o=!0)},o(e){b(t.$$.fragment,e),o=!1},d(e){P(t,e)}}}class M extends I{constructor(t){super(),q(this,t,null,E,k,{})}}export{M as component};