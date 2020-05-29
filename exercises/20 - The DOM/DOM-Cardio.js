// Make a div
console.log('it works');
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.appendChild(myDiv);
// make an unordered list
const myList = document.createElement('ul');
const listItems = [111, 222, 333, 444].map(nbr => `<li>${nbr}</li>`);
listItems.forEach(item => (myList.innerHTML += item));
myDiv.appendChild(myList);
// create an image
const myImage = document.createElement('img');
// set the source to an image
myImage.src = 'https://i.picsum.photos/id/436/200/300.jpg';
// set the width to 250
myImage.width = 250;
// add a class of cute
myImage.classList.add('cute');
// add an alt of Cute Puppy
myImage.alt = 'cute puppy';
// Append that image to the wrapper
myDiv.appendChild(myImage);
// with HTML string, make a div, with two paragraphs inside of it\
const myString = `
<div>
  <p class="p1"> p1 </p>
  <p class="p2"> p2 </p>
</div>
`;

// put this div before the unordered list from above
const fragment = document.createRange().createContextualFragment(myString);
console.log(myDiv.childNodes);
myDiv.insertBefore(fragment, myDiv.childNodes[0]);

// add a class to the second paragraph called warning
const p2 = document.querySelector('.p2');
p2.classList.add('warning');
console.log(p2);

// remove the first paragraph
p2.previousElementSibling.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
const generatePlayerCard = (name, age, height) => `
  <div class="playerCard">
    <h2> ${name} - ${age} </h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
  7}. That would be a tall dog!</p>
  <button class="borrar">borrar</button>
    </div>`;
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// Have that function make 4 cards
const card1 = generatePlayerCard('MIKE', '35', 184);
const card2 = generatePlayerCard('MIKEEE', '25', 114);
const card3 = generatePlayerCard('MIKEOO', '5', 144);
const card4 = generatePlayerCard('MIKE222', '50', 144);

cards.innerHTML += card1 + card2 + card3 + card4;

document.body.insertBefore(cards, document.body.childNodes[0]);

const borrar = document.querySelectorAll('button.borrar');
console.log(borrar);

borrar.forEach(boton =>
  boton.addEventListener('click', function() {
    boton.parentElement.remove();
  })
);

// append those cards to the div
// put the div into the DOM just before the wrapper element

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
