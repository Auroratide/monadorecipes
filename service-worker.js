const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.624d9c5a.js",
  a + "/_app/immutable/chunks/0.75638c39.js",
  a + "/_app/immutable/chunks/1.5c7375fe.js",
  a + "/_app/immutable/chunks/2.a1573443.js",
  a + "/_app/immutable/chunks/3.12f3915a.js",
  a + "/_app/immutable/chunks/4.4deaeb8e.js",
  a + "/_app/immutable/chunks/5.6701e8ac.js",
  a + "/_app/immutable/assets/BackdropScene.74c44b78.css",
  a + "/_app/immutable/assets/BasicPanel.9fd0fbf3.css",
  a + "/_app/immutable/assets/Page.c8d7c874.css",
  a + "/_app/immutable/assets/TitledPanel.1375e929.css",
  a + "/_app/immutable/assets/TriangleCorners.5b4a1052.css",
  a + "/_app/immutable/assets/VisuallyHidden.908af276.css",
  a + "/_app/immutable/chunks/BackdropScene.0c53fbb6.js",
  a + "/_app/immutable/assets/titans.3a42881e.webp",
  a + "/_app/immutable/assets/torna-camp.219a80a5.png",
  a + "/_app/immutable/chunks/BasicPanel.78a850cd.js",
  a + "/_app/immutable/chunks/Page.3b170f3d.js",
  a + "/_app/immutable/chunks/TitledPanel.4c108542.js",
  a + "/_app/immutable/chunks/TriangleCorners.09815722.js",
  a + "/_app/immutable/chunks/Url.d2bfa235.js",
  a + "/_app/immutable/chunks/VisuallyHidden.3b9c79b9.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/_page.1423110e.js",
  a + "/_app/immutable/chunks/_page.8cf35a59.js",
  a + "/_app/immutable/chunks/_page.f427858f.js",
  a + "/_app/immutable/chunks/control.e7f5239e.js",
  a + "/_app/immutable/chunks/index.2defaa64.js",
  a + "/_app/immutable/chunks/index.eb3b8662.js",
  a + "/_app/immutable/chunks/paths.a6a09934.js",
  a + "/_app/immutable/chunks/singletons.3ba6b566.js",
  a + "/_app/immutable/entry/start.ce6d860c.js",
  a + "/_app/immutable/entry/layout.svelte.ee75076d.js",
  a + "/_app/immutable/entry/_error.svelte.0535c80d.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/assets/_page.6e203da9.css",
  a + "/_app/immutable/entry/_page.svelte.77a348e4.js",
  a + "/_app/immutable/entry/_page.ts.599e9336.js",
  a + "/_app/immutable/entry/legal-disclaimers-page.svelte.2315ddf6.js",
  a + "/_app/immutable/entry/recipes-page.svelte.110a53c3.js",
  a + "/_app/immutable/entry/recipes-page.ts.19206617.js",
  a + "/_app/immutable/assets/_page.f747fa32.css",
  a + "/_app/immutable/entry/recipes-_id_-page.svelte.d7236b40.js",
  a + "/_app/immutable/entry/recipes-_id_-page.ts.6913d5a5.js"
], m = "1681693911187", t = `monadorecipes-${m}`, i = async () => {
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
