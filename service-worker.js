const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.ab50700e.js",
  a + "/_app/immutable/chunks/0.a5f17a51.js",
  a + "/_app/immutable/chunks/1.ba4a085b.js",
  a + "/_app/immutable/chunks/2.eddb8140.js",
  a + "/_app/immutable/chunks/3.ccb78860.js",
  a + "/_app/immutable/chunks/4.06430f34.js",
  a + "/_app/immutable/chunks/5.3d6deab5.js",
  a + "/_app/immutable/assets/BackdropScene.74c44b78.css",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/Page.c8d7c874.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.5f623e45.css",
  a + "/_app/immutable/assets/VisuallyHidden.384d1c6c.css",
  a + "/_app/immutable/chunks/BackdropScene.3b56e0b0.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.219a80a5.png",
  a + "/_app/immutable/chunks/BasicPanel.c682a4c7.js",
  a + "/_app/immutable/chunks/Page.ddce59c8.js",
  a + "/_app/immutable/chunks/TitledPanel.3036b9b6.js",
  a + "/_app/immutable/chunks/TriangleCorners.0151e101.js",
  a + "/_app/immutable/chunks/Url.089ce90d.js",
  a + "/_app/immutable/chunks/VisuallyHidden.cf7d3de8.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.33bc1294.js",
  a + "/_app/immutable/chunks/_page.85b3427f.js",
  a + "/_app/immutable/chunks/_page.e08b130c.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.7251b7a2.js",
  a + "/_app/immutable/chunks/paths.562c52cb.js",
  a + "/_app/immutable/chunks/singletons.63ab1c6e.js",
  a + "/_app/immutable/entry/start.d5cd5aa2.js",
  a + "/_app/immutable/entry/layout.svelte.18caa6aa.js",
  a + "/_app/immutable/entry/_error.svelte.87e6a8e8.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.0623298a.css",
  a + "/_app/immutable/entry/_page.svelte.d6e1c34e.js",
  a + "/_app/immutable/entry/_page.ts.c713d93e.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.d5bfd570.js",
  a + "/_app/immutable/entry/recipes-page.svelte.2d32ca29.js",
  a + "/_app/immutable/entry/recipes-page.ts.3f2ab84e.js",
  a + "/_app/immutable/assets/_page.346e2be0.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.ab7677f0.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.868c0389.js"
], c = "1681854459271", t = `monadorecipes-${c}`, m = async () => {
  await (await caches.open(t)).addAll(p);
};
self.addEventListener("install", (e) => e.waitUntil(m()));
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
