import java.util.Random;
import java.util.Scanner;
public class Treasure {

	public static void main(String[] args) {
Random generator = new Random();
Scanner playerInput = new Scanner(System.in);
int gold = generator.nextInt(41) + 10; // finds random number between 10 and 50
System.out.println("You open a chest to find " + gold + " gold pieces!");
System.out.println("True or false - You will grab all the gold at once?");
boolean grabsAll = playerInput.nextBoolean();
if(grabsAll == true) {
	System.out.println("Oh no! You activated the trap!");
	gold = 0;
}
else {
	System.out.println("Well done. You cleverly took them one by one and the trap has not activated.");
}
System.out.println("You return to the pirate ship with " + Integer.toString(gold - 1) + " gold.");
playerInput.close();
	}

}