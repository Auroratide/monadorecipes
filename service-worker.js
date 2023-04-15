const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.b127c590.js",
  a + "/_app/immutable/chunks/0.7c6d938e.js",
  a + "/_app/immutable/chunks/1.2a9c4140.js",
  a + "/_app/immutable/chunks/2.66197224.js",
  a + "/_app/immutable/chunks/3.943299c7.js",
  a + "/_app/immutable/chunks/4.191ddebb.js",
  a + "/_app/immutable/chunks/5.139a4e8d.js",
  a + "/_app/immutable/chunks/6.936405eb.js",
  a + "/_app/immutable/assets/BackdropScene.41cce2e6.css",
  a + "/_app/immutable/assets/Elevated.9853719f.css",
  a + "/_app/immutable/assets/Page.4a04418c.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.5b4a1052.css",
  a + "/_app/immutable/chunks/BackdropScene.73d3d413.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.219a80a5.png",
  a + "/_app/immutable/chunks/Elevated.66380390.js",
  a + "/_app/immutable/chunks/Page.094d1ea9.js",
  a + "/_app/immutable/chunks/TitledPanel.830339d7.js",
  a + "/_app/immutable/chunks/TriangleCorners.09815722.js",
  a + "/_app/immutable/chunks/Url.2d2243f1.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.1c79019e.js",
  a + "/_app/immutable/chunks/_page.97a40106.js",
  a + "/_app/immutable/chunks/_page.d233c183.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.27a60b89.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/paths.e261bc6f.js",
  a + "/_app/immutable/chunks/singletons.75967392.js",
  a + "/_app/immutable/chunks/stores.ad68c9e6.js",
  a + "/_app/immutable/entry/start.dbdb8a7f.js",
  a + "/_app/immutable/entry/error.svelte.bc8d7b6e.js",
  a + "/_app/immutable/entry/layout.svelte.c44d139b.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.a247c88c.css",
  a + "/_app/immutable/entry/_page.svelte.60444d41.js",
  a + "/_app/immutable/entry/_page.ts.16c3c845.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.5cdc955a.js",
  a + "/_app/immutable/entry/recipes-page.svelte.3175bfba.js",
  a + "/_app/immutable/entry/recipes-page.ts.adbdd427.js",
  a + "/_app/immutable/entry/recipes-_id_-error.svelte.8c155084.js",
  a + "/_app/immutable/assets/_page.cb9d673f.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.d712b595.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.6cdb68d9.js"
], m = "1681559044542", t = `monadorecipes-${m}`, c = async () => {
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
