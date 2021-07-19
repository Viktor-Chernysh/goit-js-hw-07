const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

function changeOutputValue(event) {
  // if (event.target.value.length > 0) {
  if (event.target.value.trim()) {
    nameOutputRef.textContent = event.target.value
  } else
    nameOutputRef.textContent = 'незнакомец'
  // event.target.value.length > 0 ? nameOutputRef.textContent = event.target.value : nameOutputRef.textContent = 'незнакомец';
}
nameInputRef.addEventListener('input', changeOutputValue);
