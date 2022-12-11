const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);

function onInput(event) {
  spanEl.textContent = event.currentTarget.value;

  if (event.target.value === '') {
    spanEl.textContent = 'Anonymous';
  }
}