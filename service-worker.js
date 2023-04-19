const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.367a37d9.js",
  a + "/_app/immutable/chunks/0.ea6e0f19.js",
  a + "/_app/immutable/chunks/1.38cdddf8.js",
  a + "/_app/immutable/chunks/2.af1ad0e1.js",
  a + "/_app/immutable/chunks/3.187ae472.js",
  a + "/_app/immutable/chunks/4.b33ebd5b.js",
  a + "/_app/immutable/chunks/5.6c6a069c.js",
  a + "/_app/immutable/assets/BackdropScene.74c44b78.css",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/Page.444a7ce9.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.7daf0df2.css",
  a + "/_app/immutable/assets/VisuallyHidden.384d1c6c.css",
  a + "/_app/immutable/chunks/BackdropScene.602d88d3.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.47f887b8.webp",
  a + "/_app/immutable/chunks/BasicPanel.093021d6.js",
  a + "/_app/immutable/chunks/Page.1f7423ee.js",
  a + "/_app/immutable/chunks/TitledPanel.d5eeaec0.js",
  a + "/_app/immutable/chunks/TriangleCorners.d3b43205.js",
  a + "/_app/immutable/chunks/Url.305618ae.js",
  a + "/_app/immutable/chunks/VisuallyHidden.d3a48b3c.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.91c74ea8.js",
  a + "/_app/immutable/chunks/_page.a1b6d757.js",
  a + "/_app/immutable/chunks/_page.f1c9b69e.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.3fa9fd24.js",
  a + "/_app/immutable/chunks/paths.b19ed4fe.js",
  a + "/_app/immutable/chunks/singletons.902408d5.js",
  a + "/_app/immutable/entry/start.1a3531fc.js",
  a + "/_app/immutable/entry/layout.svelte.b2723e91.js",
  a + "/_app/immutable/entry/_error.svelte.156af6a8.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.0623298a.css",
  a + "/_app/immutable/entry/_page.svelte.fa4ae522.js",
  a + "/_app/immutable/entry/_page.ts.5bee93dc.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.4f294069.js",
  a + "/_app/immutable/entry/recipes-page.svelte.b38796e7.js",
  a + "/_app/immutable/entry/recipes-page.ts.03e37f5d.js",
  a + "/_app/immutable/assets/_page.01e7b0c6.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.d3823371.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.e2f52652.js"
], m = "1681946441569", t = `monadorecipes-${m}`, i = async () => {
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
