const CACHE_NAME = 'soccerman-v1.3';
const urlToCache = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/nav-items.html',
  '/styles/materialize.css',
  '/scripts/materialize.js',
  '/scripts/index.js',
  '/scripts/vendors~index.js',
  '/scripts/vendors~materialize.js',
  '/assets/soccerman.webmanifest',
  '/assets/favicon-16x16.png',
  '/assets/favicon-32x32.png',
  '/assets/apple-touch-icon.png',
  '/assets/android-chrome-192x192.png',
  '/assets/android-chrome-512x512.png',
  '/assets/images/soccerman-title.png',
  'https://fonts.googleapis.com/icon?family=Material+Icons&display=swap',
  'https://fonts.googleapis.com/css?family=Nunito&display=swap',
];

async function installSW() {
  const currentCache = await caches.open(CACHE_NAME);

  return currentCache.addAll(urlToCache);
}

async function cleanOldCache() {
  const cacheNames = await caches.keys();
  const oldCaches = cacheNames.filter((cache) => cache !== CACHE_NAME);

  return Promise.all(oldCaches.map((oldCache) => caches.delete(oldCache)));
}

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(installSW());
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
  self.skipWaiting();
  event.waitUntil(cleanOldCache());
});

// TODO: SW strategy
// - Cache then network strategy (https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook#cache-then-network)
// - catch all uncaught error
self.addEventListener('fetch', (event) => {
  const reqURL = event.request.url;
  const urls = urlToCache.filter((url) => url !== '/').join('|');
  const urlsRegex = new RegExp(`(${urls})$`);
  const isAppShellReq = urlsRegex.test(reqURL);
  const cache = caches.match(event.request);
  const fetchNetwork = fetch(event.request);
  const fetchClone = fetchNetwork.then((response) => response.clone()).catch();

  if (isAppShellReq === true) {
    event.respondWith(cache.then((response) => response || fetchNetwork));
  } else {
    event.respondWith(
      Promise.race([fetchNetwork.catch(() => cache), cache]).then(
        (resp) => resp || fetchNetwork
      )
    );

    event.waitUntil(
      Promise.all([
        fetchClone,
        caches.open(CACHE_NAME),
      ]).then(([response, currentCache]) =>
        currentCache.put(event.request, response)
      )
    );
  }
});
