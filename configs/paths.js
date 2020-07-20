import path from 'path';

const root = path.resolve(__dirname, '..');

/**
 * Resolve paths
 * @param {Array} relativePath - path relative to root directory
 * @returns {String} resolved path string
 */
const resolveDir = (...relativePath) => path.resolve(root, ...relativePath);

// Resolved paths ...
const buildDir = resolveDir('dist');
const configsDir = resolveDir('configs');
const globalStyleDir = resolveDir('src/styles');
const libDir = resolveDir('src', 'lib');
const publicDir = resolveDir('public');
const rootDir = resolveDir('.');
const srcDir = resolveDir('src');

export {
  buildDir,
  configsDir,
  globalStyleDir,
  libDir,
  publicDir,
  rootDir,
  srcDir,
};
