const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

function changeOutputValue(event) {
  // KeyboardEvent.code
  if (event.target.value.length > 0) {
    nameOutputRef.textContent = event.target.value
  } else
    nameOutputRef.textContent = 'незнакомец'
  // console.log(event);
  // event.target.value.length > 0 ? nameOutputRef.textContent = event.target.value : nameOutputRef.textContent = 'незнакомец';
}
nameInputRef.addEventListener('input', changeOutputValue);
