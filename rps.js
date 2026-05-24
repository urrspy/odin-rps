let humanScore = 0;
let computerScore = 0;

let computerChoice = ""

function getComputerChoice() {
	let rng = Math.floor(Math.random() * 10);

	if ( rng < 3 ) {
		return computerChoice = "rock";
	} else if ( rng < 6 ) {
		return computerChoice = "paper";
	} else {
		return computerChoice = "scissors";
	}
}
	
let humanChoice = "";

function getHumanChoice() {
	return humanChoice = prompt("rock, paper, or scissors?");
}

function playRound(computerSelection, humanSelection) {
	computerSelection = computerSelection.toLowerCase();
	humanSelection = humanSelection.toLowerCase();

	if ( humanSelection == "rock" && computerSelection == "paper" || 
			humanSelection == "paper" && computerSelection == "scissors" || 
			humanSelection == "scissors" && computerSelection == "rock" 
		) {

		let loseMessage = `loser! ${computerSelection} beats ${humanSelection} :D`;
		console.log(loseMessage);

		return computerScore + 1;
	} else if ( humanSelection == computerSelection ) {
		console.log("it's a tie!");
		return;
	} else {
		let winMessage = `winner! ${humanSelection} beats ${computerSelection}`

		return humanScore + 1;
	}
}

console.log(getComputerChoice());
getHumanChoice();
console.log(humanChoice);