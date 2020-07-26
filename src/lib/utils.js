const isEmpty = (obj) =>
  [Object, Array].includes((obj || {}).constructor) &&
  !Object.entries(obj || {}).length;

const template = (string, map) => {
  let processed = string;

  Object.keys(map).forEach((key) => {
    processed = processed.replace(new RegExp(`{{${key}}}`, 'gm'), map[key]);
  });

  return processed;
};

export { isEmpty, template };
