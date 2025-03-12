
document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelector(".buttons");
    const results = document.querySelector("#results");
    const score = document.querySelector("#score");
    let humanScore = 0;
    let computerScore = 0;
    let roundCount = 1;


    buttons.addEventListener("click", (e) => {
        if (e.target.id == 'start') {
            startGame();
        }
        else {
            playRound(e.target.id, getComputerChoice())
        }
    }
    )

    function startGame () {
        humanScore = 0;
        computerScore = 0;
        score.textContent = "";
        results.textContent = "";
        const startButton = document.querySelector('#start');
        const rockButton = document.createElement('button');
        const paperButton = document.createElement('button');
        const scissorsButton = document.createElement('button');
        rockButton.id = "rock";
        rockButton.textContent = "Rock";
        paperButton.id = "paper";
        paperButton.textContent = "Paper";
        scissorsButton.id = "scissors";
        scissorsButton.textContent = "Scissors";

        startButton.remove();
        buttons.appendChild(rockButton);
        buttons.appendChild(paperButton);
        buttons.appendChild(scissorsButton);

        console.log(document.querySelectorAll(".buttons button"));


    }

    function getComputerChoice () {
        let weaponNumber = Math.floor(Math.random() *3) + 1;
        switch (weaponNumber) {
            case 1:
                return "rock";
            case 2:
                return "paper";
            case 3:
                return "scissors"
        }
    }
    

    function playRound(humanChoice, computerChoice) {
        let result;
        console.log('You played ' + humanChoice);
        console.log('Computer played ' + computerChoice);
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

        // Display Results and Score
        results.innerText = 'You played ' + humanChoice + '\n' +
         'Computer played ' + computerChoice + '\n' + result;
        score.textContent = 'Current score is Human: ' + humanScore + ' Computer: ' + computerScore;
        
        if (humanScore == 5) {
            score.innerText += '\n YOU won the WHOLE GAME!';
            const buttonArray = document.querySelectorAll(".buttons button");
            buttonArray.forEach((element) => element.remove());
            const playAgainButton = document.createElement("button");
            playAgainButton.id = "start";
            playAgainButton.textContent = "Play Again?"
            buttons.appendChild(playAgainButton);

        }
        else if (computerScore == 5) {
            score.innerText += '\n The COMPUTER won the WHOLE GAME!';
            const buttonArray = document.querySelectorAll(".buttons button");
            buttonArray.forEach((element) => element.remove());
            const playAgainButton = document.createElement("button");
            playAgainButton.id = "start";
            playAgainButton.textContent = "Play Again?"
            buttons.appendChild(playAgainButton);
        }
    }

});