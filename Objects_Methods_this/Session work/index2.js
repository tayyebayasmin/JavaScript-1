// ///21 May 

// //example 

// let stu = {
//     name : 'Ali',
//     age : 20,
//     adress : 'abc',
//     skill : ['html', 'css', 'js', 'java'],
//     nesterdObj : {
//         name : 'Chota Ali',
//         age : 3
//     }
// }

// console.log(stu.name)

// console.log(stu.skill[2])

// console.log(stu.nesterdObj.name)

//---------------------

//example 


// let obj = {
//     a: 1,
//     b:2,
//     name : 'Ali',
//     age : 20,
//     adress : 'abc',
// }

// // obj = {}; //empty

// obj.name = ['Ali', 'Ali2']


// console.log(obj)


//------------------------------

// //example 


// let ah = 'ahmad'

// let ah2 = 'hannan'


// if(ah === ah2){
//     console.log('mubarak')
// }


// let ah = 'ahmad'

// let ah2 = 'ahmad'


// if(ah === ah2){
//     console.log('mubarak')
// }


//----------------------------

///example

// let O1 = {
//     name : 'ahmad',
//     age : 20
// }

// let O2 = {
//     name : 'ahmad',
//     age : 20
// }

// if(O1 === O2){
//     console.log('mubarak ho')
// }


        //-----------------


//example 


// let O1 = {
//     name : 'ahmad',
//     age : 20
// }

// let O2 = O1

// if(O1 === O2){
//     console.log('mubarak ho mmm')
// }

// console.log(O1)
// console.log(O2)

// O1.abc = 'xyz' 

// console.log(O1)
// console.log(O2)


        //----------------------


// example

//object.assign({}, source)
//object.assing(target , source)
//return source object ko taret obj me merge kr ke,,,,


// let O1 = {
//     name : 'ahmad1',
//     age : 201
// }

// let O2 = {
//     name : 'ahmad2',
//     age : 202
// }

// let obj = Object.assign({}, O2)

// console.log(O1)
// console.log(O2)



// console.log(obj)



// O2.mzid = 'xyz'

// console.log(O2)
// console.log(obj)


//      --------------------------



// example

// const target = {
//     a:1,
//     b:2
// }

// const source = {
//     b:4,
//     c:5
// }

// //source remains same
// // source merges into target obj, so value of target object becomes changed
// //returns targeted object with its new values (source merged values)




// const returnTarget = Object.assign(target , source)


// console.log(target)

// console.log(source)

// console.log(returnTarget)