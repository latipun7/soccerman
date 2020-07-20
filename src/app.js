let page = window.location.hash.substr(2);
let state;

if (page === '') page = 'home';

const initialState = page;

function loadPage(pathName) {
  const element = document.querySelector('#body-content');

  fetch(`pages/${pathName}.html`)
    .then((response) => response.text())
    .then((html) => {
      element.innerHTML = html;
    })
    .catch((e) => {
      element.innerHTML = `<pre>${e}</pre>`;
    });
}

function loadNavListItems() {
  fetch('../nav-items.html')
    .then((response) => response.text())
    .then((html) => {
      const elements = document.querySelectorAll(
        '.topnav, .sidenav, .footer-nav'
      );

      elements.forEach((element) => {
        const listItem = element;
        listItem.innerHTML = html;
      });

      const footerNav = document.querySelectorAll('.footer-nav li a');
      footerNav.forEach((link) => {
        link.classList.remove('waves-effect');
        link.classList.add('grey-text');
        link.classList.add('text-lighten-3');
      });
    });

  const links = document.querySelectorAll('.topnav, .sidenav, .footer-nav');
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const sidenav = document.querySelector('.sidenav');
      M.Sidenav.getInstance(sidenav).close();

      page = event.target.getAttribute('href').substr(2);
      window.history.pushState(page, '', `#/${page}`);
      loadPage(page);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elements);
  loadNavListItems();

  window.onpopstate = (event) => {
    if (event.state) {
      state = event.state;
    } else {
      state = initialState;
    }

    loadPage(state);
  };

  loadPage(page);
});

const dateYear = new Date().getFullYear();
const footerYearElement = document.getElementById('footer-date');
footerYearElement.innerText = dateYear;
