import{S as F,i as H,s as L,k as d,a as P,l as h,m as g,h as c,c as y,n as E,b as _,G as p,g as k,v as re,f as ae,d as w,W as ee,q as D,r as T,u as j,C as X,D as K,E as Z,F as x,I as me,J as Re,p as le,H as q,e as M,y as A,z as N,A as C,B as O,X as Be,Y as je}from"../chunks/index.eb3b8662.js";import{P as qe}from"../chunks/Page.3b170f3d.js";import{F as ie,C as B,S as W}from"../chunks/BackdropScene.0c53fbb6.js";import{T as te}from"../chunks/TitledPanel.4c108542.js";import{T as Fe}from"../chunks/TriangleCorners.09815722.js";import{E as _e,V as He}from"../chunks/VisuallyHidden.3b9c79b9.js";import{B as ne}from"../chunks/BasicPanel.78a850cd.js";function pe(i,e,n){const t=i.slice();return t[4]=e[n],t}const Le=i=>({item:i&1}),$e=i=>({item:i[4]});function de(i,e,n){const t=i.slice();return t[7]=e[n],t}function he(i){let e,n=i[7]+"",t,l;return{c(){e=d("th"),t=D(n),l=P(),this.h()},l(s){e=h(s,"TH",{class:!0});var r=g(e);t=T(r,n),l=y(r),r.forEach(c),this.h()},h(){E(e,"class",ie.size.stars(1)+" "+B.text.muted()+" normal-weight svelte-w3e9yn")},m(s,r){_(s,e,r),p(e,t),p(e,l)},p(s,r){r&2&&n!==(n=s[7]+"")&&j(t,n)},d(s){s&&c(e)}}}function ge(i){let e,n,t;const l=i[3].default,s=X(l,i,i[2],$e);return{c(){e=d("tr"),s&&s.c(),n=P(),this.h()},l(r){e=h(r,"TR",{class:!0});var a=g(e);s&&s.l(a),n=y(a),a.forEach(c),this.h()},h(){E(e,"class",B.background.medium()+" "+Fe({})+" svelte-w3e9yn")},m(r,a){_(r,e,a),s&&s.m(e,null),p(e,n),t=!0},p(r,a){s&&s.p&&(!t||a&5)&&K(s,l,r,r[2],t?x(l,r[2],a,Le):Z(r[2]),$e)},i(r){t||(k(s,r),t=!0)},o(r){w(s,r),t=!1},d(r){r&&c(e),s&&s.d(r)}}}function Me(i){let e,n,t,l,s,r=i[1],a=[];for(let m=0;m<r.length;m+=1)a[m]=he(de(i,r,m));let f=i[0],o=[];for(let m=0;m<f.length;m+=1)o[m]=ge(pe(i,f,m));const v=m=>w(o[m],1,1,()=>{o[m]=null});return{c(){e=d("table"),n=d("thead");for(let m=0;m<a.length;m+=1)a[m].c();t=P(),l=d("tbody");for(let m=0;m<o.length;m+=1)o[m].c();this.h()},l(m){e=h(m,"TABLE",{class:!0});var S=g(e);n=h(S,"THEAD",{});var u=g(n);for(let I=0;I<a.length;I+=1)a[I].l(u);u.forEach(c),t=y(S),l=h(S,"TBODY",{});var b=g(l);for(let I=0;I<o.length;I+=1)o[I].l(b);b.forEach(c),S.forEach(c),this.h()},h(){E(e,"class","spaced-rows full-width svelte-w3e9yn")},m(m,S){_(m,e,S),p(e,n);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(n,null);p(e,t),p(e,l);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(l,null);s=!0},p(m,[S]){if(S&2){r=m[1];let u;for(u=0;u<r.length;u+=1){const b=de(m,r,u);a[u]?a[u].p(b,S):(a[u]=he(b),a[u].c(),a[u].m(n,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=r.length}if(S&5){f=m[0];let u;for(u=0;u<f.length;u+=1){const b=pe(m,f,u);o[u]?(o[u].p(b,S),k(o[u],1)):(o[u]=ge(b),o[u].c(),k(o[u],1),o[u].m(l,null))}for(re(),u=f.length;u<o.length;u+=1)v(u);ae()}},i(m){if(!s){for(let S=0;S<f.length;S+=1)k(o[S]);s=!0}},o(m){o=o.filter(Boolean);for(let S=0;S<o.length;S+=1)w(o[S]);s=!1},d(m){m&&c(e),ee(a,m),ee(o,m)}}}function ze(i,e,n){let{$$slots:t={},$$scope:l}=e,{items:s}=e,{headings:r}=e;return i.$$set=a=>{"items"in a&&n(0,s=a.items),"headings"in a&&n(1,r=a.headings),"$$scope"in a&&n(2,l=a.$$scope)},[s,r,l,t]}class Qe extends F{constructor(e){super(),H(this,e,ze,Me,L,{items:0,headings:1})}}function Ve(i){let e,n,t,l;const s=i[2].default,r=X(s,i,i[1],null);return{c(){e=d("td"),n=d("span"),r&&r.c(),this.h()},l(a){e=h(a,"TD",{class:!0});var f=g(e);n=h(f,"SPAN",{class:!0,style:!0});var o=g(n);r&&r.l(o),o.forEach(c),f.forEach(c),this.h()},h(){E(n,"class",t=W.centeredLabel({alignment:i[0]})),E(n,"style",W.stars(3)),E(e,"class","svelte-qb197f")},m(a,f){_(a,e,f),p(e,n),r&&r.m(n,null),l=!0},p(a,[f]){r&&r.p&&(!l||f&2)&&K(r,s,a,a[1],l?x(s,a[1],f,null):Z(a[1]),null),(!l||f&1&&t!==(t=W.centeredLabel({alignment:a[0]})))&&E(n,"class",t)},i(a){l||(k(r,a),l=!0)},o(a){w(r,a),l=!1},d(a){a&&c(e),r&&r.d(a)}}}function Ge(i,e,n){let{$$slots:t={},$$scope:l}=e,{align:s="left"}=e;return i.$$set=r=>{"align"in r&&n(0,s=r.align),"$$scope"in r&&n(1,l=r.$$scope)},[s,l,t]}class ve extends F{constructor(e){super(),H(this,e,Ge,Ve,L,{align:0})}}function Ue(i){let e,n,t,l;const s=i[2].default,r=X(s,i,i[1],null);return{c(){e=d("td"),n=d("span"),r&&r.c(),this.h()},l(a){e=h(a,"TD",{class:!0});var f=g(e);n=h(f,"SPAN",{class:!0,style:!0});var o=g(n);r&&r.l(o),o.forEach(c),f.forEach(c),this.h()},h(){E(n,"class",t=W.centeredIcon({alignment:i[0]})),E(n,"style",W.stars(3)),E(e,"class","svelte-qb197f")},m(a,f){_(a,e,f),p(e,n),r&&r.m(n,null),l=!0},p(a,[f]){r&&r.p&&(!l||f&2)&&K(r,s,a,a[1],l?x(s,a[1],f,null):Z(a[1]),null),(!l||f&1&&t!==(t=W.centeredIcon({alignment:a[0]})))&&E(n,"class",t)},i(a){l||(k(r,a),l=!0)},o(a){w(r,a),l=!1},d(a){a&&c(e),r&&r.d(a)}}}function Ye(i,e,n){let{$$slots:t={},$$scope:l}=e,{align:s="left"}=e;return i.$$set=r=>{"align"in r&&n(0,s=r.align),"$$scope"in r&&n(1,l=r.$$scope)},[s,l,t]}class Je extends F{constructor(e){super(),H(this,e,Ye,Ue,L,{align:0})}}function We(i){let e,n,t,l,s,r;const a=i[3].default,f=X(a,i,i[2],null);return{c(){e=d("section"),n=d("img"),l=P(),s=d("div"),f&&f.c(),this.h()},l(o){e=h(o,"SECTION",{class:!0});var v=g(e);n=h(v,"IMG",{src:!0,alt:!0,class:!0}),l=y(v),s=h(v,"DIV",{class:!0});var m=g(s);f&&f.l(m),m.forEach(c),v.forEach(c),this.h()},h(){me(n.src,t=i[0])||E(n,"src",t),E(n,"alt",i[1]),E(n,"class",Re(_e())+" svelte-1cj976k"),E(s,"class",ie.size.stars(2)+" lined svelte-1cj976k"),E(e,"class",B.background.light()+" "+B.text.dark()+" "+_e()+" padded column svelte-1cj976k")},m(o,v){_(o,e,v),p(e,n),p(e,l),p(e,s),f&&f.m(s,null),r=!0},p(o,[v]){(!r||v&1&&!me(n.src,t=o[0]))&&E(n,"src",t),(!r||v&2)&&E(n,"alt",o[1]),f&&f.p&&(!r||v&4)&&K(f,a,o,o[2],r?x(a,o[2],v,null):Z(o[2]),null)},i(o){r||(k(f,o),r=!0)},o(o){w(f,o),r=!1},d(o){o&&c(e),f&&f.d(o)}}}function Xe(i,e,n){let{$$slots:t={},$$scope:l}=e,{imageSrc:s}=e,{imageAlt:r}=e;return i.$$set=a=>{"imageSrc"in a&&n(0,s=a.imageSrc),"imageAlt"in a&&n(1,r=a.imageAlt),"$$scope"in a&&n(2,l=a.$$scope)},[s,r,l,t]}class Ke extends F{constructor(e){super(),H(this,e,Xe,We,L,{imageSrc:0,imageAlt:1})}}function be(i){let e;return{c(){e=d("span"),this.h()},l(n){e=h(n,"SPAN",{class:!0}),g(e).forEach(c),this.h()},h(){E(e,"class","diamond overlap-left middle "+B.border.regular()+" svelte-wfybjp")},m(n,t){_(n,e,t)},p:q,d(n){n&&c(e)}}}function Ee(i){let e;return{c(){e=d("span"),this.h()},l(n){e=h(n,"SPAN",{class:!0}),g(e).forEach(c),this.h()},h(){E(e,"class","diamond overlap-left bottom "+B.border.regular()+" svelte-wfybjp")},m(n,t){_(n,e,t)},p:q,d(n){n&&c(e)}}}function Ze(i){let e,n,t,l,s=i[0]>1&&be(),r=i[0]>2&&Ee();return{c(){e=d("span"),n=d("span"),t=P(),s&&s.c(),l=P(),r&&r.c(),this.h()},l(a){e=h(a,"SPAN",{class:!0,role:!0,"aria-label":!0,title:!0});var f=g(e);n=h(f,"SPAN",{class:!0}),g(n).forEach(c),t=y(f),s&&s.l(f),l=y(f),r&&r.l(f),f.forEach(c),this.h()},h(){E(n,"class","diamond top "+B.border.regular()+" svelte-wfybjp"),E(e,"class","max-rarity-width centered isolated svelte-wfybjp"),E(e,"role","img"),E(e,"aria-label",i[2]),E(e,"title",i[2]),le(e,"--icon-bg",i[1])},m(a,f){_(a,e,f),p(e,n),p(e,t),s&&s.m(e,null),p(e,l),r&&r.m(e,null)},p(a,[f]){a[0]>1?s?s.p(a,f):(s=be(),s.c(),s.m(e,l)):s&&(s.d(1),s=null),a[0]>2?r?r.p(a,f):(r=Ee(),r.c(),r.m(e,null)):r&&(r.d(1),r=null),f&4&&E(e,"aria-label",a[2]),f&4&&E(e,"title",a[2]),f&2&&le(e,"--icon-bg",a[1])},i:q,o:q,d(a){a&&c(e),s&&s.d(),r&&r.d()}}}function xe(i,e,n){let t,l,{rarity:s}=e;const r=[B.valueOf(B.icon.common()),B.valueOf(B.icon.uncommon()),B.valueOf(B.icon.rare())];return i.$$set=a=>{"rarity"in a&&n(0,s=a.rarity)},i.$$.update=()=>{i.$$.dirty&1&&n(2,t=`Rarity ${s}`),i.$$.dirty&1&&n(1,l=r[s-1])},[s,l,t]}class Ne extends F{constructor(e){super(),H(this,e,xe,Ze,L,{rarity:0})}}const se={Teaspoons:"teaspoons",Tablespoons:"tablespoons",Cups:"cups",Pounds:"pounds",Quantity:"quantity"},ke=(i,e)=>i===se.Quantity?i:et(e)<=1?i.substring(0,i.length-1):i,et=i=>i.numerator/i.denominator;function tt(i){let e,n,t,l;return{c(){e=d("span"),n=D(i[1]),t=D("/"),l=D(i[0])},l(s){e=h(s,"SPAN",{});var r=g(e);n=T(r,i[1]),t=T(r,"/"),l=T(r,i[0]),r.forEach(c)},m(s,r){_(s,e,r),p(e,n),p(e,t),p(e,l)},p(s,r){r&2&&j(n,s[1]),r&1&&j(l,s[0])},d(s){s&&c(e)}}}function lt(i){let e,n;return{c(){e=d("span"),n=D(i[2])},l(t){e=h(t,"SPAN",{});var l=g(e);n=T(l,i[2]),l.forEach(c)},m(t,l){_(t,e,l),p(e,n)},p(t,l){l&4&&j(n,t[2])},d(t){t&&c(e)}}}function nt(i){let e;function n(s,r){return s[2]!==""?lt:tt}let t=n(i),l=t(i);return{c(){l.c(),e=M()},l(s){l.l(s),e=M()},m(s,r){l.m(s,r),_(s,e,r)},p(s,[r]){t===(t=n(s))&&l?l.p(s,r):(l.d(1),l=t(s),l&&(l.c(),l.m(e.parentNode,e)))},i:q,o:q,d(s){l.d(s),s&&c(e)}}}function st(i,e,n){let t,l,{numerator:s}=e,{denominator:r}=e,a="";return i.$$set=f=>{"numerator"in f&&n(3,s=f.numerator),"denominator"in f&&n(4,r=f.denominator)},i.$$.update=()=>{i.$$.dirty&8&&n(1,t=s),i.$$.dirty&16&&n(0,l=r),i.$$.dirty&3&&(t===1&&l===2?n(2,a="½"):t===1&&l===3?n(2,a="⅓"):t===2&&l===3?n(2,a="⅔"):t===1&&l===4?n(2,a="¼"):t===3&&l===4?n(2,a="¾"):t===1&&l===5?n(2,a="⅕"):t===2&&l===5?n(2,a="⅖"):t===3&&l===5?n(2,a="⅗"):t===4&&l===5?n(2,a="⅘"):t===1&&l===6?n(2,a="⅙"):t===5&&l===6?n(2,a="⅚"):t===1&&l===7?n(2,a="⅐"):t===1&&l===8?n(2,a="⅛"):t===3&&l===8?n(2,a="⅜"):t===5&&l===8?n(2,a="⅝"):t===7&&l===8?n(2,a="⅞"):t===1&&l===9?n(2,a="⅑"):t===1&&l===10?n(2,a="⅒"):n(2,a=""))},[l,t,a,s,r]}class rt extends F{constructor(e){super(),H(this,e,st,nt,L,{numerator:3,denominator:4})}}function we(i){let e,n;return{c(){e=d("span"),n=D(i[2])},l(t){e=h(t,"SPAN",{});var l=g(e);n=T(l,i[2]),l.forEach(c)},m(t,l){_(t,e,l),p(e,n)},p(t,l){l&4&&j(n,t[2])},d(t){t&&c(e)}}}function Se(i){let e,n;return e=new rt({props:{numerator:i[1],denominator:i[0].amount.denominator}}),{c(){A(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){C(e,t,l),n=!0},p(t,l){const s={};l&2&&(s.numerator=t[1]),l&1&&(s.denominator=t[0].amount.denominator),e.$set(s)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function De(i){let e,n=ke(i[0].unit,i[0].amount)+"",t;return{c(){e=d("span"),t=D(n)},l(l){e=h(l,"SPAN",{});var s=g(e);t=T(s,n),s.forEach(c)},m(l,s){_(l,e,s),p(e,t)},p(l,s){s&1&&n!==(n=ke(l[0].unit,l[0].amount)+"")&&j(t,n)},d(l){l&&c(e)}}}function at(i){let e,n,t,l,s=i[2]>0&&we(i),r=i[1]>0&&Se(i),a=i[0].unit!==se.Quantity&&De(i);return{c(){e=d("span"),s&&s.c(),n=M(),r&&r.c(),t=P(),a&&a.c()},l(f){e=h(f,"SPAN",{});var o=g(e);s&&s.l(o),n=M(),r&&r.l(o),t=y(o),a&&a.l(o),o.forEach(c)},m(f,o){_(f,e,o),s&&s.m(e,null),p(e,n),r&&r.m(e,null),p(e,t),a&&a.m(e,null),l=!0},p(f,[o]){f[2]>0?s?s.p(f,o):(s=we(f),s.c(),s.m(e,n)):s&&(s.d(1),s=null),f[1]>0?r?(r.p(f,o),o&2&&k(r,1)):(r=Se(f),r.c(),k(r,1),r.m(e,t)):r&&(re(),w(r,1,1,()=>{r=null}),ae()),f[0].unit!==se.Quantity?a?a.p(f,o):(a=De(f),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i(f){l||(k(r),l=!0)},o(f){w(r),l=!1},d(f){f&&c(e),s&&s.d(),r&&r.d(),a&&a.d()}}}function it(i,e,n){let t,l,{value:s}=e;return i.$$set=r=>{"value"in r&&n(0,s=r.value)},i.$$.update=()=>{i.$$.dirty&1&&n(2,t=Math.floor(s.amount.numerator/s.amount.denominator)),i.$$.dirty&1&&n(1,l=s.amount.numerator%s.amount.denominator)},[s,l,t]}class ft extends F{constructor(e){super(),H(this,e,it,at,L,{value:0})}}function Te(i,e,n){const t=i.slice();return t[1]=e[n],t}function Ie(i){let e,n,t=i[1]+"",l;return{c(){e=d("li"),n=d("p"),l=D(t),this.h()},l(s){e=h(s,"LI",{class:!0});var r=g(e);n=h(r,"P",{});var a=g(n);l=T(a,t),a.forEach(c),r.forEach(c),this.h()},h(){E(e,"class","svelte-f7n8t0")},m(s,r){_(s,e,r),p(e,n),p(n,l)},p(s,r){r&1&&t!==(t=s[1]+"")&&j(l,t)},d(s){s&&c(e)}}}function ot(i){let e,n=i[0],t=[];for(let l=0;l<n.length;l+=1)t[l]=Ie(Te(i,n,l));return{c(){e=d("ol");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=h(l,"OL",{class:!0});var s=g(e);for(let r=0;r<t.length;r+=1)t[r].l(s);s.forEach(c),this.h()},h(){E(e,"class","svelte-f7n8t0")},m(l,s){_(l,e,s);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null)},p(l,[s]){if(s&1){n=l[0];let r;for(r=0;r<n.length;r+=1){const a=Te(l,n,r);t[r]?t[r].p(a,s):(t[r]=Ie(a),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=n.length}},i:q,o:q,d(l){l&&c(e),ee(t,l)}}}function ct(i,e,n){let{steps:t}=e;return i.$$set=l=>{"steps"in l&&n(0,t=l.steps)},[t]}class ut extends F{constructor(e){super(),H(this,e,ct,ot,L,{steps:0})}}const Ce=()=>"two-one-column";const mt=()=>"one-column";function _t(i){let e,n;const t=i[1].default,l=X(t,i,i[0],null);return{c(){e=d("dl"),l&&l.c(),this.h()},l(s){e=h(s,"DL",{class:!0});var r=g(e);l&&l.l(r),r.forEach(c),this.h()},h(){E(e,"class","svelte-1e3510l")},m(s,r){_(s,e,r),l&&l.m(e,null),n=!0},p(s,[r]){l&&l.p&&(!n||r&1)&&K(l,t,s,s[0],n?x(t,s[0],r,null):Z(s[0]),null)},i(s){n||(k(l,s),n=!0)},o(s){w(l,s),n=!1},d(s){s&&c(e),l&&l.d(s)}}}function pt(i,e,n){let{$$slots:t={},$$scope:l}=e;return i.$$set=s=>{"$$scope"in s&&n(0,l=s.$$scope)},[l,t]}class Oe extends F{constructor(e){super(),H(this,e,pt,_t,L,{})}}function $t(i){let e,n;return{c(){e=new Be(!1),n=M(),this.h()},l(t){e=je(t,!1),n=M(),this.h()},h(){e.a=n},m(t,l){e.m(i[0],t,l),_(t,n,l)},p(t,[l]){l&1&&e.p(t[0])},i:q,o:q,d(t){t&&c(n),t&&e.d()}}}function dt(i,e,n){let{value:t}=e;return i.$$set=l=>{"value"in l&&n(0,t=l.value)},[t]}class ht extends F{constructor(e){super(),H(this,e,dt,$t,L,{value:0})}}function Pe(i,e,n){const t=i.slice();return t[1]=e[n],t}function gt(i){let e,n=i[0].description+"",t;return{c(){e=d("p"),t=D(n)},l(l){e=h(l,"P",{});var s=g(e);t=T(s,n),s.forEach(c)},m(l,s){_(l,e,s),p(e,t)},p(l,s){s&1&&n!==(n=l[0].description+"")&&j(t,n)},d(l){l&&c(e)}}}function vt(i){let e,n,t,l,s=i[0].timeInMinutes+"",r,a,f,o,v,m,S,u=i[0].source+"",b,I,z,U,G,Q,V,Y;return V=new Ne({props:{rarity:i[0].rarity}}),{c(){e=d("dt"),n=D("Time"),t=P(),l=d("dd"),r=D(s),a=D(" min"),f=P(),o=d("dt"),v=D("Source"),m=P(),S=d("dd"),b=D(u),I=P(),z=d("dt"),U=D("Rarity"),G=P(),Q=d("dd"),A(V.$$.fragment)},l($){e=h($,"DT",{});var R=g(e);n=T(R,"Time"),R.forEach(c),t=y($),l=h($,"DD",{});var J=g(l);r=T(J,s),a=T(J," min"),J.forEach(c),f=y($),o=h($,"DT",{});var fe=g(o);v=T(fe,"Source"),fe.forEach(c),m=y($),S=h($,"DD",{});var oe=g(S);b=T(oe,u),oe.forEach(c),I=y($),z=h($,"DT",{});var ce=g(z);U=T(ce,"Rarity"),ce.forEach(c),G=y($),Q=h($,"DD",{});var ue=g(Q);N(V.$$.fragment,ue),ue.forEach(c)},m($,R){_($,e,R),p(e,n),_($,t,R),_($,l,R),p(l,r),p(l,a),_($,f,R),_($,o,R),p(o,v),_($,m,R),_($,S,R),p(S,b),_($,I,R),_($,z,R),p(z,U),_($,G,R),_($,Q,R),C(V,Q,null),Y=!0},p($,R){(!Y||R&1)&&s!==(s=$[0].timeInMinutes+"")&&j(r,s),(!Y||R&1)&&u!==(u=$[0].source+"")&&j(b,u);const J={};R&1&&(J.rarity=$[0].rarity),V.$set(J)},i($){Y||(k(V.$$.fragment,$),Y=!0)},o($){w(V.$$.fragment,$),Y=!1},d($){$&&c(e),$&&c(t),$&&c(l),$&&c(f),$&&c(o),$&&c(m),$&&c(S),$&&c(I),$&&c(z),$&&c(G),$&&c(Q),O(V)}}}function bt(i){let e,n;return e=new Oe({props:{$$slots:{default:[vt]},$$scope:{ctx:i}}}),{c(){A(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){C(e,t,l),n=!0},p(t,l){const s={};l&33&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function ye(i){let e,n,t=i[4].preparation+"",l,s;return{c(){e=d("span"),n=D("("),l=D(t),s=D(")"),this.h()},l(r){e=h(r,"SPAN",{class:!0});var a=g(e);n=T(a,"("),l=T(a,t),s=T(a,")"),a.forEach(c),this.h()},h(){E(e,"class",ie.size.stars(1))},m(r,a){_(r,e,a),p(e,n),p(e,l),p(e,s)},p(r,a){a&16&&t!==(t=r[4].preparation+"")&&j(l,t)},d(r){r&&c(e)}}}function Et(i){let e,n=i[4].name+"",t,l,s=i[4].preparation&&ye(i);return{c(){e=d("span"),t=D(n),l=P(),s&&s.c()},l(r){e=h(r,"SPAN",{});var a=g(e);t=T(a,n),l=y(a),s&&s.l(a),a.forEach(c)},m(r,a){_(r,e,a),p(e,t),p(e,l),s&&s.m(e,null)},p(r,a){a&16&&n!==(n=r[4].name+"")&&j(t,n),r[4].preparation?s?s.p(r,a):(s=ye(r),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(r){r&&c(e),s&&s.d()}}}function kt(i){let e,n;return e=new Ne({props:{rarity:i[4].rarity}}),{c(){A(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){C(e,t,l),n=!0},p(t,l){const s={};l&16&&(s.rarity=t[4].rarity),e.$set(s)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function wt(i){let e,n;return{c(){e=d("span"),n=D("—")},l(t){e=h(t,"SPAN",{});var l=g(e);n=T(l,"—"),l.forEach(c)},m(t,l){_(t,e,l),p(e,n)},p:q,i:q,o:q,d(t){t&&c(e)}}}function St(i){let e,n,t;return n=new ft({props:{value:i[4].measure}}),{c(){e=d("span"),A(n.$$.fragment),this.h()},l(l){e=h(l,"SPAN",{class:!0});var s=g(e);N(n.$$.fragment,s),s.forEach(c),this.h()},h(){E(e,"class",B.text.emphasized())},m(l,s){_(l,e,s),C(n,e,null),t=!0},p(l,s){const r={};s&16&&(r.value=l[4].measure),n.$set(r)},i(l){t||(k(n.$$.fragment,l),t=!0)},o(l){w(n.$$.fragment,l),t=!1},d(l){l&&c(e),O(n)}}}function Dt(i){let e,n,t,l;const s=[St,wt],r=[];function a(f,o){return f[4].measure?0:1}return e=a(i),n=r[e]=s[e](i),{c(){n.c(),t=M()},l(f){n.l(f),t=M()},m(f,o){r[e].m(f,o),_(f,t,o),l=!0},p(f,o){let v=e;e=a(f),e===v?r[e].p(f,o):(re(),w(r[v],1,1,()=>{r[v]=null}),ae(),n=r[e],n?n.p(f,o):(n=r[e]=s[e](f),n.c()),k(n,1),n.m(t.parentNode,t))},i(f){l||(k(n),l=!0)},o(f){w(n),l=!1},d(f){r[e].d(f),f&&c(t)}}}function Tt(i){let e,n,t,l,s,r;return e=new ve({props:{$$slots:{default:[Et]},$$scope:{ctx:i}}}),t=new Je({props:{align:"center",$$slots:{default:[kt]},$$scope:{ctx:i}}}),s=new ve({props:{align:"center",$$slots:{default:[Dt]},$$scope:{ctx:i}}}),{c(){A(e.$$.fragment),n=P(),A(t.$$.fragment),l=P(),A(s.$$.fragment)},l(a){N(e.$$.fragment,a),n=y(a),N(t.$$.fragment,a),l=y(a),N(s.$$.fragment,a)},m(a,f){C(e,a,f),_(a,n,f),C(t,a,f),_(a,l,f),C(s,a,f),r=!0},p(a,f){const o={};f&48&&(o.$$scope={dirty:f,ctx:a}),e.$set(o);const v={};f&48&&(v.$$scope={dirty:f,ctx:a}),t.$set(v);const m={};f&48&&(m.$$scope={dirty:f,ctx:a}),s.$set(m)},i(a){r||(k(e.$$.fragment,a),k(t.$$.fragment,a),k(s.$$.fragment,a),r=!0)},o(a){w(e.$$.fragment,a),w(t.$$.fragment,a),w(s.$$.fragment,a),r=!1},d(a){O(e,a),a&&c(n),O(t,a),a&&c(l),O(s,a)}}}function It(i){let e,n;return e=new Qe({props:{headings:["Name","Rarity","Needed"],items:i[0].ingredients,$$slots:{default:[Tt,({item:t})=>({4:t}),({item:t})=>t?16:0]},$$scope:{ctx:i}}}),{c(){A(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){C(e,t,l),n=!0},p(t,l){const s={};l&1&&(s.items=t[0].ingredients),l&48&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Pt(i){let e,n;return e=new ut({props:{steps:i[0].directions.steps}}),{c(){A(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){C(e,t,l),n=!0},p(t,l){const s={};l&1&&(s.steps=t[0].directions.steps),e.$set(s)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Ae(i){let e,n=i[1][0]+"",t,l,s,r,a=i[1][1]+"",f;return{c(){e=d("dt"),t=D(n),l=P(),s=d("dd"),r=D("×"),f=D(a)},l(o){e=h(o,"DT",{});var v=g(e);t=T(v,n),v.forEach(c),l=y(o),s=h(o,"DD",{});var m=g(s);r=T(m,"×"),f=T(m,a),m.forEach(c)},m(o,v){_(o,e,v),p(e,t),_(o,l,v),_(o,s,v),p(s,r),p(s,f)},p(o,v){v&1&&n!==(n=o[1][0]+"")&&j(t,n),v&1&&a!==(a=o[1][1]+"")&&j(f,a)},d(o){o&&c(e),o&&c(l),o&&c(s)}}}function yt(i){let e,n=Object.entries(i[0].gameIngredients),t=[];for(let l=0;l<n.length;l+=1)t[l]=Ae(Pe(i,n,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=M()},l(l){for(let s=0;s<t.length;s+=1)t[s].l(l);e=M()},m(l,s){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(l,s);_(l,e,s)},p(l,s){if(s&1){n=Object.entries(l[0].gameIngredients);let r;for(r=0;r<n.length;r+=1){const a=Pe(l,n,r);t[r]?t[r].p(a,s):(t[r]=Ae(a),t[r].c(),t[r].m(e.parentNode,e))}for(;r<t.length;r+=1)t[r].d(1);t.length=n.length}},d(l){ee(t,l),l&&c(e)}}}function At(i){let e,n;return e=new Oe({props:{$$slots:{default:[yt]},$$scope:{ctx:i}}}),{c(){A(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){C(e,t,l),n=!0},p(t,l){const s={};l&33&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Nt(i){let e,n,t,l,s;return l=new ht({props:{value:i[0].interpretation}}),{c(){e=d("h3"),n=D("Description"),t=P(),A(l.$$.fragment),this.h()},l(r){e=h(r,"H3",{class:!0});var a=g(e);n=T(a,"Description"),a.forEach(c),t=y(r),N(l.$$.fragment,r),this.h()},h(){E(e,"class",He())},m(r,a){_(r,e,a),p(e,n),_(r,t,a),C(l,r,a),s=!0},p(r,a){const f={};a&1&&(f.value=r[0].interpretation),l.$set(f)},i(r){s||(k(l.$$.fragment,r),s=!0)},o(r){w(l.$$.fragment,r),s=!1},d(r){r&&c(e),r&&c(t),O(l,r)}}}function Ct(i){let e,n,t,l,s;return n=new ne({props:{title:"Game Ingredients",titleLevel:3,$$slots:{default:[At]},$$scope:{ctx:i}}}),l=new ne({props:{$$slots:{default:[Nt]},$$scope:{ctx:i}}}),{c(){e=d("div"),A(n.$$.fragment),t=P(),A(l.$$.fragment),this.h()},l(r){e=h(r,"DIV",{class:!0});var a=g(e);N(n.$$.fragment,a),t=y(a),N(l.$$.fragment,a),a.forEach(c),this.h()},h(){E(e,"class",Ce()),le(e,"--container-width","calc(1050px - 2rem)")},m(r,a){_(r,e,a),C(n,e,null),p(e,t),C(l,e,null),s=!0},p(r,a){const f={};a&33&&(f.$$scope={dirty:a,ctx:r}),n.$set(f);const o={};a&33&&(o.$$scope={dirty:a,ctx:r}),l.$set(o)},i(r){s||(k(n.$$.fragment,r),k(l.$$.fragment,r),s=!0)},o(r){w(n.$$.fragment,r),w(l.$$.fragment,r),s=!1},d(r){r&&c(e),O(n),O(l)}}}function Ot(i){let e,n,t,l,s,r,a,f,o,v,m,S;return t=new Ke({props:{imageSrc:i[0].image.src,imageAlt:i[0].image.alt,$$slots:{default:[gt]},$$scope:{ctx:i}}}),s=new ne({props:{title:"Info",$$slots:{default:[bt]},$$scope:{ctx:i}}}),a=new te({props:{title:"Ingredients",$$slots:{default:[It]},$$scope:{ctx:i}}}),o=new te({props:{title:"Directions",$$slots:{default:[Pt]},$$scope:{ctx:i}}}),m=new te({props:{title:"Interpretation",$$slots:{default:[Ct]},$$scope:{ctx:i}}}),{c(){e=d("div"),n=d("div"),A(t.$$.fragment),l=P(),A(s.$$.fragment),r=P(),A(a.$$.fragment),f=P(),A(o.$$.fragment),v=P(),A(m.$$.fragment),this.h()},l(u){e=h(u,"DIV",{class:!0});var b=g(e);n=h(b,"DIV",{class:!0});var I=g(n);N(t.$$.fragment,I),l=y(I),N(s.$$.fragment,I),I.forEach(c),r=y(b),N(a.$$.fragment,b),b.forEach(c),f=y(u),N(o.$$.fragment,u),v=y(u),N(m.$$.fragment,u),this.h()},h(){E(n,"class",mt()),E(e,"class",Ce())},m(u,b){_(u,e,b),p(e,n),C(t,n,null),p(n,l),C(s,n,null),p(e,r),C(a,e,null),_(u,f,b),C(o,u,b),_(u,v,b),C(m,u,b),S=!0},p(u,b){const I={};b&1&&(I.imageSrc=u[0].image.src),b&1&&(I.imageAlt=u[0].image.alt),b&33&&(I.$$scope={dirty:b,ctx:u}),t.$set(I);const z={};b&33&&(z.$$scope={dirty:b,ctx:u}),s.$set(z);const U={};b&33&&(U.$$scope={dirty:b,ctx:u}),a.$set(U);const G={};b&33&&(G.$$scope={dirty:b,ctx:u}),o.$set(G);const Q={};b&33&&(Q.$$scope={dirty:b,ctx:u}),m.$set(Q)},i(u){S||(k(t.$$.fragment,u),k(s.$$.fragment,u),k(a.$$.fragment,u),k(o.$$.fragment,u),k(m.$$.fragment,u),S=!0)},o(u){w(t.$$.fragment,u),w(s.$$.fragment,u),w(a.$$.fragment,u),w(o.$$.fragment,u),w(m.$$.fragment,u),S=!1},d(u){u&&c(e),O(t),O(s),O(a),u&&c(f),O(o,u),u&&c(v),O(m,u)}}}function Rt(i){let e,n;return e=new qe({props:{title:i[0].name,$$slots:{default:[Ot]},$$scope:{ctx:i}}}),{c(){A(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){C(e,t,l),n=!0},p(t,[l]){const s={};l&1&&(s.title=t[0].name),l&33&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Bt(i,e,n){let{recipe:t}=e;return i.$$set=l=>{"recipe"in l&&n(0,t=l.recipe)},[t]}class jt extends F{constructor(e){super(),H(this,e,Bt,Rt,L,{recipe:0})}}function qt(i){let e,n;return e=new jt({props:{recipe:i[0]}}),{c(){A(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){C(e,t,l),n=!0},p(t,[l]){const s={};l&1&&(s.recipe=t[0]),e.$set(s)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Ft(i,e,n){let{data:t}=e;return i.$$set=l=>{"data"in l&&n(0,t=l.data)},[t]}class Ut extends F{constructor(e){super(),H(this,e,Ft,qt,L,{data:0})}}export{Ut as default};