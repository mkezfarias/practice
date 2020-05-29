console.log('workit');

const item = document.querySelector('.item');
console.log(item.innerHTML);
const name = 'mike';
const src = 'https://picsum.photos/500';
const myHTML = `
<div class="wrapper"> 
  <h1> hello ${name}  </h1>
  <img src="${src}" alt="${name}" />
</div>
`;

item.innerHTML = myHTML;
console.log(item.innerHTML);

// turn string to html code
const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment);
console.log(myFragment.querySelector('img'));

document.body.appendChild(myFragment);
