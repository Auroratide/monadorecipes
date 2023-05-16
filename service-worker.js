const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.72a95f0e.js",
  a + "/_app/immutable/chunks/0.9a1e1621.js",
  a + "/_app/immutable/chunks/1.ae752c4c.js",
  a + "/_app/immutable/chunks/2.f7d0afcc.js",
  a + "/_app/immutable/chunks/3.bba52716.js",
  a + "/_app/immutable/chunks/4.82552993.js",
  a + "/_app/immutable/chunks/5.2d292de8.js",
  a + "/_app/immutable/chunks/6.0fb49ecf.js",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/BuildOpenGraph.548866bc.css",
  a + "/_app/immutable/assets/Page.162cabfa.css",
  a + "/_app/immutable/assets/TitledPanel.45e891ef.css",
  a + "/_app/immutable/assets/TriangleCorners.eafa5a9b.css",
  a + "/_app/immutable/chunks/BasicPanel.00085d08.js",
  a + "/_app/immutable/chunks/BuildOpenGraph.8fa25b66.js",
  a + "/_app/immutable/chunks/Page.e0b980ce.js",
  a + "/_app/immutable/chunks/TitledPanel.7eceb00a.js",
  a + "/_app/immutable/chunks/TriangleCorners.ffbfad86.js",
  a + "/_app/immutable/chunks/Url.fb58eda4.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.647a8547.js",
  a + "/_app/immutable/chunks/_page.daa492e0.js",
  a + "/_app/immutable/chunks/_page.fb94b329.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/description.4e85bb3c.js",
  a + "/_app/immutable/assets/description.e4f477e1.css",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.47f887b8.webp",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.4a4c6f48.js",
  a + "/_app/immutable/chunks/paths.59af3c76.js",
  a + "/_app/immutable/chunks/singletons.7e8811e6.js",
  a + "/_app/immutable/entry/start.6b880199.js",
  a + "/_app/immutable/entry/layout.svelte.a7f30510.js",
  a + "/_app/immutable/entry/_error.svelte.d05e7564.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.0623298a.css",
  a + "/_app/immutable/entry/_page.svelte.38c48b9b.js",
  a + "/_app/immutable/entry/_page.ts.0190e798.js",
  a + "/_app/immutable/entry/about-page.svelte.37dc9c71.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.c946fd47.js",
  a + "/_app/immutable/entry/recipes-page.svelte.a51d2239.js",
  a + "/_app/immutable/entry/recipes-page.ts.e1bbab3b.js",
  a + "/_app/immutable/assets/_page.220d962d.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.1dcd0e37.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.5d525e3a.js"
], m = "1684236324613", t = `monadorecipes-${m}`, i = async () => {
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
