import { page } from '../lib/page-state';
import EPLStandings from './PL-cards';

function loadPageContents() {
  const currentPage = page();
  if (currentPage === 'home') {
    EPLStandings();
  }
}

function loadPage(pathName) {
  const element = document.querySelector('#body-content');

  fetch(`/pages/${pathName}.html`)
    .then((response) => response.text())
    .then((html) => {
      element.innerHTML = html;
    })
    .then(loadPageContents)
    .catch((error) => {
      element.innerHTML = `<pre>${error}</pre>`;
    });
}

function loadNavListItems() {
  const links = document.querySelectorAll('.topnav, .sidenav, .footer-nav');

  fetch('/nav-items.html')
    .then((response) => response.text())
    .then((html) => {
      links.forEach((link) => {
        const listItem = link;
        listItem.innerHTML = html;

        link.addEventListener('click', (event) => {
          event.preventDefault();

          const sidenav = document.querySelector('.sidenav');
          M.Sidenav.getInstance(sidenav).close();

          const newPage = event.target.getAttribute('href').substr(2);
          const navPage = page(newPage);

          window.history.pushState(navPage, '', `#/${navPage}`);
          loadPage(navPage);
        });
      });

      const footerNav = document.querySelectorAll('.footer-nav li a');
      footerNav.forEach((link) => {
        link.classList.remove('waves-effect');
        link.classList.add('grey-text');
        link.classList.add('text-lighten-3');
      });
    });
}

export { loadNavListItems, loadPage };
