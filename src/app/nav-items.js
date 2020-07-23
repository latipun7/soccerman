import axios from 'axios';

const options = { responseType: 'text' };

async function loadNavListItems() {
  const { data } = await axios.get('/nav-items.html', options);
  const linkElements = document.querySelectorAll(
    '.topnav, .sidenav, .footer-nav'
  );

  linkElements.forEach((linkElement) => {
    const listItem = linkElement;

    listItem.innerHTML = data;
  });

  const footerNav = document.querySelectorAll('.footer-nav li a');

  footerNav.forEach((link) => {
    link.classList.remove('waves-effect');
    link.classList.add('grey-text');
    link.classList.add('text-lighten-3');
  });
}

export default loadNavListItems;
