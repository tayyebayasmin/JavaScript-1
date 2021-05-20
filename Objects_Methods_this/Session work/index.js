// // accessing method and property
// const person = {
//     name: 'John',
//     greet: function() { console.log('hello'); }
// };

// // accessing property
// person.name; // John

// // accessing method
// person.greet()
// console.log(person.greet) ;

// creating an object
let student = { };

// adding a property
student.name = 'John';
student.fname = 'harryy'

// adding a method
student.greet = function() {
    console.log('hello' + this);
}

// accessing a method
// student.greet(); // hello

// var ah = 12;

// console.log('hello' + this);
// console.log(document)
// console.log(window.location)
// console.log(window.Document)


// window.open()

// var a = 12;


///////////// Today //////////

// function ah(e){
//     // console.log(e)
//     // console.log(this.a)
//     // console.log(window)
// }






// call back fucntion


// first function
// function f1(second){// recieving ,,,kch bi name
//     console.log("kch bi uni me a kr jo krna")

//     second() // calling func 2
    
// }

// //sencond fucntion
// function f2 (){
//     console.log('2nd fucntion')
// }

// //calling function 1
// f1(f2) // passing f2 in arguments of f1






// var kch = 123;

// console.log(window)


// console.log(this.document) //returing global / by default object




/// this keyword

// var myVar = 100;

// function SomeFunction() {

//     function WhoIsThis() {
//         var myVar = 200;

//          alert("myVar = " + myVar);
//         alert("this.myVar = " + this.myVar);
//     }

//     WhoIsThis(); 
// }

// //first method
// SomeFunction();

// //second method
// window.SomeFunction();

///2nd example

// var myVar = 100;

// function WhoIsThis() {

//     this.myVar = 200;

// }


// var obj1 = new WhoIsThis();

// var obj2 = new WhoIsThis();

// obj2.myVar = 300;

// alert(obj1.myVar);

// alert(obj2.myVar); 

//------------------------------------------

            // 3rd example

// var myVar = 100;

// function WhoIsThis() {

//     this.myVar = 200;
    
//     this.display = function(){ // function expression
//         var myVar = 300;
        
//        console.log("myVar = " + myVar);
//        console.log("this.myVar = " + this.myVar);  

//     };
//     console.log("bahir wala" + this.myVar); 
// }
// var obj = new WhoIsThis();
//  var obj2 = new WhoIsThis();
//  var obj3 = new WhoIsThis();
//  var obj24 = new WhoIsThis();
// whoIsThis()
// obj.display(); 



// 4th

// myVar = 400;

// var obj = { 

//     myVar : 300, 

//     whoIsThis: function(){
//                 var myVar = 200;

//                 alert(myVar); 
//                 alert(this.myVar); 
//         }
// };

// alert(myVar); 
// alert(window.myVar); // this or windows
// obj.whoIsThis(); 

// function WhoIsThis() {
//     console.log('Hi');
// }
// //we three methods to invoke our func

// WhoIsThis();
// WhoIsThis.call();
// WhoIsThis.apply();



// var myVar = 100;

// function WhoIsThis() {
  
//     alert(this.myVar);
// }

// var obj1 = { myVar : 200  };//////////////////@@@@@@@

// var obj2 = { myVar : 300 };

// WhoIsThis(obj1); // 'this' will point to window object

// WhoIsThis.call(obj1); // 'this' will point to obj1

// WhoIsThis.apply(obj2); // 'this' will point to obj2


//          ------------------------

// example 

// var myVar = 100;

// function WhoIsThis() {

//     console.log(this.myVar);
// }

// var obj1 = { myVar : 200 , whoIsThis: WhoIsThis };//////////////////@@@@@@@


// WhoIsThis(); // OR

// obj1.whoIsThis.call(window); // 'this' will point to window object

// obj1.whoIsThis.call(obj1);



//bind


// var myVar = 100;
    
// function SomeFunction(callback)
// {
//     var myVar = 200;
//     alert(myVar)
//     alert("this refers to " + this + ", myVar = " + this.myVar);
//      callback();
// };

// var obj = {
//             myVar: 300,
//             WhoIsThis : function() {
//                 alert("this refers to " + this + ", myVar = " + this.myVar);
//             }
//     };

// SomeFunction(obj.WhoIsThis); 
// SomeFunction(obj.WhoIsThis.bind(obj)); 

// var a = 3;


// function ah(e){
//     console.log(e)
//     console.log(e.parentNode)
//     console.log(this.a)
//     console.log(window)
// }





///  20 May



// let newobject = new Object();
// console.log(newobject)


let newo = {}
console.log(newo)

newo.name = "chair"

console.log(newo.name)
console.log(newo['name'])


newo['height'] = '2 ft'

console.log(newo)

delete newo.name;

console.log(newo)