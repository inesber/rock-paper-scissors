let playerSelection;
let computerSelection;
let computerScore = 0;
let userScore = 0;

const rockPlay = document.getElementById('rock');
const paperPlay = document.getElementById('paper');
const scissorsPlay = document.getElementById('scissors');
const playerChoice = document.getElementById('user');
const computerChoice = document.getElementById('machine');
const result = document.getElementById('result');
const currentScore = document.getElementById('currentScore');
const endResult = document.getElementById('endResult');
const replay = document.getElementById('replay');

function getComputerChoice () {
    let choice = ['rock','paper','scissors'];
    let playChoice = choice[Math.floor(Math.random() * choice.length)];
    return playChoice;
}

function getPlayerChoice () {
    let choice = ['rock','paper','scissors'];
    let playChoice = choice[Math.floor(Math.random() * choice.length)];
    return playChoice;
}

rockPlay.addEventListener('click', () => roundProgress('rock'));
paperPlay.addEventListener('click', () => roundProgress('paper'));
scissorsPlay.addEventListener('click', () => roundProgress('scissors'));

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result.textContent = "It's a tie";
    } else {
        if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                result.textContent = "Paper beats rock";
                computerScore++;
            } else {
                result.textContent = "Rock beats scissors";
                userScore++;
            }

        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                result.textContent = "Paper beats rock";
                userScore++;
            } else {
                result.textContent = "Scissors beats paper";
                computerScore++;
            }
        }

        else if (playerSelection === "scissors") {
            if (computerSelection === "paper") {
                result.textContent = "Scissors beats paper";
                userScore++;
            } else {
                result.textContent = "Rock beats scissors";
                computerScore++;
            }
        }
    }
}

function updateChoice(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            playerChoice.innerHTML = "<img src='./images/rock.png'>";
            break;
        case 'paper':
            playerChoice.innerHTML = "<img src='./images/paper.png'>";
            break;
        case 'scissors':
            playerChoice.innerHTML = "<img src='./images/scissors.png'>";
            break;
    }

    switch (computerSelection) {
        case 'rock':
            computerChoice.innerHTML = "<img src='./images/rock.png'>";
            break;
        case 'paper':
            computerChoice.innerHTML = "<img src='./images/paper.png'>";
            break;
        case 'scissors':
            computerChoice.innerHTML = "<img src='./images/scissors.png'>";
            break;
    }
}

function updateScore() {
    currentScore.textContent = `${userScore} : ${computerScore}`;
}

function endOfGame() {
    if (userScore === 5 || computerScore === 5) {
        replay.style.display = "inline";
        if (userScore == 5) {
            currentScore.textContent = "You win!";
        } else (computerScore == 5) 
            currentScore.textContent = "You Lost";
        }
    }
    
replay.addEventListener('click', restartGame);

function restartGame() {
    replay.style.display = "none";
    computerScore = 0;
    userScore = 0;
    playerChoice.innerHTML = "";
    computerChoice.innerHTML = "";
    currentScore.textContent = `${userScore} : ${computerScore}`;
    result.textContent = "Get 5 points to win";
}

function roundProgress(playerSelection) {
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScore();
    updateChoice(playerSelection, computerSelection);
    endOfGame();
}