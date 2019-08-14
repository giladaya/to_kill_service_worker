// source: https://novemberfive.co/blog/mess-up-service-workers-caching-gotcha
// also see: https://github.com/NekR/self-destroying-sw
// remember to remove registration code!

const VER = '0.4.1';
console.log(`Hello from service worker v${VER}`);

const DIRTY_CACHE_NAME = "sw-cache";

self.addEventListener("install", () => {
  // Skip over the "waiting" lifecycle state, to ensure that our
  // new service worker is activated immediately, even if there's
  // another tab open controlled by our older service worker code.
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  // Unregister self
  self.registration.unregister().then(() => console.log('Unregistered'));
  // Now clear caches
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        // caches are shared across whole origin
        cacheNames.filter(
          cacheName => cacheName.indexOf(DIRTY_CACHE_NAME) !== -1
        )
      )
      .then(cachesToDelete =>
        Promise.all(
          cachesToDelete.map(cacheToDelete => {
            console.log("Deleting cache", cacheToDelete);
            return caches.delete(cacheToDelete);
          })
        )
      )
      .then(() => self.clients.claim())
  );
});
