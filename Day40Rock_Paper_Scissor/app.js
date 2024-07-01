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
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        console.log("You Win");
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("You Lose");
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You Lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    console.log("User choice =", userchoice);

    // Generate computer choice
    const compchoice = genCompChoice();
    console.log("Computer choice =", compchoice);

    if (userchoice === compchoice) {
        drawGame();
    } else {
        let userWin = false;
        if (userchoice === "rock" && compchoice === "scissors") {
            userWin = true;
        } else if (userchoice === "paper" && compchoice === "rock") {
            userWin = true;
        } else if (userchoice === "scissors" && compchoice === "paper") {
            userWin = true;
        }
        showWinner(userWin, userchoice, compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
