const VER = '0.0.1';
console.log(`Hello from service worker v${VER}`);

self.addEventListener("install", ev => {
  console.log(`SW v${VER} install event`);
});

self.addEventListener("activate", ev => {
  console.log(`SW v${VER} activate event`);
});

self.addEventListener("message", ev => {
  console.log(`SW v${VER} message event`);
});

self.addEventListener("fetch", ev => {
  console.log(`SW v${VER} fetch event`);
});

self.addEventListener("notification", ev => {
  console.log(`SW v${VER} notification event`);
});

self.addEventListener("sync", ev => {
  console.log(`SW v${VER} sync event`);
});
