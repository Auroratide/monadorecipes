const a=location.pathname.split("/").slice(0,-1).join("/"),p=[a+"/_app/immutable/entry/app.C3oQbw8Y.js",a+"/_app/immutable/nodes/0.DV-naAcc.js",a+"/_app/immutable/nodes/1.b27vYXFL.js",a+"/_app/immutable/nodes/2.CHwXxsRl.js",a+"/_app/immutable/nodes/3.DDdkeftQ.js",a+"/_app/immutable/nodes/4.D-85Q4tC.js",a+"/_app/immutable/nodes/5.-99fQT5Z.js",a+"/_app/immutable/nodes/6.B3Yno2DA.js",a+"/_app/immutable/assets/6.BiOpx3_c.css",a+"/_app/immutable/assets/2.qjfiHlS-.css",a+"/_app/immutable/chunks/2.msfqvWs9.js",a+"/_app/immutable/assets/BasicPanel.BwjyNkYE.css",a+"/_app/immutable/chunks/BasicPanel.B5yS6r5C.js",a+"/_app/immutable/assets/BuildOpenGraph.D3V_XDyF.css",a+"/_app/immutable/chunks/BuildOpenGraph.CRk671Yk.js",a+"/_app/immutable/assets/Page.6PHwbXg8.css",a+"/_app/immutable/chunks/Page.BSFZTN-J.js",a+"/_app/immutable/assets/TitledPanel.MfPTpMpX.css",a+"/_app/immutable/chunks/TitledPanel.Dyv1wDnQ.js",a+"/_app/immutable/assets/TriangleCorners.DMqMoTrA.css",a+"/_app/immutable/chunks/TriangleCorners.Dmg5_1aV.js",a+"/_app/immutable/chunks/control.CYgJF_JY.js",a+"/_app/immutable/assets/description.BBwDjjV2.css",a+"/_app/immutable/chunks/description.C8vezpkq.js",a+"/_app/immutable/assets/titans.DNzR8eNG.webp",a+"/_app/immutable/assets/torna-camp.DGa5Qz1T.webp",a+"/_app/immutable/chunks/entry.BCnajENT.js",a+"/_app/immutable/chunks/index.DWU_6mbK.js",a+"/_app/immutable/chunks/paths.CfvFDacG.js",a+"/_app/immutable/chunks/preload-helper.BQ24v_F8.js",a+"/_app/immutable/chunks/scheduler.DXwWpcXp.js",a+"/_app/immutable/chunks/define.BRQghwY9.js",a+"/_app/immutable/entry/start.DX2_mxnw.js"],m="1710125916070",t=`monadorecipes-${m}`,i=async()=>{await(await caches.open(t)).addAll(p)};self.addEventListener("install",s=>s.waitUntil(i()));const n=async()=>{const s=await caches.keys();await Promise.all(s.map(e=>{if(e!==t)return caches.delete(e)}))};self.addEventListener("activate",s=>s.waitUntil(n()));self.addEventListener("fetch",s=>{});
