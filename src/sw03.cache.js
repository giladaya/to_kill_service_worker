const VER = "0.3.1";
console.log(`Hello from service worker v${VER}`);

const CACHE_URLS = ["/", "/index.html"];

self.addEventListener("install", function (e) {
  console.log(`SW v${VER} install event`);
  e.waitUntil(
    caches.open("sw-cache").then(function (cache) {
      console.log("Caching all the things!");
      return cache.addAll(CACHE_URLS);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
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
