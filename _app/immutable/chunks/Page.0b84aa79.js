import{S as T,i as j,s as J,k as h,q as L,a as S,l as $,m as g,r as U,h as i,c as A,n as u,K as C,b as E,G as p,u as O,H as G,C as Q,y as R,V as W,z as V,A as B,D as X,E as Y,F as Z,g as D,d as H,B as F}from"./index.27a60b89.js";import{F as K,S as M,a as I,C as y,B as x,c as ee,d as te}from"./BackdropScene.e2317fb0.js";import{U as se}from"./Url.03d6e007.js";function ae(m){let t,n,a,l,o,_,c,v,f,d,k;return{c(){t=h("header"),n=h("div"),a=h("div"),l=h("h1"),o=L(m[0]),_=S(),c=h("nav"),v=h("div"),f=h("span"),d=h("a"),k=L("More Recipes"),this.h()},l(s){t=$(s,"HEADER",{});var e=g(t);n=$(e,"DIV",{class:!0});var r=g(n);a=$(r,"DIV",{class:!0});var b=g(a);l=$(b,"H1",{class:!0,style:!0});var P=g(l);o=U(P,m[0]),P.forEach(i),b.forEach(i),r.forEach(i),_=A(e),c=$(e,"NAV",{"aria-label":!0,class:!0});var w=g(c);v=$(w,"DIV",{class:!0});var z=g(v);f=$(z,"SPAN",{class:!0,style:!0});var N=g(f);d=$(N,"A",{href:!0,class:!0});var q=g(d);k=U(q,"More Recipes"),q.forEach(i),N.forEach(i),z.forEach(i),w.forEach(i),e.forEach(i),this.h()},h(){u(l,"class",K.size.stars(5)+" "+M.centeredLabel({alignment:"left"})+" svelte-a8kvng"),u(l,"style",M.stars(5)),u(a,"class",C(I())+" svelte-a8kvng"),u(n,"class",y.background.banner()+" "+y.border.muted()+" bottom-border svelte-a8kvng"),u(d,"href",se.home()),u(d,"class",C(y.text.muted())+" svelte-a8kvng"),u(f,"class",C(M.centeredLabel({alignment:"left"}))+" svelte-a8kvng"),u(f,"style",M.stars(1)),u(v,"class",C(I())+" svelte-a8kvng"),u(c,"aria-label","Site"),u(c,"class",K.size.stars(4)+" "+y.background.dark()+" "+y.border.dark()+" bottom-border right-border rounded-corner svelte-a8kvng")},m(s,e){E(s,t,e),p(t,n),p(n,a),p(a,l),p(l,o),p(t,_),p(t,c),p(c,v),p(v,f),p(f,d),p(d,k)},p(s,[e]){e&1&&O(o,s[0])},i:G,o:G,d(s){s&&i(t)}}}function le(m,t,n){let{title:a}=t;return m.$$set=l=>{"title"in l&&n(0,a=l.title)},[a]}class re extends T{constructor(t){super(),j(this,t,le,ae,J,{title:0})}}function ne(m){let t,n,a,l,o,_,c,v,f,d;document.title=t=m[0]+" | Monado Recipes",a=new x({props:{scene:ee.TornaCamp}}),o=new re({props:{title:m[0]}});const k=m[2].default,s=Q(k,m,m[1],null);return f=new te({}),{c(){n=S(),R(a.$$.fragment),l=S(),R(o.$$.fragment),_=S(),c=h("main"),s&&s.c(),v=S(),R(f.$$.fragment),this.h()},l(e){W("svelte-524hxn",document.head).forEach(i),n=A(e),V(a.$$.fragment,e),l=A(e),V(o.$$.fragment,e),_=A(e),c=$(e,"MAIN",{class:!0});var b=g(c);s&&s.l(b),b.forEach(i),v=A(e),V(f.$$.fragment,e),this.h()},h(){u(c,"class",I()+" pad-block svelte-61hmnc")},m(e,r){E(e,n,r),B(a,e,r),E(e,l,r),B(o,e,r),E(e,_,r),E(e,c,r),s&&s.m(c,null),E(e,v,r),B(f,e,r),d=!0},p(e,[r]){(!d||r&1)&&t!==(t=e[0]+" | Monado Recipes")&&(document.title=t);const b={};r&1&&(b.title=e[0]),o.$set(b),s&&s.p&&(!d||r&2)&&X(s,k,e,e[1],d?Z(k,e[1],r,null):Y(e[1]),null)},i(e){d||(D(a.$$.fragment,e),D(o.$$.fragment,e),D(s,e),D(f.$$.fragment,e),d=!0)},o(e){H(a.$$.fragment,e),H(o.$$.fragment,e),H(s,e),H(f.$$.fragment,e),d=!1},d(e){e&&i(n),F(a,e),e&&i(l),F(o,e),e&&i(_),e&&i(c),s&&s.d(e),e&&i(v),F(f,e)}}}function oe(m,t,n){let{$$slots:a={},$$scope:l}=t,{title:o}=t;return m.$$set=_=>{"title"in _&&n(0,o=_.title),"$$scope"in _&&n(1,l=_.$$scope)},[o,l,a]}class de extends T{constructor(t){super(),j(this,t,oe,ne,J,{title:0})}}export{de as P};