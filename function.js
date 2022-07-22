// function singhappybirthdaypoojadarling() {
//     console.log("happy birthday pooja darling");
// }
// singhappybirthdaypoojadarling();
//  +2+2=4
// function twoplusfour() {
//     console.log(2 + 4);

// }
// twoplusfour();
// function sum two numbers
// function sumtwonumbers(number1, number2) {
//     return number1 + number2;
// }
// const returnedvalue = sumtwonumbers(55, 68);
// console.log(returnedvalue);

// function iseven(number) {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;

//     }
// }
// console.log(iseven);
// function firstchart(anystring) {
//     return anystring[0];
// }
// console.log(firstchart("abcdhbj"));
function findtarget(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}
const myarray = [1, 2, 5, 9, 64];
const ans = findtarget(myarray, 5, 8);
console.log(ans);