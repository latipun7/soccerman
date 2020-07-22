import { loadNavListItems, loadPage } from './app/navigation';
import { initialState, page } from './lib/page-state';

document.addEventListener('DOMContentLoaded', () => {
  const sidenavElement = document.querySelectorAll('.sidenav');
  const footerYearElement = document.getElementById('footer-date');
  const dateYear = new Date().getFullYear();
  const currentPage = page();

  footerYearElement.innerText = dateYear;

  M.Sidenav.init(sidenavElement);
  loadNavListItems();

  window.onpopstate = (event) => {
    let state;

    if (event.state) {
      state = event.state;
    } else {
      state = initialState;
    }

    loadPage(state);
  };

  loadPage(currentPage);
});
