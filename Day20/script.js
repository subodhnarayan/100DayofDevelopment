// DOM:- Document Object Model

//console.log("Subodh");


//window object:global object and created by our browser

//window.console.log("hello2");

//console.log(document.body.childNodes[1]);

let heading = document.getElementById("division");  //getting from id
console.log(heading)



let headings = document.getElementsByClassName("heading");   // getting from class
//console.dir(headings)
console.log(headings)


let head = document.getElementsByTagName("p");   //getting from tagname
console.log(head)


let elemet = document.querySelector("p"); //first element
console.dir(elemet)


let elemets = document.querySelectorAll("p"); //first element
console.dir(elemets)


let elem = document.querySelector(".heading"); //from class
console.dir(elem)

let el = document.querySelector("#myid");




//DOM tree
// three node

// -text node
// -comment node
// -element node

