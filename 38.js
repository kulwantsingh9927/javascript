/// sort method

// 5,9,533,78,459,8563,588
// 5,9,78,459,533,588,8563
// in sort method does not sort as a number it will sort like a string
// const numbers=[5,9,533,78,459,8563,588];
// pehle capital latter bala pehle ayega baad me small latter bala ayega
// const userNames=["kulwant","ankit", "vipul","raghav"];
// userNames.sort();
// console.log(userNames);
// numbers.sort();
// console.log(numbers);
// /ASCIT TABLE
// '0':48
// '1':49
// '2':50
// '3':51
// '4':52
// '5':53
// '6':54
// '7':55
// '8':56
// '9':57


// ':':58
// ';':59
// '<':60
// '=':61
// '>':62
// '?':63
// '@':64
// another method and it will show assending order and series in number
//const numbers=[5,8,3,4,88,596,446];
// numbers.sort((a,b)=>{
//     return a-b;
// });
// we can write as bellow in sort the output will get same.
//numbers.sort((a,b)=> a-b);
//console.log(numbers);
// for decending order
// const numbers=[5,8,3,4,88,596,446];
//  numbers.sort((a,b)=>{
//      return b-a;
 //});
 // another method in sort
//  numbers.sort((a,b)=>b-a);
//  console.log(numbers); 
// real example
const products=[
    {productId:1,productName:"mobile",price:5000},
    {productId:2,productName:"tablet",price:6000},
    {productId:3,productName:"smartphone",price:52000},
    {productId:4,productName:"iphone",price:55000},
    {productId:5,productName:"laptop",price:65000},
]
// // low to high
// products.sort((a,b)=>{
//     return a.price-b.price
// });
// console.log(products);
// clone karne ke liye
// const lowToHigh=products.slice(0).sort((a,b)=>{
//     return a.price-b.price
// });
// console.log(lowToHigh);
// high to low
const highToLow=products.slice(0).sort((a,b)=>{
    return b.price-a.price
});
console.log(highToLow);