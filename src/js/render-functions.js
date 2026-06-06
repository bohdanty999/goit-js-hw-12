import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {});

function imageTemplate(hit) {
  return `
    <li class="gallery-item">
      <a href="${hit.largeImageURL}">
        <img src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy" />
      </a>
      <ul class="gallery-item-desc">
        <li>Likes <p>${hit.likes}</p></li>
        <li>Views <p>${hit.views}</p></li>
        <li>Comments <p>${hit.comments}</p></li>
        <li>Downloads <p>${hit.downloads}</p></li>
      </ul>
    </li>
  `;
}

function imagesTemplate(images) {
  return images.map(imageTemplate).join('');
}

export function createGallery(images) {
  gallery.insertAdjacentHTML('beforeend', imagesTemplate(images));
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('loader--visible');
}

export function hideLoader() {
  loader.classList.remove('loader--visible');
}

export function showLoadMore() {
  loadMoreBtn.classList.remove('load-more--hidden');
}

export function hideLoadMore() {
  loadMoreBtn.classList.add('load-more--hidden');
}

export function scrollAfterLoad() {
  const firstCard = document.querySelector('.gallery-item');
  if (!firstCard) return;
}

export function updateLoadMore() {
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
