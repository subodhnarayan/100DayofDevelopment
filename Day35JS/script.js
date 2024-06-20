// let h2 = document.querySelector("h2");

// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from Apna College Students";
// console.dir(h2.innerText);

let divs = document.querySelectorAll(".box");
//console.log(divs[0]);

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 2";

//using loop for do this 
let idx = 1;
for (div of divs) {
    //console.log(div.innerText);
    div.innerText = `new unique value ${idx}`;
    idx++;
}