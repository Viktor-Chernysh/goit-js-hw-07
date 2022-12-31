const boxesRef = document.querySelector('#boxes');
const boxesNumberInput = document.querySelector('#controls');
const addBoxesRef = boxesNumberInput.querySelector('[data-action="render"]');
const removeBoxesButtonRef = boxesNumberInput.querySelector('[data-action="destroy"]');
const inputValueRef = boxesNumberInput.querySelector('input');

const createRandomRgb = function () {
  const r = Math.round(Math.random() * (255 - 1) + 1);
  const g = Math.round(Math.random() * (255 - 1) + 1);
  const b = Math.round(Math.random() * (255 - 1) + 1);
  return `rgb(${r}, ${g}, ${b})`
};


const destroyBoxes = removeBoxesButtonRef.addEventListener('click', () => { inputValueRef.value = 0; boxesRef.innerHTML = '<div id="boxes"></div>' });

const generateBoxes = function (amount) {
  const size = 30;
  amount = Number(inputValueRef.value);
  
  const boxes = [];

  if (amount > inputValueRef.getAttribute('max')) {return alert('ERROR!!! VALUE MUST BE LOWER THEN 100!')}
    for (let i = 0; i < amount; i += 1) {
      const divEl = document.createElement('div');
      divEl.style.backgroundColor = createRandomRgb();
      divEl.style.width = `${size + 10 * i}px`;
      divEl.style.height = `${size + 10 * i}px`;
      divEl.style.margin = '5px';
      boxes.push(divEl);
    }
  boxesRef.append(...boxes);
}
addBoxesRef.addEventListener('click', generateBoxes);
