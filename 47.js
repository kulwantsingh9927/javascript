// CLONE USING OBJECT.ASSIGN

// MEMORY
const obj={
    key1:"value 1",
    key2:"value 2"
}
// const obj2=obj;// OR
// ANOTHER METHOD TO CLONING
const obj2=Object.assign({},obj);
obj.key3="value3";
console.log(obj);
console.log(obj2);