let imgs = document.querySelectorAll('img');
let playerScore = 0;
let computerScore = 0;
document.getElementById("playerScore").innerHTML = playerScore;
document.getElementById("computerScore").innerHTML = computerScore;

imgs.forEach((img) => {
    img.addEventListener("click", clickPicture);
})

function clickPicture(img) {
    playRound(img.target.id, getComputerChoice());
    checkScore(playerScore, computerScore);
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
        default:
            return 'What happened'
    }
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection;
    if(playerChoice == computerSelection) {
        document.getElementById('result').innerHTML = 'Draw';
    } else if(playerChoice == 'rock' && computerSelection == 'scissors') {
        playerScore = playerScore + 1;
        document.getElementById('result').innerHTML = 'You win, Rock beats Scissors';
    } else if(playerChoice == 'rock' && computerSelection == 'paper') {
        computerScore = computerScore + 1;
        document.getElementById('result').innerHTML = 'You lose, Paper beats Rock';
    } else if(playerChoice == 'scissors' && computerSelection == 'rock') {
        computerScore = computerScore + 1;
        document.getElementById('result').innerHTML = 'You lose, Rock beats Scissors';
    } else if(playerChoice == 'scissors' && computerSelection == 'paper') {
        playerScore = playerScore + 1;
        document.getElementById('result').innerHTML = 'You win, Scissors beat Paper';
    }  else if(playerChoice == 'paper' && computerSelection == 'rock') {
        playerScore = playerScore + 1;
        document.getElementById('result').innerHTML = 'You win, Paper beats Rock';
    } else if(playerChoice == 'paper' && computerSelection == 'scissors') {
        computerScore = computerScore + 1;
        document.getElementById('result').innerHTML = 'You lose, Scissors beat Paper';
    }
}

function checkScore(playerScore, computerScore) {
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;

    if(playerScore == 5 || computerScore == 5) {
        imgs.forEach((img) => {
            img.removeEventListener("click",clickPicture);
        })
    }
    if(playerScore == 5) {
        document.getElementById("winner").innerHTML = "You won!";
        document.getElementById("winner").style.color = "green";
    } else if(computerScore == 5) {
        document.getElementById("winner").innerHTML = "You lost!";
        document.getElementById("winner").style.color = "red";
    } else {
        document.getElementById("winner").innerHTML = "";
    }
}
document.querySelector("button").addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("winner").innerHTML = ""
    document.getElementById("result").innerHTML = ""
    imgs.forEach((img) => {
        img.addEventListener("click", clickPicture);
    })
    checkScore(playerScore,computerScore)
})
