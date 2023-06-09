const fullNameInput = document.getElementById('name');
const emailInput = document.getElementById('mail');
const phoneNumberInput = document.getElementById('phone');
const passwordInput = document.getElementById('pass');
const confirmPasswordInput = document.getElementById('passConf');
const checkBoxInput = document.getElementById('checkBox');
const errorText = document.querySelector('.error');
const submitButton = document.querySelector('.button');

function validateFullName(fullName) {
  const regex = /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/;
  return regex.test(fullName);
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  errorText.innerHTML = '';

  if (!fullNameInput.value || !emailInput.value || !phoneNumberInput.value || !passwordInput.value || !confirmPasswordInput.value || !checkBoxInput.checked) {
    errorText.innerHTML = 'Please fill in all the fields and agree to the terms and conditions.';
    return;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    errorText.innerHTML = 'The passwords do not match.';
    return;
  }

  if (!validateFullName(fullNameInput.value)) {
    errorText.innerHTML = 'The full name should contain at least two words.';
    return;
  }

  if (validateEmail(emailInput.value) === false) {
    errorText.innerHTML = 'This email doesnt exist!';
    return;

  }

  if (validatePassword(passwordInput.value) === false) {
    errorText.innerHTML = 'Password must contain at least 8 characters including at least one uppercase letter, one lowercase letter, and one digit.';
    return;
  }

  if (validatePhone(phoneNumberInput.value) === false) {
    errorText.innerHTML = 'Your phone namber from wild world or try write down it as "+000-000-00-00"';
    return;
  }

  errorText.innerHTML = 'Account created successfully!';
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return passwordRegex.test(password);
  }

  function validatePhone(phoneNumber) {
    const phoneRegex = /^\+\d{2}-\d{3}-\d{3}-\d{2}-\d{2}$/;
    const countryCodes = /^(?:\+375|375|\+7|7)?[- ]?(?:\(?\d{3}\)?[- ]?\d{2}[- ]?\d{2}|\d{3}[- ]?\d{2}[- ]?\d{2})$/;
    
    if (phoneRegex.test(phoneNumber) && !countryCodes.test(phoneNumber)) {
      return true;
    } else {
      return false;
    }
  }
  
