const categoriesRef = document.querySelector('#categories');
console.log(`В списке ${categoriesRef.children.length} категории.`);

const allItemsInCategoriesRef = categoriesRef.querySelectorAll('.item');

allItemsInCategoriesRef.forEach(el => {
  const textRef = el.querySelector('h2');  
  console.log(`Категория: ${textRef.textContent}`);
  
  const quantityOfElementsRef = el.querySelectorAll('li');
  console.log(`Количество элементов: ${quantityOfElementsRef.length}`);
  
 })
