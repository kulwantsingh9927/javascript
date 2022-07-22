// REDUCE METHOD
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// aim: sum of all the numbers in array
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });
// console.log(sum);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// agar hum ishme koi initial value pass karte hai jaise ishme ki to hmare couting initial value se start hogi

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 100);
// console.log(sum);
// // // accumulator   ,     currentvalue   ,return
// //    1           ,        2      ,     3
// //    3           ,         3    ,     6
// //   6           ,        4        ,    10
// //   10          ,        5        ,    15
// //    15          ,       6        ,     21
// //    21         ,      7         ,     28
// //     28        ,      8         ,     36
// //     36        ,     9          ,     45
// another example
const userCart = [
    { producrID: 01, productName: "mobile", price: 12000 },
    { producrID: 02, productName: "laptop", price: 32000 },
    { producrID: 03, productName: "tv", price: 22000 },
]
const totalAmount = userCart.reduce((totalPrice, currentproduct) => {
    return totalPrice + currentproduct.price;
}, 0)
console.log(totalAmount);