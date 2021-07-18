const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryRef = document.querySelector('#gallery');
// galleryRef.classList.add('gallery')

// const createGallery = function (array) {
//   array.map(el => {
//     const galleryItemEl = document.createElement('li');
//     galleryItemEl.classList.add('gallery__item')
//     const galleryImgEl = document.createElement('img');
//     galleryImgEl.classList.add('gallery__img')
//     galleryImgEl.alt = `${el.alt}`;
//     galleryImgEl.src = `${el.url}`;
//     galleryItemEl.appendChild(galleryImgEl);
//     galleryRef.appendChild(galleryItemEl)
//   })
// };
const createGallery = function (array) {
  const galleryCollection = array.map(el => `<li class = 'gallery__item'><img class = 'gallery__img' alt=${el.alt} src=${el.url}></li>`);
  galleryRef.insertAdjacentHTML('beforeend', galleryCollection.join(''))
};
createGallery(images);