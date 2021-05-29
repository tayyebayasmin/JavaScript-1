
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



var testFunction = function(){
    console.log("ahmad");
    return false;
    }
    var testFunction2 = function(){
    console.log("hannan");
    return true;
    }
    
    // var result = testFunction() || testFunction2();
    // //  prints true in console and never executes the testFunction2()
    // // result -> true
    
    result = testFunction2() || testFunction();

    //i first value true ,,, then dont care about sencond

    //and 

    //first value true, then execute sencond  ==> || 