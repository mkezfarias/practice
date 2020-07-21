function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomBetween(min, max, randomNumber = Math.random()) {
  return Math.floor(Math.random() * (max - min) + min);
}

// async for of loop
function draw(element) {
  console.log(element);
  const text = el.textContent;
  let soFar = '';
  for (const letter of text) {
    console.log(letter);
    soFar += letter;
    console.log(soFar);
  }
}

const els = document.querySelectorAll('[data-type]').forEach(draw);
