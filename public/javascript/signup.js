const signup=async function(event){
    event.preventDefault()

    var usernameElement=document.querySelector("#username-input-signup")
    var passwordElement=document.querySelector("#passoword-input-signup")

    const res=await fetch("/api/user",{
        method:"POST",
        body:JSON.stringify({
            username:usernameElement.value.trim(),
            password:passwordElement.value.trim()
        }),
        headers:{"Content-Type":"application/json"}
    });
    if (res.ok){
        document.location.replace("/loggedin")
    }
}
document.querySelector("#signup-form").addEventListener("submit",signup)