const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsRef = document.querySelector('#ingredients');
// const items = [];
// ingredients.map(el => {
//   const ingredientsItem = document.createElement('li');
//   ingredientsItem.textContent = el;
//   items.push(ingredientsItem);
// });
const items = ingredients.map(el => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = el;
  // items.push(ingredientsItem);
  return ingredientsItem
});
ingredientsRef.append(...items)
