// SOME METHOD
const numbers=[3,8,7,9];
// kya ek bhi number aisa hai jo even hai
// true
// const ans=numbers.some((number)=>number%2===0);
// console.log(ans);
// real stick example
const userCart=[
    {productId:1,productName:"mobile",price:12000},
    {productId:2,productName:"laptop",price:27000},
    {productId:3,productName:"tablet",price:146000},
    {productId:4,productName:"mackbook",price:246000},
]
const ans= userCart.some((cartItem)=>cartItem.price > 200000);
console.log(ans);