const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.5d4972bc.js",
  a + "/_app/immutable/chunks/0.7c6d938e.js",
  a + "/_app/immutable/chunks/1.e2e8d5f1.js",
  a + "/_app/immutable/chunks/2.660d5fd5.js",
  a + "/_app/immutable/chunks/3.012c79fe.js",
  a + "/_app/immutable/chunks/4.7d26f0e2.js",
  a + "/_app/immutable/chunks/5.189ea116.js",
  a + "/_app/immutable/chunks/6.f06cac40.js",
  a + "/_app/immutable/assets/BackdropScene.41cce2e6.css",
  a + "/_app/immutable/assets/Elevated.9853719f.css",
  a + "/_app/immutable/assets/Page.4a04418c.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.5b4a1052.css",
  a + "/_app/immutable/chunks/BackdropScene.e2317fb0.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.219a80a5.png",
  a + "/_app/immutable/chunks/Elevated.66380390.js",
  a + "/_app/immutable/chunks/Page.0b84aa79.js",
  a + "/_app/immutable/chunks/TitledPanel.68996cfa.js",
  a + "/_app/immutable/chunks/TriangleCorners.09815722.js",
  a + "/_app/immutable/chunks/Url.03d6e007.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.09f716ca.js",
  a + "/_app/immutable/chunks/_page.d67feeb2.js",
  a + "/_app/immutable/chunks/_page.dafc1ea1.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.27a60b89.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/paths.12492e30.js",
  a + "/_app/immutable/chunks/singletons.bdaf1c58.js",
  a + "/_app/immutable/chunks/stores.024fb64a.js",
  a + "/_app/immutable/entry/start.5d004e69.js",
  a + "/_app/immutable/entry/error.svelte.5a173c56.js",
  a + "/_app/immutable/entry/layout.svelte.c44d139b.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.a247c88c.css",
  a + "/_app/immutable/entry/_page.svelte.64430606.js",
  a + "/_app/immutable/entry/_page.ts.4f551142.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.46545c75.js",
  a + "/_app/immutable/entry/recipes-page.svelte.d061a6a4.js",
  a + "/_app/immutable/entry/recipes-page.ts.0ab6b121.js",
  a + "/_app/immutable/entry/recipes-_id_-error.svelte.df85706e.js",
  a + "/_app/immutable/assets/_page.cb9d673f.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.8995d3c5.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.4eb25c7d.js"
], m = "1681529858281", t = `monadorecipes-${m}`, c = async () => {
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
