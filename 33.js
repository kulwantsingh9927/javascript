// function returning function
// function myfunc() {
//     return 1;
// }
// const ans = myfunc();
// console.log(ans);
//real example
// function myfunc() {
//     function hello() {
//         console.log("hello world")
//     }
//     return hello;
// }
// const ans = myfunc();
// console.log(ans);
// ans();

// another example
function myfunc() {
    return function() {
        return "hello world"
    };
}
const ans = myfunc();
console.log(ans());