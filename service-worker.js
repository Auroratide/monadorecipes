const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.276c633c.js",
  a + "/_app/immutable/chunks/0.f89e518d.js",
  a + "/_app/immutable/chunks/1.f08ab917.js",
  a + "/_app/immutable/chunks/2.f8dcf389.js",
  a + "/_app/immutable/chunks/3.511536d4.js",
  a + "/_app/immutable/chunks/4.414de796.js",
  a + "/_app/immutable/chunks/5.327400a6.js",
  a + "/_app/immutable/chunks/6.a1999606.js",
  a + "/_app/immutable/assets/BackdropScene.82a3fb2a.css",
  a + "/_app/immutable/assets/Elevated.9853719f.css",
  a + "/_app/immutable/assets/Page.4a04418c.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.5b4a1052.css",
  a + "/_app/immutable/chunks/BackdropScene.2234bb14.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.219a80a5.png",
  a + "/_app/immutable/chunks/Elevated.66380390.js",
  a + "/_app/immutable/chunks/Page.95af9f5f.js",
  a + "/_app/immutable/chunks/TitledPanel.907f5e05.js",
  a + "/_app/immutable/chunks/TriangleCorners.09815722.js",
  a + "/_app/immutable/chunks/Url.e63c8bda.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.a7363b3f.js",
  a + "/_app/immutable/chunks/_page.c59a4be8.js",
  a + "/_app/immutable/chunks/_page.dfed0535.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.f130d1b9.js",
  a + "/_app/immutable/chunks/paths.d7033ef8.js",
  a + "/_app/immutable/chunks/singletons.dbeae750.js",
  a + "/_app/immutable/chunks/stores.ca31b0d2.js",
  a + "/_app/immutable/entry/start.846d93f0.js",
  a + "/_app/immutable/entry/error.svelte.39baba86.js",
  a + "/_app/immutable/entry/layout.svelte.adb33bbc.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.a247c88c.css",
  a + "/_app/immutable/entry/_page.svelte.487a61b6.js",
  a + "/_app/immutable/entry/_page.ts.75321934.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.d4c482f0.js",
  a + "/_app/immutable/entry/recipes-page.svelte.ceab38ba.js",
  a + "/_app/immutable/entry/recipes-page.ts.3538c9a6.js",
  a + "/_app/immutable/entry/recipes-_id_-error.svelte.933c7278.js",
  a + "/_app/immutable/assets/_page.4de4adda.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.65136647.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.836e35f8.js"
], m = "1681592353778", t = `monadorecipes-${m}`, i = async () => {
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
