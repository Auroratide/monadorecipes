const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.753a3a10.js",
  a + "/_app/immutable/chunks/0.ea6e0f19.js",
  a + "/_app/immutable/chunks/1.cba4c5ee.js",
  a + "/_app/immutable/chunks/2.be086e54.js",
  a + "/_app/immutable/chunks/3.1335959f.js",
  a + "/_app/immutable/chunks/4.89d497f0.js",
  a + "/_app/immutable/chunks/5.46a13721.js",
  a + "/_app/immutable/chunks/6.05664fd4.js",
  a + "/_app/immutable/assets/BackdropScene.74c44b78.css",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/Page.444a7ce9.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.7daf0df2.css",
  a + "/_app/immutable/assets/VisuallyHidden.384d1c6c.css",
  a + "/_app/immutable/chunks/BackdropScene.d036e25c.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.47f887b8.webp",
  a + "/_app/immutable/chunks/BasicPanel.48d7478e.js",
  a + "/_app/immutable/chunks/Page.49d01555.js",
  a + "/_app/immutable/chunks/TitledPanel.536afddd.js",
  a + "/_app/immutable/chunks/TriangleCorners.d3b43205.js",
  a + "/_app/immutable/chunks/Url.1b6c7e4d.js",
  a + "/_app/immutable/chunks/VisuallyHidden.d3a48b3c.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.2162e217.js",
  a + "/_app/immutable/chunks/_page.d3133c80.js",
  a + "/_app/immutable/chunks/_page.dcbdb871.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.3fa9fd24.js",
  a + "/_app/immutable/chunks/paths.b81ba0a4.js",
  a + "/_app/immutable/chunks/singletons.08666655.js",
  a + "/_app/immutable/entry/start.a14fc707.js",
  a + "/_app/immutable/entry/layout.svelte.b2723e91.js",
  a + "/_app/immutable/entry/_error.svelte.28fba25a.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.0623298a.css",
  a + "/_app/immutable/entry/_page.svelte.33df2bc0.js",
  a + "/_app/immutable/entry/_page.ts.1866415f.js",
  a + "/_app/immutable/entry/about-page.svelte.0f7338a1.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.064e4dfc.js",
  a + "/_app/immutable/entry/recipes-page.svelte.c8b43b20.js",
  a + "/_app/immutable/entry/recipes-page.ts.bb4d739f.js",
  a + "/_app/immutable/assets/_page.01e7b0c6.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.ab5eada0.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.d6ff2f3c.js"
], m = "1682811757049", t = `monadorecipes-${m}`, i = async () => {
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
