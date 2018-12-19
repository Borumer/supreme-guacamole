import java.util.ArrayList;

public class Operation {
  String operation;
  String operationSymbol;
  ArrayList<String> userInput = calculator.listName;
  
	public Operation(String op, String operSymbol) {
    operation = op;
    operationSymbol = operSymbol;
  }

  double doOperation(double double1, double double2) {
    switch (operationSymbol) {
      case "+":
        return double1 + double2;
      case "-":
        return double1 - double2;
      case "*":
        return double1 * double2;
      case "/":
        return double1 / double2;
      case "%":
        return double1 % double2;
      case "^":
        return Math.pow(double1, double2);
      case "\u221A":
        return Math.pow(double2, 1 / double1);
      default: 
        return 0.0;
    }
  }
  
  String calculate() {
    int operationIndex = userInput.indexOf(operationSymbol); // The location at which the user pressed an operation sign
    ArrayList<String> ClickedNumbers = new ArrayList<String>(); // Create an array list of all the characters before the operation sign

    System.out.println(operation + " index: " + operationIndex);
  
    for (int i = 0; i < operationIndex; i++) {
      ClickedNumbers.add(userInput.get(i)); // Adds all the number strings before the sign to clicked numbers
    }
    double double1 = calculator.StringToDouble(String.join("", ClickedNumbers)); // Converts the joined ClickedNumbers array list before the sign into a double
    System.out.println("double1: " + double1);
  
    ClickedNumbers.clear();
    int equalsIndex = userInput.indexOf("="); // Find the location at which the user pressed equals
  
    for (int i = operationIndex + 1; i < equalsIndex; i++) {
      ClickedNumbers.add(userInput.get(i));
    }
    double double2 = calculator.StringToDouble(String.join("", ClickedNumbers)); // Converts the joined ClickedNumbers array list after the sign into a double
    System.out.println("double2: " + double2);

    Double operResult = this.doOperation(double1, double2);
    String operationResult = calculator.doubleToString(operResult);
    System.out.println("Operation Result: " + operationResult);
    return operationResult;
  }
}
