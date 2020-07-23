let currentPage = window.location.hash.substr(2);

if (currentPage === '') currentPage = 'home';

const initialState = currentPage;

const page = (newPage) => {
  if (newPage) {
    currentPage = newPage;
  }
  return currentPage;
};

export { initialState, page };
