// call back parameter
// function myfunc(a) {
//     console.log(a)
//     console.log("hello world")
// }
// myfunc(1, 2, 3)
// myfunc("abc")
// function myfunc2() {
//     console.log("inside my func2")
// }

// function myfunc(a) {
//     console.log(a);
//     a();
// }
// myfunc(myfunc2);
// or another 
function myfunc2(name) {
    console.log("inside my func2")
    console.log(`your name is ${name}`);
}

function myfunc(callback) {
    console.log("hello there i am a func and i can");

    callback("harshit");
}
myfunc(myfunc2);