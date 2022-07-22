//  REST PARAMETERS
// function myfunc(a, b, c) {
//     console.log(`a is${a}`)
//     console.log(`b is${b}`)
//     console.log(`c is${c}`)
// }
// myfunc(1, 2, 3);
//REST PERAMETER IS USE #DOTS
// function myfunc(a, b, ...c) {
//     console.log(`a is${a}`)
//     console.log(`b is${b}`)
//     console.log(`c is${c}`)
// }
// myfunc(1, 2, 3, 64, 8, 77, 6, 6);
// ADD ALL 
function addall(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total = total + number;
    }
    return total;
}
const ans = addall(1, 2, 3, 5, 4);
console.log(ans);