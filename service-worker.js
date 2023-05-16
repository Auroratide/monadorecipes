const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.587173b9.js",
  a + "/_app/immutable/chunks/0.9a1e1621.js",
  a + "/_app/immutable/chunks/1.c4fdb414.js",
  a + "/_app/immutable/chunks/2.05b3c565.js",
  a + "/_app/immutable/chunks/3.e674fd86.js",
  a + "/_app/immutable/chunks/4.8162b07d.js",
  a + "/_app/immutable/chunks/5.7feedce4.js",
  a + "/_app/immutable/chunks/6.e0fad1ae.js",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/BuildOpenGraph.548866bc.css",
  a + "/_app/immutable/assets/Page.162cabfa.css",
  a + "/_app/immutable/assets/TitledPanel.45e891ef.css",
  a + "/_app/immutable/assets/TriangleCorners.eafa5a9b.css",
  a + "/_app/immutable/chunks/BasicPanel.cd862279.js",
  a + "/_app/immutable/chunks/BuildOpenGraph.bc0db7cf.js",
  a + "/_app/immutable/chunks/Page.d9b87619.js",
  a + "/_app/immutable/chunks/TitledPanel.f789b6b4.js",
  a + "/_app/immutable/chunks/TriangleCorners.ffbfad86.js",
  a + "/_app/immutable/chunks/Url.04a3db60.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.2a0f9d05.js",
  a + "/_app/immutable/chunks/_page.86183d32.js",
  a + "/_app/immutable/chunks/_page.8b506223.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/description.16d5b2bf.js",
  a + "/_app/immutable/assets/description.e4f477e1.css",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.47f887b8.webp",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.4a4c6f48.js",
  a + "/_app/immutable/chunks/paths.95c32e89.js",
  a + "/_app/immutable/chunks/singletons.c8aea73b.js",
  a + "/_app/immutable/entry/start.c908ae67.js",
  a + "/_app/immutable/entry/layout.svelte.a7f30510.js",
  a + "/_app/immutable/entry/_error.svelte.4de65049.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.0623298a.css",
  a + "/_app/immutable/entry/_page.svelte.b702a229.js",
  a + "/_app/immutable/entry/_page.ts.7ef34226.js",
  a + "/_app/immutable/entry/about-page.svelte.05f2c19a.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.5abc7a20.js",
  a + "/_app/immutable/entry/recipes-page.svelte.01481889.js",
  a + "/_app/immutable/entry/recipes-page.ts.77bf564d.js",
  a + "/_app/immutable/assets/_page.220d962d.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.413f2289.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.0b848861.js"
], m = "1684236129226", t = `monadorecipes-${m}`, i = async () => {
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
