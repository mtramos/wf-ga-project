let nameField = document.getElementById("name-field")
let contactName = document.getElementById("contact-name")
let errorMessageName = document.getElementById("error-name")


nameField.addEventListener( 'keyup', function(event){
  event.preventDefault()
if (contactName.value.length < 3){
contactName.classList.add('field-error')
errorMessageName.textContent = "Name should be more than 3 characters";
} else{
errorMessageName.textContent = "";
contactName.classList.remove('field-error');
}
})

let lastnameField = document.getElementById("lastname-field")
let lastName = document.getElementById("lastname")
let errorMessageLast = document.getElementById("error-lastname")

lastnameField.addEventListener('keyup', function(event){
event.preventDefault()
if (lastName.value.length < 3){
  lastName.classList.add('field-error')
  errorMessageLast.textContent = "Lastname should be more than 3 characters";
  } else{
  errorMessageLast.textContent = "";
  lastName.classList.remove('field-error');
  }
})