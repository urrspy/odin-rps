console.log(getComputerChoice());

function getComputerChoice() {
	let rng = Math.floor(Math.random() * 10);
	console.log(rng);
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

}