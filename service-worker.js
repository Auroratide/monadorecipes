const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  e + "/_app/immutable/entry/app.257fff0c.js",
  e + "/_app/immutable/chunks/0.7c6d938e.js",
  e + "/_app/immutable/chunks/1.ef8d5895.js",
  e + "/_app/immutable/chunks/2.8e9ec458.js",
  e + "/_app/immutable/chunks/3.f7c9c162.js",
  e + "/_app/immutable/chunks/4.2f606cb7.js",
  e + "/_app/immutable/chunks/5.0f8f78c4.js",
  e + "/_app/immutable/chunks/6.e3ed96f0.js",
  e + "/_app/immutable/assets/BackdropScene.41cce2e6.css",
  e + "/_app/immutable/assets/Elevated.9853719f.css",
  e + "/_app/immutable/assets/Page.4a04418c.css",
  e + "/_app/immutable/assets/TitledPanel.1375e929.css",
  e + "/_app/immutable/assets/TriangleCorners.5b4a1052.css",
  e + "/_app/immutable/chunks/BackdropScene.7824d8e5.js",
  e + "/_app/immutable/assets/titans.3a42881e.webp",
  e + "/_app/immutable/assets/torna-camp.219a80a5.png",
  e + "/_app/immutable/chunks/Elevated.66380390.js",
  e + "/_app/immutable/chunks/Page.ac5642a5.js",
  e + "/_app/immutable/chunks/TitledPanel.981836b2.js",
  e + "/_app/immutable/chunks/TriangleCorners.09815722.js",
  e + "/_app/immutable/chunks/Url.91259d5a.js",
  e + "/_app/immutable/chunks/_layout.da46b06b.js",
  e + "/_app/immutable/chunks/_page.7eae3856.js",
  e + "/_app/immutable/chunks/_page.9a46e1b6.js",
  e + "/_app/immutable/chunks/_page.e04e2f26.js",
  e + "/_app/immutable/chunks/control.e7f5239e.js",
  e + "/_app/immutable/chunks/index.27a60b89.js",
  e + "/_app/immutable/chunks/index.2defaa64.js",
  e + "/_app/immutable/chunks/paths.52b872e7.js",
  e + "/_app/immutable/chunks/singletons.f44f1edc.js",
  e + "/_app/immutable/chunks/stores.362af761.js",
  e + "/_app/immutable/entry/start.2f4a2cbd.js",
  e + "/_app/immutable/entry/error.svelte.8f9f23e8.js",
  e + "/_app/immutable/entry/layout.svelte.c44d139b.js",
  e + "/_app/immutable/entry/_layout.ts.984db11e.js",
  e + "/_app/immutable/assets/_page.a247c88c.css",
  e + "/_app/immutable/entry/_page.svelte.a3b82362.js",
  e + "/_app/immutable/entry/_page.ts.21e60949.js",
  e + "/_app/immutable/entry/legal-disclaimers-page.svelte.82e832e6.js",
  e + "/_app/immutable/entry/recipes-page.svelte.46a1d95e.js",
  e + "/_app/immutable/entry/recipes-page.ts.ecfd0ef5.js",
  e + "/_app/immutable/entry/recipes-_id_-error.svelte.7c20d831.js",
  e + "/_app/immutable/assets/_page.cb9d673f.css",
  e + "/_app/immutable/entry/recipes-_id_-page.svelte.057c5ce7.js",
  e + "/_app/immutable/entry/recipes-_id_-page.ts.19200294.js"
], m = "1681509059320", t = `monadorecipes-${m}`, c = async () => {
  await (await caches.open(t)).addAll(p);
};
self.addEventListener("install", (a) => a.waitUntil(c()));
const i = async () => {
  const a = await caches.keys();
  await Promise.all(a.map((s) => {
    if (s !== t)
      return caches.delete(s);
  }));
};
self.addEventListener("activate", (a) => a.waitUntil(i()));
self.addEventListener("fetch", (a) => {
});
