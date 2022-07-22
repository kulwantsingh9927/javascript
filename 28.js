// block scope vs function scope



// let and scope are block scope
//var is function scope

// {
//     let firstname = "kulwant singh";

// }
// console.log(firstname);
// agar kisi block me let and cost bne kr koi program bnaya to vahe  lock 
// me hi axis ho g block se baha nai.
// {
//     let firstname = "kulwant singh";
//     console.log(firstname);
// }

// {
//     const firstname = "kulwant singh"
//     console.log(firstname);
// }
// but var use kar ke hum kahi pr bhi use kar shakte hai block ke ander bhi or bahar bhi
//{
//  var firstname = "pooja pandit jadhav";
//console.log(firstname);
//}
//console.log(firstname);
// function myapp() {
//     if (true) {
//         let firstname = "pavanjadhav";
//         console.log(firstname);
//     }
//console.log(firstname);
// }
// myapp();
// but agar hum var likhte hai to kahi pr bhi print kara shakte hai
function myapp() {
    if (true) {
        var firstname = "pavanjadhav";
        console.log(firstname);
    }
    console.log(firstname);
}
myapp();