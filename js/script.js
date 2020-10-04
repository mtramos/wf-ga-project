let loginForm = document.getElementById("login-form");
let userName = document.getElementById("user-email");
let userPass = document.getElementById("user-password");
let errorPassMessageDiv = document.getElementById('error-pass');
let userEmail = 'mt.ramos@gmail.com'
let password = 'this.is.mypassword'

loginForm.addEventListener( 'submit', (e) =>{
  e.preventDefault()
if (userName.value !== userEmail && userPass !== password){
  userName.classList.add('field-error')
  userPass.classList.add('field-error')
  errorPassMessageDiv.textContent = "Password and Email do not match our records. Please try again.";
} else {
  errorPassMessageDiv.textContent = '';
  userName.classList.remove('field-error')
  userPass.classList.remove('field-error')
  }
})