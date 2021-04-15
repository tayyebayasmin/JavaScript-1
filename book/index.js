var n = document.createElement('li');

var nt = document.createTextNode("abc")

n.appendChild(nt)

var p = document.getElementsByTagName('ul')[0]

console.log(p)

p.appendChild(n)
