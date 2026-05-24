let humanChoice = "";
let humanScore = 0;
let computerScore = 0;

console.log(getComputerChoice());
getHumanChoice();
console.log(humanChoice);

function getComputerChoice() {
	let rng = Math.floor(Math.random() * 10);
	let choice = ""

	if ( rng < 3 ) {
		return choice = "rock";
	} else if ( rng < 6 ) {
		return choice = "paper";
	} else {
		return choice = "scissors";
	}
}

function getHumanChoice() {
	return humanChoice = prompt("rock, paper, or scissors?");
}