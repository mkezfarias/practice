function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No gallery found');
  }
  // select elements we need
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function openModal() {
    console.info('opening modal');
    if (modal.matches('.open')) {
      console.info('modal alredy open');
      return; // to stop the function from running further
    }
    modal.classList.add('open');

    // event listeners to be bound to the modal
    modal.addEventListener('click', handleClickOutside);
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.removeEventListener('click', handleClickOutside);
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(e) {
    if (e.key === 'Escape') return closeModal();
    if (e.key === 'ArrowRight') return showNextImage();
    if (e.key === 'ArrowLeft') return showPrevImage();
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }
  function showImage(el) {
    if (!el) {
      console.info('no image to show');
      return;
    }
    console.log(el);
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }

  // these are our event listeners

  images.forEach(image => {
    image.addEventListener('click', event => showImage(event.currentTarget));
    image.addEventListener('keyup', e =>
      e.key === 'Enter' ? showImage(e.currentTarget) : ''
    );
  });
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
