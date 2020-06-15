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
  // clear the form
  e.currentTarget.reset();
  // fire off a custom event that will tell anyone else that cares about the updated items
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  const html = items
    .map(
      item => `<li class="shopping-item">
  <input type="checkbox">
  <span class="itemName">${item.name}</span>
  <button aria-label="Remove ${item.name}">&times;</button>
  </li>`
    )
    .join('');
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  console.info('saving items to local storage');
  localStorage.setItem('items', JSON.stringify(items));
}

shoppingForm.addEventListener('submit', handleSubmit);

list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
