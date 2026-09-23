// Service worker mínimo — existe apenas para satisfazer o requisito dos
// navegadores (Chrome/Edge) de ter um service worker registrado com um
// handler de fetch para permitir a instalação do site como aplicativo.
// Não faz cache nem funciona offline — o painel continua exigindo internet.

self.addEventListener('install', function(event){
  self.skipWaiting();
});

self.addEventListener('activate', function(event){
  self.clients.claim();
});

self.addEventListener('fetch', function(event){
  event.respondWith(fetch(event.request));
});
