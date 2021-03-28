    // ___________________
    // |                   |
    // |                   |
    // |         *         |
    // |                   |
    // _____________________

 

// function first(){
//     var name = 'saleem';
//     var pwd = 1234;

//      var name2 = prompt("Enter your Name", 'abc' )
//     var count = 0;
    
//     for(var a = 0 ; a<3 ; a++){
//         count++;
//         if(name2==name){

//             var pwd2 = prompt("Enter Your Password" , 'xxxx')
//             if(pwd == Number(pwd2)){
//                 document.write("Congratulations you enterd in your account")
//                 break
//             }
//             else{
//                 alert('Sorry, you enter wrong password')
//             }
    
//         }
//         else{   
//             alert("You entered wrong Name")
//             break; 
//         }
       
//         if(count==3){
//             break;
//         }
//     }
    
// }
// first()


//loops example projects

// project 1 

// *
// **
// ***
// ****
// *****

// var a = parseInt(prompt('enter any number for loop')) 

// for(var i=1;i<=a;i++){
//     for(var j=0; j!=i; j++){
//         document.write('*')
//     }
//     document.write('<br/>')
// }

// project 2 
// var a = parseInt(prompt('enter any number for loop')) 
// for(var i=1;i<=a;i++){
    
//     for(var k=i; k>0; k--){
//         document.write(' ')
//     }
//     document.write('*')
//     for(var j=0; j!=i; j++){
//         document.write('*')
//     }
//     document.write('<br/>')
// }
// console.log('            ')
// console.log('*')


// var a = [2,34,'i','j','k',{a : 123,b:7} ]

// console.log(a.length)

// var i = [] 

// i[5] = 7;

// console.log(i[3])

//shift, unshift , pop, push

var a = []
a.push('abc')
a.push('xyz')
a.unshift('jkl')
a.pop()
a.shift()
console.log(a)