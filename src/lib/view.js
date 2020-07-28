import loading from '../pages/templates/loading.html';
import notFound from '../pages/templates/404.html';

let currentPage;
const pagesByName = {};

const mainRoot = document.querySelector('#root-content');
const loadingHTML = loading;

function addPageContents(contents) {
  pagesByName[contents.name] = contents;
}

async function updateView(updateModel = false, params) {
  if (currentPage) {
    const { events } = currentPage;

    if (updateModel) await currentPage.controller(currentPage.model, params);

    const view = currentPage.view(currentPage.model);

    mainRoot.innerHTML = view.contents;
    if (events) events(currentPage.model).init();
  } else {
    mainRoot.innerHTML = notFound;
  }
}

async function loadPageContents(name, params) {
  if (currentPage && currentPage.events)
    currentPage.events(currentPage.model).teardown();

  currentPage = pagesByName[name];

  if (currentPage) {
    const view = currentPage.view({}, loadingHTML);

    mainRoot.innerHTML = view.contents;
    await currentPage.controller(currentPage.model, params);
  }

  await updateView();
}

export { addPageContents, updateView, loadPageContents };
