import { isValidPhone, isValidPost, isValidEmail } from './regEx.js';
const dropdown = document.querySelector('#dropdown');
const submitBtn = document.querySelector('[data-submit]');
const dataInput = document.querySelector('[data-input]');
const selectionContainer = document.querySelector('[data-selection-container]');
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const dropdownValue = dropdown.value;
  const inputValue = dataInput.value;
  patternMatch(dropdownValue, inputValue, dataInput);
});

function patternMatch(type, inputValue, inputField) {
  switch (type) {
    case 'phone':
      if (isValidPhone(inputValue)) {
        alertMsg('Valid Phone Number ✔✔✔', 'success');
        inputField.value = '';
      } else {
        alertMsg('Invalid Phone Number!❌❌❌');
        inputField.value = '';
      }
      break;
    case 'email':
      if (isValidEmail(inputValue)) {
        alertMsg('Valid Email ✔✔✔', 'success');
        inputField.value = '';
      } else {
        alertMsg('Invalid Email!❌❌❌');
        inputField.value = '';
      }
      break;
    case 'post':
      if (isValidPost(inputValue)) {
        alertMsg('Valid PostCode ✔✔✔', 'success');
        inputField.value = '';
      } else {
        alertMsg('Invalid PostCode!❌❌❌');
        inputField.value = '';
      }
      break;
    default:
      alertMsg('Invalid Selection type! Try again later!😢😢');
      inputField.value = '';
  }
}

function alertMsg(msg, type = 'danger') {
  const alertDiv = document.querySelector('.alert');
  if (alertDiv) {
    alertDiv.remove();
  }
  const div = document.createElement('div');
  div.innerText = msg;
  div.className = `alert alert-${type}`;
  div.setAttribute('role', 'alert');
  selectionContainer.prepend(div);
  setTimeout(() => {
    div.remove();
  }, 5000);
}
