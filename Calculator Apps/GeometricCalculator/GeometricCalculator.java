import java.util.Scanner;

public class GeometricCalculator {

 public static void main(String[] args) {
  Scanner userInput = new Scanner(System.in); 
  CallbackImpl callback = new CallbackImpl();
  int width;
  int height;
  int area;
  double sqrLength;
  double sqrArea;
  int side1;
  int side3;
  int triArea;
  double radius;
  double circleArea;
  String shapeChoice = "";
  String continueChoice = "Yes";

  do {
    System.out.println("Type in a shape you would like to find the area of.");
    System.out.println("Options are rectangle, circle, square, triangle.");
    shapeChoice = userInput.nextLine();
   if (shapeChoice.equalsIgnoreCase("rectangle")) {
    System.out.println("Type in a width for your rectangle");
    width = userInput.nextInt();
    System.out.println("Type in a height for your rectangle");
    height = userInput.nextInt();
    area = width * height;
    System.out.println("The area is " + area);
   }
   if (shapeChoice.equalsIgnoreCase("square")) {
    System.out.println("Type in the length of each side of your square.");
    sqrLength = userInput.nextDouble();
    sqrArea = Math.pow(sqrLength, 2.0);
    System.out.println("The area is " + sqrArea);
   }
   if (shapeChoice.equalsIgnoreCase("triangle")) {
    System.out.println("Enter the length of the base side of your triangle");
    side1 = userInput.nextInt();
    System.out.println("Enter the height of your triangle");
    side3 = userInput.nextInt();
    triArea = side1 * side3 * 1 / 2;
    System.out.println("The area is " + triArea);
   }
   if (shapeChoice.equalsIgnoreCase("circle")) {
    System.out.println("Enter the radius of your circle");
    radius = userInput.nextDouble();
    circleArea = Math.pow(radius, 2.0) * Math.PI; // Finds area of circle = pi * r^2
    circleArea = Math.round(circleArea);
    System.out.println("The area is approximately " + circleArea);   
   }
    System.out.println("Would you like to continue?");
    userInput.nextLine(); // Skips this because it is after nextInt
    continueChoice = userInput.nextLine(); // Inputs users 'yes' or 'no' answer
  }
   while (continueChoice.equals("Yes"));
  if(continueChoice != "Yes") {
   userInput.close();
   System.exit(0);
  }
   
 }
}