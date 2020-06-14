const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

const ob = new IntersectionObserver(obCallback);

function obCallback(payload) {
  if (payload[0].isIntersecting) {
    button.disabled = false;
    ob.unobserve(terms.lastElementChild);
  } else {
    button.disabled = true;
  }
}

ob.observe(terms.lastElementChild);
