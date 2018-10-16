import java.util.Scanner;
public class Madlibs {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner userInput = new Scanner(System.in);
		String adjective = getUserInput("Enter an adjective: ", userInput);
        String noun = getUserInput("Enter a noun: ", userInput);
        String animal = getUserInput("Enter an animal: ", userInput);
        String sound = getUserInput("Enter a sound: ", userInput);
		intro();
		printMadLib(adjective, noun, animal, sound);
		userInput.close();
	}
	public static void intro() {
		System.out.println("Welcome to Madlibs!");
	}
	public static void printMadLib(String adjective, String noun, String animal, String noise) {
        System.out.println(adjective + " Macdonald had a " + noun + ", E-I-E-I-O");
        System.out.println("and on that " + noun + " he had a/an " + animal + ", E-I-E-I-O");
        System.out.println("with a/an  " + noise + " " + noise + "  here");
        System.out.println("and a/an " + noise + " " + noise + " there,");
        System.out.println("here a/an " + noise + " , there a/an " + noise + ",");
        System.out.println("everywhere a/an  " + noise + " " + noise + ",");
        System.out.println(adjective + " Macdonald had a " + noun + ", E-I-E-I-O.");
	}
	public static String getUserInput(String message, Scanner userInput) {
		System.out.print(message + " ");
		return userInput.nextLine();
	}
}
