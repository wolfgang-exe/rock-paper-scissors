const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const playerChoiceElement = document.getElementById('player-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const resultElement = document.getElementById('result');
const gameArea = document.getElementById('game-area');
const newGameArea = document.getElementById('new-game-area');
const choice = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

// Initialize game
window.onload = getPlayerChoice();

// Returns a random string of rock paper or scissors
function getComputerChoice()
{
    return choice[Math.floor(Math.random() * 3)];
}

// Respond to rock, paper, or scissors beign clicked
function getPlayerChoice()
{
    rockButton.addEventListener('click', (e) => {
        return playRound(e.target.innerText);
    })
    paperButton.addEventListener('click', (e) => {
        return playRound(e.target.innerText);
    })
    scissorsButton.addEventListener('click', (e) => {
        return playRound(e.target.innerText);
    })
}


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

    // check for winner at player or computer score equals 5
    playGame(playerScore, computerScore);
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

// First score to five wins
function playGame(playerScore, computerScore)
{
    if (playerScore == 5 || computerScore == 5)
        declareWinner();
}

// Display winner and show results
function declareWinner()
{
    // determine winner
    let winner;
    if (playerScore > computerScore)
        winner = "Player"
    else
        winner = "Computer"

    // hide game area and show winner
    gameArea.style.display = 'none';
    newGameArea.innerHTML = `
        <h1>${winner} Wins!</h1>
        <p>Player Score - ${playerScore}</p>
        <p>Computer Score - ${computerScore}</p>
        <button id="play-again"> Play Again? </button>
    `;
    
    // reset score
    playerScore = 0;
    computerScore = 0;

    // Update html page if player wants to play again
    const playAgain = document.getElementById('play-again');
    playAgain.addEventListener('click', () => {

        // remove new game area
        newGameArea.innerHTML = ``;

        // reset and show game area
        gameArea.style.display = 'block'
        resetGameArea();
    })
}

// Set game area to inital state
function resetGameArea()
{
    playerChoiceElement.innerHTML = 'Player Choice';
    computerChoiceElement.innerHTML = 'Computer Choice';
    resultElement.innerHTML = 'Rock, Paper, Scissors';
    playerScoreElement.innerHTML = 'Player Score - 0';
    computerScoreElement.innerHTML = 'Computer Score - 0';
}
