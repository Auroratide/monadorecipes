const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.de69501f.js",
  a + "/_app/immutable/chunks/0.ea6e0f19.js",
  a + "/_app/immutable/chunks/1.25821ccd.js",
  a + "/_app/immutable/chunks/2.b028d275.js",
  a + "/_app/immutable/chunks/3.69bc9f27.js",
  a + "/_app/immutable/chunks/4.7bb2288f.js",
  a + "/_app/immutable/chunks/5.1922cbb3.js",
  a + "/_app/immutable/chunks/6.eebedb9a.js",
  a + "/_app/immutable/assets/BackdropScene.74c44b78.css",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/Page.444a7ce9.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.7daf0df2.css",
  a + "/_app/immutable/assets/VisuallyHidden.384d1c6c.css",
  a + "/_app/immutable/chunks/BackdropScene.ca1da8fc.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.47f887b8.webp",
  a + "/_app/immutable/chunks/BasicPanel.4eeac653.js",
  a + "/_app/immutable/chunks/Page.221b127b.js",
  a + "/_app/immutable/chunks/TitledPanel.871f9e37.js",
  a + "/_app/immutable/chunks/TriangleCorners.d3b43205.js",
  a + "/_app/immutable/chunks/Url.159aaba2.js",
  a + "/_app/immutable/chunks/VisuallyHidden.d3a48b3c.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.144d69a4.js",
  a + "/_app/immutable/chunks/_page.19bbcfd5.js",
  a + "/_app/immutable/chunks/_page.8744236a.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.3fa9fd24.js",
  a + "/_app/immutable/chunks/paths.6f332508.js",
  a + "/_app/immutable/chunks/singletons.6ac9f0e3.js",
  a + "/_app/immutable/entry/start.e09ff7cf.js",
  a + "/_app/immutable/entry/layout.svelte.b2723e91.js",
  a + "/_app/immutable/entry/_error.svelte.64599a7d.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.0623298a.css",
  a + "/_app/immutable/entry/_page.svelte.d5a3d7fa.js",
  a + "/_app/immutable/entry/_page.ts.5e2d647c.js",
  a + "/_app/immutable/entry/about-page.svelte.5f922316.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.fe18169d.js",
  a + "/_app/immutable/entry/recipes-page.svelte.125c36e3.js",
  a + "/_app/immutable/entry/recipes-page.ts.b0d854ae.js",
  a + "/_app/immutable/assets/_page.01e7b0c6.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.fae478dc.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.96624585.js"
], m = "1682794751435", t = `monadorecipes-${m}`, i = async () => {
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
