const textChangerRef = document.querySelector('#font-size-control');
const textValueRef = document.querySelector('#text')
textChangerRef.addEventListener('input', onTextSizeChanger);
// textValueRef.style.fontSize = '19' + 'px'
function onTextSizeChanger(event) {
  textValueRef.style.fontSize = `${event.target.value}px`;
}