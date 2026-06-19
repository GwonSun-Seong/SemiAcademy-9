const CACHE_NAME = 'semiconductor-academy-v3';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './index.css',
  './manifest.json',
  './icon.png',
  './quiz-config.js',
  './api-key-modal.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Bypass non-GET requests and external API domains / extension schemes
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Network-first strategy to ensure real-time content is always live, with clean fallback
  event.respondWith(
    fetch(event.request)
      .catch((err) => {
        console.warn('[Service Worker] Fetch failed, falling back to cache:', err);
        return caches.match(event.request)
          .then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // If fetching root page while offline/server is restarting, fallback to index.html
            if (event.request.url === self.location.origin || event.request.url === self.location.origin + '/') {
              return caches.match('./index.html').then((indexResponse) => {
                if (indexResponse) return indexResponse;
                return new Response('Network error occurred and no cached fallback found.', {
                  status: 503,
                  statusText: 'Service Unavailable',
                  headers: { 'Content-Type': 'text/plain; charset=utf-8' }
                });
              });
            }
            return new Response('Network error occurred and no cached resource found.', {
              status: 408,
              statusText: 'Request Timeout',
              headers: { 'Content-Type': 'text/plain; charset=utf-8' }
            });
          })
          .catch((cacheErr) => {
            console.error('[Service Worker] Cache match failed:', cacheErr);
            return new Response('Network and cache failure.', {
              status: 500,
              statusText: 'Internal Server Error',
              headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
          });
      })
  );
});
