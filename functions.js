function add (num1, num2){
    const sum = num1 + num2;

    console.log({console: sum});
    return { return: sum};
}
console.log(add(2,3));
add(4,5);
// when you return its stored in memeory; so you just need to log
// call back function is a function passed as an argument to another function


// Function expressions
const subtract = function (num1, num2){
    console.log( num1 - num2);
};
subtract(20 ,10);
// same   (normal)
// function subtract (num1, num2){
//     console.log(num1 - num2)
// }
// subtract(20, 10)

// Arrow functions

const multiply = (num1, num2) => console.log(num1*num2);
multiply(5,6);


// IIFEs(Immediately invoked function expressions)
(function(){
    console.log('Hello');
})();

// hoisting ---call before you declare
// const greet = function () {
//     console.log('Hello there');
// }