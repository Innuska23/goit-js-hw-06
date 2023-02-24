// Оголошуємо змінну для зберігання поточного значення лічильника
let counterValue = 0;

// Отримуємо доступ до елементів DOM
const counter = document.querySelector('#counter');
const valueEl = document.querySelector('#value');
const incBtn = counter.querySelector('[data-action="increment"]');
const decBtn = counter.querySelector('[data-action="decrement"]');

// Додаємо слухача події для кнопки "Збільшити"
incBtn.addEventListener('click', () => {
counterValue += 1;
valueEl.textContent = counterValue;
});

// Додаємо слухача події для кнопки "Зменшити"
decBtn.addEventListener('click', () => {
counterValue -= 1;
valueEl.textContent = counterValue;
});