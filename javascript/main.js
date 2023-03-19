
document.addEventListener('DOMContentLoaded', function () {

  const login= document.querySelector('#login_btn');
  const usernameInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');

  login.addEventListener('click', (event) =>{
    event.preventDefault();
    let user = "user1";
    let password = "password1";
    if (usernameInput.value !== user){
      alert("Invalid username ")
      return;
    }
    if(passwordInput.value !== password){
      alert("Invalid password")
      return;
    }

    window.location.href ="main.html";

  });
});




