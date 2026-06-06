import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMore,
  hideLoadMore,
} from './js/render-functions';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;

hideLoadMore();

form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = form.querySelector('[name="search-text"]').value.trim();

  if (!query) {
    iziToast.warning({ message: 'Please enter a search term.' });
    return;
  }

  currentQuery = query;
  currentPage = 1;
  totalHits = 0;

  clearGallery();
  hideLoadMore();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    hideLoader();

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    totalHits = data.totalHits;
    createGallery(data.hits);
    updateLoadMore();
  } catch {
    hideLoader();
    iziToast.error({ message: 'Something went wrong. Please try again.' });
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    hideLoader();

    createGallery(data.hits);

    updateLoadMore();
  } catch {
    hideLoader();
    iziToast.error({ message: 'Something went wrong. Please try again.' });
  }
});

function updateLoadMore() {
  const loadedSoFar = currentPage * 15;

  if (loadedSoFar >= totalHits) {
    hideLoadMore();
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
    });
  } else {
    showLoadMore();
  }
}
