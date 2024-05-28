let h2 = document.querySelector("h2");

console.dir(h2.innerText);

h2.innerText = h2.innerText + " from New Class student"  //contatenate the two stiring

let divs = document.querySelectorAll(".box");

divs[0].innerText = "Volume1"
divs[1].innerText = "Volume1"
divs[2].innerText = "Volume1"

let idx = 1;
for (div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}