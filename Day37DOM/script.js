// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newclass"));   //Dom manuplation using attributes


//style in js

// let div = document.querySelector("div");

// div.style.backgroundColor = "green";
// div.style.color = "blue";
// div.style.visibility = "hidden";

// div.style.fontSize = "40px";  // we can change the style of css using javascript also

let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn)         //adding item in the page at last
//div.prepend(newBtn) //  adding the the first
div.before(newBtn);
div.after(newBtn);


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<b>Hi I am subodh </b>"

document.querySelector("body").prepend(newHeading)


let para = document.querySelector("p");
para.remove();
//newHeading.remove();


//hw study append child and remove child
