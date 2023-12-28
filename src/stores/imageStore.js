import { get, writable } from 'svelte/store';

export const productPhotos = [
  'public/assets/products/product-1.jpg',
  'public/assets/products/product-2.jpg',
  'public/assets/products/product-3.jpg',
  'public/assets/products/product-4.jpg'
]

export const productThumbs = [
  'public/assets/products/thumbnail-1.jpg',
  'public/assets/products/thumbnail-2.jpg',
  'public/assets/products/thumbnail-3.jpg',
  'public/assets/products/thumbnail-4.jpg'
]

export const spotlightIndex = writable(0);

export const currentImg = writable(0);

export const updateSpotlight = (index) => spotlightIndex.set(index);

export const prevImg = (isModal) => {
  currentImg.update(n => (n - 1 + productPhotos.length) % productPhotos.length);
  if (isModal) {
    updateSpotlight(get(currentImg));
  }
};

export const nextImg = (isModal) => {
  currentImg.update(n => (n + 1) % productPhotos.length);
  if (isModal) {
    updateSpotlight(get(currentImg));
  }
};

export const keyDownHandler = (event, index) => {
  if (event.key === 'Enter') updateSpotlight(index);
};
