
// function mul(params) {
    
//     var num  = 3 * params //* or divide
//     return num
// }
// var a = mul(3)

// console.log(a)

// num1 = [1,2,3,4,5,6]

// num(num1)

// console.log(num1)


// function num(num1) {
    
//     num1[1] = 'ahm'
    
// }


// //without var accessing outside block scope

// ahm()
// var b = 10
// function ahm(params) {
//      a = 3;
// }

// console.log(a)

// console.log(b)

//with var keyword accessing outside block scope 
//we got an error at line 46

ahm()
var b = 10
function ahm(params) {
    var a = 3;
}

console.log(a)

console.log(b)