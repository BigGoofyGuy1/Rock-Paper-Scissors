var compChoice;
var playerChoice;
var winner;
let final;
let roundsPlayed = 0
let playerWins = 0
let compWins = 0
let tieCount = 0


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
    
    return compChoice
}

function playRound(playerChoice, compChoice) {

    compChoice = computerPlay();

    playerChoice = playerChoice.toLowerCase();
    compChoice = compChoice.toLowerCase();
    

    if (playerChoice == compChoice) {
        
        winner = 'tie'
    }

    if (playerChoice == 'rock') {
        if (compChoice == 'paper') {
            
            winner = 'computer'
        } else if (compChoice == 'scissors') {
            
            winner = 'player'
        }
    }

    if (playerChoice == 'paper') {
        if (compChoice == 'rock') {
            
            winner = 'player'
        } else if (compChoice == 'scissors') {

            winner = 'computer'
        }
    }

    if (playerChoice == 'scissors') {
        if (compChoice == 'rock') {
            
            winner = 'computer'
        } else if (compChoice == 'paper') {
            
            winner = 'player'
        }
    }
    
    score(winner)
}

function score() {
    
    if (winner == 'player') {
        playerWins = playerWins +1
    } else if ( winner == 'computer') {
        compWins = compWins +1
    } else {
        tieCount = tieCount +1
    }   
}

function getScore() {
    playerScore.textContent = playerWins
    player.appendChild(playerScore)
    
    compScore.textContent = compWins
    comp.appendChild(compScore)

    tieScore.textContent = tieCount
    tie.appendChild(tieScore)

    if(playerWins === 5 || compWins === 5) {
        document.getElementById('buttons').style.display = 'none'
        

        if(playerWins > compWins) {
            const p1Wins = document.createElement('img')
            p1Wins.src = '/home/biggoofyguy/Desktop/repos/Rock-Paper-Scissors/images/p1win.png'
            holder.appendChild(p1Wins)
        } else {
            const p2Wins = document.createElement('img')
            p2Wins.src = '/home/biggoofyguy/Desktop/repos/Rock-Paper-Scissors/images/p2win.png'
            holder.appendChild(p2Wins)
        }
    }
    
    
}

document.getElementById("Rock").addEventListener("click", function() {
    playRound('Rock', compChoice),
    getScore();
})
document.getElementById("Paper").addEventListener("click", function() {
    playRound('Paper', compChoice),
    getScore();
})
document.getElementById("Scissors").addEventListener("click", function() {
    playRound('Scissors', compChoice),
    getScore();
})


const holder = document.querySelector('#holder');

const player = document.createElement('div')
player.classList = 'scoreBoard'
player.textContent = ('Player: ')
player.style.fontSize = '32px'

const playerScore = document.createElement('div')
playerScore.classList = 'playerScore'

const comp = document.createElement('div')
comp.classList = 'scoreBoard'
comp.textContent = ('Comp: ')
comp.style.fontSize = '32px'

const compScore = document.createElement('div')
compScore.classList = 'compScore'

const tie = document.createElement('div')
tie.classList = 'scoreBoard'
tie.textContent = ('Ties: ')
tie.style.fontSize = '32px'

const tieScore = document.createElement('div')
tieScore.classList = 'tieScore'




holder.appendChild(player)
holder.appendChild(comp)
holder.appendChild(tie)
