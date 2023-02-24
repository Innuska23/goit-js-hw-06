const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItems = ingredients.map(element => {
  const item = document.createElement('li');
  item.textContent = element;
  item.classList.add('item');

  return item;
});

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...ingredientsItems);