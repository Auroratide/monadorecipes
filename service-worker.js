const a=location.pathname.split("/").slice(0,-1).join("/"),p=[a+"/_app/immutable/entry/app.BEPq4KgF.js",a+"/_app/immutable/nodes/0.dn8IxNEk.js",a+"/_app/immutable/nodes/1.BeUzKeOl.js",a+"/_app/immutable/nodes/2.Vm_vtCkN.js",a+"/_app/immutable/nodes/3.BbkETIVJ.js",a+"/_app/immutable/nodes/4.tJ9C8sJD.js",a+"/_app/immutable/nodes/5.Cv4LH2yr.js",a+"/_app/immutable/nodes/6.qBvryqbv.js",a+"/_app/immutable/assets/6.Bw5FQU6p.css",a+"/_app/immutable/assets/2.qjfiHlS-.css",a+"/_app/immutable/chunks/2.D3uek-TR.js",a+"/_app/immutable/assets/BasicPanel.BwjyNkYE.css",a+"/_app/immutable/chunks/BasicPanel.43YCdJvq.js",a+"/_app/immutable/assets/BuildOpenGraph.DqamCk16.css",a+"/_app/immutable/chunks/BuildOpenGraph.C2sxR_H4.js",a+"/_app/immutable/assets/Page.6PHwbXg8.css",a+"/_app/immutable/chunks/Page.DBHde_Jl.js",a+"/_app/immutable/assets/TitledPanel.MfPTpMpX.css",a+"/_app/immutable/chunks/TitledPanel.BjGaUnt0.js",a+"/_app/immutable/assets/TriangleCorners.DMqMoTrA.css",a+"/_app/immutable/chunks/TriangleCorners.Dmg5_1aV.js",a+"/_app/immutable/chunks/control.CYgJF_JY.js",a+"/_app/immutable/assets/description.BBwDjjV2.css",a+"/_app/immutable/chunks/description.D8DiRO2j.js",a+"/_app/immutable/assets/titans.DNzR8eNG.webp",a+"/_app/immutable/assets/torna-camp.DGa5Qz1T.webp",a+"/_app/immutable/chunks/entry.DqMSVIQ8.js",a+"/_app/immutable/chunks/index.CwD195NW.js",a+"/_app/immutable/chunks/paths.DbkPAOwW.js",a+"/_app/immutable/chunks/scheduler.BMUzmtzK.js",a+"/_app/immutable/entry/start.CiVpdx_B.js"],i="1710032322142",t=`monadorecipes-${i}`,m=async()=>{await(await caches.open(t)).addAll(p)};self.addEventListener("install",s=>s.waitUntil(m()));const n=async()=>{const s=await caches.keys();await Promise.all(s.map(e=>{if(e!==t)return caches.delete(e)}))};self.addEventListener("activate",s=>s.waitUntil(n()));self.addEventListener("fetch",s=>{});
