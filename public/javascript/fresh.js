const freshpost=async function(event){
    event.preventDefault()
    const posttitle=document.querySelector('input[name="title"]')
    const postbody=document.querySelector('textarea[name="body"]')

    await fetch(`/api/post`,{
        method:"POST",
        body: JSON.stringify({
            title:posttitle.value,
            body:postbody.value

        }),
        headers:{'Content-Type': 'application/json'}
    })
    document.location.replace("/loggedin")
}

document.querySelector("#newpostform").addEventListener("submit",freshpost)