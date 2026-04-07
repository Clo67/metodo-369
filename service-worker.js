const CACHE_NAME = 'metodo-369-v1';
const urlsToCache = [
  '/metodo-369/',
  '/metodo-369/index.html',
  '/metodo-369/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
