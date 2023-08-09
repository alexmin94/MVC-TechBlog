const login= async function(event){
    event.preventDefault()
    var usernameElement=document.querySelector("#username-input-login")
    var passwordElement=document.querySelector("#passoword-input-login")
    const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
          username: usernameElement.value,
          password: passwordElement.value,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to login');
      }
}
document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);