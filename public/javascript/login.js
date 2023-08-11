const login= async function(event){
    event.preventDefault()
    const usernameElement=document.querySelector("#username-input-login")
    const passwordElement=document.querySelector("#password-input-login")
    console.log(usernameElement.value,passwordElement.value)
    const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
          username: usernameElement.value,
          password: passwordElement.value,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/loggedin');
      } else {
        alert('Failed to login');
      }
}
document
  .querySelector('#login-form')
  .addEventListener('submit', login);