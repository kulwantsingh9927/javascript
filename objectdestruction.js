// const band = {
//     bandname: "chhadha band",
//     famoussong: "aye milan ki raat",
//     age: "25",
// };
// const bandname = band.bandname;
// const famoussong = band.famoussong;
// console.log(bandname, famoussong);
//object inside array
const users = [
    { userID: 64622, firstName: "kulwant", gender: " male" },
    { userID: 64623, firstName: "vipul", gender: "male" },
    { userID: 64624, firstName: "rajan", gender: "male" },
]
console.log(users);
for (let user of users) {
    console.log(user);
}