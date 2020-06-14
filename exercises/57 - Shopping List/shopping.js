const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// array to hold state
const items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.firstElementChild.value;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };

  items.push(item);
  console.log(`there are now ${items.length} in your state`);
  e.currentTarget.reset();
  displayItems();
}

function displayItems() {
  const html = items.map(item => `<li>${item.name}</li>`);
  console.log(html);
}

shoppingForm.addEventListener('submit', handleSubmit);
