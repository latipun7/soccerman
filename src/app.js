import { loadNavListItems, loadPage } from './app/navigation';
import { initialState, page } from './lib/page-state';

const dateYear = new Date().getFullYear();
const footerYearElement = document.getElementById('footer-date');
footerYearElement.innerText = dateYear;

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elements);
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

  const currentPage = page();
  loadPage(currentPage);
});
