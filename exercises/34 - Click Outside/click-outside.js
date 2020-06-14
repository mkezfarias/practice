const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOutter = document.querySelector('.modal-outer');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  // set the innermodal info//
  modalInner.innerHTML = `
  <img src="${imgSrc.replace('200', '600')}" alt="" />
  <p> ${desc} </p>`;
  // show the modal //
  console.log(modalInner.innerHTML);

  modalOutter.classList.add('open');
}

cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
);

function closeModal() {
  modalOutter.classList.remove('open');
}

modalOutter.addEventListener('click', function(event) {
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
