function isEmpty(obj) {
  return (
    [Object, Array].includes((obj || {}).constructor) &&
    !Object.entries(obj || {}).length
  );
}

function template(string, map) {
  let processed = string;

  Object.keys(map).forEach((key) => {
    processed = processed.replace(new RegExp(`{{${key}}}`, 'gm'), map[key]);
  });

  return processed;
}

function httpsWorkaround(url) {
  return url.replace(/^http:\/\//i, 'https://');
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; i += 1) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export { isEmpty, template, httpsWorkaround, urlBase64ToUint8Array };
