const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

function inputHandler() {
  let inputElValue = inputEl.value.trim();
  if (inputElValue !== '') {
    spanEl.textContent = inputElValue;
  } else {
    spanEl.textContent = 'Anonymous';
  }
}

inputEl.addEventListener('input', inputHandler);
