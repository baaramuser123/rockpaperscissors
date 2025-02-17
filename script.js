console.log('Hello World!');
alert("You are about to play 5 rapid rounds of Rock Paper Scissors against an AI. You will see the results in the Developer Console.")
playGame();

// getComputerChoice function requirement: randomly return one of the following string values: “rock”, “paper” or “scissors”.
// pseudocode:
// 1. a variable named "weaponNumber" will be initialized
// 2. weaponNumber will be set to a random number multiplied by 3 and then given a floor, plus 1, to give a value 1, 2, or 3.
// 3. switch statement will be called to evaluate based on weaponNumber's value.
// 4. for value 1, return rock, for value 2, return paper, and for value 3, return scissors

function getComputerChoice () {
    let weaponNumber;
    weaponNumber = Math.round(Math.random() *2) + 1;
    // console.log(weaponNumber);
    switch (weaponNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors"
    }
}

// getHumanChoice function requirement: use "prompt" and return r/p/s string
// pseduocode:
// 1. function will be called in console to start Game
// 2. Prompt will appear to ask for numbers 1-3
// 3. prompt number will be translated in switch to r/p/s.

function getHumanChoice() {
    let humanInput = prompt("Please Enter a Number between 1-3. 1 for rock, 2 for paper, 3 for scissors.");
    switch (+humanInput) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors"
    }
}

// Pseudocode
// Expected Output: Play 5 Games and display the score at the end
// Required Input: score is already tracked, as are individual games. Require that input is newly collected each game, and score is retained.


function playGame() {

    // Create two new variables named humanScore and computerScore in the global scope.
    // Initialize those variables with the value of 0.
    let humanScore = 0;
    let computerScore = 0;


    for(let i =1; i < 6; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log('Final score is Human: ' + humanScore + ' Computer: ' + computerScore);
 



    // Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

    // Create a new function named playRound.
    // Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
    // Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
    // Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
    // Increment the humanScore or computerScore variable based on the round winner.

    function playRound(humanChoice, computerChoice) {
        let result;
        console.log('Human plays ' + humanChoice);
        console.log('Computer plays ' + computerChoice);
        if(humanChoice=='scissors'){
            if(computerChoice=='rock'){
                result='Computer Wins';
                computerScore++;
            } else if(computerChoice=='paper'){
                result='You Win';
                humanScore++;
            } else {
                result ='It\'s a draw';
            }
        } else if(humanChoice=='rock'){
            if(computerChoice=='paper'){
                result='Computer Wins';
                computerScore++;
            } else if(computerChoice=='scissors'){
                result='You Win';
                humanScore++;
            } else {
                result ='It\'s a draw';
            }
        } else if(humanChoice=='paper'){
            if(computerChoice=='scissors'){
                result='Computer Wins';
                computerScore++;
            } else if(computerChoice=='rock'){
                result='You Win';
                humanScore++;
            } else {
                result ='It\'s a draw';
            }
        } else{
            result = "Nothing Entered, please try again."
        }
        console.log(result);
        console.log('Current score is Human: ' + humanScore + ' Computer: ' + computerScore);
  

    }

}
  
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// console.log('Human plays ' + humanSelection);
// console.log('Computer plays ' + computerSelection);

// playRound(humanSelection, computerSelection);

  