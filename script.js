const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const playerChoiceElement = document.getElementById('player-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const resultElement = document.getElementById('result');
const choice = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;


// Returns a random string of rock paper or scissors
function getComputerChoice()
{
    return choice[Math.floor(Math.random() * 3)];
}

// Respond to rock, paper, or scissors beign clicked
rockButton.addEventListener('click', (e) => {
    return playRound(e.target.innerText);
})
paperButton.addEventListener('click', (e) => {
    return playRound(e.target.innerText);
})
scissorsButton.addEventListener('click', (e) => {
    return playRound(e.target.innerText);
})

// Play a round and deterime a winner or tie
function playRound(playerChoice)
{
    let computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        updateScore("Tie", playerChoice, computerChoice);
    }
    else if (playerChoice === "Rock" && computerChoice === "Scissors")
    {
        playerScore++;
        updateScore("Player Wins", playerChoice, computerChoice);
    }
    else if (playerChoice === "Scissors" && computerChoice === "Paper")
    {
        playerScore++;
        updateScore("Player Wins", playerChoice, computerChoice);
    }

    else if (playerChoice === "Paper" && computerChoice === "Rock")
    {
        playerScore++;
        updateScore("Player Wins", playerChoice, computerChoice);
    }
    else 
    {
        computerScore++
        updateScore("Computer Wins", playerChoice, computerChoice);
    }
}   

// Update html page to show score and result
function updateScore(result, playerChoice, computerChoice)
{
    playerChoiceElement.innerHTML = `Player Choice - ${playerChoice}`
    computerChoiceElement.innerHTML = `Computer Choice - ${computerChoice}`
    resultElement.innerHTML = result;

    if (result === "Computer Wins" || result === "Player Wins")
    {
        playerScoreElement.innerHTML = `Player Score - ${playerScore}`;
        computerScoreElement.innerHTML = `Computer Score - ${computerScore}`;
    }
}
