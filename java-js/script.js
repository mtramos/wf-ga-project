
let loginForm = document.getElementById("login-form");
// let errorMessageDiv = document.getElementById("error");
let errorPass = document.getElementById("error-pass");
let userName = document.getElementById("user-email");
let userPassword = document.getElementById("user-password");
let email = "mt.ramos@gmail.com";
let password = "my.password.1234"

loginForm.addEventListener('submit', function(event){
  event.preventDefault()
   
  if (userName.value !== email ) {
    userName.classList.add('field-error')
  } if (userPassword.value !== password ) {
    userPassword.classList.add('field-error')
    errorPass.textContent = "Email or Password does not match our records";
  } else {
    errorPass.textContent = "";
    userName.classList.remove('field-error')
    userPassword.classList.remove('field-error')
  }
  
  })