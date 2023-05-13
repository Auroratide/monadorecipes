const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.070db7e0.js",
  a + "/_app/immutable/chunks/0.ea6e0f19.js",
  a + "/_app/immutable/chunks/1.8b6e06b8.js",
  a + "/_app/immutable/chunks/2.a569ed69.js",
  a + "/_app/immutable/chunks/3.92c9cb0d.js",
  a + "/_app/immutable/chunks/4.7a030767.js",
  a + "/_app/immutable/chunks/5.96257319.js",
  a + "/_app/immutable/chunks/6.1361a5f5.js",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/BuildOpenGraph.384d1c6c.css",
  a + "/_app/immutable/assets/Page.444a7ce9.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.7daf0df2.css",
  a + "/_app/immutable/chunks/BasicPanel.0c7627c8.js",
  a + "/_app/immutable/chunks/BuildOpenGraph.960c910b.js",
  a + "/_app/immutable/chunks/Page.d7d730b2.js",
  a + "/_app/immutable/chunks/TitledPanel.74eed5c1.js",
  a + "/_app/immutable/chunks/TriangleCorners.d3b43205.js",
  a + "/_app/immutable/chunks/Url.dde57fbd.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.5574fe9d.js",
  a + "/_app/immutable/chunks/_page.ba08592b.js",
  a + "/_app/immutable/chunks/_page.fd1a220a.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/description.433d2658.js",
  a + "/_app/immutable/assets/description.74c44b78.css",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.47f887b8.webp",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.3fa9fd24.js",
  a + "/_app/immutable/chunks/paths.9cd94af5.js",
  a + "/_app/immutable/chunks/singletons.6c847988.js",
  a + "/_app/immutable/entry/start.abfe88a1.js",
  a + "/_app/immutable/entry/layout.svelte.b2723e91.js",
  a + "/_app/immutable/entry/_error.svelte.c487b29d.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.0623298a.css",
  a + "/_app/immutable/entry/_page.svelte.e240e3f2.js",
  a + "/_app/immutable/entry/_page.ts.88fa8717.js",
  a + "/_app/immutable/entry/about-page.svelte.c82f37b7.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.a0a0816c.js",
  a + "/_app/immutable/entry/recipes-page.svelte.a1e1b3ba.js",
  a + "/_app/immutable/entry/recipes-page.ts.734571c7.js",
  a + "/_app/immutable/assets/_page.01e7b0c6.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.aeda2f8e.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.d3f82520.js"
], m = "1683981856509", t = `monadorecipes-${m}`, i = async () => {
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
