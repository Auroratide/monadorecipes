const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.59011ce7.js",
  a + "/_app/immutable/chunks/0.75638c39.js",
  a + "/_app/immutable/chunks/1.14085c4b.js",
  a + "/_app/immutable/chunks/2.efaa6699.js",
  a + "/_app/immutable/chunks/3.484f0c47.js",
  a + "/_app/immutable/chunks/4.bdff5ce3.js",
  a + "/_app/immutable/chunks/5.b6e07e37.js",
  a + "/_app/immutable/assets/BackdropScene.74c44b78.css",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/Page.c8d7c874.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.5b4a1052.css",
  a + "/_app/immutable/assets/VisuallyHidden.908af276.css",
  a + "/_app/immutable/chunks/BackdropScene.7c39062a.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.219a80a5.png",
  a + "/_app/immutable/chunks/BasicPanel.12343e1d.js",
  a + "/_app/immutable/chunks/Page.548ffe9a.js",
  a + "/_app/immutable/chunks/TitledPanel.3899385c.js",
  a + "/_app/immutable/chunks/TriangleCorners.09815722.js",
  a + "/_app/immutable/chunks/Url.121fa633.js",
  a + "/_app/immutable/chunks/VisuallyHidden.3b9c79b9.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.1e2443a2.js",
  a + "/_app/immutable/chunks/_page.331e3fbb.js",
  a + "/_app/immutable/chunks/_page.eca6a0ec.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.eb3b8662.js",
  a + "/_app/immutable/chunks/paths.81353fbe.js",
  a + "/_app/immutable/chunks/singletons.1882c904.js",
  a + "/_app/immutable/entry/start.ff6a1858.js",
  a + "/_app/immutable/entry/layout.svelte.ee75076d.js",
  a + "/_app/immutable/entry/_error.svelte.c6590c72.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.6e203da9.css",
  a + "/_app/immutable/entry/_page.svelte.ed603f78.js",
  a + "/_app/immutable/entry/_page.ts.8a29db46.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.8fd961d1.js",
  a + "/_app/immutable/entry/recipes-page.svelte.f3e534ee.js",
  a + "/_app/immutable/entry/recipes-page.ts.eb279b76.js",
  a + "/_app/immutable/assets/_page.f747fa32.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.56d05271.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.e77298db.js"
], m = "1681691435597", t = `monadorecipes-${m}`, i = async () => {
  await (await caches.open(t)).addAll(p);
};
self.addEventListener("install", (e) => e.waitUntil(i()));
const l = async () => {
  const e = await caches.keys();
  await Promise.all(e.map((s) => {
    if (s !== t)
      return caches.delete(s);
  }));
};
self.addEventListener("activate", (e) => e.waitUntil(l()));
self.addEventListener("fetch", (e) => {
});
