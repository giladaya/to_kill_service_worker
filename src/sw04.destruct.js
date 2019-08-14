// source: https://github.com/NekR/self-destroying-sw
// also see: https://novemberfive.co/blog/mess-up-service-workers-caching-gotcha
// remember to remove registration code!

const VER = "0.4.1";
console.log(`Hello from service worker v${VER}`);

self.addEventListener("install", function(e) {
  self.skipWaiting();
});

self.addEventListener("activate", function(e) {
  self.registration
    .unregister()
    .then(function() {
      console.log("Unregistered");
      // TODO: cleanup
      return self.clients.matchAll();
    })
    .then(function(clients) {
      console.log("Reloading clients");
      clients.forEach(client => client.navigate(client.url));
    });
});
