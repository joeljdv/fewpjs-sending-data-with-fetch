function submitData(name,email){
    return fetch("http://localhost:3000/users",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        "name": `${name}`,
        "email": `${email}`
    })
} )
    .then(res => res.json())
    .then((data) => {
        const newDiv = document.createElement('div')
        newDiv.innerHTML = data.id;
        document.body.appendChild(newDiv)
    } )
    .catch((error)=> {
        alert("ERROR!!")
       const newDiv = document.createElement("div")
       newDiv.innerHTML=error
       document.body.appendChild(newDiv)
    })
}

 
