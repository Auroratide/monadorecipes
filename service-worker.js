const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.3aa4e49f.js",
  a + "/_app/immutable/chunks/0.75638c39.js",
  a + "/_app/immutable/chunks/1.d574d9fc.js",
  a + "/_app/immutable/chunks/2.d590aa52.js",
  a + "/_app/immutable/chunks/3.894aae1f.js",
  a + "/_app/immutable/chunks/4.55522f3c.js",
  a + "/_app/immutable/chunks/5.31ea720c.js",
  a + "/_app/immutable/assets/BackdropScene.74c44b78.css",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/Page.c8d7c874.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.5b4a1052.css",
  a + "/_app/immutable/assets/VisuallyHidden.908af276.css",
  a + "/_app/immutable/chunks/BackdropScene.98ebbb92.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.219a80a5.png",
  a + "/_app/immutable/chunks/BasicPanel.0333b302.js",
  a + "/_app/immutable/chunks/Page.3049f64c.js",
  a + "/_app/immutable/chunks/TitledPanel.496ebf76.js",
  a + "/_app/immutable/chunks/TriangleCorners.09815722.js",
  a + "/_app/immutable/chunks/Url.218a5f74.js",
  a + "/_app/immutable/chunks/VisuallyHidden.3b9c79b9.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.61d17fc8.js",
  a + "/_app/immutable/chunks/_page.d1286970.js",
  a + "/_app/immutable/chunks/_page.fc4e02ad.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.eb3b8662.js",
  a + "/_app/immutable/chunks/paths.654527ee.js",
  a + "/_app/immutable/chunks/singletons.566d354d.js",
  a + "/_app/immutable/entry/start.b52081ab.js",
  a + "/_app/immutable/entry/layout.svelte.ee75076d.js",
  a + "/_app/immutable/entry/_error.svelte.fb66c9b5.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.6e203da9.css",
  a + "/_app/immutable/entry/_page.svelte.2d2877ec.js",
  a + "/_app/immutable/entry/_page.ts.c7308f64.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.7204f24a.js",
  a + "/_app/immutable/entry/recipes-page.svelte.aefae014.js",
  a + "/_app/immutable/entry/recipes-page.ts.0a21ca9b.js",
  a + "/_app/immutable/assets/_page.f747fa32.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.fc495bb3.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.b2e23235.js"
], m = "1681696002743", t = `monadorecipes-${m}`, i = async () => {
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
