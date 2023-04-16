const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.ba086945.js",
  a + "/_app/immutable/chunks/0.f89e518d.js",
  a + "/_app/immutable/chunks/1.5b9f7de0.js",
  a + "/_app/immutable/chunks/2.eb034430.js",
  a + "/_app/immutable/chunks/3.6977337f.js",
  a + "/_app/immutable/chunks/4.ce469f5e.js",
  a + "/_app/immutable/chunks/5.d4958c89.js",
  a + "/_app/immutable/chunks/6.cb04ad48.js",
  a + "/_app/immutable/assets/BackdropScene.82a3fb2a.css",
  a + "/_app/immutable/assets/Page.4a04418c.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.5b4a1052.css",
  a + "/_app/immutable/assets/VisuallyHidden.908af276.css",
  a + "/_app/immutable/chunks/BackdropScene.7968c47a.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.219a80a5.png",
  a + "/_app/immutable/chunks/Page.46212cce.js",
  a + "/_app/immutable/chunks/TitledPanel.1551a373.js",
  a + "/_app/immutable/chunks/TriangleCorners.09815722.js",
  a + "/_app/immutable/chunks/Url.d1be39dd.js",
  a + "/_app/immutable/chunks/VisuallyHidden.3b9c79b9.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.2d33f8ed.js",
  a + "/_app/immutable/chunks/_page.795dc938.js",
  a + "/_app/immutable/chunks/_page.7b99942b.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.f130d1b9.js",
  a + "/_app/immutable/chunks/paths.bca99553.js",
  a + "/_app/immutable/chunks/singletons.fee89d13.js",
  a + "/_app/immutable/chunks/stores.eed09c68.js",
  a + "/_app/immutable/entry/start.0e6044d2.js",
  a + "/_app/immutable/entry/error.svelte.ab2e3fb8.js",
  a + "/_app/immutable/entry/layout.svelte.adb33bbc.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.6e203da9.css",
  a + "/_app/immutable/entry/_page.svelte.293da137.js",
  a + "/_app/immutable/entry/_page.ts.a11bfa79.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.b29df2bd.js",
  a + "/_app/immutable/entry/recipes-page.svelte.19a0583b.js",
  a + "/_app/immutable/entry/recipes-page.ts.fda9c546.js",
  a + "/_app/immutable/entry/recipes-_id_-error.svelte.3fd29389.js",
  a + "/_app/immutable/assets/_page.4de4adda.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.29bd88ab.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.b9a841f8.js"
], m = "1681685355691", t = `monadorecipes-${m}`, i = async () => {
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
