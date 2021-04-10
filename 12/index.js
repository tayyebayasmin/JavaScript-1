// Range in switch cases

// var x = 10;


// switch (x) {
//     case (x < 5):
//         alert("less than five");
//         break;
//     case (x < 9):
//         alert("between 5 and 8");
//         break;
//     case (x < 12):
//         alert("between 9 and 11");
//         break;
//     default:
//         alert("none");
//         break;
// }


// For odd/even by icrement of 2

// for(i=1; i<=10; i=i+2){

//     console.log(i)

// }

// Set class and id attribute by set.attribute method

// var elem = document.createElement('h1')

// elem.setAttribute('id','ahmad')
// elem.setAttribute('class','ahmadClass')

// console.log(elem)



// Set multiple attributes  to  some object node at once

//set multiple attributes  to  some object node

// The Object.assign() method copies all  own properties from one
// or more source objects to a target object.
// It returns the target object.

// for example

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// // console.log(target);
// // // expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget);
// // expected output: Object { a: 1, b: 4, c: 5 }



// var elem = document.createElement('img')
// // console.log( elem)

// Object.assign(elem, {
//   className: 'my-image-class',
//   src: 'https://dummyimage.com/320x240/ccc/fff.jpg',
//   height: 120, // pixels
//   id:'ahmad111',
//   width: 160, // pixels
//   onclick: function () {
//     alert('Clicked!')
//   }
// })

// elem.setAttribute('id','ahmad')
// elem.setAttribute('class','ahmad')
// console.log(elem)

// document.body.appendChild(elem)


// ////Directly accessing our child node

// var list = document.getElementById("parent");
// console.log(list.childNodes)

// list.removeChild(list.childNodes[1]);

// console.log(list.childNodes)


///2nd code as a example
// const lis = document.querySelectorAll('li')
// const list = document.querySelector('ul')
// console.log(lis)
// // lis[2].remove()
// list.removeChild(lis[2])
// console.log(list)('

///Replacing Child Node

// var node = document.querySelectorAll('li')
// console.log(node)

// var newNode = document.createElement('li')
// newNode.innerText = 'Hannan'
// document.getElementById('parent').replaceChild(newNode, node[5])



////Events

// let hit = document.querySelector('#btn')
// console.log(hit)
// hit.addEventListener('click', function(){
//     alert('I am Clicked')
// })



let hit = document.querySelector('#btn')
// console.log(hit)
hit.addEventListener('click', mabtoor)
function mabtoor(){
    console.log('Welcome Mabtoor')
}
hit.removeEventListener('click', mabtoor)

// let inputF = document.getElementById('inputField')
// let btn = document.getElementById('btn')
// console.log(btn)

// btn.addEventListener('click', function(){
//     alert(inputF.value)
// })