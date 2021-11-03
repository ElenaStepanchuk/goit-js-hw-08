// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galeryElementsRefs = document.querySelector('.gallery');
 

const createGalleryItems = galleryItems
    .map(({ preview, original, description  }, index) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}" data-lightbox="roadtrip">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      data-index="${index}"
      alt="${description}"/>
  </a>
</div>`;
    })
    .join('');   

galeryElementsRefs.insertAdjacentHTML('beforeend', createGalleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
    nav: true,   
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    close: true,
});
    
