const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.c4c772fc.js",
  a + "/_app/immutable/chunks/0.4fa0dce2.js",
  a + "/_app/immutable/chunks/1.1e886c2a.js",
  a + "/_app/immutable/chunks/2.bd5342b6.js",
  a + "/_app/immutable/chunks/3.0c3b314d.js",
  a + "/_app/immutable/chunks/4.4b4d555a.js",
  a + "/_app/immutable/chunks/5.4a08e3b4.js",
  a + "/_app/immutable/assets/BackdropScene.74c44b78.css",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/Page.444a7ce9.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.7daf0df2.css",
  a + "/_app/immutable/assets/VisuallyHidden.384d1c6c.css",
  a + "/_app/immutable/chunks/BackdropScene.2d8f5363.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.47f887b8.webp",
  a + "/_app/immutable/chunks/BasicPanel.d6e6deef.js",
  a + "/_app/immutable/chunks/Page.addb1257.js",
  a + "/_app/immutable/chunks/TitledPanel.ea4aaf41.js",
  a + "/_app/immutable/chunks/TriangleCorners.d3b43205.js",
  a + "/_app/immutable/chunks/Url.8fc5626f.js",
  a + "/_app/immutable/chunks/VisuallyHidden.00adf9e6.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.2b2b3e52.js",
  a + "/_app/immutable/chunks/_page.9e52b411.js",
  a + "/_app/immutable/chunks/_page.bf5ffe84.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.76ef4766.js",
  a + "/_app/immutable/chunks/paths.86625561.js",
  a + "/_app/immutable/chunks/singletons.e8b24a62.js",
  a + "/_app/immutable/entry/start.04cbd117.js",
  a + "/_app/immutable/entry/layout.svelte.3d509996.js",
  a + "/_app/immutable/entry/_error.svelte.c2164f9c.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.0623298a.css",
  a + "/_app/immutable/entry/_page.svelte.cecc9cb7.js",
  a + "/_app/immutable/entry/_page.ts.e6b65d95.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.334852f7.js",
  a + "/_app/immutable/entry/recipes-page.svelte.5af1dc6e.js",
  a + "/_app/immutable/entry/recipes-page.ts.ca5c14f9.js",
  a + "/_app/immutable/assets/_page.346e2be0.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.8ad3ff30.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.97d08997.js"
], m = "1681942013892", t = `monadorecipes-${m}`, c = async () => {
  await (await caches.open(t)).addAll(p);
};
self.addEventListener("install", (e) => e.waitUntil(c()));
const i = async () => {
  const e = await caches.keys();
  await Promise.all(e.map((s) => {
    if (s !== t)
      return caches.delete(s);
  }));
};
self.addEventListener("activate", (e) => e.waitUntil(i()));
self.addEventListener("fetch", (e) => {
});
