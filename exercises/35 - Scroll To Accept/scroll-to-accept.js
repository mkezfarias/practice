const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

const watch = document.querySelector('.watch');

const ob = new IntersectionObserver(obCallBack, {
  root: terms,
  threshold: 0.1,
});

function obCallBack(thingObserved) {
  if (thingObserved[0].intersectionRatio > 0) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

ob.observe(terms.lastElementChild);
