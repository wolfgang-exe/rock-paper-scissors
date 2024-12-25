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
const choice = ["🪨", "📄", "✄"];
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
        return playRound("🪨");
    })
    paperButton.addEventListener('click', (e) => {
        return playRound("📄");
    })
    scissorsButton.addEventListener('click', (e) => {
        return playRound("✄");
    })
}


// Play a round and deterime a winner or tie
function playRound(playerChoice)
{
    let computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        updateScore("", playerChoice, computerChoice);
    }
    else if (playerChoice === "🪨" && computerChoice === "✄")
    {
        playerScore++;
        updateScore("Player Wins", playerChoice, computerChoice);
    }
    else if (playerChoice === "✄" && computerChoice === "📄")
    {
        playerScore++;
        updateScore("Player Wins", playerChoice, computerChoice);
    }

    else if (playerChoice === "📄" && computerChoice === "🪨")
    {
        playerScore++;
        updateScore("Player Wins", playerChoice, computerChoice);
    }
    else 
    {
        computerScore++;
        updateScore("Computer Wins", playerChoice, computerChoice);
    }

    // check for winner at player or computer score equals 5
    playGame(playerScore, computerScore);
}   

// Update html page to show score and result
function updateScore(result, playerChoice, computerChoice)
{
    playerChoiceElement.innerHTML = `You Picked ${playerChoice}`
    computerChoiceElement.innerHTML = `CPU Picked ${computerChoice}`
    resultElement.innerHTML = result;
    
    if (result === "Computer Wins")
    {
        playerScoreElement.innerHTML = `Player Score - ${playerScore}`;
        computerScoreElement.innerHTML = `CPU Score - ${computerScore}`;
        document.body.style.backgroundColor = '#ffb9ca';
    }
    else if (result === "Player Wins")
    {
        playerScoreElement.innerHTML = `Player Score - ${playerScore}`;
        computerScoreElement.innerHTML = `CPU Score - ${computerScore}`;
        document.body.style.backgroundColor = '#a4fe9b';
    }
    else 
    {
        document.body.style.backgroundColor = 'white';
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
        <p>CPU Score - ${computerScore}</p>
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
        gameArea.style.display = 'flex';
        resetGameArea();
    })
}

// Set game area to inital state
function resetGameArea()
{
    playerChoiceElement.innerHTML = '';
    computerChoiceElement.innerHTML = '';
    resultElement.innerHTML = '';
    playerScoreElement.innerHTML = 'Player Score - 0';
    computerScoreElement.innerHTML = 'CPU Score - 0';
    document.body.style.backgroundColor = 'white';
}
