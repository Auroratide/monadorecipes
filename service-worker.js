const a=location.pathname.split("/").slice(0,-1).join("/"),p=[a+"/_app/immutable/entry/app.B-KGKZ7e.js",a+"/_app/immutable/nodes/0.CHcnUuRF.js",a+"/_app/immutable/nodes/1.-VpFLTQ0.js",a+"/_app/immutable/nodes/2.DAKaAx4b.js",a+"/_app/immutable/nodes/3.D98VoFUg.js",a+"/_app/immutable/nodes/4.DDE6jn4D.js",a+"/_app/immutable/nodes/5.DY_ZK05J.js",a+"/_app/immutable/nodes/6.cqXrOjzE.js",a+"/_app/immutable/assets/6.DTvSpfpX.css",a+"/_app/immutable/nodes/7.DLgcFN5k.js",a+"/_app/immutable/assets/7.CN4dEaYu.css",a+"/_app/immutable/assets/2.BJror0dI.css",a+"/_app/immutable/chunks/2.pd39BD9Z.js",a+"/_app/immutable/assets/BasicPanel.0VJMdoZr.css",a+"/_app/immutable/chunks/BasicPanel.NBXfT1Bu.js",a+"/_app/immutable/assets/BuildOpenGraph.DyOG7YPU.css",a+"/_app/immutable/chunks/BuildOpenGraph.CIIc4pQT.js",a+"/_app/immutable/assets/Button.D7EIqouS.css",a+"/_app/immutable/chunks/Button.4pIgD8Ff.js",a+"/_app/immutable/assets/Elevated.BjYdhDS7.css",a+"/_app/immutable/chunks/Elevated.DIi0Xf0v.js",a+"/_app/immutable/assets/Page.FDXQsk6L.css",a+"/_app/immutable/chunks/Page.Cy2hZVx7.js",a+"/_app/immutable/assets/TitledPanel.MfPTpMpX.css",a+"/_app/immutable/chunks/TitledPanel.DHkwNoDb.js",a+"/_app/immutable/assets/TriangleCorners.DrvzPA-P.css",a+"/_app/immutable/chunks/TriangleCorners.DCj9NdBQ.js",a+"/_app/immutable/chunks/control.CYgJF_JY.js",a+"/_app/immutable/chunks/entry.CQIqgR4J.js",a+"/_app/immutable/chunks/index.DkAvxXcx.js",a+"/_app/immutable/chunks/paths.CM3_tZxz.js",a+"/_app/immutable/chunks/preload-helper.C1FmrZbK.js",a+"/_app/immutable/chunks/scheduler.9wOHTztG.js",a+"/_app/immutable/assets/site-info.GdYKxjrZ.css",a+"/_app/immutable/chunks/site-info.CkZ61EDc.js",a+"/_app/immutable/assets/titans.DNzR8eNG.webp",a+"/_app/immutable/assets/torna-camp.DGa5Qz1T.webp",a+"/_app/immutable/assets/zeon.DHJC1jjK.webp",a+"/_app/immutable/chunks/define.B8oekSMV.js",a+"/_app/immutable/entry/start.BYZKp1kS.js"],m="1727785960335",t=`monadorecipes-${m}`,i=async()=>{await(await caches.open(t)).addAll(p)};self.addEventListener("install",s=>s.waitUntil(i()));const n=async()=>{const s=await caches.keys();await Promise.all(s.map(e=>{if(e!==t)return caches.delete(e)}))};self.addEventListener("activate",s=>s.waitUntil(n()));self.addEventListener("fetch",()=>{});
