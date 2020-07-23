import { footerYear, initSideNav } from './app';
import { addRoute, onHashChange } from './lib/routes';

import './pages/home';

addRoute('home', /^#\/home\/?$/);
addRoute('team', /^#\/team\/\d+\/?$/);
addRoute('dashboard', /^#\/dashboard\/?$/);

window.addEventListener('hashchange', onHashChange);

window.addEventListener('DOMContentLoaded', async () => {
  await initSideNav();
  footerYear();
  onHashChange();
});
