import{s as A,Z as b,_ as w,f as p,d as u,m as c,i as x,j as $,n as g,k as G,e as B,a as M,c as I,b as O,h as Z,u as H,p as T,q as K,$ as X,t as F,l as q,X as te,o as re}from"./scheduler.9wOHTztG.js";import{S as C,i as S,t as d,b as _,g as oe,e as ne,c as k,a as E,m as z,d as y}from"./index.DkAvxXcx.js";import{b as N}from"./paths.C7UhrJZd.js";const V={text:{regular:()=>"color-text-regular",muted:()=>"color-text-muted",emphasized:()=>"color-text-emphasized",dark:()=>"color-text-dark"},background:{dark:(s={})=>`color-bg-dark${s.translucent?" color-bg-translucent":""}${s.frilled?" color-bg-frilled":""}`,medium:()=>"color-bg-medium",light:(s={})=>`color-bg-light${s.translucent?" color-bg-translucent":""}`,banner:(s={})=>`color-bg-banner${s.translucent?" color-bg-translucent":""}`,shiny:(s={})=>`color-bg-shiny${s.translucent?" color-bg-translucent":""}`,darkShiny:()=>"color-bg-dark-shiny"},border:{regular:()=>"color-border-regular",muted:()=>"color-border-muted",dark:(s={})=>`color-border-dark${s.outset?" color-border-outset":""}`,selected:()=>"color-border-selected"},icon:{common:()=>"color-icon-common",uncommon:()=>"color-icon-uncommon",rare:()=>"color-icon-rare"},valueOf:s=>`var(--${s})`},le={size:{stars:(s=2)=>`font-size-${s}-star`,largeIcon:()=>"font-size-large-icon"},shadowed:()=>"font-shadowed"},ae=()=>"container",Te=({side:s})=>`container-padding-${s}`,U={centeredLabel:({alignment:s="center"}={})=>`spacing-centered-label spacing-centered-label-${s}`,centeredIcon:({alignment:s="center"}={})=>`spacing-centered-icon spacing-centered-icon-${s}`,stars:(s=2)=>`--spacing-stars: var(--spacing-stars-${s});`,panel:()=>"spacing-panel",after:()=>"spacing-after"},P=s=>s?`/${s}`:"",Ke=s=>`${s}.json`,Ve=s=>`https://monado.recipes${s}`,j={home:()=>`${N}/`,recipes:(s="")=>`${N}${P("recipes")}${P(s)}`,about:()=>`${N}${P("about")}`,legalDisclaimers:()=>`${N}${P("legal-disclaimers")}`},ce={source:"https://github.com/Auroratide/monadorecipes",feedback:s=>`https://docs.google.com/forms/d/e/1FAIpQLSfLOkLIR_d8yebtq12OzKP1Uf1Zux0x7Kg-gIHcslhuw0hzrA/viewform?usp=pp_url&entry.1258368236=${encodeURIComponent(s)}`};function ie(s){let e,r,t;return{c(){e=b("svg"),r=b("path"),t=b("path"),this.h()},l(o){e=w(o,"svg",{class:!0,width:!0,height:!0,viewBox:!0,"xml:space":!0,xmlns:!0});var n=p(e);r=w(n,"path",{fill:!0,d:!0,transform:!0}),p(r).forEach(u),t=w(n,"path",{fill:!0,d:!0,transform:!0}),p(t).forEach(u),n.forEach(u),this.h()},h(){c(r,"fill","var(--color-bg-medium)"),c(r,"d","M67.733 19.14v100.34c40.57 0 54.112-26.228 52.527-42.502 11.308-3.868 12.82-36.98-7.346-35.842-6.169-12.414-17.898-21.997-45.18-21.997Zm0 0v100.34c-40.57 0-54.112-26.228-52.527-42.502-11.308-3.868-12.82-36.98 7.346-35.842 6.169-12.414 17.898-21.997 45.18-21.997Z"),c(r,"transform","translate(-6.973 -8.55)"),c(t,"fill","var(--color-text-regular)"),c(t,"d","M67.733 22.246v4.944s3.075-.115 4.23 1.044c1.464 1.473 1.297 5.4.777 6.665-.52 1.264-1.793 1.798-2.108 2.048 0 1.343-.02 1.837-.02 2.885-1.264.683-2.266.677-2.879.677v29.232c19.336 0 32.443-7.576 36.451-18.9.978-2.763 1.834-2.685 1.33.162-2.06 11.639-13.57 23.61-37.78 23.61v41.571c24.45 0 51.966-13.956 48.355-42.476 2.883-.513 5.191-1.71 7.14-5.718 3.754-9.45.802-25.772-11.366-22.935-6.377-11.915-17.77-22.81-44.13-22.81zm47.307 29.257c4.143.01 5.627 12.44 1.207 13.785-2.453.746-3.754-2.4-4.324-5.61-.571-3.21-.145-6.537 1.813-7.814.433-.282.893-.362 1.304-.361zM67.733 22.246v4.944s-3.075-.115-4.23 1.044c-1.464 1.473-1.297 5.4-.777 6.665.52 1.264 1.793 1.798 2.108 2.048 0 1.343.02 1.837.02 2.885 1.264.683 2.266.677 2.879.677v29.232c-19.336 0-32.443-7.576-36.451-18.9-.978-2.763-1.834-2.685-1.33.162 2.06 11.639 13.57 23.61 37.78 23.61v41.571c-24.45 0-51.966-13.956-48.355-42.476-2.883-.513-5.191-1.71-7.14-5.718-3.754-9.45-.802-25.772 11.366-22.935 6.377-11.915 17.77-22.81 44.13-22.81ZM20.426 51.503c-4.143.01-5.627 12.44-1.207 13.785 2.453.746 3.754-2.4 4.324-5.61.571-3.21.145-6.537-1.813-7.814-.433-.282-.893-.362-1.304-.361z"),c(t,"transform","translate(-6.973 -8.455)"),c(e,"class","icon"),c(e,"width","459.285"),c(e,"height","459.285"),c(e,"viewBox","0 0 121.519 121.519"),c(e,"xml:space","preserve"),c(e,"xmlns","http://www.w3.org/2000/svg")},m(o,n){x(o,e,n),$(e,r),$(e,t)},p:g,i:g,o:g,d(o){o&&u(e)}}}class se extends C{constructor(e){super(),S(this,e,null,ie,A,{})}}const fe=s=>({}),J=s=>({}),ue=s=>({}),W=s=>({});function me(s){let e,r,t,o,n,i;const m=s[1].left,a=G(m,s,s[0],W),l=s[1].right,f=G(l,s,s[0],J);return{c(){e=B("footer"),r=B("div"),t=B("ul"),a&&a.c(),o=M(),n=B("ul"),f&&f.c(),this.h()},l(h){e=I(h,"FOOTER",{class:!0});var v=p(e);r=I(v,"DIV",{class:!0});var L=p(r);t=I(L,"UL",{class:!0});var R=p(t);a&&a.l(R),R.forEach(u),o=O(L),n=I(L,"UL",{class:!0});var Q=p(n);f&&f.l(Q),Q.forEach(u),L.forEach(u),v.forEach(u),this.h()},h(){c(t,"class","horizontal-list svelte-1c6fquy"),c(n,"class","horizontal-list svelte-1c6fquy"),c(r,"class",ae()+" even-row svelte-1c6fquy"),c(e,"class",le.size.stars(1)+" "+V.text.emphasized()+" "+V.background.banner({translucent:!0})+" shadowed fixed-to-bottom padded svelte-1c6fquy"),Z(e,"view-transition-name","footer")},m(h,v){x(h,e,v),$(e,r),$(r,t),a&&a.m(t,null),$(r,o),$(r,n),f&&f.m(n,null),i=!0},p(h,[v]){a&&a.p&&(!i||v&1)&&H(a,m,h,h[0],i?K(m,h[0],v,ue):T(h[0]),W),f&&f.p&&(!i||v&1)&&H(f,l,h,h[0],i?K(l,h[0],v,fe):T(h[0]),J)},i(h){i||(d(a,h),d(f,h),i=!0)},o(h){_(a,h),_(f,h),i=!1},d(h){h&&u(e),a&&a.d(h),f&&f.d(h)}}}function he(s,e,r){let{$$slots:t={},$$scope:o}=e;return s.$$set=n=>{"$$scope"in n&&r(0,o=n.$$scope)},[o,t]}class pe extends C{constructor(e){super(),S(this,e,he,me,A,{})}}const $e=s=>({}),Y=s=>({}),ge=s=>({}),ee=s=>({});function de(s){let e,r,t,o,n,i;const m=s[4].icon,a=G(m,s,s[3],Y);return{c(){e=B("span"),r=B("span"),a&&a.c(),t=M(),o=B("span"),n=F(s[1]),this.h()},l(l){e=I(l,"SPAN",{class:!0});var f=p(e);r=I(f,"SPAN",{class:!0});var h=p(r);a&&a.l(h),h.forEach(u),t=O(f),o=I(f,"SPAN",{class:!0});var v=p(o);n=q(v,s[1]),v.forEach(u),f.forEach(u),this.h()},h(){c(r,"class",V.text.regular()+" "+U.centeredIcon()+" svelte-1tzx2km"),c(o,"class",te(U.centeredLabel())+" svelte-1tzx2km"),c(e,"class","center-elements svelte-1tzx2km")},m(l,f){x(l,e,f),$(e,r),a&&a.m(r,null),$(e,t),$(e,o),$(o,n),i=!0},p(l,f){a&&a.p&&(!i||f&8)&&H(a,m,l,l[3],i?K(m,l[3],f,$e):T(l[3]),Y),(!i||f&2)&&re(n,l[1])},i(l){i||(d(a,l),i=!0)},o(l){_(a,l),i=!1},d(l){l&&u(e),a&&a.d(l)}}}function _e(s){let e,r,t,o,n,i;const m=s[4].icon,a=G(m,s,s[3],ee);return{c(){e=B("a"),r=B("span"),a&&a.c(),t=M(),o=B("span"),n=F(s[1]),this.h()},l(l){e=I(l,"A",{href:!0,class:!0});var f=p(e);r=I(f,"SPAN",{class:!0,style:!0});var h=p(r);a&&a.l(h),h.forEach(u),t=O(f),o=I(f,"SPAN",{class:!0});var v=p(o);n=q(v,s[1]),v.forEach(u),f.forEach(u),this.h()},h(){c(r,"class",V.text.regular()+" "+U.centeredIcon()+" svelte-1tzx2km"),c(r,"style",U.stars(1)),c(o,"class",te(U.centeredLabel())+" svelte-1tzx2km"),c(e,"href",s[0]),c(e,"class","center-elements svelte-1tzx2km")},m(l,f){x(l,e,f),$(e,r),a&&a.m(r,null),$(e,t),$(e,o),$(o,n),i=!0},p(l,f){a&&a.p&&(!i||f&8)&&H(a,m,l,l[3],i?K(m,l[3],f,ge):T(l[3]),ee),(!i||f&2)&&re(n,l[1]),(!i||f&1)&&c(e,"href",l[0])},i(l){i||(d(a,l),i=!0)},o(l){_(a,l),i=!1},d(l){l&&u(e),a&&a.d(l)}}}function ve(s){let e,r,t,o;const n=[_e,de],i=[];function m(a,l){return a[0]?0:1}return r=m(s),t=i[r]=n[r](s),{c(){e=B("li"),t.c(),this.h()},l(a){e=I(a,"LI",{class:!0});var l=p(e);t.l(l),l.forEach(u),this.h()},h(){c(e,"class","svelte-1tzx2km"),X(e,"print-only",s[2])},m(a,l){x(a,e,l),i[r].m(e,null),o=!0},p(a,[l]){let f=r;r=m(a),r===f?i[r].p(a,l):(oe(),_(i[f],1,1,()=>{i[f]=null}),ne(),t=i[r],t?t.p(a,l):(t=i[r]=n[r](a),t.c()),d(t,1),t.m(e,null)),(!o||l&4)&&X(e,"print-only",a[2])},i(a){o||(d(t),o=!0)},o(a){_(t),o=!1},d(a){a&&u(e),i[r].d()}}}function be(s,e,r){let{$$slots:t={},$$scope:o}=e,{href:n=void 0}=e,{text:i}=e,{printOnly:m=!1}=e;return s.$$set=a=>{"href"in a&&r(0,n=a.href),"text"in a&&r(1,i=a.text),"printOnly"in a&&r(2,m=a.printOnly),"$$scope"in a&&r(3,o=a.$$scope)},[n,i,m,o,t]}class D extends C{constructor(e){super(),S(this,e,be,ve,A,{href:0,text:1,printOnly:2})}}function we(s){let e,r,t,o;return{c(){e=b("svg"),r=b("title"),t=F("Staple"),o=b("path"),this.h()},l(n){e=w(n,"svg",{class:!0,xmlns:!0,"xml:space":!0,width:!0,height:!0,viewBox:!0});var i=p(e);r=w(i,"title",{});var m=p(r);t=q(m,"Staple"),m.forEach(u),o=w(i,"path",{fill:!0,d:!0,transform:!0}),p(o).forEach(u),i.forEach(u),this.h()},h(){c(o,"fill","var(--color-text-regular)"),c(o,"d","M69.18 19.81c-27.071-.043-55.512 16.59-55.512 32.838 0 10.575 4.449 14.595 6.498 16.01v30.188c0 7.064 6.83 18.879 19.027 18.879 12.197 0 31.372.477 41.726.477s14.552-5.13 17.626-7.571c7.315-2.301 10.621-8.576 10.621-16.795V64.493c2.272-3.934 6.828-6.961 6.828-16.327 0-17.617-18.077-27.754-45.526-28.34-.43-.01-.858-.015-1.288-.016zm-6.563 13.88c27.541 0 37.82 10.62 37.82 19.994 0 7.845-4.812 10.047-6.462 11.717v34.05c0 4.785-5.023 10.151-8.815 10.151H36.577c-4.996 0-7.723-5.101-7.723-10.15v-34.05c-1.89-1.803-6.926-5.145-6.926-11.9 0-10.353 13.148-19.812 40.69-19.812z"),c(o,"transform","translate(-13.502 -17.677)"),c(e,"class","icon"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"xml:space","preserve"),c(e,"width","388"),c(e,"height","388"),c(e,"viewBox","0 0 102.658 102.658")},m(n,i){x(n,e,i),$(e,r),$(r,t),$(e,o)},p:g,i:g,o:g,d(n){n&&u(e)}}}class xe extends C{constructor(e){super(),S(this,e,null,we,A,{})}}function ke(s){let e,r,t,o;return{c(){e=b("svg"),r=b("title"),t=F("GitHub"),o=b("path"),this.h()},l(n){e=w(n,"svg",{class:!0,width:!0,height:!0,xmlns:!0,viewBox:!0});var i=p(e);r=w(i,"title",{});var m=p(r);t=q(m,"GitHub"),m.forEach(u),o=w(i,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),p(o).forEach(u),i.forEach(u),this.h()},h(){c(o,"fill-rule","evenodd"),c(o,"clip-rule","evenodd"),c(o,"d","M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"),c(o,"fill","currentColor"),c(e,"class","icon"),c(e,"width","98"),c(e,"height","96"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"viewBox","0 0 98 98")},m(n,i){x(n,e,i),$(e,r),$(r,t),$(e,o)},p:g,i:g,o:g,d(n){n&&u(e)}}}class Ee extends C{constructor(e){super(),S(this,e,null,ke,A,{})}}function ze(s){let e,r,t,o,n,i;return{c(){e=b("svg"),r=b("title"),t=F("Book"),o=b("path"),n=b("path"),i=b("path"),this.h()},l(m){e=w(m,"svg",{class:!0,xmlns:!0,"xml:space":!0,width:!0,height:!0,viewBox:!0});var a=p(e);r=w(a,"title",{});var l=p(r);t=q(l,"Book"),l.forEach(u),o=w(a,"path",{fill:!0,d:!0,transform:!0}),p(o).forEach(u),n=w(a,"path",{fill:!0,d:!0,transform:!0}),p(n).forEach(u),i=w(a,"path",{fill:!0,d:!0,transform:!0}),p(i).forEach(u),a.forEach(u),this.h()},h(){c(o,"fill","var(--color-text-regular)"),c(o,"d","m63.433 99.95.156-64.352c-13.545-11.328-31.967-7.68-50.202-6.085l.45 64.798c15.055-.373 29.77-7.112 49.596 5.638z"),c(o,"transform","translate(-12.993 -18.347)"),c(n,"fill","var(--color-text-regular)"),c(n,"d","m63.461 114.863.151-10.4c-19.776-12.84-33.923-5.98-50.045-6.03l-.151 9.647c16.68.39 31.487-7.986 50.045 6.783zM68.385 99.948l-.156-64.351c13.545-11.328 31.967-7.68 50.202-6.085l-.45 64.798c-15.054-.373-29.77-7.112-49.596 5.638z"),c(n,"transform","translate(-12.993 -18.347)"),c(i,"fill","var(--color-text-regular)"),c(i,"d","m68.357 114.863-.15-10.401c19.775-12.84 33.923-5.98 50.045-6.03l.15 9.647c-16.68.39-31.487-7.986-50.045 6.784z"),c(i,"transform","translate(-12.993 -18.347)"),c(e,"class","icon"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"xml:space","preserve"),c(e,"width","400"),c(e,"height","400"),c(e,"viewBox","0 0 105.833 105.833")},m(m,a){x(m,e,a),$(e,r),$(r,t),$(e,o),$(e,n),$(e,i)},p:g,i:g,o:g,d(m){m&&u(e)}}}class ye extends C{constructor(e){super(),S(this,e,null,ze,A,{})}}function Be(s){let e,r,t;return{c(){e=b("svg"),r=b("path"),t=b("path"),this.h()},l(o){e=w(o,"svg",{class:!0,xmlns:!0,width:!0,height:!0,viewBox:!0});var n=p(e);r=w(n,"path",{fill:!0,"fill-rule":!0,d:!0,style:!0,transform:!0}),p(r).forEach(u),t=w(n,"path",{fill:!0,"fill-rule":!0,d:!0}),p(t).forEach(u),n.forEach(u),this.h()},h(){c(r,"fill","var(--color-bg-medium)"),c(r,"fill-rule","evenodd"),c(r,"d","M160.619 126.318C232.799 94.935 181.69-6.326 102.325.312 22.96 6.949-25.427 83.452 14.005 163.254c39.43 79.802 125.799 58.907 158.833 46.813 33.034-12.093 66.486-29.836 132.046 3.587-59.691-102.052-162.312-48.653-184.539-67.87-22.227-19.217.796-46.793 15.519-49.49 14.722-2.696 32.047 4.097 24.755 30.024Z"),Z(r,"fill","#2a318e"),Z(r,"fill-opacity","1"),c(r,"transform","matrix(1 0 0 1 52.956 84.965)"),c(t,"fill","var(--color-text-regular)"),c(t,"fill-rule","evenodd"),c(t,"d","M351.72 317.16c-34.235-13.657-63.992-20.608-89.27-20.854-37.918-.369-97.186 36.251-147.135 34.875-49.95-1.376-84.57-21.424-97.675-56.501-13.105-35.077 5.547-72.642 33.84-85.32 1.223 20.69 4.974 42.56 21.24 69.075-10.024 6.068-4.316 11.541-1.26 14.31s23.076 10.517 61.674 8.033c38.597-2.484 80.194-33.802 124.988-31.31 29.863 1.66 57.822 13.664 83.878 36.012l9.72 31.68ZM66.993 6.079C197.35 14.302 280.168 32.97 315.442 62.08c35.274 29.112 55.027 82.576 46.33 121.698-8.698 39.124-34.767 52.794-50.403 50.383 7.043-16.306 15.796-51.898 1.018-88.076-33.746-16.602-104.344-24.918-211.793-24.947-1.357-1.697-12.558-40.05-33.601-115.06Z"),c(e,"class","icon"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"width","491.52"),c(e,"height","491.52"),c(e,"viewBox","0 0 368.64 368.64")},m(o,n){x(o,e,n),$(e,r),$(e,t)},p:g,i:g,o:g,d(o){o&&u(e)}}}class Ie extends C{constructor(e){super(),S(this,e,null,Be,A,{})}}function Ae(s){let e,r;return e=new se({props:{slot:"icon"}}),{c(){k(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,o){z(e,t,o),r=!0},p:g,i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function Ce(s){let e,r;return e=new Ie({props:{slot:"icon"}}),{c(){k(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,o){z(e,t,o),r=!0},p:g,i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function Se(s){let e,r,t,o;return e=new D({props:{href:j.home(),text:"Monado Recipes",$$slots:{icon:[Ae]},$$scope:{ctx:s}}}),t=new D({props:{href:"https://auroratide.com",text:"Made by Auroratide",$$slots:{icon:[Ce]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment),r=M(),k(t.$$.fragment)},l(n){E(e.$$.fragment,n),r=O(n),E(t.$$.fragment,n)},m(n,i){z(e,n,i),x(n,r,i),z(t,n,i),o=!0},p(n,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:n}),e.$set(m);const a={};i&1&&(a.$$scope={dirty:i,ctx:n}),t.$set(a)},i(n){o||(d(e.$$.fragment,n),d(t.$$.fragment,n),o=!0)},o(n){_(e.$$.fragment,n),_(t.$$.fragment,n),o=!1},d(n){n&&u(r),y(e,n),y(t,n)}}}function Le(s){let e,r;return e=new xe({props:{slot:"icon"}}),{c(){k(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,o){z(e,t,o),r=!0},p:g,i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function Me(s){let e,r;return e=new ye({props:{slot:"icon"}}),{c(){k(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,o){z(e,t,o),r=!0},p:g,i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function Oe(s){let e,r;return e=new Ee({props:{slot:"icon"}}),{c(){k(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,o){z(e,t,o),r=!0},p:g,i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function De(s){let e,r;return e=new se({props:{slot:"icon"}}),{c(){k(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,o){z(e,t,o),r=!0},p:g,i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function Re(s){let e,r,t,o,n,i,m,a;return e=new D({props:{href:j.about(),text:"About",$$slots:{icon:[Le]},$$scope:{ctx:s}}}),t=new D({props:{href:j.legalDisclaimers(),text:"Legal Disclaimers",$$slots:{icon:[Me]},$$scope:{ctx:s}}}),n=new D({props:{href:ce.source,text:"Open source",$$slots:{icon:[Oe]},$$scope:{ctx:s}}}),m=new D({props:{printOnly:!0,href:j.home(),text:"Recipe by monado.recipes",$$slots:{icon:[De]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment),r=M(),k(t.$$.fragment),o=M(),k(n.$$.fragment),i=M(),k(m.$$.fragment)},l(l){E(e.$$.fragment,l),r=O(l),E(t.$$.fragment,l),o=O(l),E(n.$$.fragment,l),i=O(l),E(m.$$.fragment,l)},m(l,f){z(e,l,f),x(l,r,f),z(t,l,f),x(l,o,f),z(n,l,f),x(l,i,f),z(m,l,f),a=!0},p(l,f){const h={};f&1&&(h.$$scope={dirty:f,ctx:l}),e.$set(h);const v={};f&1&&(v.$$scope={dirty:f,ctx:l}),t.$set(v);const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),n.$set(L);const R={};f&1&&(R.$$scope={dirty:f,ctx:l}),m.$set(R)},i(l){a||(d(e.$$.fragment,l),d(t.$$.fragment,l),d(n.$$.fragment,l),d(m.$$.fragment,l),a=!0)},o(l){_(e.$$.fragment,l),_(t.$$.fragment,l),_(n.$$.fragment,l),_(m.$$.fragment,l),a=!1},d(l){l&&(u(r),u(o),u(i)),y(e,l),y(t,l),y(n,l),y(m,l)}}}function Ue(s){let e,r;return e=new pe({props:{$$slots:{right:[Re],left:[Se]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,o){z(e,t,o),r=!0},p(t,[o]){const n={};o&1&&(n.$$scope={dirty:o,ctx:t}),e.$set(n)},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}class Qe extends C{constructor(e){super(),S(this,e,null,Ue,A,{})}}function Ze(s){let e,r=`url(${s[0]})`;return{c(){e=B("div"),this.h()},l(t){e=I(t,"DIV",{class:!0,"aria-hidden":!0}),p(e).forEach(u),this.h()},h(){c(e,"class","backdrop svelte-t55j3j"),c(e,"aria-hidden","true"),Z(e,"--url",r)},m(t,o){x(t,e,o)},p(t,[o]){o&1&&r!==(r=`url(${t[0]})`)&&Z(e,"--url",r)},i:g,o:g,d(t){t&&u(e)}}}function Fe(s,e,r){let{scene:t}=e;return s.$$set=o=>{"scene"in o&&r(0,t=o.scene)},[t]}class Xe extends C{constructor(e){super(),S(this,e,Fe,Ze,A,{scene:0})}}const qe=""+new URL("../assets/titans.DNzR8eNG.webp",import.meta.url).href,Ne=""+new URL("../assets/torna-camp.DGa5Qz1T.webp",import.meta.url).href,Pe=""+new URL("../assets/zeon.DHJC1jjK.webp",import.meta.url).href,Je={Titans:qe,TornaCamp:Ne,Zeon:Pe},We="Fan-made repository of recipes based on food found in the Xenoblade Chroniocles games.";export{Ve as A,ye as B,V as C,ce as E,le as F,U as S,j as U,ae as a,se as b,Te as c,Xe as d,Qe as e,Je as f,Ke as g,xe as h,We as s};
