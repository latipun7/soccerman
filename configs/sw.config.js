import { clientsClaim, setCacheNameDetails, skipWaiting } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, setCatchHandler } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

function receivePushNotifications(event) {
  const { body, data, image, tag, title } = event.data.json();

  const options = {
    body,
    data,
    vibrate: [200, 100, 200],
    tag,
    renotify: true,
    image,
    icon: '/assets/android-chrome-192x192.png',
    badge: '/assets/android-chrome-192x192.png',
  };

  event.waitUntil(self.registration.showNotification(title, options));
}

function openPushNotifications(event) {
  event.notification.close();

  if (event.notification.data) {
    event.waitUntil(clients.openWindow(event.notification.data));
  }
}

self.addEventListener('push', receivePushNotifications);

self.addEventListener('notificationclick', openPushNotifications);

setCacheNameDetails({
  prefix: 'soccerman',
  suffix: '',
  precache: 'app-shells',
  runtime: 'data',
});

clientsClaim();

skipWaiting();

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  /^https:\/\/(api\.football-data\.org|upload\.wikimedia\.org)/i,
  new StaleWhileRevalidate()
);

registerRoute(
  /^https:\/\/(fonts\.googleapis\.com|fonts\.gstatic\.com)/i,
  new StaleWhileRevalidate({
    cacheName: 'google-fonts',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 19,
        purgeOnQuotaError: false,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
    ],
  })
);

setCatchHandler(() => new Response(''));
