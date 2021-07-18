let counterValue=0;
const incrementButtonEl = document.querySelector('[data-action="increment"]');
const decrementButtonEl = document.querySelector('[data-action="decrement"]');
const counterValueEl = document.querySelector('#value');

const decrement = function () {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
};
decrementButtonEl.addEventListener('click', decrement);

const increment = function () {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
};
incrementButtonEl.addEventListener('click', increment);