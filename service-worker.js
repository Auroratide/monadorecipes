const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.5c707d7c.js",
  a + "/_app/immutable/chunks/0.7c6d938e.js",
  a + "/_app/immutable/chunks/1.ae3ce9d0.js",
  a + "/_app/immutable/chunks/2.b9e6d4da.js",
  a + "/_app/immutable/chunks/3.57abafe0.js",
  a + "/_app/immutable/chunks/4.c2e94574.js",
  a + "/_app/immutable/chunks/5.9c9296d9.js",
  a + "/_app/immutable/chunks/6.da81415a.js",
  a + "/_app/immutable/assets/BackdropScene.41cce2e6.css",
  a + "/_app/immutable/assets/Elevated.9853719f.css",
  a + "/_app/immutable/assets/Page.4a04418c.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.5b4a1052.css",
  a + "/_app/immutable/chunks/BackdropScene.a70f226d.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.219a80a5.png",
  a + "/_app/immutable/chunks/Elevated.66380390.js",
  a + "/_app/immutable/chunks/Page.27a66fe5.js",
  a + "/_app/immutable/chunks/TitledPanel.705b724d.js",
  a + "/_app/immutable/chunks/TriangleCorners.09815722.js",
  a + "/_app/immutable/chunks/Url.8197c592.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.004dd6f7.js",
  a + "/_app/immutable/chunks/_page.312088be.js",
  a + "/_app/immutable/chunks/_page.b2abf3ab.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.27a60b89.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/paths.3ac3f536.js",
  a + "/_app/immutable/chunks/singletons.a0ab8cd3.js",
  a + "/_app/immutable/chunks/stores.4ef61a3e.js",
  a + "/_app/immutable/entry/start.fb404c71.js",
  a + "/_app/immutable/entry/error.svelte.6631e5ad.js",
  a + "/_app/immutable/entry/layout.svelte.c44d139b.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.a247c88c.css",
  a + "/_app/immutable/entry/_page.svelte.6d060639.js",
  a + "/_app/immutable/entry/_page.ts.7eb15260.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.ce47333f.js",
  a + "/_app/immutable/entry/recipes-page.svelte.48f85012.js",
  a + "/_app/immutable/entry/recipes-page.ts.46c17204.js",
  a + "/_app/immutable/entry/recipes-_id_-error.svelte.debade44.js",
  a + "/_app/immutable/assets/_page.cb9d673f.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.c3671338.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.71565620.js"
], m = "1681566224549", t = `monadorecipes-${m}`, c = async () => {
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
