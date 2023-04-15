const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  e + "/_app/immutable/entry/app.44cd6111.js",
  e + "/_app/immutable/chunks/0.7c6d938e.js",
  e + "/_app/immutable/chunks/1.f30998f3.js",
  e + "/_app/immutable/chunks/2.602dba6f.js",
  e + "/_app/immutable/chunks/3.b1f387fc.js",
  e + "/_app/immutable/chunks/4.31feb72a.js",
  e + "/_app/immutable/chunks/5.d2ef921f.js",
  e + "/_app/immutable/chunks/6.f099bf6d.js",
  e + "/_app/immutable/assets/BackdropScene.41cce2e6.css",
  e + "/_app/immutable/assets/Elevated.9853719f.css",
  e + "/_app/immutable/assets/Page.4a04418c.css",
  e + "/_app/immutable/assets/TitledPanel.1375e929.css",
  e + "/_app/immutable/assets/TriangleCorners.5b4a1052.css",
  e + "/_app/immutable/chunks/BackdropScene.8f0772a1.js",
  e + "/_app/immutable/assets/titans.3a42881e.webp",
  e + "/_app/immutable/assets/torna-camp.219a80a5.png",
  e + "/_app/immutable/chunks/Elevated.66380390.js",
  e + "/_app/immutable/chunks/Page.a1d48363.js",
  e + "/_app/immutable/chunks/TitledPanel.58e80a9e.js",
  e + "/_app/immutable/chunks/TriangleCorners.09815722.js",
  e + "/_app/immutable/chunks/Url.2236b477.js",
  e + "/_app/immutable/chunks/_layout.da46b06b.js",
  e + "/_app/immutable/chunks/_page.1eea5623.js",
  e + "/_app/immutable/chunks/_page.6dd4b61c.js",
  e + "/_app/immutable/chunks/_page.be91645c.js",
  e + "/_app/immutable/chunks/control.e7f5239e.js",
  e + "/_app/immutable/chunks/index.27a60b89.js",
  e + "/_app/immutable/chunks/index.2defaa64.js",
  e + "/_app/immutable/chunks/paths.60fbbb2c.js",
  e + "/_app/immutable/chunks/singletons.2983d6c5.js",
  e + "/_app/immutable/chunks/stores.ebf36514.js",
  e + "/_app/immutable/entry/start.589be40c.js",
  e + "/_app/immutable/entry/error.svelte.d6ef6cc3.js",
  e + "/_app/immutable/entry/layout.svelte.c44d139b.js",
  e + "/_app/immutable/entry/_layout.ts.984db11e.js",
  e + "/_app/immutable/assets/_page.a247c88c.css",
  e + "/_app/immutable/entry/_page.svelte.e6465bd9.js",
  e + "/_app/immutable/entry/_page.ts.9a9936f3.js",
  e + "/_app/immutable/entry/legal-disclaimers-page.svelte.7b79626e.js",
  e + "/_app/immutable/entry/recipes-page.svelte.1e56d341.js",
  e + "/_app/immutable/entry/recipes-page.ts.926909cf.js",
  e + "/_app/immutable/entry/recipes-_id_-error.svelte.d7918e05.js",
  e + "/_app/immutable/assets/_page.cb9d673f.css",
  e + "/_app/immutable/entry/recipes-_id_-page.svelte.1d3c895e.js",
  e + "/_app/immutable/entry/recipes-_id_-page.ts.abf16ca8.js"
], m = "1681530703282", t = `monadorecipes-${m}`, c = async () => {
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
