const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.47202486.js",
  a + "/_app/immutable/chunks/0.c9d7de0e.js",
  a + "/_app/immutable/chunks/1.28ae7820.js",
  a + "/_app/immutable/chunks/2.fc21854a.js",
  a + "/_app/immutable/chunks/3.8dc43b30.js",
  a + "/_app/immutable/chunks/4.25cabd8e.js",
  a + "/_app/immutable/chunks/5.89f20c06.js",
  a + "/_app/immutable/assets/BackdropScene.74c44b78.css",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/Page.444a7ce9.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.7daf0df2.css",
  a + "/_app/immutable/assets/VisuallyHidden.384d1c6c.css",
  a + "/_app/immutable/chunks/BackdropScene.53c3251e.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.47f887b8.webp",
  a + "/_app/immutable/chunks/BasicPanel.c4f2f164.js",
  a + "/_app/immutable/chunks/Page.e8221511.js",
  a + "/_app/immutable/chunks/TitledPanel.0b5191d6.js",
  a + "/_app/immutable/chunks/TriangleCorners.d3b43205.js",
  a + "/_app/immutable/chunks/Url.1e448bfc.js",
  a + "/_app/immutable/chunks/VisuallyHidden.723f741f.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.4665d03b.js",
  a + "/_app/immutable/chunks/_page.97fd8d9b.js",
  a + "/_app/immutable/chunks/_page.eb93aed1.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.87b41676.js",
  a + "/_app/immutable/chunks/paths.d5aae0f1.js",
  a + "/_app/immutable/chunks/singletons.ed5cc8ed.js",
  a + "/_app/immutable/entry/start.1e01e826.js",
  a + "/_app/immutable/entry/layout.svelte.c5933218.js",
  a + "/_app/immutable/entry/_error.svelte.5c27491b.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.0623298a.css",
  a + "/_app/immutable/entry/_page.svelte.288fd8b3.js",
  a + "/_app/immutable/entry/_page.ts.37f5a038.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.234b3e6d.js",
  a + "/_app/immutable/entry/recipes-page.svelte.deb37262.js",
  a + "/_app/immutable/entry/recipes-page.ts.7ce1a1ed.js",
  a + "/_app/immutable/assets/_page.01e7b0c6.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.f0b313b1.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.8bab4a1a.js"
], m = "1681946117386", t = `monadorecipes-${m}`, i = async () => {
  await (await caches.open(t)).addAll(p);
};
self.addEventListener("install", (e) => e.waitUntil(i()));
const c = async () => {
  const e = await caches.keys();
  await Promise.all(e.map((s) => {
    if (s !== t)
      return caches.delete(s);
  }));
};
self.addEventListener("activate", (e) => e.waitUntil(c()));
self.addEventListener("fetch", (e) => {
});
