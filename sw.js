const CACHE_NAME = 'calc-fiscal-v2';
const ASSETS = [
  './',
  './index.html',
  './taxas.js',
  './html2pdf.bundle.min.js',
  './manifest.json',
  './fulllogo.jpg' // Certifique-se que o nome do ficheiro da logo coincide
];

// Instalação e Cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Responder offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
