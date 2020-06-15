function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No gallery found');
  }
  this.gallery = gallery;
  // select elements we need
  this.images = Array.from(gallery.querySelectorAll('img'));
  this.modal = document.querySelector('.modal');
  this.prevButton = this.modal.querySelector('.prev');
  this.nextButton = this.modal.querySelector('.next');

  // bind the methods to the instance when we need them
  this.showNextImage = this.showNextImage.bind(this);
  this.showPrevImage = this.showPrevImage.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.handleClickOutside = this.handleKeyUp.bind(this);
  // these are our event listeners
  this.images.forEach(image => {
    image.addEventListener('click', event =>
      this.showImage(event.currentTarget)
    );
    image.addEventListener('keyup', e =>
      e.key === 'Enter' ? this.showImage(e.currentTarget) : ''
    );
  });
}

Gallery.prototype.openModal = function() {
  console.info('opening modal');
  if (this.modal.matches('.open')) {
    console.info('modal alredy open');
    return; // to stop the function from running further
  }
  this.modal.classList.add('open');

  // event listeners to be bound to the modal
  this.modal.addEventListener('click', this.handleClickOutside);
  window.addEventListener('keyup', this.handleKeyUp);
  this.nextButton.addEventListener('click', this.showNextImage);
  this.prevButton.addEventListener('click', this.showPrevImage);
};

Gallery.prototype.closeModal = function() {
  this.modal.classList.remove('open');
  this.modal.removeEventListener('click', this.handleClickOutside);
  window.removeEventListener('keyup', this.handleKeyUp);
  this.nextButton.removeEventListener('click', this.showNextImage);
  this.prevButton.removeEventListener('click', this.showPrevImage);
};

Gallery.prototype.handleClickOutside = function(e) {
  if (e.target === e.currentTarget) {
    this.closeModal();
  }
};

Gallery.prototype.handleKeyUp = function(e) {
  if (e.key === 'Escape') return this.closeModal();
  if (e.key === 'ArrowRight') return this.showNextImage();
  if (e.key === 'ArrowLeft') return this.showPrevImage();
};

Gallery.prototype.showNextImage = function() {
  this.showImage(
    this.currentImage.nextElementSibling || this.gallery.firstElementChild
  );
};

Gallery.prototype.showPrevImage = function() {
  this.showImage(
    this.currentImage.previousElementSibling || this.gallery.lastElementChild
  );
};

Gallery.prototype.showImage = function(el) {
  if (!el) {
    console.info('no image to show');
    return;
  }
  console.log(el);
  this.modal.querySelector('img').src = el.src;
  this.modal.querySelector('h2').textContent = el.title;
  this.modal.querySelector('figure p').textContent = el.dataset.description;
  this.currentImage = el;
  this.openModal();
};

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);
