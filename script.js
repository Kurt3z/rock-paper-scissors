function getPlayerChoice() {
    const choice = prompt('Choose Rock/Paper/Scissors: ').toLowerCase();
    return choice;
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

function game() {
    for (let i = 1; i <= 5; i++) {
        const playerChoice = getPlayerChoice();
        if (validateUserInput(playerChoice)) {
            const computerChoice = getComputerChoice();
            console.log(
                `Player Choose: ${capitalizeFirstLetter(playerChoice)} | Computer Choose: ${capitalizeFirstLetter(
                    computerChoice
                )}`
            );
            console.log(playGameRound(playerChoice, computerChoice));
        } else {
            console.log("I'm sorry! You didn't choose a valid option... Game can't continue. Bye!");
            return;
        }
    }
}

game();
