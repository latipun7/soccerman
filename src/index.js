import { footerYear, initSideNav } from './app';
import { addRoute, onHashChange } from './lib/routes';
import './pages/dashboard';
import './pages/home';
import './pages/team';

addRoute('home', /^#\/home\/?$/);
addRoute('team', /^#\/team\/\d+\/?$/);
addRoute('dashboard', /^#\/dashboard\/?$/);

window.addEventListener('hashchange', onHashChange);

window.addEventListener('DOMContentLoaded', async () => {
  await initSideNav();
  onHashChange();
  footerYear();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}
