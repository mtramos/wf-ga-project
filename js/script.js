let loginForm = document.getElementById("login-form");
let errorMessageDiv = document.getElementById("error");
let userName = document.getElementById("user-email");
// let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

loginForm.addEventListener('keyup', function(event){
  event.preventDefault()
   
  if (userName.value.length < 3) {
    userName.classList.add('field-error')
    errorMessageDiv.textContent = "Enter a valid email address";    
  } else {
    errorMessageDiv.textContent = "";
    userName.classList.remove('field-error')
  }
  
  })
