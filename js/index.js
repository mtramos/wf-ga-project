let loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', function(event){
event.preventDefault()
let userName = document.getElementById('user-email').value
console.log(userName)
})
