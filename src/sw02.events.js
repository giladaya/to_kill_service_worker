const VER = '0.2.1';
console.log(`Hello from service worker v${VER}`);

// Lifecycle events
self.addEventListener("install", ev => {
  console.log(`SW v${VER} install event`);
});

self.addEventListener("activate", ev => {
  console.log(`SW v${VER} activate event`);
});

// Functional events
self.addEventListener("message", ev => {
  console.log(`SW v${VER} message event`);
});

self.addEventListener("fetch", ev => {
  console.log(`SW v${VER} fetch event`);
});

self.addEventListener("push", ev => {
  console.log(`SW v${VER} push event`);
});

self.addEventListener("sync", ev => {
  console.log(`SW v${VER} sync event`);
});
