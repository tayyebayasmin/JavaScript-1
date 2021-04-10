// 5.	textContent

// const b = document.querySelector('h2')
// // a.textContent = 'Sherdil'
// console.log(b.textContent)

// 6.	Inner text

// const a = document.querySelector('h2')
// // a.innerText = 'Sherdil'
// console.log(a.innerText)

// 7.	Inner html

// const a = document.querySelector('h2')
// a.innerHTML = '<span style="color:pink">Hasnat</span>'

// 8.	li:nth-child / odd even

// document.querySelector('li').style.background = 'orange'
// document.querySelector('ul li').style.background = 'orange'

// document.querySelector('li:last-child').style.background = 'orange'
// document.querySelector('li:nth-child(3)').style.background = 'orange'
// document.querySelector('li:nth-child(odd)').style.background = 'orange'
// document.querySelector('li:nth-child(even)').style.background = 'orange'

// var node = document.getElementsByTagName('li')
// console.log(node)
// //even
// for(var i=0; i<node.length ; i++){

//     if((i+1)%2 == 0){
//         node[i].style.backgroundColor = 'red'
//     }

// }

//ODD
// for(var i=0; i<node.length ; i++){

//     if((i+1)%2 != 0){
//         node[i].style.backgroundColor = 'red'
//     }

// }



// 9.	create new node and append it.

// const newLi = document.createElement('li')
// // newLi.innerText = 'Ali'
// newLi.className = 'NewClass'
// // newLi.id = 'newId'
// newLi.setAttribute('title','Abc')
// newLi.appendChild(document.createTextNode('Ali'))
// var p = document.getElementById('parent')
// p.appendChild(newLi)
// console.log(p)

// 10.	Remove some old node

// const lis = document.querySelectorAll('li')
// const list = document.querySelector('ul')
// // lis[2].remove()
// list.removeChild(lis[4])
// console.log(list)








// 11.	Class list ,,add / remove

// var h = document.querySelector('h3')
// h.classList.add('sherdil')
// h.classList.remove('sherdil')
// console.log(h.classList)


// 12.	Attributes add/remove

// var a = document.createElement('a')

// a.setAttribute('href','htttp://google.com')
// a.textContent = 'ahmad'
// a.setAttribute('title', 'a-tag')
// a.removeAttribute('href')
// console.log(a)






