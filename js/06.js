const validationInputRef = document.querySelector('#validation-input');
const inputLength = Number(validationInputRef.getAttribute('data-length'));

function inputValidationChecker(event) {
  if (event.target.value.length === inputLength) {
    validationInputRef.classList.add('valid');
    validationInputRef.classList.remove('invalid');
  }
  if (event.target.value.length !== inputLength) {
    validationInputRef.classList.add('invalid');
  } 
    if (event.target.value.length === 0) {
      validationInputRef.classList.remove('invalid');
      validationInputRef.classList.remove('valid');
  };
  
};
validationInputRef.addEventListener('input', inputValidationChecker);