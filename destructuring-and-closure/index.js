
// var e = 10;
// function sum(a){
//     let be = 7;
//   console.log(a)
//   return function(b){
//     console.log(b)
//     return function(c){
//       console.log(c)
//       // outer functions scope
//       return function(d){
//         console.log(d)
//         console.log("----------")
//         console.log(a)
//         console.log(b)
//         console.log(c)
//         console.log(d)
//         console.log(be)

//         // local scope
//         return a + b + c + d + e;
//       }
//     }
//   }
// }

// console.log(sum(1)(2)(3)(4)); // log 20


////-------------------
//example 


// var e = 10;
// function sum(a){
//   return function sum2(b){
//     return function sum3(c){
//       // outer functions scope
//       return function sum4(d){
//         // local scope
//         return a + b + c + d + e;
//       }
//     }
//   }
// }

// var s = sum(1);
// console.log(s)

// var s1 = s(2);
// console.log(s1)

// var s2 = s1(3);
// console.log(s2)

// var s3 = s2(4);
// console.log(s3) //log 20


// function ah(){
//     let a = 34;
// }

// console.log(ah)




// ///-----------
// ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});



// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // {c: 30, d: 40}



// const x = [1, 2, 3, 4, 5];
// x[3]
// const [y, z,v,m] = x;
// console.log(y); // 1
// console.log(z); // 2
// console.log(m)

// let a ;
// console.log(a)

// let a, b;

// [a=5, b=7] = [1];
// console.log(a); // 1
// console.log(b); // 7




//--------------------


// function f() {
//     return [1, 2, 3];
//   }
  
// //   const [a, , b] = f();
// //   console.log(a); // 1
// //   console.log(b); // 3
  
//   const [a,...c] = f();
//   console.log(c); // 1

//----------------


// const o = {p: 42, q: true, ali:'m. ali', sherdil:"sherdil asif"};

// const {p: foo, sherdil: asif} = o;

// console.log(foo); // 42
// console.log(asif); // 



//-------------


// function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {  //destructure + default value
//     console.log(size, coords, radius);
//     // do some chart drawing
//   }
  
//   drawChart({
//     coords: {x: 18, y: 30},
//     radius: 30
//   });



//-------------


// function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} ) {  //destructure + default value
//     console.log(size, coords, radius);
//     // do some chart drawing
//   }
  
//   drawChart();


//---------------


// const people = [
//     {
//       name: 'Mike Smith',
//       family: {
//         mother: 'Jane Smith',
//         father: 'Harry Smith',
//         sister: 'Samantha Smith'
//       },
//       age: 35
//     },
//     {
//       name: 'Tom Jones',
//       family: {
//         mother: 'Norah Jones',
//         father: 'Richard Jones',
//         brother: 'Howard Jones'
//       },
//       age: 25
//     }
//   ];
  
//   for (const {name: n, family: {father: f}} of people) {
//     console.log('Name: ' + n + ', Father: ' + f);
//   }




//------------




let key = 'z';

let {[key]: foo} = {z: 'bar'};

console.log(foo); // "bar"
console.log(key)