let counterValue = 0;

const counter = document.querySelector('#counter');
const valueEl = document.querySelector('#value');
const incBtn = counter.querySelector('[data-action="increment"]');
const decBtn = counter.querySelector('[data-action="decrement"]');

incBtn.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});

decBtn.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});