function app() {
    const myFunc = () => {
        console.log("hello my function");

    }
    const addtwo = (num1, num2) => {
        return num1 + num2;
    }
    const mul = (num1, num2) => num1 * num2;
    console.log("inside app");
    myFunc();
    console.log(addtwo(5, 8));
    console.log(mul(15, 55));

}
app();