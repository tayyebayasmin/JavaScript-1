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


///22 May

///example 


// const target = {
//     a:1,
//     b:2
// }

// const source = {
//     b:4,
//     c:5
// }

// const source2 = {
//     c:6,
//     d:7,
//     b:2

// }

// console.log( target)
// console.log(source)

// console.log(source2)
// console.log("------------------------")

// const returnTarget = Object.assign(target , source, source2)

// console.log(target)

// console.log(source)

// console.log(source2)

// console.log(returnTarget)


///            ----------------------------

//example

// let obj1 = {
//         name :'abc',
//         age :56
// }


// let obj2 = {
//         name :'abcd',
//         age :565,
//         clothes:{
//                 shirt:"red",
//                 niker: 'white'
//         }
// }

// let obj3 = Object.assign({},obj2);

// obj1.age = 21;

// // obj1.clothes.shirt = "black"

// console.log(obj1)
// console.log(obj2)
// console.log(obj3)


//---------------------------------------------

/// spread Operator: unpacks the collected elements into a single element
// application : to copy an object 
//represented by ...

//example


// const source = {
//     b:4,
//     c:5
// }

// let obj = {...source}

// console.log(source)

// console.log(obj)


// obj.name = 'xyz'

// console.log(source)

// console.log(obj)


//----------------------------



//example

// merges two object by using spread operator

// let obj1 = {
//         name :'abc',
//         age :56
// }


// let obj2 = {
//         name :'abcd',
//         age :56,
//         clothes:{
//                 shirt:"red",
//                 niker: 'white'
//         }
// }

// let obj3 = {...obj1, ...obj2}

// console.log(obj1)
// console.log(obj2)
// console.log(obj3)


//-----------------
//Example

// let a ="Ahmad"
// let b = "Hannan"
// let c = "Masood "
// let d = "Baig"


// let obj = {
//       aa : a,
//       bb : b,
//       cc : c,
//       dd : d  
// }
// console.log(obj)


//------------
//example

// objects literals Shorthand

// let a ="Ahmad"
// let b = "Hannan"
// let c = "Masood "
// let d = "Baig"

// let f = function(){
//         console.log('I am function')
// }

// let obj = {
//         a,
//         b,
//         c,
//         d,f
// }

// obj.f()

//---------------------
//Object.keys()// return keys of object
//Example


// let objf = {
//     a: 1,
//     b:2,
//     name : 'Ali',
//     age : 20,
//     adress : 'abc',
// }

// console.log(Object.keys(objf))


//---------------
//Example
// Object.values()
//return array of values
// let objf = {
//     a: 1,
//     b:2,
//     name : 'Ali',
//     age : 20,
//     adress : 'abc',
// }

// console.log(Object.values(objf))




//---------------
//Example
//.hasOwnProperty()
//return true or false


// let objf = {
//     a: 1,
//     b:2,
//     name : 'Ali',
//     age : 20,
//     adress : 'abc',
// }

// console.log(objf.hasOwnProperty('class'))//false
// console.log(objf.hasOwnProperty('age'))//ture


//------------------

// let o = new Boolean(true)

// console.log(o)