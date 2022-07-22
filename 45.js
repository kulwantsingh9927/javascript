// sets(it is iterable)
// store data
// sets its also have own method
//no index based access
//order is not guranteed
// unique item only (no duplicate allowed)

//  const numbers = new Set([1,2,3,4,5,6,7,8,9,10,11,12,13,17]);
//  console.log(numbers);

// const itadd(1);
//  numbers.add(5);
//  numbers.add(items);
//  if(numbers.haems=["item1","item2","item3"];
//  const numbers = new Set();
//  numbers.s(1)){
//     console.log("1 is present")
//  }else{
//     console.log("1 is not present")
//  }
//  console.log(numbers);
// real  life example
const myArray=[1,2,3,4,4,4,4,5,5,5,7,,7,8,];
const uniqueElement= new Set(myArray);
console.log(uniqueElement);
 console.log(myArray);
 let length=0;
 for(let element of uniqueElement){
length++;
 }
 console.log(length);