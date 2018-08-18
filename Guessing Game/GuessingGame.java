import java.util.Scanner;
import java.util.Random;

public class GuessingGame {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner userInput = new Scanner(System.in);
		int userNum;
		Random num = new Random();
		int comNum = num.nextInt(20);
		System.out.println("Welcome to the guessing name!\nIn this game you will guess a number in the given range until you type\nwhat the computer is thinking.");
		System.out.println("Type in an integer between 0 and 20");
		userNum = userInput.nextInt();
		while(userNum != comNum) {	
			if(userNum > comNum) {
				printText("Too high! Try again");
				userNum = userInput.nextInt();
			}
			else if(userNum < comNum) {
				printText("Too low. Try Again");
				userNum = userInput.nextInt();
			}
		}
		if(userNum == comNum) {
			printText("You win!");
			System.exit(0);
		}
		userInput.close();
	}
	public static void printText(String message) {
		System.out.println(message);
	}
}
