import{s as z,e as d,c as u,k as x,d as h,m,i as p,a as w,g as v,b as y,p as k,t as $,l as b,q as T,n as M,T as S,U as q}from"../chunks/scheduler.wWRv3e7z.js";import{S as I,i as F,c as C,a as E,m as R,t as H,b as L,d as B}from"../chunks/index.SbCoN3ZO.js";import{P as N}from"../chunks/Page.Dxbeps2B.js";import{B as O}from"../chunks/BasicPanel.C6bdwHkM.js";import{B as W}from"../chunks/Button.DwbcBmaz.js";import{g as j}from"../chunks/site-info.0levh1Cy.js";const _={Pending:()=>({state:"Pending"}),Fetching:()=>({state:"Fetching"}),Rain:c=>({state:"Rain",forecast:c}),NoRain:()=>({state:"No Rain"}),Error:c=>({state:"Error",message:c})};async function V(){if("geolocation"in navigator)return new Promise((c,t)=>{const r=e=>{c({latitude:e.coords.latitude,longitude:e.coords.longitude})},i=e=>{t(e.message)};navigator.geolocation.getCurrentPosition(r,i)});throw new Error("Geolocation is not supported")}async function A({latitude:c,longitude:t}){const r=await fetch(`https://api.weather.gov/points/${c},${t}`).then(e=>e.json()).then(e=>e.properties.forecast);return(await fetch(r).then(e=>e.json()).then(e=>e.properties.periods)).map(e=>({name:e.name,period:{start:new Date(e.startTime),end:new Date(e.endTime)},precipitation:(e.probabilityOfPrecipitation.value??0)/100}))}const U=6048e5,Z=U,G=.29;function K(c){return c.filter(t=>t.period.start<new Date(Date.now()+Z)).find(t=>t.precipitation>G)}const P="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%208.467%208.467'%3e%3cpath%20d='M16.456%2030.652a1.642%201.642%200%200%201%201.275-1.933%201.642%201.642%200%200%201%201.94%201.266%201.642%201.642%200%200%201-1.256%201.946%201.642%201.642%200%200%201-1.952-1.246M17.75%2026.825c0-.405.63-.412.63%200v.895c0%20.382-.63.389-.63%200zM14.56%2030.641c-.406%200-.412-.629%200-.629h.894c.383%200%20.39.63%200%20.63zM20.711%2030.641c-.405%200-.412-.629%200-.629h.895c.383%200%20.39.63%200%20.63zM17.75%2032.932c0-.406.63-.412.63%200v.894c0%20.383-.63.39-.63%200zM20.153%2028.666c-.287.287-.736-.153-.445-.445l.632-.632c.271-.271.72.17.445.445zM15.755%2033.076c-.287.287-.737-.153-.445-.445l.632-.632c.27-.271.72.17.445.445ZM15.357%2028.04c-.286-.287.154-.736.445-.445l.633.633c.27.27-.17.72-.445.444zM19.8%2032.435c-.287-.287.153-.737.445-.445l.632.632c.271.271-.17.72-.445.445z'%20style='fill:%23b5efff;fill-opacity:1;stroke:%230765d6;stroke-width:.5;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke%20fill%20markers'%20transform='translate(-13.841%20-26.084)'/%3e%3c/svg%3e",X="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%208.467%208.467'%3e%3cpath%20d='M3.482%206.107c.805.681%201.471.434%202.1-.066%202.241.913%202.539-1.282%201.538-1.902.229-1.42-.785-1.684-1.769-1.455-.708-.96-2.511-1.18-2.91.513-3.01.747-1.425%204.19%201.041%202.91z'%20style='fill:%23b5efff;fill-opacity:1;stroke:%230765d6;stroke-width:.499999;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke%20fill%20markers'/%3e%3c/svg%3e",D="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%208.467%208.467'%3e%3cg%20transform='rotate(23.491%2019.475%20-78.456)'%3e%3crect%20width='.663'%20height='3.651'%20x='35.278'%20y='1.095'%20rx='.472'%20style='fill:%23b5efff;fill-opacity:1;stroke:%230765d6;stroke-width:.5;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke%20fill%20markers'/%3e%3crect%20width='.659'%20height='1.694'%20x='36.752'%20y='1.249'%20rx='.469'%20style='fill:%23b5efff;fill-opacity:1;stroke:%230765d6;stroke-width:.5;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke%20fill%20markers'/%3e%3crect%20width='.708'%20height='2.842'%20x='36.728'%20y='3.662'%20rx='.503'%20style='fill:%23b5efff;fill-opacity:1;stroke:%230765d6;stroke-width:.5;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke%20fill%20markers'/%3e%3crect%20width='.613'%20height='4.793'%20x='38.225'%20y='-.207'%20rx='.436'%20style='fill:%23b5efff;fill-opacity:1;stroke:%230765d6;stroke-width:.5;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke%20fill%20markers'/%3e%3crect%20width='.679'%20height='1.761'%20x='38.192'%20y='5.29'%20rx='.483'%20style='fill:%23b5efff;fill-opacity:1;stroke:%230765d6;stroke-width:.5;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke%20fill%20markers'/%3e%3crect%20width='.581'%20height='1.42'%20x='39.762'%20y='-.408'%20rx='.413'%20style='fill:%23b5efff;fill-opacity:1;stroke:%230765d6;stroke-width:.5;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke%20fill%20markers'/%3e%3crect%20width='.618'%20height='4.658'%20x='39.743'%20y='1.556'%20rx='.44'%20style='fill:%23b5efff;fill-opacity:1;stroke:%230765d6;stroke-width:.5;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke%20fill%20markers'/%3e%3crect%20width='.613'%20height='2.572'%20x='41.178'%20y='2.546'%20rx='.436'%20style='fill:%23b5efff;fill-opacity:1;stroke:%230765d6;stroke-width:.5;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke%20fill%20markers'/%3e%3c/g%3e%3c/svg%3e";function Y(c){let t,r="Something went wrong.",i,e,s=c[0].message+"",a;return{c(){t=d("p"),t.textContent=r,i=w(),e=d("p"),a=$(s),this.h()},l(o){t=u(o,"P",{"aria-live":!0,"data-svelte-h":!0}),v(t)!=="svelte-106mxbo"&&(t.textContent=r),i=y(o),e=u(o,"P",{});var f=x(e);a=b(f,s),f.forEach(h),this.h()},h(){m(t,"aria-live","assertive")},m(o,f){p(o,t,f),p(o,i,f),p(o,e,f),k(e,a)},p(o,f){f&1&&s!==(s=o[0].message+"")&&T(a,s)},d(o){o&&(h(t),h(i),h(e))}}}function J(c){let t,r=`<img src="${P}" alt="no rain" class="weather-icon highlight svelte-1g25wic"/>`,i,e,s="Sorry, no rain is expected.";return{c(){t=d("p"),t.innerHTML=r,i=w(),e=d("p"),e.textContent=s,this.h()},l(a){t=u(a,"P",{"data-svelte-h":!0}),v(t)!=="svelte-i8ndor"&&(t.innerHTML=r),i=y(a),e=u(a,"P",{"aria-live":!0,"data-svelte-h":!0}),v(e)!=="svelte-p5anel"&&(e.textContent=s),this.h()},h(){m(e,"aria-live","assertive")},m(a,o){p(a,t,o),p(a,i,o),p(a,e,o)},p:M,d(a){a&&(h(t),h(i),h(e))}}}function Q(c){let t,r=`<img src="${D}" alt="expect rain" class="weather-icon highlight svelte-1g25wic"/>`,i,e,s,a=c[0].forecast.name+"",o,f;return{c(){t=d("p"),t.innerHTML=r,i=w(),e=d("p"),s=$("Expect rain "),o=$(a),f=$("!"),this.h()},l(n){t=u(n,"P",{"data-svelte-h":!0}),v(t)!=="svelte-12kf4lp"&&(t.innerHTML=r),i=y(n),e=u(n,"P",{"aria-live":!0});var l=x(e);s=b(l,"Expect rain "),o=b(l,a),f=b(l,"!"),l.forEach(h),this.h()},h(){m(e,"aria-live","assertive")},m(n,l){p(n,t,l),p(n,i,l),p(n,e,l),k(e,s),k(e,o),k(e,f)},p(n,l){l&1&&a!==(a=n[0].forecast.name+"")&&T(o,a)},d(n){n&&(h(t),h(i),h(e))}}}function tt(c){let t,r=`<div class="sliding-window svelte-1g25wic"><img src="${P}" alt="" class="weather-icon svelte-1g25wic"/> <img src="${X}" alt="" class="weather-icon svelte-1g25wic"/> <img src="${D}" alt="" class="weather-icon svelte-1g25wic"/> <img src="${P}" alt="" class="weather-icon svelte-1g25wic"/></div>`,i,e,s="Please wait...";return{c(){t=d("div"),t.innerHTML=r,i=w(),e=d("p"),e.textContent=s,this.h()},l(a){t=u(a,"DIV",{"aria-hidden":!0,class:!0,"data-svelte-h":!0}),v(t)!=="svelte-tqtz8f"&&(t.innerHTML=r),i=y(a),e=u(a,"P",{"aria-live":!0,"data-svelte-h":!0}),v(e)!=="svelte-rhfsyx"&&(e.textContent=s),this.h()},h(){m(t,"aria-hidden","true"),m(t,"class","sliding-loader svelte-1g25wic"),m(e,"aria-live","polite")},m(a,o){p(a,t,o),p(a,i,o),p(a,e,o)},p:M,d(a){a&&(h(t),h(i),h(e))}}}function et(c){let t,r,i="When will it rain?",e,s,a="<small>This will request your location. <strong>We don&#39;t store your location</strong>, and we use it only for getting your local weather. We&#39;re just poking fun at one of Xenoblade 3&#39;s most notorious quests!</small>",o,f;return{c(){t=d("p"),r=d("button"),r.textContent=i,e=w(),s=d("p"),s.innerHTML=a,this.h()},l(n){t=u(n,"P",{class:!0});var l=x(t);r=u(l,"BUTTON",{class:!0,"data-svelte-h":!0}),v(r)!=="svelte-1vh8z1j"&&(r.textContent=i),l.forEach(h),e=y(n),s=u(n,"P",{"data-svelte-h":!0}),v(s)!=="svelte-e5q7th"&&(s.innerHTML=a),this.h()},h(){m(r,"class",S(W())+" svelte-1g25wic"),m(t,"class","large svelte-1g25wic")},m(n,l){p(n,t,l),k(t,r),p(n,e,l),p(n,s,l),o||(f=q(r,"click",c[1]),o=!0)},p:M,d(n){n&&(h(t),h(e),h(s)),o=!1,f()}}}function rt(c){let t,r,i='<p class="quote svelte-1g25wic">And then we hope for rain.</p> <p class="cite svelte-1g25wic">Zeon, trying so hard to grow potatoes</p>',e,s,a;function o(l,g){if(l[0].state==="Pending")return et;if(l[0].state==="Fetching")return tt;if(l[0].state==="Rain")return Q;if(l[0].state==="No Rain")return J;if(l[0].state==="Error")return Y}let f=o(c),n=f&&f(c);return{c(){t=d("div"),r=d("div"),r.innerHTML=i,e=w(),s=d("hr"),a=w(),n&&n.c(),this.h()},l(l){t=u(l,"DIV",{class:!0});var g=x(t);r=u(g,"DIV",{class:!0,"data-svelte-h":!0}),v(r)!=="svelte-10g0oci"&&(r.innerHTML=i),e=y(g),s=u(g,"HR",{}),a=y(g),n&&n.l(g),g.forEach(h),this.h()},h(){m(r,"class","quote-container svelte-1g25wic"),m(t,"class","text-center svelte-1g25wic")},m(l,g){p(l,t,g),k(t,r),k(t,e),k(t,s),k(t,a),n&&n.m(t,null)},p(l,g){f===(f=o(l))&&n?n.p(l,g):(n&&n.d(1),n=f&&f(l),n&&(n.c(),n.m(t,null)))},d(l){l&&h(t),n&&n.d()}}}function it(c){let t,r,i;return r=new O({props:{$$slots:{default:[rt]},$$scope:{ctx:c}}}),{c(){t=d("div"),C(r.$$.fragment),this.h()},l(e){t=u(e,"DIV",{class:!0});var s=x(t);E(r.$$.fragment,s),s.forEach(h),this.h()},h(){m(t,"class","smaller-box svelte-1g25wic")},m(e,s){p(e,t,s),R(r,t,null),i=!0},p(e,s){const a={};s&5&&(a.$$scope={dirty:s,ctx:e}),r.$set(a)},i(e){i||(H(r.$$.fragment,e),i=!0)},o(e){L(r.$$.fragment,e),i=!1},d(e){e&&h(t),B(r)}}}function st(c){let t,r;return t=new N({props:{title:"Hoping for Rain",backdrop:j.Zeon,$$slots:{default:[it]},$$scope:{ctx:c}}}),{c(){C(t.$$.fragment)},l(i){E(t.$$.fragment,i)},m(i,e){R(t,i,e),r=!0},p(i,[e]){const s={};e&5&&(s.$$scope={dirty:e,ctx:i}),t.$set(s)},i(i){r||(H(t.$$.fragment,i),r=!0)},o(i){L(t.$$.fragment,i),r=!1},d(i){B(t,i)}}}function at(c,t,r){let i=_.Pending();return[i,async()=>{try{r(0,i=_.Fetching());const s=await V(),a=await A(s),o=K(a);o!=null?r(0,i=_.Rain(o)):r(0,i=_.NoRain())}catch(s){r(0,i=_.Error(s.message??s))}}]}class pt extends I{constructor(t){super(),F(this,t,at,st,z,{})}}export{pt as component};
