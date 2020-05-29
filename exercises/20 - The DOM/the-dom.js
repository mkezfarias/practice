// const p = document.querySelector('p');
// const divs = document.querySelector('div');
// const imgs = divs.querySelector('.custom');
// const heading = document.querySelector('h2');
// console.log(p);
// console.log(divs);
// console.log(imgs);
// console.dir(heading.textContent);
// console.dir(heading.innerText);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;

// pizzaList.insertAdjacentText('afterbegin', '🍕');

const pic = document.querySelector('.nice');

pic.addEventListener('click', function() {
  pic.classList.toggle('round');
});

pic.setAttribute('alt', 'hellowww');

console.log(pic.getAttribute('alt'));
