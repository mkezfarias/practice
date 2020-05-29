const butts = document.querySelector('.butts');
const coolButts = document.querySelector('.cool');

function handleClick() {
  console.log('it got clicked');
}

butts.addEventListener('click', handleClick);
coolButts.addEventListener('click', handleClick);

coolButts.removeEventListener('click', handleClick);

const hooray = () => console.log('hooray!');

coolButts.addEventListener('click', hooray);

const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  console.log('u buying it');
  console.log(event.currentTarget);
  // event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener('click', function() {
  console.log('you clicked the window');
});

const photo = document.querySelector('.photo');

photo.addEventListener('mouseenter', function(e) {
  console.log(e.currentTarget);
  console.log(this);
});
