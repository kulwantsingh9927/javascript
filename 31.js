//PARAMETER DESTRUCTION
// OBJECT
//REACT
const person = {
    firstname: "kulwant singh",
    gender: "male",
    age: 50
}

// function printdetails(obj) {
//     console.log(obj.firstname);
//     console.log(obj.gender)
// }

function printdetails({ firstname, gender, age }) {
    console.log(firstname);
    console.log(age);
    console.log(gender);
}
printdetails(person);