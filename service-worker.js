const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.62212c1b.js",
  a + "/_app/immutable/chunks/0.7c6d938e.js",
  a + "/_app/immutable/chunks/1.572593b6.js",
  a + "/_app/immutable/chunks/2.cae75417.js",
  a + "/_app/immutable/chunks/3.72ff4a2a.js",
  a + "/_app/immutable/chunks/4.cdc69253.js",
  a + "/_app/immutable/chunks/5.6bc2f3b5.js",
  a + "/_app/immutable/chunks/6.41317a07.js",
  a + "/_app/immutable/assets/BackdropScene.41cce2e6.css",
  a + "/_app/immutable/assets/Elevated.9853719f.css",
  a + "/_app/immutable/assets/Page.4a04418c.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.5b4a1052.css",
  a + "/_app/immutable/chunks/BackdropScene.4880aeba.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.219a80a5.png",
  a + "/_app/immutable/chunks/Elevated.66380390.js",
  a + "/_app/immutable/chunks/Page.a12475f1.js",
  a + "/_app/immutable/chunks/TitledPanel.c64a2ea3.js",
  a + "/_app/immutable/chunks/TriangleCorners.09815722.js",
  a + "/_app/immutable/chunks/Url.147b8125.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.07708428.js",
  a + "/_app/immutable/chunks/_page.465c668e.js",
  a + "/_app/immutable/chunks/_page.66226cfb.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.27a60b89.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/paths.d0b8b24d.js",
  a + "/_app/immutable/chunks/singletons.e7f8181a.js",
  a + "/_app/immutable/chunks/stores.a6975a9d.js",
  a + "/_app/immutable/entry/start.27ef8808.js",
  a + "/_app/immutable/entry/error.svelte.fb846f2f.js",
  a + "/_app/immutable/entry/layout.svelte.c44d139b.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.a247c88c.css",
  a + "/_app/immutable/entry/_page.svelte.a8c828db.js",
  a + "/_app/immutable/entry/_page.ts.de0731af.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.a82c815d.js",
  a + "/_app/immutable/entry/recipes-page.svelte.846e895c.js",
  a + "/_app/immutable/entry/recipes-page.ts.31c8bf3f.js",
  a + "/_app/immutable/entry/recipes-_id_-error.svelte.d4feaa05.js",
  a + "/_app/immutable/assets/_page.cb9d673f.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.d4bbb17f.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.7b758244.js"
], m = "1681566679548", t = `monadorecipes-${m}`, c = async () => {
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
