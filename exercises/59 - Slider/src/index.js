function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('no slider passed in');
  }
  let current;
  let prev;
  let next;

  const slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  function startSlider() {
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  }

  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }
  function move(direction) {
    const classesToRemove = ['prev', 'current', 'next'];
    prev.classList.remove('prev', 'current', 'next');
    current.classList.remove('prev', 'current', 'next');
    next.classList.remove('prev', 'current', 'next');
    if (direction === 'back') {
      // make new array with the new values by destructuring
      [prev, current, next] = [
        // get the last slide for wrapping, if there is no previous one to show
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        // get the first slide for wrapping, if there is no next slide to show
        next.nextElementSibling || slides.firstElementChild,
      ];
    }
    applyClasses();
  }

  // when the slider is created, run the start slider function
  startSlider();
  applyClasses();

  // event listeners
  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', move);
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
