// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('keyup', validateZip);
document.getElementById('email').addEventListener('keydown', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function applyStyles(re, field){
  if(!re.test(field.value)){
    field.classList.add('is-invalid')
  } else {
    field.classList.remove('is-invalid')
  }
}

function validateName() {
  const name = document.getElementById('name')
  const re = /^[ a-zA-Z]{2,10}$/
  applyStyles(re, name)
}

function validateZip() {
  const zip = document.getElementById('zip')
  const re = /^[0-9]{5}(-[0-9]{4})?$/
  applyStyles(re, zip)
}

function validateEmail() {
  const email = document.getElementById('email')
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  applyStyles(re, email)
}

function validatePhone() {
  const phone = document.getElementById('phone')
  const re = /^\([0-9]{3}\) [0-9]{3}-[0-9]{4}/
  applyStyles(re, phone)
}
