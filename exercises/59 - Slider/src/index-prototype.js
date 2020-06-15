function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('no slider passed in');
  }

  this.slides = slider.querySelector('.slides');
  this.slider = slider;
  this.prevButton = slider.querySelector('.goToPrev');
  this.nextButton = slider.querySelector('.goToNext');

  // bind the methods to the instance when we need them
  this.prevButton = this.prevButton.bind(this);
  this.nextButton = this.nextButton.bind(this);

  // when the slider is created, run the start slider function
  this.startSlider();
  this.applyClasses();

  // event listeners
  this.prevButton.addEventListener('click', () => this.move('back'));
  this.nextButton.addEventListener('click', this.move);
}

Slider.prototype.startSlider = function() {
  this.current =
    this.slider.querySelector('.current') || this.slides.firstElementChild;
  this.prev =
    this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
};

Slider.prototype.applyClasses = function() {
  this.current.classList.add('current');
  this.prev.classList.add('prev');
  this.next.classList.add('next');
};

Slider.prototype.move = function(direction) {
  this.prev.classList.remove('prev', 'current', 'next');
  this.current.classList.remove('prev', 'current', 'next');
  this.next.classList.remove('prev', 'current', 'next');
  if (direction === 'back') {
    // make new array with the new values by destructuring
    [this.prev, this.current, this.next] = [
      // get the last slide for wrapping, if there is no previous one to show
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current,
    ];
  } else {
    [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      // get the first slide for wrapping, if there is no next slide to show
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }
  this.applyClasses();
};

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));
