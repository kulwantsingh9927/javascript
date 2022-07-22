// FIND METHOD
//ishe method me lenth finfd karega agar pehle 5 digit baala aayega to vo berna ushke baad bala
// const myArray=["cat","dog","hello","pooja","arachana"];
// function isLength5(string){
//     return string.length===5;
// }
// const ans=myArray.find(isLength5);
// console.log(ans);
// ANOTHER EXAMPLE AND ANOTHER METHOD
const users=[
    {userId:1,userName:"kulwant", userAge:22},
    {userId:2,userName:"pooja", userAge:28},
    {userId:3,userName:"archana", userAge:21},
    {userId:4,userName:"sneha", userAge:12},
]
const myUser = users.find((user)=>user.userId===4);
console.log(myUser);