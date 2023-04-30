const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.8f4d3db8.js",
  a + "/_app/immutable/chunks/0.ea6e0f19.js",
  a + "/_app/immutable/chunks/1.7ef7e908.js",
  a + "/_app/immutable/chunks/2.86f675b8.js",
  a + "/_app/immutable/chunks/3.9299bb1e.js",
  a + "/_app/immutable/chunks/4.c1bc1752.js",
  a + "/_app/immutable/chunks/5.0d163425.js",
  a + "/_app/immutable/chunks/6.d09c790b.js",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/BuildOpenGraph.384d1c6c.css",
  a + "/_app/immutable/assets/Page.444a7ce9.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.7daf0df2.css",
  a + "/_app/immutable/chunks/BasicPanel.977bcb39.js",
  a + "/_app/immutable/chunks/BuildOpenGraph.7024e1fc.js",
  a + "/_app/immutable/chunks/Page.3e75a575.js",
  a + "/_app/immutable/chunks/TitledPanel.bf25d3b6.js",
  a + "/_app/immutable/chunks/TriangleCorners.d3b43205.js",
  a + "/_app/immutable/chunks/Url.db42dd76.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.2213e03b.js",
  a + "/_app/immutable/chunks/_page.d2ec05a2.js",
  a + "/_app/immutable/chunks/_page.d98c80ac.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/description.13b8ff66.js",
  a + "/_app/immutable/assets/description.74c44b78.css",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.47f887b8.webp",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.3fa9fd24.js",
  a + "/_app/immutable/chunks/paths.18536ae8.js",
  a + "/_app/immutable/chunks/singletons.27f5ff92.js",
  a + "/_app/immutable/entry/start.234ecbef.js",
  a + "/_app/immutable/entry/layout.svelte.b2723e91.js",
  a + "/_app/immutable/entry/_error.svelte.097cefae.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.0623298a.css",
  a + "/_app/immutable/entry/_page.svelte.66c3270c.js",
  a + "/_app/immutable/entry/_page.ts.3c21a1bf.js",
  a + "/_app/immutable/entry/about-page.svelte.825c83d5.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.e31ff336.js",
  a + "/_app/immutable/entry/recipes-page.svelte.1bac3d7d.js",
  a + "/_app/immutable/entry/recipes-page.ts.eaa1a501.js",
  a + "/_app/immutable/assets/_page.01e7b0c6.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.3c5ef5d9.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.211a967a.js"
], m = "1682815667367", t = `monadorecipes-${m}`, i = async () => {
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
