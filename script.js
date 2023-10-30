const buttons = document.querySelectorAll('button');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const currentGame = document.querySelector('#current-game--result');
const winnerDisplay = document.querySelector('.display-winner');
let playerScore = 0;
let computerScore = 0;

buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        const playerChoice = e.target.getAttribute('id');
        const computerChoice = getComputerChoice();
        const gameResult = playGameRound(playerChoice, computerChoice);
        currentGame.textContent = gameResult;

        const userResult = checkIfUserWon(gameResult);

        if (gameResult.startsWith("It's a Draw!")) {
            return;
        } else {
            if (userResult) {
                playerScore += 1;
                playerScoreDisplay.textContent = playerScore;
            } else {
                computerScore += 1;
                computerScoreDisplay.textContent = computerScore;
            }
        }

        if (playerScore === 5) {
            winnerDisplay.textContent = 'You reached 5 wins. Congratulations! You are the winner!';
            setTimeout(() => resetGame(), 2000);
        } else if (computerScore === 5) {
            winnerDisplay.textContent = 'Computer reached 5 wins. You lost the game :(';
            setTimeout(() => resetGame(), 2000);
        }
    });
});

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    currentGame.textContent = '';
    playerScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';
}

function getComputerChoice() {
    // We will asume that: 1 = ROCK / 2 = PAPER / 3 = SCISSORS
    const choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playGameRound(playerChoice, computerChoice) {
    if (playerChoice === 'rock' && computerChoice === 'paper') {
        return `You Lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(playerChoice)}`;
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        return `You Lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(playerChoice)}`;
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        return `You Lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(playerChoice)}`;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return `You Win! ${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}`;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return `You Win! ${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}`;
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return `You Win! ${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}`;
    } else {
        return `It's a Draw! ${capitalizeFirstLetter(playerChoice)} evens ${capitalizeFirstLetter(computerChoice)}`;
    }
}

function validateUserInput(userInput) {
    // debugger;
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return true;
    } else {
        return false;
    }
}

function capitalizeFirstLetter(str) {
    str = str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function checkIfUserWon(gameResultStr) {
    if (gameResultStr.startsWith('You Win!')) {
        return true;
    } else {
        return false;
    }
}
