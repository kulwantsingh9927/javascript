// or operator
// let firstName = "Pooja pandit jhadhav";
// let age = 25;
// if (firstName === "P" || age > 22) {
// console.log("mehnti ladki")
// } else {
// console.log("madarchodeladki")
// }
// nested if else
// let WinningNumber = 25;
// let UserGuess = prompt("guess a number");
// console.log(UserGuess);
// or 
//let WinningNumber = 45;
// let UserGuess = +prompt("guess a right number");
// if (UserGuess === WinningNumber) {
// console.log("your guess is right")
// } else {
// console.log("your number is wromg")
// }
let WinningNumber = 65;
let UserGuess = +prompt("guess a number");
if (WinningNumber === UserGuess) {
    console.log("yourgues is right")
} else {
    if (UserGuess < WinningNumber) {
        console.log("your guess number is low")
    } else {
        console.log("your guess number is to high")
    }
}
// hum number ke jagaha name bhi likh shakt hai or ishe method ko nested if edthod kehte hai ishme else ke ander if use karte hai