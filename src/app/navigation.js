import axios from 'axios';

import { page } from '../lib/page-state';
import EPLStandings from './PL-cards';

const options = { responseType: 'text' };

const loadPageContents = () => {
  const currentPage = page();

  if (currentPage === 'home') {
    EPLStandings();
  }
};

const loadPage = async (pathName) => {
  const element = document.querySelector('#body-content');

  try {
    const { data } = await axios.get(`/pages/${pathName}.html`, options);
    element.innerHTML = data;
    loadPageContents();
  } catch (error) {
    element.innerHTML = `<pre>${error}</pre>`;
  }
};

const loadNavListItems = async () => {
  const links = document.querySelectorAll('.topnav, .sidenav, .footer-nav');
  const sidenav = document.querySelector('.sidenav');
  const { data } = await axios.get('/nav-items.html', options);

  links.forEach((link) => {
    const listItem = link;

    listItem.innerHTML = data;
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const newPage = event.target.getAttribute('href').substr(2);
      const navPage = page(newPage);

      M.Sidenav.getInstance(sidenav).close();
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
};

export { loadNavListItems, loadPage };
