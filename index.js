// Add your code here
// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(
//   {dogName: "Sm",
//     dogBreed: "Poodle"} ,
//     )
// }); 

  
const dom = document.querySelector("body")

function submitData(name, email){

    let toStringify = {
        name: name,
        email: email
    }
    
    let jsonRequest = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(toStringify)
    }

    return fetch("http://localhost:3000/users", jsonRequest)
    .then(response => response.json()) // Retrieve incoming data and convert to JSON
    .then(obj => dom.innerHTML = obj.id) // Append ID to DOM
    .catch(error => dom.innerHTML = error.message); // Catch failed post using catch

}
// const employees = [
//     {
//     name: "Rob",
//     email: "robby@gmail"
// }, {
//     name: "Jerry",
//     email: "fourfiners@gmail"
// }
// ]

submitData("OnePunch", "P1@gmail")
//submitData(employees[0], employees[1])