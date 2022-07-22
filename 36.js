// FILTER FUNCTIONS
// it is finf out even number
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// const isEven = function(number) {
//     return number % 2 === 0;
// }
// const evennumbers = number.filter(isEven);
// console.log(evennumbers);
// it is find out for odd numbers
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// const isOdd = function(number) {
//     return number % 2 !== 0;
// }
// const evennumbers = number.filter(isOdd);
// console.log(evennumbers);
// through arrow method
const numbers = [1, 2, 3, 6, 4, 5, 9, 8, 7, 55];
const evennumbers = numbers.filter((number) => {
    return number % 2 === 0;
});
console.log(evennumbers);