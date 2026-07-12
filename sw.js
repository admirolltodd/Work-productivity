/* Bamboo Close service worker — cache-first app shell.
   Bump CACHE_VERSION whenever any shell file changes so clients pick up
   the new build on their next visit. */
const CACHE_VERSION = 'bamboo-close-v1';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.svg',
  './icon-maskable.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Cache-first: serve from cache, hit the network only on a miss, and stash
// anything new we fetch. Navigations fall back to the cached index.html so
// the app opens with zero connectivity.
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(cached => {
      if (cached) return cached;
      return fetch(event.request)
        .then(resp => {
          if (resp.ok && new URL(event.request.url).origin === location.origin) {
            const clone = resp.clone();
            caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
          }
          return resp;
        })
        .catch(() => {
          if (event.request.mode === 'navigate') return caches.match('./index.html');
          throw new Error('offline and not cached');
        });
    })
  );
});
