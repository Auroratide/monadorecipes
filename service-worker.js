const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.d7d71156.js",
  a + "/_app/immutable/chunks/0.75638c39.js",
  a + "/_app/immutable/chunks/1.9e6b0eba.js",
  a + "/_app/immutable/chunks/2.8c23ae1d.js",
  a + "/_app/immutable/chunks/3.0cf0f3f3.js",
  a + "/_app/immutable/chunks/4.ced42b81.js",
  a + "/_app/immutable/chunks/5.019fd7a6.js",
  a + "/_app/immutable/assets/BackdropScene.74c44b78.css",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/Page.c8d7c874.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.5b4a1052.css",
  a + "/_app/immutable/assets/VisuallyHidden.908af276.css",
  a + "/_app/immutable/chunks/BackdropScene.a7e1d05e.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.219a80a5.png",
  a + "/_app/immutable/chunks/BasicPanel.ad4cbc39.js",
  a + "/_app/immutable/chunks/Page.40e1b0f0.js",
  a + "/_app/immutable/chunks/TitledPanel.fd6edc06.js",
  a + "/_app/immutable/chunks/TriangleCorners.09815722.js",
  a + "/_app/immutable/chunks/Url.b1735282.js",
  a + "/_app/immutable/chunks/VisuallyHidden.3b9c79b9.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.813e104e.js",
  a + "/_app/immutable/chunks/_page.fd063f81.js",
  a + "/_app/immutable/chunks/_page.fe0041b5.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.eb3b8662.js",
  a + "/_app/immutable/chunks/paths.300794f1.js",
  a + "/_app/immutable/chunks/singletons.75961eb9.js",
  a + "/_app/immutable/entry/start.14eddea8.js",
  a + "/_app/immutable/entry/layout.svelte.ee75076d.js",
  a + "/_app/immutable/entry/_error.svelte.d56af5cc.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.6e203da9.css",
  a + "/_app/immutable/entry/_page.svelte.7017cfab.js",
  a + "/_app/immutable/entry/_page.ts.a83c0ce1.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.f2eddb17.js",
  a + "/_app/immutable/entry/recipes-page.svelte.2ed0ab13.js",
  a + "/_app/immutable/entry/recipes-page.ts.1e12b0b4.js",
  a + "/_app/immutable/assets/_page.5d0dd9ee.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.fa6afd58.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.533c5e6b.js"
], m = "1681736421660", t = `monadorecipes-${m}`, i = async () => {
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
