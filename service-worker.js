const s=location.pathname.split("/").slice(0,-1).join("/"),p=[s+"/_app/immutable/entry/app.XXm3oli3.js",s+"/_app/immutable/nodes/0.CynqRcxb.js",s+"/_app/immutable/nodes/1.BZEf0NO8.js",s+"/_app/immutable/nodes/2.DLFb2qKe.js",s+"/_app/immutable/nodes/3.D4EBlZGB.js",s+"/_app/immutable/assets/3.50ZT2CVI.css",s+"/_app/immutable/nodes/4.KUR__tIl.js",s+"/_app/immutable/nodes/5.B0WWr5fW.js",s+"/_app/immutable/nodes/6.B1jfWwsx.js",s+"/_app/immutable/assets/6.BYuM_HAR.css",s+"/_app/immutable/nodes/7.CDf7gvDV.js",s+"/_app/immutable/assets/7.BlOsK_cq.css",s+"/_app/immutable/assets/Page.D4bvB4Fl.css",s+"/_app/immutable/assets/BasicPanel.BJaGI5Pc.css",s+"/_app/immutable/assets/site-info.C-8bK6aa.css",s+"/_app/immutable/assets/TitledPanel.DW25d2t-.css",s+"/_app/immutable/assets/2.DhtYpPY1.css",s+"/_app/immutable/assets/TriangleCorners.DkpYnALV.css",s+"/_app/immutable/assets/Button.DoVOtqjH.css",s+"/_app/immutable/assets/Elevated.COSiYApc.css",s+"/_app/immutable/assets/ResponsiveImage.DOJNRpsG.css",s+"/_app/immutable/assets/NoPrint.BP2WViEx.css",s+"/_app/immutable/assets/BuildOpenGraph.D1UB_722.css",s+"/_app/immutable/chunks/B4IdIKwg.js",s+"/_app/immutable/chunks/BLdLDLYH.js",s+"/_app/immutable/chunks/BNlFUqkr.js",s+"/_app/immutable/chunks/C1FmrZbK.js",s+"/_app/immutable/chunks/CDpKlLDx.js",s+"/_app/immutable/chunks/CNZ-0BE3.js",s+"/_app/immutable/chunks/CYgJF_JY.js",s+"/_app/immutable/chunks/D7A31gvI.js",s+"/_app/immutable/chunks/DMIxpikd.js",s+"/_app/immutable/chunks/DQfWXNEO.js",s+"/_app/immutable/chunks/DS6gwKGF.js",s+"/_app/immutable/chunks/Dh1A8VOV.js",s+"/_app/immutable/chunks/Dv5UTCST.js",s+"/_app/immutable/chunks/F2weNB-B.js",s+"/_app/immutable/chunks/HWgdjnTz.js",s+"/_app/immutable/chunks/JaYvdB58.js",s+"/_app/immutable/chunks/ZDWUFouh.js",s+"/_app/immutable/assets/titans.DNzR8eNG.webp",s+"/_app/immutable/assets/torna-camp.DGa5Qz1T.webp",s+"/_app/immutable/assets/zeon.DHJC1jjK.webp",s+"/_app/immutable/chunks/lqPXTXtE.js",s+"/_app/immutable/entry/start.B_VLLjlU.js"],m="1741873151398",t=`monadorecipes-${m}`,i=async()=>{await(await caches.open(t)).addAll(p)};self.addEventListener("install",a=>a.waitUntil(i()));const l=async()=>{const a=await caches.keys();await Promise.all(a.map(e=>{if(e!==t)return caches.delete(e)}))};self.addEventListener("activate",a=>a.waitUntil(l()));self.addEventListener("fetch",()=>{});
