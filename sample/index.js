


function ah(){
    let b = document.getElementById('my')
    b.innerHTML = `<div class="input-group mb-3 m-auto display-centre">
    <span class="input-group-text" id="basic-addon1">@</span>
    <input type="text" id='in' class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    <div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
    </div>
  </nav>
</div>
    `
}

function ah2(){
    let b = document.getElementById('my')
    b.innerHTML = ``
    // adding more properties inside of our previously existing keyboard can result in our mainstream keyboard
}
function ah3(){
    let b = document.getElementById('container')
    let d = document.getElementById('in')
    let c = document.createElement('div')
    c.innerHTML = `<div class="alert alert-success" role="alert">${d.value}</div>`
    d.value=""
    b.appendChild(c)
    ah4()
}

function ah4(){
    let b = document.getElementById('container')
    b.innerHTML = ''
    b.innerHTML=`<div class="card" style="width: 18rem;">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary" onClick = "ah5()">Go somewhere</a>
                  </div>
                </div>`
    console.log(b)
}













// var e = 'Ahmad Hanan';
// function sum() {
//    let f = 'Masood Baig'
//     return function () {
//         return function () {
            
//             return function () {
                
//                 return function () {
//                     return function () {
                      
//                         return function () {
                            
//                             return console.log(e+f)
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// let a = sum()
// let b = a()
// let c = b()
// let d = c()
// let k = d()
// let l = k()
// let g = l()

//1 

// Destructure the given array and show the mother of both objects in cosole

const people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];

// Destructure the given object and rename the 'last name' as "Lname"and show it on colsole 

const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};



//Convert this code into  shorcut circuit technique

if (age > 18) {
  action = "Drive Car";
} else if(age<0) {
  action= "Can't Drive Car";
}else if(age<5){
  action= "Can't Drive Car";
}
else{
  action = "Drive Car";
}
console.log(action) //



//Write a class of 'Human' having constructor recieving properties 'color and height'  and a method of name 'walking'
//make a child class of Teacher with constructor, having method 'display' to display color and height of parent class in console




//Describe the error of this code

const p = new Person(); 

class Person {
  constructor(name) {
    this.name = name;
  } 
  ah(){
    console.log("Ahmad Hannan")
  }
}