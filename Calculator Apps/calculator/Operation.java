import java.util.ArrayList;

public class Operation {
  ArrayList<String> arr = new ArrayList<String>();
  String operation;
  String operSymbol;
  
	public Operation(ArrayList<String> arr, String operation, String operSymbol) {
    arr = arr;
    operation = operation;
    operSymbol = operSymbol;
  }
  
  String doOperation() {
    ArrayList<String> ClickedNumbers = new ArrayList<String>();
    int operationIndex = arr.indexOf("-");
    System.out.println(operation + " index: " + operationIndex);
  
    for (int i = 0; i < operationIndex; i++) {
      ClickedNumbers.add(arr.get(i)); // Adds all the number strings before the sign to clicked numbers
    }
    double double1 = calculator.StringToDouble(String.join("", ClickedNumbers)); // Converts a joined array list of the numbers before the plus sign into a string
    System.out.println("double1: " + double1);
  
    ClickedNumbers.clear();
    int equalsIndex = arr.indexOf("=");
  
    for (int i = operationIndex + 1; i < equalsIndex; i++) {
      ClickedNumbers.add(arr.get(i));
    }
    double double2 = calculator.StringToFloat(String.join("", ClickedNumbers)); // Converts a joined array list of numbers after the sign into a string
    System.out.println("double2:" + double2);
  
    String operResult = calculator.doubleToString(double1 - double2);
    System.out.println("Operation Result: " + operResult);
    return operResult;
  }
}