let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randind = Math.floor(Math.random() * 3);
    return options[randind];
}

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game waS Draw.Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        console.log("you Win");
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        console.log("You Lose");
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You Lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    console.log("user choice = ", userchoice);

    //generate computer choice=>modular  
    const compchoice = genCompChoice();
    console.log("computer choice=", compchoice);

    if (userchoice === compchoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userWin = compchoice === "scissors" ? false : true;
        }
        else {
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compchoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked", choiceid);
        playgame(userchoice);
    });
});