const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.d71a8fe3.js",
  a + "/_app/immutable/chunks/0.9a1e1621.js",
  a + "/_app/immutable/chunks/1.70ebaf82.js",
  a + "/_app/immutable/chunks/2.68fa06b4.js",
  a + "/_app/immutable/chunks/3.5af1985f.js",
  a + "/_app/immutable/chunks/4.1db324a9.js",
  a + "/_app/immutable/chunks/5.624f7c9a.js",
  a + "/_app/immutable/chunks/6.fdf90afc.js",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/BuildOpenGraph.548866bc.css",
  a + "/_app/immutable/assets/Page.162cabfa.css",
  a + "/_app/immutable/assets/TitledPanel.45e891ef.css",
  a + "/_app/immutable/assets/TriangleCorners.eafa5a9b.css",
  a + "/_app/immutable/chunks/BasicPanel.f2be682f.js",
  a + "/_app/immutable/chunks/BuildOpenGraph.0f184a40.js",
  a + "/_app/immutable/chunks/Page.5b163e4f.js",
  a + "/_app/immutable/chunks/TitledPanel.a10dc00d.js",
  a + "/_app/immutable/chunks/TriangleCorners.ffbfad86.js",
  a + "/_app/immutable/chunks/Url.fded7323.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.7ca87a1a.js",
  a + "/_app/immutable/chunks/_page.c0069934.js",
  a + "/_app/immutable/chunks/_page.dba7f867.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/description.dcf04642.js",
  a + "/_app/immutable/assets/description.e4f477e1.css",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.47f887b8.webp",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.4a4c6f48.js",
  a + "/_app/immutable/chunks/paths.9763b26d.js",
  a + "/_app/immutable/chunks/singletons.e93a6a89.js",
  a + "/_app/immutable/entry/start.cbe2791a.js",
  a + "/_app/immutable/entry/layout.svelte.a7f30510.js",
  a + "/_app/immutable/entry/_error.svelte.f1168aac.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.0623298a.css",
  a + "/_app/immutable/entry/_page.svelte.12305a5c.js",
  a + "/_app/immutable/entry/_page.ts.87f9e567.js",
  a + "/_app/immutable/entry/about-page.svelte.d92035ad.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.20ecc830.js",
  a + "/_app/immutable/entry/recipes-page.svelte.150c948a.js",
  a + "/_app/immutable/entry/recipes-page.ts.3a248ee4.js",
  a + "/_app/immutable/assets/_page.220d962d.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.8f1c3abe.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.4b8e6cfc.js"
], m = "1684009249853", t = `monadorecipes-${m}`, i = async () => {
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
