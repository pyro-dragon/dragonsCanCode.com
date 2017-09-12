// The SW will be shutdown when not in use to save memory,
// be aware that any global state is likely to disappear
console.log("SW startup");

self.addEventListener('install', function(event) {
  console.log("SW installed");

  event.waitUntil(
    caches.open("cache1")
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(["js/router.js", "css/style.css"]);
      })
  );
});

self.addEventListener('activate', function(event) {
  console.log("SW activated");
});

self.addEventListener('fetch', function(event) {
  console.log("Caught a fetch!");
  event.respondWith(new Response("Hello world!"));
});
