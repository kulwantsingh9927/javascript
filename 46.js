//  MAP OBJECT METHOD
// MAP IS A ITERABLE



// STORE DATA IN ORDER FASHION


// STORE KEY VALUE PAIRS
// DUPLICATE PAIRS ARE NAT ALLOW LIKE OBJECT


// DIFFERNT BETWEEN MAPS AND OBJECTS


// OBJECTS CAN ONLY HAVE STRING OR SYMBOLS
// AS KEY


// IN MAPS YOOU CAN USE ANYTHING AS KEY
// LIKE ARRAY , NUMBERS , STRINGS
// OBJECT LITERAL
// KEY--> STRING
// KEY--> SYMBOLS

// const person={
//     firstName:"kulwant",
//     age:23,
// 1:"one"
// }
// console.log(person.firstName);
// console.log(person["firstname"]);
// console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }
// const person=new Map();
// person.set('firstName','harshit');
// person.set('age',7);
// person.set(1,'one');
// console.log(person);
// console.log(person.get(1));
// console.log(person.keys());
// for(let key of person.keys()){
//     console.log(key, typeof key);
// }
 // another one more method
//  const person=new Map([['firstName','harshit'],['age',25]]);
//  console.log(person);
const person1={
    id:1,
    firstName:"kulwant singh"
}
const userInfo=new Map();
userInfo.set(person1,{age:5,gender:"male"});
const extraInfo=new Map();
extraInfo.set(person1,{age:8,gender:"male"});

console.log(userInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).age);

console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person1).firstName);