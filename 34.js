// IMPORTANT ARRAY METHODS use for
// const numbers = [5, 6, 8, 6];

// function multiplyby2(number, index) {
//     console.log("index is", index);
//     console.log(number * 2);
// }
// multiplyby2(numbers[0], 0);
// another example
// const numbers = [5, 6, 8, 6];

// function multiplyby2(number, index) {
//     console.log("index is", index);
//     console.log(`${number}*2=${number*2}`);
// }
// multiplyby2(numbers[0], 0);
// another method and use for har index ke liye lene ke liye
// const numbers = [5, 6, 8, 6];

// function multiplyby2(number, index) {
//     console.log("index is", index);
//     console.log(`${number}*2=${number*2}`);
// }
// for (let i = 0; i < numbers.length; i++) {
//     multiplyby2(numbers[i], i);
// }
// FOREACH 
// const number = [5, 6, 4, 2];
// functionfunc(number, index) {
//     console.log(`index is ${index} number is ${number}`)
// } anather method

// number.forEach(function(number, index) {
//     console.log(`indexis${index}numberis ${number}`)
// })
// another
// number.forEach(function(number, index) {
//     console.log(number * 3);
// })
// real stick example
const users = [
        { firstname: "kulwant", age: 22 },
        { firstname: "rajan", age: 25 },
        { firstname: "kuldeep", age: 24 },
        { firstname: "yashwant", age: 23 },
    ]
    // user.forEach(function(user) {
    //     console.log(user.firstname);
    // });
    // hm yaha for loop laga kar bhi kar shakte the
for (let user of users) {
    console.log(user.firstname);
}