// Installer le service worker
self.addEventListener("install", (event) => {
  console.log("Service Worker installé");
});

// Activer le service worker
self.addEventListener("activate", (event) => {
  console.log("Service Worker activé");
});

// Intercepter les requêtes (offline basique)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => new Response("Vous êtes hors ligne"))
  );
});


const CACHE_NAME = "wscorporation-v1"; // incrémente le numéro à chaque déploiement
const urlsToCache = ["/", "/index.html", "/manifest.json", "/icons/logows.png", "/icons/logows2.png"];

// Installation
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activation : supprime les anciens caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
      );
    })
  );
});

// Fetch : sert la version cache si offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("install", (event) => {
  self.skipWaiting(); // ⚡ force le nouveau SW à prendre le relais immédiatement
});

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("ws-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/icons/logows2.png",
        "/icons/logows.png",
        "/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
