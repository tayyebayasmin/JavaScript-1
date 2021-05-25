// // closure example

// function calculate(x) {
//     function multiply(y) {
//         return x * y;   //3*6 = 18
//     }
//     return multiply;
// }

// const multiply3 = calculate(3);
// const multiply4 = calculate(4);

// // console.log(multiply4); // returns calculate function definition
// console.log(multiply3()); // NaN

// console.log(multiply3(6)); // 18
// console.log(multiply4(2));


//Example

// var a = 0;

// function sum() {
//     function increaseSum() {

//         // the value of a is increased by 1
//         return a = a + 1;
//     }
//     return increaseSum;
// }

// const x = sum();
// console.log(x()); // 1
// console.log(x()); // 2
// console.log(x()); // 3
// a = a + 1;
// console.log(a); // 4

//---------------

//Example

// function sum() {
//     let a = 0;
//     function increaseSum() {

//         // the value of a is increased by 1
//         return a = a + 1;
//     }
//     return increaseSum;
// }

// let x = sum();

// let a = 5;
// console.log(x()); // 1
// console.log(x()); // 2
// console.log(a);console.log(a); // 5

// console.log(x()); //

// console.log(a);