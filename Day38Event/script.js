let bt1 = document.querySelector("#bt1");

bt1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
    // console.log("bt1.was clicked");
    // let a = 25;
    // a++;
    // console.log(a);
}


let box = document.querySelector("#box");
box.ondblclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
    //console.log("bt2.was double clicked");
}

// let bx = document.querySelector("#bt1");

// bx.addEventListener("click", (evt) => {
//     console.log("button1 was clicked");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// })


let bt2 = document.querySelector("#bt2");

bt2.addEventListener("click", () => {
    console.log("button 2 was clicked-handler1");
})

bt2.addEventListener("click", () => {
    console.log("button 2 was clicked-handler2");
})

const handler3 = () => {
    console.log("button 2 as clicked-handler3");
}   //making to remove the handler


bt2.addEventListener("click", () => {
    console.log("button 2 was clicked-handler4");
})

bt2.removeEventListener("click", handler3);


//prac

let mode = document.querySelector("#mode");
let currmode = "light";
mode.addEventListener("click", () => {
    //console.log("you are trying change mode");
    if (currmode === "light") {
        currmode = "dark";
        //document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    }
    else {
        currmode = "light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }

    console.log(currmode);
})
let col = "red";
let bx = document.querySelector("#bx");
bx.addEventListener("mouseover", () => {
    if (col === "red") {
        col = "blue";
        document.querySelector("body").classList.add("blue");
        document.querySelector("body").classList.remove("red");
    }
    else {
        col = "red";
        document.querySelector("body").classList.add("red");
        document.querySelector("body").classList.remove("blue");
    }
});

