const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.887c0b6c.js",
  a + "/_app/immutable/chunks/0.75638c39.js",
  a + "/_app/immutable/chunks/1.bdec8193.js",
  a + "/_app/immutable/chunks/2.55360ce8.js",
  a + "/_app/immutable/chunks/3.f01f87f1.js",
  a + "/_app/immutable/chunks/4.9c410666.js",
  a + "/_app/immutable/chunks/5.e3e5129e.js",
  a + "/_app/immutable/assets/BackdropScene.74c44b78.css",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/Page.c8d7c874.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.5b4a1052.css",
  a + "/_app/immutable/assets/VisuallyHidden.908af276.css",
  a + "/_app/immutable/chunks/BackdropScene.76a22835.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.219a80a5.png",
  a + "/_app/immutable/chunks/BasicPanel.0e4cd77d.js",
  a + "/_app/immutable/chunks/Page.f0ab80b8.js",
  a + "/_app/immutable/chunks/TitledPanel.151fa293.js",
  a + "/_app/immutable/chunks/TriangleCorners.09815722.js",
  a + "/_app/immutable/chunks/Url.1a78e2dd.js",
  a + "/_app/immutable/chunks/VisuallyHidden.3b9c79b9.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.3752805c.js",
  a + "/_app/immutable/chunks/_page.ae97e118.js",
  a + "/_app/immutable/chunks/_page.d9162b95.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.eb3b8662.js",
  a + "/_app/immutable/chunks/paths.86dc5049.js",
  a + "/_app/immutable/chunks/singletons.20104d2e.js",
  a + "/_app/immutable/entry/start.b5af4cf0.js",
  a + "/_app/immutable/entry/layout.svelte.ee75076d.js",
  a + "/_app/immutable/entry/_error.svelte.c9bf2aa9.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.6e203da9.css",
  a + "/_app/immutable/entry/_page.svelte.fd2aad94.js",
  a + "/_app/immutable/entry/_page.ts.2e8258e7.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.a26a2f7b.js",
  a + "/_app/immutable/entry/recipes-page.svelte.1845a145.js",
  a + "/_app/immutable/entry/recipes-page.ts.23b36459.js",
  a + "/_app/immutable/assets/_page.5d0dd9ee.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.3d9182ba.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.cd84d9cd.js"
], m = "1681772896139", t = `monadorecipes-${m}`, i = async () => {
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
