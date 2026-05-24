function getComputerChoice() {
	let rng = Math.floor(Math.random() * 3);

	if ( rng == 0 ) {
		return "rock";
	} else if ( rng == 1 ) {
		return "paper";
	} else {
		return "scissors";
	}
}

function getHumanChoice() {
	return prompt("rock, paper, or scissors?");
}

function playGame() {

	function playRound(computerSelection, humanSelection) {
		computerSelection = computerSelection.toLowerCase();
		humanSelection = humanSelection.toLowerCase();

		if ( humanSelection == "rock" && computerSelection == "paper" || 
				humanSelection == "paper" && computerSelection == "scissors" || 
				humanSelection == "scissors" && computerSelection == "rock" 
			) {

			let loseMessage = `loser! ${computerSelection} beats ${humanSelection}`;
			console.log(loseMessage);

			return computerScore++;
		} else if ( humanSelection === computerSelection ) {
			console.log("it's a tie!");
			return;
		} else {
			let winMessage = `winner! ${humanSelection} beats ${computerSelection}`;
			console.log(winMessage);

			return humanScore++;
		}
	}

	for ( i = 1; i <= 5 || computerScore == humanScore; i++) {
		playRound(getComputerChoice(), getHumanChoice());
		console.log(`computer: ${computerScore}, human: ${humanScore}`)
	}
}

let humanScore = 0;
let computerScore = 0;

playGame();

