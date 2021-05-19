///////Lexical sope

//Example 1:


// function x() {
//     /*
//     Variable 'a' is only available to function 'x' and function 'y'.
//     In other words the area defined by 'x' is the lexical scope of
//     variable 'a'
//     */
//     var a = "I am a";

//     function y() {
//         var b = 'hannan'
//         console.log( a )

//     }
//     y();
//     console.log(b)

// }
// // outputs 'I am a'

// x();

//Example 2:

// function x() {

//     var k = "I am a";

//     function y() {
//          /*
//          If a nested routine declares an item with the same name,
//          the outer item is not available in the nested routine.
//          */
//         var b = 'I am inner a variable of innner function';
//         console.log( a )
//     }
//     y();

// }
// // outputs 'I am inner a'
// x();


// const a = [1,0,3,44,5]
// a.push(11);
// console.log(a)

// ********Hoisting**********
// Examples 1

// function catName(name) {
//     console.log("My cat's name is " + name);
//   }
  
//   catName("Tiger");
  
  /*
  The result of the code above is: "My cat's name is Tiger"
  */
// ******************

// Examples 2


// console.log(num); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage 
// var num; // declaration
// num = 6; // initialization

// Examples 3

// console.log(num); // throws ReferenceError exception 
// num = 6; // initialization

// Examples 5


// Only y is hoisted

// x = 1; // Initialize x, and if not already declared, declare it - but no hoisting as there is no var in the statement.
// console.log(x + " " + y); // '1 undefined'
// //This prints value of y as undefined as JavaScript only hoists declarations 
// var y = 2; // Declare and Initialize y

// x = 5;

// console.log(x + " " + y)

// var y ; //1 error 2 undefine




//global Case

// a = 'Cran'; //Initialize a
// b = 'berry'; //Initialize b
// console.log(a + " " + b); // 'Cranberry'




//------------------DOM---------------
console.log(document)

// Examples 1

// const a = document.querySelector('p')
// console.log(a)

// const a = document.querySelectorAll('p')

// console.log(a[2])

 console.log(document.childNodes[1])