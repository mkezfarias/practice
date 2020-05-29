// select elements in thepage canvas button

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');

const MOVE_AMMOUNT = 20;

// setup canvas for drawing
// variable height and width with value of canvas width and height

const { width, height } = canvas;
// generate random number
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 40;
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // starts the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function
function draw({ key }) {
  hue += 3;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  console.log(key);
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move values depending on key pressed
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMMOUNT;
      break;
    default:
      break;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
}

// write a handler
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

// clear / shake

function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function() {
      console.log('shaked');
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}

// listen from arrow keys
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);
