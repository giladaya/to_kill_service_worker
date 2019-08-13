const VER = '0.0.1';
console.log(`Hello from service worker v${VER}`);

self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("sw-cache").then(function(cache) {
      console.log("Caching all the things!");
      return cache.addAll([
        "/",
        "/index.html",
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log(`Fetching ${event.request.url} from cache`);
        return response;
      } else {
        console.log(`Fetching ${event.request.url} from server`);
        return fetch(event.request);
      }
    })
  );
});
