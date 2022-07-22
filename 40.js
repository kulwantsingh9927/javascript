// EVERY METHOd
//  const numbers=[2,4,6,8,10,12];

//  const ans=numbers.every((number)=>number%2===0);

// call function--->true/false(boolean)


 //every method---->true/false


//  console.log(ans);
// real stick example
const userCart=[
    {productId:1,productName:"mobile",price:12000},
    {productId:2,productName:"laptop",price:27000},
    {productId:3,productName:"tablet",price:146000},
]
const ans=userCart.every((cartItem)=>cartItem.price<30000);
console.log(ans);

