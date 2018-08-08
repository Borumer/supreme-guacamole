import java.util.Random;
import java.util.concurrent.TimeUnit;
public class EndlessDungeon {
    public static void main(String[] args) throws InterruptedException {
        System.out.println("Welcome to the Endless Dungeon!");
        Random generator = new Random();
        int playerHealth, enemyHealth;
        int playerDamage, enemyDamage;
        int enemiesDefeated = 0;
        playerHealth = 100;
        enemyHealth = generator.nextInt(10) + 1;
        while(playerHealth > 0){
            if(enemyHealth <= 0){
                System.out.println("You have defeated the enemy! You kick down the door to the next \nroom and prepare yourself to fight the next enemy.");
                enemyHealth = generator.nextInt(10) + 1;
                enemiesDefeated++;
            }
            System.out.println("You have " + playerHealth + " health.");
            playerDamage = generator.nextInt(5) + 1;
            enemyDamage = generator.nextInt(3) + 1;
            playerHealth -= enemyDamage;
            enemyHealth -= playerDamage;
            System.out.println("You attack the enemy for " + playerDamage);
            System.out.println("The enemy attacks you for " + enemyDamage);
            waitTime(5);
        }
        System.out.println("Game Over! You defeated " + enemiesDefeated + " enemies");
         
    }
    public static void waitTime(int seconds) throws InterruptedException{
        TimeUnit.SECONDS.sleep(seconds);
    }
}