//DEFAULT PARAMETERS
// function addtwo(number1, number2) {
//     return number1 + number2;
// }
// const ans = addtwo(55);
// console.log(ans);
// but agar hum value dal de to nan nai ayega
//but DEFAULT PARAMETERS BELOE EXAMPLE NO NEED TO APPLY CONDITIONS
// function addtwo(a, b = 3) {
//     return a + b;
// }
// const ans = addtwo(5);
// console.log(ans);
//or another example
// function addtwo(a, b = 0) {
//     return a + b;
// }
// const ans = addtwo(5, 115);
// console.log(ans);
// agar hum upper b ki value rakhe 0 or neche alag to b ki value set nai hogi or digit add ho jayegi
function addtwo(a, b = 6) {
    return a + b;
}
const ans = addtwo(5, 4);
console.log(ans);