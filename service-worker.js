const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.91550b20.js",
  a + "/_app/immutable/chunks/0.75638c39.js",
  a + "/_app/immutable/chunks/1.dec25581.js",
  a + "/_app/immutable/chunks/2.600dad3c.js",
  a + "/_app/immutable/chunks/3.cd89d7e9.js",
  a + "/_app/immutable/chunks/4.49b7d99a.js",
  a + "/_app/immutable/chunks/5.c193bdab.js",
  a + "/_app/immutable/assets/BackdropScene.74c44b78.css",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/Page.c8d7c874.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.5f623e45.css",
  a + "/_app/immutable/assets/VisuallyHidden.665f8601.css",
  a + "/_app/immutable/chunks/BackdropScene.e1738266.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.219a80a5.png",
  a + "/_app/immutable/chunks/BasicPanel.1f3687a9.js",
  a + "/_app/immutable/chunks/Page.5c3b7bf1.js",
  a + "/_app/immutable/chunks/TitledPanel.807099c0.js",
  a + "/_app/immutable/chunks/TriangleCorners.0151e101.js",
  a + "/_app/immutable/chunks/Url.1b0bab2f.js",
  a + "/_app/immutable/chunks/VisuallyHidden.1ae8e836.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.0ae2217f.js",
  a + "/_app/immutable/chunks/_page.8925fda1.js",
  a + "/_app/immutable/chunks/_page.c0628926.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.eb3b8662.js",
  a + "/_app/immutable/chunks/paths.045e1ef2.js",
  a + "/_app/immutable/chunks/singletons.b4b14fdb.js",
  a + "/_app/immutable/entry/start.5a10727e.js",
  a + "/_app/immutable/entry/layout.svelte.ee75076d.js",
  a + "/_app/immutable/entry/_error.svelte.6d421412.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.6e203da9.css",
  a + "/_app/immutable/entry/_page.svelte.6aa80776.js",
  a + "/_app/immutable/entry/_page.ts.c2849b1a.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.50a22cd3.js",
  a + "/_app/immutable/entry/recipes-page.svelte.103d297e.js",
  a + "/_app/immutable/entry/recipes-page.ts.8e86c47e.js",
  a + "/_app/immutable/assets/_page.1eee4f38.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.f69e57fa.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.289e50dc.js"
], m = "1681775527770", t = `monadorecipes-${m}`, i = async () => {
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
