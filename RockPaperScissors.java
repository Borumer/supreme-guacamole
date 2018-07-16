import java.util.Random;
import java.util.Scanner;
public class RockPaperScissors {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner userInput = new Scanner(System. in );
		Random generator = new Random();
		int computerIndex = generator.nextInt(2);
		String computerChoices[] = {
			"Rock",
			"Paper",
			"Scissors"
		};
		int winnerIndex;
		String result;
		System.out.println("Choose rock, paper, or scissors");
		int choiceIndex;
		String choice = userInput.nextLine();
		switch (choice.toLowerCase()) {
		case "rock":
			choiceIndex = 0;
			break;
		case "paper":
			choiceIndex = 1;
			break;
		case "scissors":
			choiceIndex = 2;
			break;
		default:
			System.out.println("Error Message: I didn't get that. That is an invalid choice. \n Choose Rock, Paper, or Scissors");
			choiceIndex = -1;
		}
			
			String computerChoice = computerChoices[computerIndex];
			String comWinTxt = "The Computer Wins. :(";

			System.out.println("Computer's choice: " + computerChoice);
			if (choiceIndex == computerIndex) {
				winnerIndex = 3; // Tie
				result = "It's a tie!";
			}
			else if (choiceIndex == 2 && computerIndex == 0) { // User does Scissors and Computer does Rock
				winnerIndex = computerIndex; // Computer wins
				result = comWinTxt;
			}
			else if (choiceIndex == 0 && computerIndex == 2) { // User does Rock and Computer does Scissors
				winnerIndex = choiceIndex; // User wins
				result = "You win";
			}
			else if (choiceIndex >= 0 && computerIndex >= 0) { // All other understandable combinations
				winnerIndex = Math.max(computerIndex, choiceIndex); // Higher index wins
				result = (winnerIndex == computerIndex) ? comWinTxt: "You Win!";
			}
			else {
				result = null;
			}
			System.out.println(result);
			userInput.close();
	}
}