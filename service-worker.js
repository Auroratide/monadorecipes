const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.b94e1474.js",
  a + "/_app/immutable/chunks/0.75638c39.js",
  a + "/_app/immutable/chunks/1.340fe3a1.js",
  a + "/_app/immutable/chunks/2.5b26ce54.js",
  a + "/_app/immutable/chunks/3.22854d09.js",
  a + "/_app/immutable/chunks/4.2419ccf6.js",
  a + "/_app/immutable/chunks/5.e7eb4f8c.js",
  a + "/_app/immutable/assets/BackdropScene.74c44b78.css",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/Page.c8d7c874.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.5b4a1052.css",
  a + "/_app/immutable/assets/VisuallyHidden.908af276.css",
  a + "/_app/immutable/chunks/BackdropScene.99feabf2.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.219a80a5.png",
  a + "/_app/immutable/chunks/BasicPanel.a103bf6e.js",
  a + "/_app/immutable/chunks/Page.53e0ce48.js",
  a + "/_app/immutable/chunks/TitledPanel.f6a66eb3.js",
  a + "/_app/immutable/chunks/TriangleCorners.09815722.js",
  a + "/_app/immutable/chunks/Url.5fe75ba4.js",
  a + "/_app/immutable/chunks/VisuallyHidden.3b9c79b9.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.8cd29ca3.js",
  a + "/_app/immutable/chunks/_page.8ff04202.js",
  a + "/_app/immutable/chunks/_page.9d0535bd.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.eb3b8662.js",
  a + "/_app/immutable/chunks/paths.e18625d2.js",
  a + "/_app/immutable/chunks/singletons.3ab6d95d.js",
  a + "/_app/immutable/entry/start.bce6b3db.js",
  a + "/_app/immutable/entry/layout.svelte.ee75076d.js",
  a + "/_app/immutable/entry/_error.svelte.a6dbaeee.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.6e203da9.css",
  a + "/_app/immutable/entry/_page.svelte.7eeb76af.js",
  a + "/_app/immutable/entry/_page.ts.381d90d6.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.8d6ca2a1.js",
  a + "/_app/immutable/entry/recipes-page.svelte.e8d8fd3a.js",
  a + "/_app/immutable/entry/recipes-page.ts.a43251e4.js",
  a + "/_app/immutable/assets/_page.f747fa32.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.4cf5219e.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.d9366b6f.js"
], m = "1681734438377", t = `monadorecipes-${m}`, i = async () => {
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
