import java.util.ArrayList;

public class Operation {
  ArrayList<String> userInput = new ArrayList<String>();
  String operation;
  String operationSymbol;
  
	public Operation(ArrayList<String> arr, String op, String operSymbol) {
    userInput = arr;
    operation = op;
    operationSymbol = operSymbol;
  }
  
  String doOperation() {
    ArrayList<String> ClickedNumbers = new ArrayList<String>();
    int operationIndex = userInput.indexOf(operationSymbol);
    System.out.println(operation + " index: " + operationIndex);
  
    for (int i = 0; i < operationIndex; i++) {
      ClickedNumbers.add(userInput.get(i)); // Adds all the number strings before the sign to clicked numbers
    }
    double double1 = calculator.StringToFloat(String.join("", ClickedNumbers)); // Converts a joined array list of the numbers before the plus sign into a string
    System.out.println("double1: " + double1);
  
    ClickedNumbers.clear();
    int equalsIndex = userInput.indexOf("=");
  
    for (int i = operationIndex + 1; i < equalsIndex; i++) {
      ClickedNumbers.add(userInput.get(i));
    }
    double double2 = calculator.StringToFloat(String.join("", ClickedNumbers)); // Converts a joined array list of numbers after the sign into a string
    System.out.println("double2: " + double2);

    Double operResult;
    switch (operationSymbol) {
      case "+":
        operResult = double1 + double2;
        break;
      case "-":
        operResult = double1 - double2;
        break;
      case "*":
        operResult = double1 * double2;
        break;
      case "/":
        operResult = double1 / double2;
        break;
      case "%":
        operResult = double1 % double2;
        break;
      default: 
        operResult = 0.0;
        break;
    }

    String operationResult = calculator.doubleToString(operResult);
    System.out.println("Operation Result: " + operationResult);
    return operationResult;
  }
}