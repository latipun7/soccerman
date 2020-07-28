/* eslint-disable no-console */
import { urlBase64ToUint8Array } from '../lib/utils';

const PUBLIC_KEY =
  'BFph2fgn1IcZqcLVzrUZNe1gWBv92thJxP8NESJkjmgvZaKL1HflLd0GUC9p6KLso-4P5SJx_v48XtNm_klu2rI';
const applicationServerKey = urlBase64ToUint8Array(PUBLIC_KEY);

async function initNotificationPermission() {
  const result = await Notification.requestPermission();

  return result;
}

async function subscribePushNotification() {
  try {
    const serviceWorker = await navigator.serviceWorker.ready;
    const subscription = await serviceWorker.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey,
    });

    M.toast({
      html: 'Push notifications subscription success ✨',
      classes: 'teal',
    });

    console.log('User is subscribed with endpoint:', subscription.endpoint);
    console.log(
      'User is subscribed with p256dh key:',
      window.btoa(
        String.fromCharCode.apply(
          null,
          new Uint8Array(subscription.getKey('p256dh'))
        )
      )
    );
    console.log(
      'User is subscribed with auth key:',
      window.btoa(
        String.fromCharCode.apply(
          null,
          new Uint8Array(subscription.getKey('auth'))
        )
      )
    );
  } catch (error) {
    console.error('Subscription failed.', error.message);
  }
}

export { initNotificationPermission, subscribePushNotification };
