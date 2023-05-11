const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.13526af3.js",
  a + "/_app/immutable/chunks/0.ea6e0f19.js",
  a + "/_app/immutable/chunks/1.d827fdbc.js",
  a + "/_app/immutable/chunks/2.d39f43cc.js",
  a + "/_app/immutable/chunks/3.3cbb4234.js",
  a + "/_app/immutable/chunks/4.d15dd51c.js",
  a + "/_app/immutable/chunks/5.b7e84881.js",
  a + "/_app/immutable/chunks/6.7a006b0b.js",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/BuildOpenGraph.384d1c6c.css",
  a + "/_app/immutable/assets/Page.444a7ce9.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.7daf0df2.css",
  a + "/_app/immutable/chunks/BasicPanel.62bf6b40.js",
  a + "/_app/immutable/chunks/BuildOpenGraph.29968edd.js",
  a + "/_app/immutable/chunks/Page.5f8b467d.js",
  a + "/_app/immutable/chunks/TitledPanel.0049e079.js",
  a + "/_app/immutable/chunks/TriangleCorners.d3b43205.js",
  a + "/_app/immutable/chunks/Url.ee801cd2.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.098b55bb.js",
  a + "/_app/immutable/chunks/_page.350e2573.js",
  a + "/_app/immutable/chunks/_page.aff14ed0.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/description.e90897da.js",
  a + "/_app/immutable/assets/description.74c44b78.css",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.47f887b8.webp",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.3fa9fd24.js",
  a + "/_app/immutable/chunks/paths.4cce1958.js",
  a + "/_app/immutable/chunks/singletons.d8adc65e.js",
  a + "/_app/immutable/entry/start.2da7e2d6.js",
  a + "/_app/immutable/entry/layout.svelte.b2723e91.js",
  a + "/_app/immutable/entry/_error.svelte.18eb111e.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.0623298a.css",
  a + "/_app/immutable/entry/_page.svelte.1dbcdb9d.js",
  a + "/_app/immutable/entry/_page.ts.a4deeced.js",
  a + "/_app/immutable/entry/about-page.svelte.da0fcfa6.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.9641e6fa.js",
  a + "/_app/immutable/entry/recipes-page.svelte.9938a6a9.js",
  a + "/_app/immutable/entry/recipes-page.ts.cff63690.js",
  a + "/_app/immutable/assets/_page.01e7b0c6.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.9e8cc560.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.07624525.js"
], m = "1683806468072", t = `monadorecipes-${m}`, i = async () => {
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
