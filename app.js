
const choices = document.querySelectorAll(".choice");
const playerChoiceDisplay = document.querySelector("#player-choice span");
const computerChoiceDisplay = document.querySelector("#computer-choice span");
const winnerDisplay = document.querySelector("#winner span");

const computerChooser = () => {
    const options = ["rock", "paper", "scissors"];
    const n = Math.floor(Math.random() * options.length);
    return options[n];
};

const determineWinner = (p, c) => {
    if (p === c) return "It's a tie!";
    else if (
        (p === 'rock' && c === 'scissors') ||
        (p === 'paper' && c === 'rock') ||
        (p === 'scissors' && c === 'paper')
    ) {
        return "Player wins!";
    } else {
        return "Computer wins!";
    }
}

// Event listener for each button using forEach
choices.forEach(n => {
    n.addEventListener('click', () => {
        const playerChoice = n.id;
        const computerChoice = computerChooser();
        const winner = determineWinner(playerChoice, computerChoice);

        // Display choices and winner
        playerChoiceDisplay.textContent = playerChoice;
        computerChoiceDisplay.textContent = computerChoice;
        winnerDisplay.textContent = winner;
    })
})


