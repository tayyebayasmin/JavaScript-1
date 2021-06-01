
// let name = 'Ahmad'

// function check(){
//     return name ? 'Hannan' : 'Masood' 
// }

// console(check())



// var myName = true;
// var myAge = true;
// var message = myName ? (myAge ? "I'll like to know your age and name" : "I'll stick with just your name") : "Oh, I'll call you JavaScript then, cus you fine and mysterious"
// console.log(message) // I'll like to know your age and name


// var email = 0;
// var phoneNumber = true;
// var message = email ? 'Thanks for reaching out to us' : phoneNumber ? 'Thanks Ahmad' : 'Please fill in your email or phone-number'
// console.log(message) //Thanks for reaching out to us





// var x;
// var y = 'xyz';
// var z = 'jkl';
// var name = x || y || z;
// console.log(name);
// // Gurseerat


// var age = 25;
// // // Using if condition
// // if (age > 18) {
// //   action = "Drive Car";
// // } else {
// //   action= "Can't Drive Car";
// // }
// // console.log(action) // Drive Car


// // Short-circuiting
// greeting = (age < 18 && "Drive Car") || "Can't Drive Car";
// console.log(greeting) // Drive Car



// var testFunction = function(){
//     console.log("ahmad");
//     return false;
//     }
//     var testFunction2 = function(){
//     console.log("hannan");
//     return true;
//     }
    
    // var result = testFunction() || testFunction2();
    // //  prints true in console and never executes the testFunction2()
    // // result -> true
    
    // result = testFunction2() || testFunction();

    //i first value true ,,, then dont care about sencond

    //and 

    //first value true, then execute sencond  ==> || 





    //--------------------------------



   //------------------------- 30 May  ---------------------

/// Husna


//    let c = true;

//    let f = ''

//    c ? (console.log("computer is on"), 
   
//         f = prompt('which file yyou want to open?'),
//         alert(`your file is in prcossing ${f}`)
//             ): alert("plzz turn on ur comp")

   


//////////// Arrow Func


// let a = () => 23

// console.log(a())




// let a = () => (1111111111111111 +
//     576
//     )

// console.log(a())



// let a = () => {

    // let a = 'Ahmad'
    // let b = "Hannan"
    // let c = a + b
//     console.log(c)

//     return(c)
// }

// let complete_name = a();

// console.log(complete_name)

//---------------------------------


// let a = (a,b) => {

//     let c = a + b
//     console.log(c)

//     return(c)
// }

// let complete_name = a('Ahmad',"Hannan");

// console.log(complete_name)

//-------------------




// let arrowFunc = c => {

//     console.log(c)

//     return(c)
// }

// let a = 'Ahmad'
// let b = "Hannan"
// let c = a + b

// let complete_name = arrowFunc(c);




// let arrowFunc = (a,b) => a + b 

// let a = 'Ahmad'
// let b = "Hannan"

// let complete_name = arrowFunc(a,b);

// console.log(complete_name)


// let a = console.log("ahmad")

// console.log(a)


//-----------------------



// function User(first, last) {
//     this.firstName = first
//     this.lastName = last
//   }
  
  
//   var user1 = new User("Jon", "Snow")
//   console.log(user1)
//   var user2 = new User("Ned", "Stark")
//   console.log(user2)
//   var user3 = new User("Jo", "Sno")
//   console.log(user1)
//   var user4 = new User("N", "St")
//   console.log(user2)







//  age = 50

// function Person() {
//     this.name = 'Jack',
//     this.age = 25,
//     this.sayName = function () {

//         // this is accessible
//         console.log(this.age);

//         function innerFunc() {

//             // this refers to the global object
//             console.log(this.age);
//             console.log(this);
//         }

//         innerFunc();

//     }
// }

// let x = new Person();
// x.sayName();