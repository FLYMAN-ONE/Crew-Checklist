/* ════════════════════════════════════════════
   SCCM PREFLIGHT CHECKLIST — SERVICE WORKER
   Cache-first, offline-first strategy
   Versione: 11.8
════════════════════════════════════════════ */

var CACHE_NAME = 'sccm-v11-8';
var FILES_TO_CACHE = [
  './',
  './scc_flight_checklist_v11_1.html'
];

/* ── INSTALL: pre-cacha tutti i file ── */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

/* ── ACTIVATE: elimina cache vecchie ── */
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k)   { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

/* ── FETCH: cache-first, network fallback ── */
self.addEventListener('fetch', function(e) {
  /* Ignora richieste non-GET e cross-origin */
  if (e.request.method !== 'GET') return;
  var url = new URL(e.request.url);
  if (url.origin !== location.origin) return;

  e.respondWith(
    caches.match(e.request).then(function(cached) {
      if (cached) return cached;
      return fetch(e.request).then(function(response) {
        /* Cacha dinamicamente qualsiasi risorsa same-origin valida */
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        var toCache = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(e.request, toCache);
        });
        return response;
      }).catch(function() {
        /* Rete assente e non in cache: per le navigazioni servi l'HTML principale */
        if (e.request.mode === 'navigate') {
          return caches.match('./scc_flight_checklist_v11_1.html');
        }
      });
    })
  );
});
