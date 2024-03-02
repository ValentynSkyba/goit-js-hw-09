import images from './gallery-img';

// створюємо розмітку для li

const markup = images
  .map(({ original, preview, description }) => {
    return `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join('');

export default markup;
