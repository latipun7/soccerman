import loadNavListItems from './nav-items';

function footerYear() {
  const footerYearElement = document.getElementById('footer-date');
  const dateYear = new Date().getFullYear();

  footerYearElement.innerText = dateYear;
}

async function initSideNav() {
  const sidenavElement = document.querySelectorAll('.sidenav');

  M.Sidenav.init(sidenavElement);
  await loadNavListItems();
}

export { footerYear, initSideNav };
