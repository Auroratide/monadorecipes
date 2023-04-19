const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.7398e5fd.js",
  a + "/_app/immutable/chunks/0.a5f17a51.js",
  a + "/_app/immutable/chunks/1.c3576d6a.js",
  a + "/_app/immutable/chunks/2.263148d9.js",
  a + "/_app/immutable/chunks/3.482b3a38.js",
  a + "/_app/immutable/chunks/4.14fb0349.js",
  a + "/_app/immutable/chunks/5.32ade643.js",
  a + "/_app/immutable/assets/BackdropScene.74c44b78.css",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/Page.444a7ce9.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.7daf0df2.css",
  a + "/_app/immutable/assets/VisuallyHidden.384d1c6c.css",
  a + "/_app/immutable/chunks/BackdropScene.d368e95b.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.47f887b8.webp",
  a + "/_app/immutable/chunks/BasicPanel.da0edd04.js",
  a + "/_app/immutable/chunks/Page.99fb9cd2.js",
  a + "/_app/immutable/chunks/TitledPanel.33a34061.js",
  a + "/_app/immutable/chunks/TriangleCorners.d3b43205.js",
  a + "/_app/immutable/chunks/Url.ebcfc0b6.js",
  a + "/_app/immutable/chunks/VisuallyHidden.cf7d3de8.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.9179d673.js",
  a + "/_app/immutable/chunks/_page.c7c9bf50.js",
  a + "/_app/immutable/chunks/_page.e19b4095.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.7251b7a2.js",
  a + "/_app/immutable/chunks/paths.dfc50c19.js",
  a + "/_app/immutable/chunks/singletons.be7cc23d.js",
  a + "/_app/immutable/entry/start.5f5623d3.js",
  a + "/_app/immutable/entry/layout.svelte.18caa6aa.js",
  a + "/_app/immutable/entry/_error.svelte.49dca0a5.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.0623298a.css",
  a + "/_app/immutable/entry/_page.svelte.38fe5f5b.js",
  a + "/_app/immutable/entry/_page.ts.93d827b0.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.84297a96.js",
  a + "/_app/immutable/entry/recipes-page.svelte.65e17357.js",
  a + "/_app/immutable/entry/recipes-page.ts.a20fd082.js",
  a + "/_app/immutable/assets/_page.346e2be0.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.d27351d6.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.2edece45.js"
], m = "1681940762986", t = `monadorecipes-${m}`, i = async () => {
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
