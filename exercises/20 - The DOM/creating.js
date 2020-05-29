console.log('it works');

const myParagraph = document.createElement('p');
myParagraph.textContent = "i'm a mfking teepot";
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500/';
myImage.alt = 'this imegeeee';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

document.body.appendChild(myDiv);
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

const heading = document.createElement('h2');
heading.textContent = 'cool things';
myDiv.insertAdjacentElement('afterbegin', heading);

const list = document.createElement('ul');
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');

list.textContent = 'lista';
item1.textContent = 'l1';
item2.textContent = 'l2';
item3.textContent = 'l3';

list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);
myDiv.appendChild(list);
