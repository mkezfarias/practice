const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
  console.log('u clocked');
  const shouldChangePage = confirm(
    'this website might be malicious, wanna proceed?'
  );
  if (!shouldChangePage) {
    console.log(shouldChangePage);
    event.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
  console.log(event);
  event.preventDefault();
  console.log(this.name.value);
  console.log(event.currentTarget.email.value);
  console.log(event.currentTarget.agree.checked);
  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('sorry brah');
  }
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
