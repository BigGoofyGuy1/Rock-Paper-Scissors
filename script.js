var compChoice;

function computerPlay() {
    
    for (let i = 0; i < 10; i++) {
        const min = 1;
        const max = 3;
        const range = max - min +1;
        var rand = parseInt((Math.random() * range) + min);
        
    }
    
    if (rand == 1) 
    {
        compChoice = "Rock"
    } else if (rand == 2) 
    {
        compChoice = "Paper"
    } else 
    {
        compChoice = "Scissors"
    }
    
}


var playerChoice;

function playerInput() {
    let userInput = prompt("1. Rock \n2. Paper\n3. Scissors\nPlease select a number: ");

    if (userInput == '1') {
        playerChoice = "Rock";
    } else if (userInput == '2') {
        playerChoice = "Paper"; 
    } else if (userInput == '3') {
        playerChoice = "Scissors"; 
    } 
}

let winner = '';

function playRound() {

    console.clear();
    computerPlay();
    playerInput();

    console.log("Computer choice: " + compChoice);
    console.log("Your choice: " + playerChoice);

    compChoice = compChoice.toLowerCase();
    playerChoice = playerChoice.toLowerCase();
    

    if (playerChoice == compChoice) {
        console.log("It's a tie! Please play again!");
        winner = 'tie'
    }

    if (playerChoice == 'rock') {
        if (compChoice == 'paper') {
            console.log("Paper Covers Rock! You lose!");
            winner = 'computer'
        } else if (compChoice == 'scissors') {
            console.log("Rock breaks Scissors! You win!");
            winner = 'player'
        }
    }

    if (playerChoice == 'paper') {
        if (compChoice == 'rock') {
            console.log("Paper Covers Rock! You win!")
            winner = 'player'
        } else if (compChoice == 'scissors') {
            console.log("Scissors cut Paper! You lose!")
            winner = 'computer'
        }
    }

    if (playerChoice == 'scissors') {
        if (compChoice == 'rock') {
            console.log("Rock breaks Scissors! You lose!")
            winner = 'computer'
        } else if (compChoice == 'paper') {
            console.log("Scissors cut Paper! You win!")
            winner = 'player'
        }
    }

    return winner;
    

}

function game() {
    const roundsToPlay = parseInt(prompt ("How many rounds would you like to play?"))

    console.log("Rounds to play: " + roundsToPlay)

    let playerWins = 0
    let compWins = 0
    let tieCount = 0
    for (let i = 0; i < roundsToPlay; i++) {
        playRound();

        if (winner == 'player') {
            playerWins = playerWins +1
        } else if ( winner == 'computer') {
            compWins = compWins +1
        } else {
            tieCount = tieCount +1
        }
        console.log("Player Wins: " + playerWins)
        console.log("Computer Wins: " + compWins)
        console.log("Ties : " + tieCount)
        
    }
}

game();