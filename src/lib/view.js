import loading from '../pages/templates/loading.html';
import notFound from '../pages/templates/404.html';

let currentPage;
const pagesByName = {};

const mainOutside = document.querySelector('#root-content');
const loadingHTML = loading;

const mainContents = document.createElement('div');
mainContents.classList.add('container');
mainContents.id = 'body-content';

function addPageContents(contents) {
  pagesByName[contents.name] = contents;
}

function updateView() {
  if (currentPage) {
    const view = currentPage.view(currentPage.model);

    mainContents.innerHTML = view.contents;
    if (view.outside) mainOutside.innerHTML += view.outside;
  } else {
    mainContents.innerHTML = notFound;
  }
}

async function loadPageContents(name, params) {
  currentPage = pagesByName[name];
  mainOutside.innerHTML = '';
  mainOutside.appendChild(mainContents);

  if (currentPage) {
    const view = currentPage.view({}, loadingHTML);

    mainContents.innerHTML = view.contents;
    await currentPage.controller(currentPage.model, params);
  }

  updateView();
}

export { addPageContents, updateView, loadPageContents };
