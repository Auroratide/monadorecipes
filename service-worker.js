const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.e877d451.js",
  a + "/_app/immutable/chunks/0.ea6e0f19.js",
  a + "/_app/immutable/chunks/1.df826dd2.js",
  a + "/_app/immutable/chunks/2.82dd7207.js",
  a + "/_app/immutable/chunks/3.45016bc9.js",
  a + "/_app/immutable/chunks/4.8465d213.js",
  a + "/_app/immutable/chunks/5.987df1ed.js",
  a + "/_app/immutable/chunks/6.e7701c88.js",
  a + "/_app/immutable/assets/BackdropScene.74c44b78.css",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/Page.444a7ce9.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.7daf0df2.css",
  a + "/_app/immutable/assets/VisuallyHidden.384d1c6c.css",
  a + "/_app/immutable/chunks/BackdropScene.d19b3686.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.47f887b8.webp",
  a + "/_app/immutable/chunks/BasicPanel.650ace10.js",
  a + "/_app/immutable/chunks/Page.1ab4d5f2.js",
  a + "/_app/immutable/chunks/TitledPanel.af7ada22.js",
  a + "/_app/immutable/chunks/TriangleCorners.d3b43205.js",
  a + "/_app/immutable/chunks/Url.20df9a93.js",
  a + "/_app/immutable/chunks/VisuallyHidden.d3a48b3c.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.31a8446b.js",
  a + "/_app/immutable/chunks/_page.e6a7f6a1.js",
  a + "/_app/immutable/chunks/_page.fb1188d7.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.3fa9fd24.js",
  a + "/_app/immutable/chunks/paths.68da2f59.js",
  a + "/_app/immutable/chunks/singletons.2f611f03.js",
  a + "/_app/immutable/entry/start.36c6bafc.js",
  a + "/_app/immutable/entry/layout.svelte.b2723e91.js",
  a + "/_app/immutable/entry/_error.svelte.4ecc195e.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.0623298a.css",
  a + "/_app/immutable/entry/_page.svelte.bf7a2f55.js",
  a + "/_app/immutable/entry/_page.ts.4fd98aec.js",
  a + "/_app/immutable/entry/about-page.svelte.00d14c1a.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.84b11733.js",
  a + "/_app/immutable/entry/recipes-page.svelte.195a24fb.js",
  a + "/_app/immutable/entry/recipes-page.ts.ece5fe39.js",
  a + "/_app/immutable/assets/_page.01e7b0c6.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.11718235.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.90cfd885.js"
], m = "1682034540023", t = `monadorecipes-${m}`, i = async () => {
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
