// MAP METHOD
// const numbers = [5, 3, 6, 8];
// const square = function(number) {
//     return number * number;
// }
// const squareNumber = numbers.map(square);
// console.log(squareNumber);
// another method
// const numbers = [5, 2, 6, 8];
// const squarenumber = numbers.map((number, index) => {
//     return `index${index},${number*number}`;
// });
// console.log(squarenumber);
// REAL STICK EXAMPLE .MAP METHOD
const users = [
    { firstname: "kulwant singh", age: 22 },
    { firstname: "rajan singh", age: 25 },
    { firstname: "harshit singh", age: 24 },
    { firstname: "narendra singh", age: 23 },
]
const usernames = users.map((user) => {
    return user.firstname;
});
console.log(usernames);