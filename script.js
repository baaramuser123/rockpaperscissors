
// playGame();
document.addEventListener('DOMContentLoaded', () => {
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");
    const buttons = document.querySelector(".buttons");
    
    console.log(buttons);
    console.log(rock);

// buttons.addEventListener("click", (e) => console.log(e.target.id));

buttons.addEventListener("click", (e) => playRound(e.target.id, getComputerChoice()))

function getComputerChoice () {
    let weaponNumber;
    weaponNumber = Math.floor(Math.random() *3) + 1;
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

// function playGame() {

    // Create two new variables named humanScore and computerScore in the global scope.
    // Initialize those variables with the value of 0.
    let humanScore = 0;
    let computerScore = 0;
    let roundCount = 1;


    // for(let i =1; i < 6; i++){
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
    //     playRound(humanSelection, computerSelection);
    // }
    // console.log('Final score is Human: ' + humanScore + ' Computer: ' + computerScore);
 



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

// }
});