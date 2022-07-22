// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log(array1 === array2);
// how to clone
// let array1 = ["item1", "item2", "item3"];
// let array2 = array1;
// array1.push("item3");
// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);
// push is used to removed one digit
// let array = ["item1", "item2", "item3"];
// let array2 = array.slice(0)
// array.push("item3");
// console.log(array === array2);
// console.log(array);
// console.log(array2);
// [].concat(array)is used to add one iten in e=which array
// let array = ["item1", "item2"];
// let array2 = [].concat(array);
// array.push("item3");
// console.log(array === array2);
// console.log(array);
// console.log(array2);
// new way
// let array = [...array1];
// array1.push("item3");
// console.log(array === array2);
// console.log(array );
// console.log(array2);
// to add many more array we can use below method
let array1 = ["item1", "item2"];
let oneMoreArray = ["item3", "item4"];
let array2 = [...array1, ...oneMoreArray];
array1.push("item3");
console.log(array1 === array2);
console.log(array1);
console.log(array2);