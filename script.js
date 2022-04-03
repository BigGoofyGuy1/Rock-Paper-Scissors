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
    } else {
        console.log("Invalid selection. Please close and try again.")
    }
}



function playRound() {

    computerPlay();
    playerInput();

    console.log("Computer choice: " + compChoice);
    console.log("Your choice: " + playerChoice);

    compChoice = compChoice.toLowerCase();
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice == compChoice) {
        console.log("It's a tie! Please play again!");
    }

    if (playerChoice == 'rock') {
        if (compChoice == 'paper') {
            console.log("Rock Covers Paper! You win!");
        } else if (compChoice == 'scissors') {
            console.log("Rock breaks Scissors! You win!");
        }
    }

    if (playerChoice == 'paper') {
        if (compChoice == 'rock') {
            console.log("Rock Covers Paper! You lose!")
        } else if (compChoice == 'scissors') {
            console.log("Scissors cut Paper! You lose!")
        }
    }

    if (playerChoice == 'scissors') {
        if (compChoice == 'rock') {
            consol.log("Rock breaks Scissors! You lose!")
        } else if (compChoice == 'paper') {
            console.log("Scissors cut Paper! You win!")
        }
    }

}

function game() {
    const roundsToPlay = parseInt(prompt ("How many rounds would you like to play?"))

    console.log("Rounds to play: " + roundsToPlay)

    for (let i = 0; i < roundsToPlay; i++) {
        playRound();
    }
}

game();