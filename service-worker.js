const a=location.pathname.split("/").slice(0,-1).join("/"),p=[a+"/_app/immutable/entry/app.DoUA3jjY.js",a+"/_app/immutable/nodes/0.C5e2GTcq.js",a+"/_app/immutable/nodes/1.CFuRqWNB.js",a+"/_app/immutable/nodes/2.CwfP2wMr.js",a+"/_app/immutable/nodes/3.Gp-vn__a.js",a+"/_app/immutable/nodes/4.BqBeSLKe.js",a+"/_app/immutable/nodes/5.BqTtiER2.js",a+"/_app/immutable/nodes/6.5PXrzOwu.js",a+"/_app/immutable/assets/6.C53250Oj.css",a+"/_app/immutable/nodes/7.DKpgdMjk.js",a+"/_app/immutable/assets/7.CN4dEaYu.css",a+"/_app/immutable/assets/2.BJror0dI.css",a+"/_app/immutable/chunks/2.B53ACjnc.js",a+"/_app/immutable/assets/BasicPanel.0VJMdoZr.css",a+"/_app/immutable/chunks/BasicPanel.wJX3ZIQm.js",a+"/_app/immutable/assets/BuildOpenGraph.DyOG7YPU.css",a+"/_app/immutable/chunks/BuildOpenGraph.DpOMORKA.js",a+"/_app/immutable/assets/Button.D7EIqouS.css",a+"/_app/immutable/chunks/Button.D1nHfZRm.js",a+"/_app/immutable/assets/Elevated.BjYdhDS7.css",a+"/_app/immutable/chunks/Elevated.DIi0Xf0v.js",a+"/_app/immutable/assets/Page.FDXQsk6L.css",a+"/_app/immutable/chunks/Page.21oiJKFZ.js",a+"/_app/immutable/assets/TitledPanel.MfPTpMpX.css",a+"/_app/immutable/chunks/TitledPanel.Dm28igDr.js",a+"/_app/immutable/assets/TriangleCorners.DrvzPA-P.css",a+"/_app/immutable/chunks/TriangleCorners.DCj9NdBQ.js",a+"/_app/immutable/chunks/control.CYgJF_JY.js",a+"/_app/immutable/chunks/entry.CkVRFqaL.js",a+"/_app/immutable/chunks/index.DkAvxXcx.js",a+"/_app/immutable/chunks/paths.B0OMmB0F.js",a+"/_app/immutable/chunks/preload-helper.C1FmrZbK.js",a+"/_app/immutable/chunks/scheduler.9wOHTztG.js",a+"/_app/immutable/assets/site-info.GdYKxjrZ.css",a+"/_app/immutable/chunks/site-info.C3pLa0Cw.js",a+"/_app/immutable/assets/titans.DNzR8eNG.webp",a+"/_app/immutable/assets/torna-camp.DGa5Qz1T.webp",a+"/_app/immutable/assets/zeon.DHJC1jjK.webp",a+"/_app/immutable/chunks/define.lqPXTXtE.js",a+"/_app/immutable/entry/start.CzdtS2b0.js"],m="1739036402260",t=`monadorecipes-${m}`,i=async()=>{await(await caches.open(t)).addAll(p)};self.addEventListener("install",s=>s.waitUntil(i()));const n=async()=>{const s=await caches.keys();await Promise.all(s.map(e=>{if(e!==t)return caches.delete(e)}))};self.addEventListener("activate",s=>s.waitUntil(n()));self.addEventListener("fetch",()=>{});
