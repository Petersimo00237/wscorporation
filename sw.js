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
