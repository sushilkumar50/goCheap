const cacheName = "v1";

const cacheAssets = ["index.html", "main.js", "/styles/styles.css"];

// vCall install event

self.addEventListener("install", (e) => {
  console.log("service worker installed", e);

  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("caching");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
      .catch((err) => console.log("ss", err))
  );
});
self.addEventListener("activate", (e) => {
  console.log("service worker activated");
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
