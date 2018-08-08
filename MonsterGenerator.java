import java.util.Random;
public class MonsterGenerator {
	public static void main(String[] args) {
		Random generator = new Random();
		String[] monsters = { "ghost", "goblin", "ghoul","troll"};
		String[] adjectives = { "swift", "fierce", "stealthy", "strong"};
		int monsterIndex = generator.nextInt(monsters.length);
		int adjectiveIndex = generator.nextInt(adjectives.length);
		String monster;
		String adjective;
		monsters[2] = "Golem";
	    System.out.println("There are " + monsters.length + " possible monsters.");
	    System.out.println("The last element is " + monsters[monsters.length-1]);
	    monster = monsters[monsterIndex];
	    adjective = adjectives[adjectiveIndex];
	    System.out.println("A " + adjective + " " + monster + " appeared.");
	}
}
