// CarnetVol Service Worker v3
// GitHub Pages: https://joris2106.github.io/carnetvol
const CACHE_NAME = 'carnetvol-v3';
const START_URL = 'https://joris2106.github.io/carnetvol/index.html';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        START_URL,
        'https://joris2106.github.io/carnetvol/manifest.json',
        'https://joris2106.github.io/carnetvol/icons/icon-192.png',
        'https://joris2106.github.io/carnetvol/icons/icon-512.png'
      ]).catch(() => {});
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response && response.status === 200 && response.type !== 'opaque') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then(cached => {
          return cached || caches.match(START_URL);
        });
      })
  );
});
