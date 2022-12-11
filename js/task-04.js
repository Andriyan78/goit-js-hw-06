const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

incrementBtn.addEventListener('click',  () => {
  counter.increment();
  counterValue.textContent = counter.value;
});

decrementBtn.addEventListener('click',  () => {
  counter.decrement();
  counterValue.textContent = counter.value;
});