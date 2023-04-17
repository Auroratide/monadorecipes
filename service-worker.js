const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.b5d0ea22.js",
  a + "/_app/immutable/chunks/0.75638c39.js",
  a + "/_app/immutable/chunks/1.80b6f6f5.js",
  a + "/_app/immutable/chunks/2.bbd2c701.js",
  a + "/_app/immutable/chunks/3.c0d17b04.js",
  a + "/_app/immutable/chunks/4.28cad211.js",
  a + "/_app/immutable/chunks/5.8302e2d5.js",
  a + "/_app/immutable/assets/BackdropScene.74c44b78.css",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/Page.c8d7c874.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.5b4a1052.css",
  a + "/_app/immutable/assets/VisuallyHidden.908af276.css",
  a + "/_app/immutable/chunks/BackdropScene.9e8f5973.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.219a80a5.png",
  a + "/_app/immutable/chunks/BasicPanel.3a436d6c.js",
  a + "/_app/immutable/chunks/Page.c46ddc16.js",
  a + "/_app/immutable/chunks/TitledPanel.3c852f19.js",
  a + "/_app/immutable/chunks/TriangleCorners.09815722.js",
  a + "/_app/immutable/chunks/Url.6e9099c3.js",
  a + "/_app/immutable/chunks/VisuallyHidden.3b9c79b9.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.99c9f73c.js",
  a + "/_app/immutable/chunks/_page.b4c5762d.js",
  a + "/_app/immutable/chunks/_page.e9101174.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.eb3b8662.js",
  a + "/_app/immutable/chunks/paths.823d1796.js",
  a + "/_app/immutable/chunks/singletons.4a22863e.js",
  a + "/_app/immutable/entry/start.48b1993c.js",
  a + "/_app/immutable/entry/layout.svelte.ee75076d.js",
  a + "/_app/immutable/entry/_error.svelte.d2550f14.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.6e203da9.css",
  a + "/_app/immutable/entry/_page.svelte.10a8da00.js",
  a + "/_app/immutable/entry/_page.ts.2a53e8db.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.9efc0eea.js",
  a + "/_app/immutable/entry/recipes-page.svelte.f07cdd04.js",
  a + "/_app/immutable/entry/recipes-page.ts.dd7a2c3d.js",
  a + "/_app/immutable/assets/_page.5d0dd9ee.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.577d8f3e.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.6bfb8c6c.js"
], m = "1681771687579", t = `monadorecipes-${m}`, c = async () => {
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
