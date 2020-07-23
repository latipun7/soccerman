let currentPage;

const element = document.querySelector('#body-content');
const pagesByName = {};
const loadingHTML = `
<div class="col s12 center">
  <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-green-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="gap-patch">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
</div>
`;

function addPageContents(contents) {
  pagesByName[contents.name] = contents;
}

function updateView() {
  if (currentPage) {
    element.innerHTML = currentPage.view(currentPage.model);
  } else {
    element.innerHTML = '<h3>Page Not Found</h3>';
  }
}

async function loadPageContents(name, params) {
  currentPage = pagesByName[name];

  if (currentPage) {
    element.innerHTML = currentPage.view(currentPage.model, loadingHTML);
    await currentPage.controller(currentPage.model, params);
  }

  updateView();
}

export { addPageContents, updateView, loadPageContents };
