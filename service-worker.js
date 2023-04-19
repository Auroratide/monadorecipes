const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.8bf58058.js",
  a + "/_app/immutable/chunks/0.a5f17a51.js",
  a + "/_app/immutable/chunks/1.35766d38.js",
  a + "/_app/immutable/chunks/2.bf26eb26.js",
  a + "/_app/immutable/chunks/3.463bb130.js",
  a + "/_app/immutable/chunks/4.e9eaa7d5.js",
  a + "/_app/immutable/chunks/5.4cad8a0a.js",
  a + "/_app/immutable/assets/BackdropScene.74c44b78.css",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/Page.444a7ce9.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.7daf0df2.css",
  a + "/_app/immutable/assets/VisuallyHidden.384d1c6c.css",
  a + "/_app/immutable/chunks/BackdropScene.becf6ab8.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.219a80a5.png",
  a + "/_app/immutable/chunks/BasicPanel.1c4dca2a.js",
  a + "/_app/immutable/chunks/Page.de42c8d6.js",
  a + "/_app/immutable/chunks/TitledPanel.d99130e3.js",
  a + "/_app/immutable/chunks/TriangleCorners.d3b43205.js",
  a + "/_app/immutable/chunks/Url.af0f14f4.js",
  a + "/_app/immutable/chunks/VisuallyHidden.cf7d3de8.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.33286186.js",
  a + "/_app/immutable/chunks/_page.51f0910c.js",
  a + "/_app/immutable/chunks/_page.c043f95a.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.7251b7a2.js",
  a + "/_app/immutable/chunks/paths.633f62d8.js",
  a + "/_app/immutable/chunks/singletons.7d82c7b1.js",
  a + "/_app/immutable/entry/start.04498ea2.js",
  a + "/_app/immutable/entry/layout.svelte.18caa6aa.js",
  a + "/_app/immutable/entry/_error.svelte.c4b05a65.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.0623298a.css",
  a + "/_app/immutable/entry/_page.svelte.dcabab8a.js",
  a + "/_app/immutable/entry/_page.ts.e90312f3.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.a601f244.js",
  a + "/_app/immutable/entry/recipes-page.svelte.da0245ac.js",
  a + "/_app/immutable/entry/recipes-page.ts.be4b1495.js",
  a + "/_app/immutable/assets/_page.346e2be0.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.a5685f83.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.88f4419c.js"
], m = "1681863012488", t = `monadorecipes-${m}`, i = async () => {
  await (await caches.open(t)).addAll(p);
};
self.addEventListener("install", (e) => e.waitUntil(i()));
const c = async () => {
  const e = await caches.keys();
  await Promise.all(e.map((s) => {
    if (s !== t)
      return caches.delete(s);
  }));
};
self.addEventListener("activate", (e) => e.waitUntil(c()));
self.addEventListener("fetch", (e) => {
});
