let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () =>{
    //rock, paper, scissors to be choosen randomly
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = (userChoice, compChoice) => {
    // console.log ("game was draw");
    msg.innerText = ` Same choices. so the game was Draw. Play again`;
    msg.style.backgroundColor = "#081b31";
    

};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log ("you win!");
        msg.innerText = `You Win..! as your choice ${userChoice} beats computer choice ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("you lose");
        msg.innerText = `You lose! as computer choice ${compChoice} beats your choice ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};
const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    //Generate computer choice --> modular way of creating
    const compChoice = genCompChoice();
    // console.log("computer choice = ", compChoice);
    
    if (userChoice === compChoice) {
        //Draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // scissors, rock
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});