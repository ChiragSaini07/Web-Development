let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userDisplay = document.querySelector("#user-score");
const compDisplay = document.querySelector("#comp-score");

const genComputerChoice=()=>{
    const options = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        msg.innerText = `You Win! (${userChoice} beats ${compChoice})`;
        msg.style.backgroundColor = "green";
        userDisplay.innerText = userScore;
    }
    else{
        compScore++;
        msg.innerText = `You Loose;b (${compChoice} beats ${userChoice})`;
        msg.style.backgroundColor = "red";
        compDisplay.innerText = compScore;
    }
}
const playGame = (userChoice)=>{
    const compChoice = genComputerChoice();
    if(compChoice === userChoice){
        msg.innerText = "Game was Draw, Play Again!"; 
        msg.style.backgroundColor = "rgb(104, 104, 219)";
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = (compChoice === "scissors") ? true : false;
        }
        else if(userChoice === "paper"){
            userWin = (compChoice === "rock") ? true : false;
        }
        else{
            userWin = (compChoice === "paper") ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    })
})