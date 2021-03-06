importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
const CACHE_NAME = "bola";
var urlsToCache= 
[
	 "/",
  "/nav.html",
  "/index.html",
  "/pages/home.html",
  "/pages/fav.html",
  "/pages/standings.html",
  "/css/materialize.min.css",
  "/js/materialize.min.js",
  "/js/nav.js",
  "js/api.js",
  "js/db.js",
  "js/vendor/idb.js",
  "js/main.js",
  "/icon.png"
];

self.addEventListener("install", function (event)
{
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache)
		{
			return cache.addAll(urlsToCache);
		})
		);
});

self.addEventListener("fetch", function(event) 
  {
   var base_url = "https://api.football-data.org/";

   if (event.request.url.indexOf(base_url) > -1)
   {
    event.respondWith(async function()
    {
      const cache = await caches.open(CACHE_NAME)
      const cachedResponse = await cache.match(event.request)
      if (cachedResponse)
      {
        return cachedResponse
      }
        const networkResponse = await fetch(event.request)
      event.waitUntil(
        cache.put(event.request, networkResponse.clone()))
      return networkResponse
    }())
   }
   else
   {
    event.respondWith
    (caches.match(event.request, {ignoreSearch: true}).then(function(response)
    {
      return response || fetch (event.request)
    }))
   }
  });

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName != CACHE_NAME) {
            console.log("ServiceWorker: cache " + cacheName + " dihapus");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('push', function(event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  var options = {
    body: body,
    icon: 'img/notification.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});