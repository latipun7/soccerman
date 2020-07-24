import { loadPageContents } from './view';

const routes = [];

function addRoute(name, urlPattern) {
  routes.push({ name, urlPattern });
}

async function onHashChange() {
  let { hash } = window.location;
  const sidenav = document.querySelector('.sidenav');

  if (hash === '') hash = '#/home';
  M.Sidenav.getInstance(sidenav).close();

  const route = routes.filter((routeArr) => hash.match(routeArr.urlPattern))[0];

  if (route) {
    const params = /\d+/.exec(hash);
    await loadPageContents(route.name, params);
  } else {
    await loadPageContents();
  }
}

export { addRoute, onHashChange };
