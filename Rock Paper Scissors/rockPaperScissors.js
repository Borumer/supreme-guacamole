String.prototype.toTitleCase = function() {
    const firstLetter = this.substring(0, 1).toUpperCase();
    const lowerCase = this.substring(1, this.length).toLowerCase();
    return firstLetter + lowerCase;
}

const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3); // Generates a random number from 0-3 exclusive
  switch (choice) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Scissors";
      break;
    case 2: 
      return "Paper";
      break;
  }
};

const getUserChoice = userInput => {
	userInput = userInput.toTitleCase();
	if (userInput === 'Rock' || userInput === 'Paper' || userInput === 'Scissors') {
		return userInput;
	} else {
    return "Error - Unknown";
	}
};
const determineWinner = function(userChoice, computerChoice) {
  const loseMessage = "You lost. The computer won. :(";
  const winMessage = "You win! :)";
  const scissors = "Scissors cuts up paper. "
  const paper = "Paper covers rock. ";
  const rock = "Rock destroys scissors. "
  
  if (userChoice === computerChoice) {
    return "Tie"; 
  }
  else if (userChoice === "Rock") {
    if (computerChoice === "Paper") {
      return paper + loseMessage;
    }
    else {
      return rock + winMessage;
    }
  }
  else if (userChoice === "Paper") {
    if (computerChoice === "Scissors") {
      return scissors + loseMessage;
    }
    else {
      return paper + winMessage;
    }
  }
  else if (userChoice === "Scissors") {
    if (computerChoice === "Rock") {
      return rock + loseMessage;
    }
    else {
      return scissors + winMessage;
    }
  }
  else if (userChoice === "Bomb") {
    return "Cheat Code: You beat computer.";
  }
  else {
    return "Error - User Choice not real";
  }
};

function playGame() {
  const userChoice = getUserChoice("Rock");
  const computerChoice = getComputerChoice();
  
  console.log(`Your Choice: ${userChoice}`);
  console.log(`Computer's Choice: ${computerChoice}`);
	console.log(determineWinner(userChoice, computerChoice) + "\n");
}

playGame();
playGame();
playGame();