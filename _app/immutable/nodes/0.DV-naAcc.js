function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"../chunks/preload-helper.BQ24v_F8.js";import{s as l,f as i,u,h as _,j as f,o as c}from"../chunks/scheduler.DXwWpcXp.js";import{S as p,i as m,t as d,b as $}from"../chunks/index.DWU_6mbK.js";const g=!0,j=Object.freeze(Object.defineProperty({__proto__:null,prerender:g},Symbol.toStringTag,{value:"Module"}));function b(n){let o;const r=n[1].default,e=i(r,n,n[0],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,s){e&&e.m(t,s),o=!0},p(t,[s]){e&&e.p&&(!o||s&1)&&u(e,r,t,t[0],o?f(r,t[0],s,null):_(t[0]),null)},i(t){o||(d(e,t),o=!0)},o(t){$(e,t),o=!1},d(t){e&&e.d(t)}}}function v(n,o,r){let{$$slots:e={},$$scope:t}=o;return c(()=>{a(()=>import("../chunks/define.BRQghwY9.js"),__vite__mapDeps([]),import.meta.url)}),n.$$set=s=>{"$$scope"in s&&r(0,t=s.$$scope)},[t,e]}class O extends p{constructor(o){super(),m(this,o,v,b,l,{})}}export{O as component,j as universal};
