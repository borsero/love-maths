// Wait fot the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

// 1.Code to be executed when the page has finished loading.
// 2.Code to be executed when the user clicks a button.

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
* The main game "loop", called when the script is first loaded
*  and after the user's answer has been processed
*/
function runGame() {
    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 24) + 1;
    let num2 = Math.floor(Math.random() * 24) + 1;
}

// runGame();

function checkAnswer() {

}

function calculareCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubstractQuestion() {

}

function displayMultiplyQuestion() {
    
}