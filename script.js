const buttons = document.querySelectorAll('button.choice');
const restartButton = document.querySelector('#restartButton');
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener("click", playRound);
});

restartButton.addEventListener("click", resetScore);

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
        default:
            return 'What happened'
    }
}

function checkScore(playerScore, computerScore) {
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    if(playerScore == 5 || computerScore == 5) {
        restartButton.style.display = "inline";
        document.getElementById("result").style.display = "inline";
        document.getElementById("winner").style.display = "block";
        buttons.forEach(button => {
            button.disabled = true;
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
        restartButton.style.display = "none"
    }
}

function playRound() {
    let computerSelection = getComputerChoice();
    if(this.id == computerSelection) {
        document.getElementById('result').innerHTML = 'Draw';
    } else if(this.id == 'rock' && computerSelection == 'scissors') {
        playerScore = playerScore + 1;
        document.getElementById('result').innerHTML = 'You win, Rock beats Scissors';
    } else if(this.id == 'rock' && computerSelection == 'paper') {
        computerScore = computerScore + 1;
        document.getElementById('result').innerHTML = 'You lose, Paper beats Rock';
    } else if(this.id == 'scissors' && computerSelection == 'rock') {
        computerScore = computerScore + 1;
        document.getElementById('result').innerHTML = 'You lose, Rock beats Scissors';
    } else if(this.id == 'scissors' && computerSelection == 'paper') {
        playerScore = playerScore + 1;
        document.getElementById('result').innerHTML = 'You win, Scissors beat Paper';
    }  else if(this.id == 'paper' && computerSelection == 'rock') {
        playerScore = playerScore + 1;
        document.getElementById('result').innerHTML = 'You win, Paper beats Rock';
    } else if(this.id == 'paper' && computerSelection == 'scissors') {
        computerScore = computerScore + 1;
        document.getElementById('result').innerHTML = 'You lose, Scissors beat Paper';
    }
    checkScore(playerScore, computerScore);
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    
    buttons.forEach(button => {
        button.disabled = false;
    })
    document.getElementById("result").innerHTML = "";
    checkScore(playerScore, computerScore);
}