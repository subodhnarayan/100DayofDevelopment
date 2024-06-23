let box = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-contaioner");
let msg = document.querySelector("#msg")
let turnO = true;    //player x or player o
let count = 0;
// let arr = ["apple", "banana"];

// let winarr = [["apple", "litchi"], ["potato", "magno"], ["s", "N"]];

let winarr = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

box.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        let winn = checkwinner();
        if (count === 9 && !winn) {
            showdraw();
        }
    });
});

const disableBoxes = () => {
    for (let bo of box) {
        bo.disabled = true;
    }
}

const enableBoxes = () => {
    for (let bo of box) {
        bo.disabled = false;
        bo.innerText = "";
    }
}

const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const showdraw = () => {
    msg.innerText = "No Winner. Game Draw";
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkwinner = () => {
    for (let pattern of winarr) {
        let pos1va = box[pattern[0]].innerText;
        let pos2va = box[pattern[1]].innerText;
        let pos3va = box[pattern[2]].innerText;

        if (pos1va != "" && pos2va != "" && pos3va != "") {
            if (pos1va === pos2va && pos2va === pos3va) {
                console.log("winner", pos1va);
                showwinner(pos1va);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);



