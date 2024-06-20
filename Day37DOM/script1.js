//prac
let newbutton = document.createElement('button');
newbutton.innerText = "Click Me";
newbutton.style.backgroundColor = "red";
newbutton.style.color = "white";


let body = document.querySelector("body");
body.prepend(newbutton);


//q2
let para = document.querySelector("p");
console.log(para)