const a=location.pathname.split("/").slice(0,-1).join("/"),p=[a+"/_app/immutable/entry/app.PluhVmae.js",a+"/_app/immutable/nodes/0.C40D0oqy.js",a+"/_app/immutable/nodes/1.nE7teytK.js",a+"/_app/immutable/nodes/2.BrZOvLTa.js",a+"/_app/immutable/nodes/3.C9nspU6q.js",a+"/_app/immutable/nodes/4.uI3xe7Jr.js",a+"/_app/immutable/nodes/5.rp79nzNd.js",a+"/_app/immutable/nodes/6.BgFWCeIt.js",a+"/_app/immutable/assets/6.BiOpx3_c.css",a+"/_app/immutable/assets/2.qjfiHlS-.css",a+"/_app/immutable/chunks/2.HuE0v5mA.js",a+"/_app/immutable/assets/BasicPanel.BwjyNkYE.css",a+"/_app/immutable/chunks/BasicPanel.N6VQv5Ao.js",a+"/_app/immutable/assets/BuildOpenGraph.D3V_XDyF.css",a+"/_app/immutable/chunks/BuildOpenGraph.laxvYc9U.js",a+"/_app/immutable/assets/Page.6PHwbXg8.css",a+"/_app/immutable/chunks/Page.B7dL_D28.js",a+"/_app/immutable/assets/TitledPanel.MfPTpMpX.css",a+"/_app/immutable/chunks/TitledPanel.B9D0hM55.js",a+"/_app/immutable/assets/TriangleCorners.DMqMoTrA.css",a+"/_app/immutable/chunks/TriangleCorners.Dmg5_1aV.js",a+"/_app/immutable/chunks/control.CYgJF_JY.js",a+"/_app/immutable/assets/description.BBwDjjV2.css",a+"/_app/immutable/chunks/description.CQQVvZu7.js",a+"/_app/immutable/assets/titans.DNzR8eNG.webp",a+"/_app/immutable/assets/torna-camp.DGa5Qz1T.webp",a+"/_app/immutable/chunks/entry.C50wwSPP.js",a+"/_app/immutable/chunks/index.DWU_6mbK.js",a+"/_app/immutable/chunks/paths.B0l_zbNZ.js",a+"/_app/immutable/chunks/preload-helper.BQ24v_F8.js",a+"/_app/immutable/chunks/scheduler.DXwWpcXp.js",a+"/_app/immutable/chunks/define.DBI_rsMm.js",a+"/_app/immutable/entry/start.CTUz18Dw.js"],m="1710605291668",t=`monadorecipes-${m}`,i=async()=>{await(await caches.open(t)).addAll(p)};self.addEventListener("install",s=>s.waitUntil(i()));const n=async()=>{const s=await caches.keys();await Promise.all(s.map(e=>{if(e!==t)return caches.delete(e)}))};self.addEventListener("activate",s=>s.waitUntil(n()));self.addEventListener("fetch",s=>{});
