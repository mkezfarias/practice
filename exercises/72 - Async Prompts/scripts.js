function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  // remove popup entirely
  popup.remove();
}

function ask(options) {
  return new Promise(async function(resolve) {
    // we need to create a popup with all the fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `
      <fieldset>
        <label> ${options.title} </label>
        <input type="text" name="input" />
        <button type="submit"> Submit </button>
      </fieldset>
    `
    );

    // check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);
      //  listen for a click on the cancel button
      skipButton.addEventListener(
        'click',
        () => {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true }
      );
    }
    // listen for the submit event on the inputs
    popup.addEventListener(
      'submit',
      function(e) {
        e.preventDefault();
        console.log('Submitted!');
        // when someone submits, we want to resolve the data
        resolve(e.target.input.value);
        console.log(e.target.input.value);
        destroyPopup(popup);
      },
      // this removes the event listener
      { once: true }
    );
    // insert the popup into the DOM
    document.body.appendChild(popup);
    await wait(20);
    popup.classList.add('open');
  });
}

async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = 'cancel' in button.dataset;
  const answer = await ask({ title: button.dataset.question, cancel });
  console.log(answer);
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click', askQuestion));

const questions = [
  { title: ' whas u name' },
  { title: ' whas u telefon', cancel: true },
  { title: 'whas ur dog name' },
];

// Promise.all(questions.map(ask)).then(data => {
//   console.log(data);
// });

async function asyncMap(array, callback) {
  const results = [];
  for (const item of array) {
    const result = await callback(item);
    results.push(result);
  }
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}

go();
// async function askMany() {
//   for (const question of questions) {
//     const answer = await ask(question);
//   }
// }

// askMany();
