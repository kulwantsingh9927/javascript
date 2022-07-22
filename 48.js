// OPTIONAL CHAINING
const user={
    firstName:"harshit",
    address:{houseNumber:'2586'}
}
console.log(user.address.houseNumber);
console.log(user.firstName);
console.log(user.address);
console.log(user.address.houseNumber);
// agar hum forth line ko hide kar de to errer ayega but ager hum question mark lagayege to error nai ayega
//console.log(user?.address?.houseNumber);