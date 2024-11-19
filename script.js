console.log('Hello World!');

// getComputerChoice function requirement: randomly return one of the following string values: “rock”, “paper” or “scissors”.
// pseudocode:
// 1. a variable named "weaponNumber" will be initialized
// 2. weaponNumber will be set to a random number multiplied by 3 and then given a floor, plus 1, to give a value 1, 2, or 3.
// 3. switch statement will be called to evaluate based on weaponNumber's value.
// 4. for value 1, return rock, for value 2, return paper, and for value 3, return scissors

function getComputerChoice () {
    let weaponNumber;
    weaponNumber = Math.floor(Math.random() *3) + 1;
    console.log(weaponNumber);
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