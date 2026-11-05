// Stores the whole site on first visit so it opens with no internet in the lab.
const VERSION = new URL(self.location.href).searchParams.get('v') || 'dev';
const CACHE_PREFIX = 'chemistry-practical-';
const CACHE = CACHE_PREFIX + VERSION;

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      const response = await fetch('precache-manifest.json', { cache: 'no-cache' });
      const files = await response.json();
      await cache.addAll(['./', 'manifest.webmanifest', ...files]);
      await self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names.filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE).map((name) => caches.delete(name))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    // Prefer the latest page, fall back to the stored copy when offline.
    event.respondWith(
      fetch(request).catch(async () => (await caches.match(request)) || (await caches.match('./')) || Response.error())
    );
    return;
  }

  // Built files have a content hash in their name, so a stored copy is always correct.
  event.respondWith(
    (async () => {
      const stored = await caches.match(request);
      return stored || fetch(request);
    })()
  );
});
