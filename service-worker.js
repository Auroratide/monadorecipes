const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.06da17e0.js",
  a + "/_app/immutable/chunks/0.75638c39.js",
  a + "/_app/immutable/chunks/1.60846430.js",
  a + "/_app/immutable/chunks/2.4127c55d.js",
  a + "/_app/immutable/chunks/3.27f0396a.js",
  a + "/_app/immutable/chunks/4.a0a0eb6e.js",
  a + "/_app/immutable/chunks/5.4cb49abe.js",
  a + "/_app/immutable/assets/BackdropScene.74c44b78.css",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/Page.c8d7c874.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.5b4a1052.css",
  a + "/_app/immutable/assets/VisuallyHidden.908af276.css",
  a + "/_app/immutable/chunks/BackdropScene.b1364eef.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.219a80a5.png",
  a + "/_app/immutable/chunks/BasicPanel.a3f14f02.js",
  a + "/_app/immutable/chunks/Page.3dbe6c02.js",
  a + "/_app/immutable/chunks/TitledPanel.1693a3f0.js",
  a + "/_app/immutable/chunks/TriangleCorners.09815722.js",
  a + "/_app/immutable/chunks/Url.8bede481.js",
  a + "/_app/immutable/chunks/VisuallyHidden.3b9c79b9.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.445d5f9b.js",
  a + "/_app/immutable/chunks/_page.6c7fa665.js",
  a + "/_app/immutable/chunks/_page.977549b7.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.eb3b8662.js",
  a + "/_app/immutable/chunks/paths.76b42075.js",
  a + "/_app/immutable/chunks/singletons.604a35a3.js",
  a + "/_app/immutable/entry/start.d1eac9dc.js",
  a + "/_app/immutable/entry/layout.svelte.ee75076d.js",
  a + "/_app/immutable/entry/_error.svelte.4acb6f22.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.6e203da9.css",
  a + "/_app/immutable/entry/_page.svelte.7ca6edaf.js",
  a + "/_app/immutable/entry/_page.ts.5d18bb24.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.f176cb48.js",
  a + "/_app/immutable/entry/recipes-page.svelte.2f64dd02.js",
  a + "/_app/immutable/entry/recipes-page.ts.5d3a32e5.js",
  a + "/_app/immutable/assets/_page.f747fa32.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.eaa40623.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.8902b75c.js"
], m = "1681695785017", t = `monadorecipes-${m}`, i = async () => {
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
