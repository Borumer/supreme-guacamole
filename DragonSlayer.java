import java.util.Random;
public class DragonSlayer {

 public static void main(String[] args) {
  // TODO Auto-generated method stub
	 Random generator = new Random();
int maxStrengths = 30 + 1;
  int playersStrength = generator.nextInt(maxStrengths);
  int DragonsHP = generator.nextInt(maxStrengths);
  boolean hasSword = generator.nextBoolean();
  String loseMessage = "Oh no! The dragon defeated you!";
  String winMessage = "You defeated the dragon";
  System.out.println("Player's Strength: " + playersStrength + "\nDragons HP: " + DragonsHP + "\nPlayer has the sword: " + hasSword);
  if(playersStrength == DragonsHP) {
   if (hasSword) {
    System.out.println("You're not strong enough to defeat the dragon alone \nHowever, you remember your magic sword...");
    playersStrength = playersStrength + 40;
   } else {
    System.out.println("You can't defeat the dragon with your bare hands. Unfortunately, you don't have your magic sword. \nYou try fighting, but you gradually lose stamina and get very tired.");
    playersStrength = playersStrength - 10;   

   }
  }
  if (playersStrength > DragonsHP) {
	   System.out.println(winMessage);
	  } else if (playersStrength < DragonsHP) {
	   System.out.println(loseMessage);
	  } 
 }
 
}