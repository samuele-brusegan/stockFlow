const CACHE_NAME = "spese-app-v1";
const ASSETS_TO_CACHE = [
    "index.html",
    "styles.css",
    "app.js",
    "assets/icons/icon-192x192.png",
    "assets/icons/icon-512x512.png",
    "manifest.json",
    "favicon.ico",
    "mvcCode/view/ui.js",
    "mvcCode/controllers/Controller.js",
    "mvcCode/models/Conto.js",
    "mvcCode/models/Transaction.js",
    "mvcCode/models/Category.js",
    "mvcCode/models/PaymentOptions.js",
    "mvcCode/models/jsonManager.js",
    "mvcCode/models/defaultData/categories.json",
    "mvcCode/models/defaultData/payOptions.json",
];

// Installazione del Service Worker
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Attivazione del Service Worker
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );
});

// Intercettazione delle richieste di rete
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
