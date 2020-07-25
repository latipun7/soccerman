import path from 'path';

const root = path.resolve(__dirname, '..');

/**
 * Resolve paths
 * @param {Array} relativePath - path relative to root directory
 * @returns {String} resolved path string
 */
const resolvePath = (...relativePath) => path.resolve(root, ...relativePath);

// Resolved paths ...
const buildDir = resolvePath('dist');
const configsDir = resolvePath('configs');
const globalStyleDir = resolvePath('src', 'styles');
const libDir = resolvePath('src', 'lib');
const publicDir = resolvePath('public');
const rootDir = resolvePath('.');
const srcDir = resolvePath('src');

export {
  buildDir,
  configsDir,
  globalStyleDir,
  libDir,
  publicDir,
  rootDir,
  srcDir,
  resolvePath,
};
