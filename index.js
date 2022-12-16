// Add your code here
// const configurationObject = {
//     method : "POST",
//     headers: {
//         "Content-Type" : "application/json",
//         Accept : "application/json",
//     },
//     body : JSON.stringify({
//         dogName : "Byron",
//         dogBreed : "poodle",
//     }),
// };

// fetch("http://localhost:3000/dogs" , configurationObject)
// .then(response => {response.json()})
// .then(data => console.log(data))
// .catch(err => console.error(err))


function submitData (userName, userEmail){
    const postData = fetch("http://localhost:3000/users" , { 
    method : "POST",
    headers: {
        "Content-Type" : "application/json",
        Accept : "application/json",
    },
    body : JSON.stringify({
        name : userName,
        email : userEmail,
    }),
})
.then(response => response.json())
.then(data => {
    console.log(data)
    const span = document.createElement("span")
    span.innerHTML = data.id
    document.body.appendChild(span)
})
.catch(err => {
    console.error(err.message)
    const span = document.createElement("span")
    span.innerHTML = err.message
    document.body.appendChild(span)
})



return postData
}

submitData("Lisa","lisajames@gmail.com")