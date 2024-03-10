function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomCalc = Math.floor(Math.random() * choices.length);
    return choices[randomCalc];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // Convert player's choice to lowercase for consistency
    computerSelection = computerSelection.toLowerCase(); // Convert computer's choice to lowercase for consistency
    
    if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
        return "Invalid choice. Please choose 'rock', 'paper', or 'scissors'.";
    }

    if (playerSelection === computerSelection) {
        return "Tie";
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return "Player wins";
    }
    else {
        return "Computer wins";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
const result = playRound(playerSelection, computerSelection);
/* console.log("Player chooses: " + playerSelection);
console.log("Computer chooses: " + computerSelection);
console.log(playRound(playerSelection, computerSelection)); */

/* function playGame(playRound) {
    for (let i = 1; i <= 5; i++) { // Change the loop condition to iterate 5 times
        const playerSelection = "rock"; // You might want to change this if you want player input
        const computerSelection = getComputerChoice();
        console.log("Round " + i + " Player chooses: " + playerSelection);
        console.log("Round " + i + " Computer chooses: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("\n");
    }
}

playGame(playRound); */

function handleButtonClick(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    const resultContainer = document.getElementById("result-container");
    resultContainer.textContent = "Player chooses: " + playerSelection + ". Computer chooses: " + computerSelection + ". " + result;
}

const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        const playerSelection = this.textContent; // get the text content of the clicked button
        handleButtonClick(playerSelection);
    });
});


