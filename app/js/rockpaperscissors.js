////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var getPlayerMove = function(move) {
    // Write an expression that operates on a variable  called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
};

var getComputerMove = function(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
};

var getWinner = function(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove===computerMove){
        winner="tie";
    }
    else if ((playerMove==="rock"&&computerMove==="scissors")||(playerMove==="scissors"&&computerMove==="paper")||(playerMove==="paper"&&computerMove==="rock")) {
        winner="player";
    }
    else {
        winner="computer";
    }
    return winner;
};

var playToFive = function() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
   // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
        while (playerWins <5 || computerWins < 5) {
            var playerMove = getPlayerMove();
            var computerMove = getComputerMove();
            var winner = getWinner (playerMove,computerMove);
            if (winner==="tie"){
                console.log ("You tied! You both played "+playerMove+" Are you thinking in bytes!?");
            }
            else if (winner==="computer"){
                console.log ("Bad luck! You played "+playerMove+" but lost to the dastardly digital "+ computerMove+"!");
                computerWins +=1;
            }
            else {
                console.log ("Well done! Your "+playerMove+" defeated the computer's "+computerMove+"!");
                playerWins +=1;
            }
        console.log ("The score is currently "+playerWins+" to you and "+computerWins+" to the computer.");
        }
    if (playerWins === 5){
        console.log ("You are victorious! 5 wins in total!");
    }
    else {
        console.log ("Sad times. You were beaten by a random number machine.");
    }
    return [playerWins, computerWins];
};
playToFive ();
