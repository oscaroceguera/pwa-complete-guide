self.addEventListener('install', function (event) {
  console.log('[Service Worker] Instaling Service Worker ...', event)
})

self.addEventListener('active', function (event) {
  console.log('[Service Worker] Activating Service Worker ...', event)
  return self.clients.claim()
})

self.addEventListener('fetch', function (event) {
  console.log('[Service Worker] Fetching something ...', event)
  event.respondWith(fetch(event.request));
})