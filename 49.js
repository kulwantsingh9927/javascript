// METHOD
// FUNCTION INSIDE OBJECT

// const person={
//     firstName:"kulwant",
//     age:23,
//     about: function(){
//         console.log(`person name is ${this.firstName} and his age is ${this.age}`)
//     }
// }
// console.log(person.about);
// person.about();
// ANOTHER METHOD
function personInfo(){
    console.log(`person name is ${this.firstName} and his age is ${this.age}`)
}
const person1={
    firstName:"kulwant singh",
    age:23,
    about : personInfo
}
const person2={
    firstName:"rajan singh",
    age:20,
    about: personInfo
}
const person3={
    firstName:"gurmeet singh",
    age:21,
    about: personInfo
}
const person4={
    firstName:"himanshu singh",
    age:22,
    about: personInfo
}
person1.about();
person2.about();
person3.about();
person4.about();