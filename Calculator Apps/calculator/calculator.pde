import java.util.ArrayList;
import java.util.Arrays;

public String result = "";
float screenMargin = 40;
float padding = 15;
ArrayList<String> listName =  new ArrayList<String>();
float w = 0;
float h = 0;

float totalMargin = 2 * screenMargin;

String[][] textToDisplay = new String[][] {
  {
    "1", "4", "7", ".", "C"
  }, {
    "2", "5", "8", "0", "^"
  }, {
    "3", "6", "9", "±", "%"
  }, {
    "*", "+", "-", "/", "="
  }
};
int rows = textToDisplay.length;
int cols = textToDisplay[2].length;

GridSquare[][] buttons;

public void settings() {
  size(400, 500);
}
public void setup() {

  background(255, 255, 255);
  for (String[] outerArray: textToDisplay) {
    for (String element: outerArray) {
      System.out.println(element);
    }
  }
  System.out.println(Arrays.deepToString(textToDisplay));
}
public void draw() {
  drawCalculator();
  drawButtons();
}

public void drawCalculator() {
  w = (width - totalMargin);
  h = (height - totalMargin);
  rectMode(CORNER);
  fill(125, 125, 125);
  rect(screenMargin, screenMargin, w, h);
  fill(255);
  rect(screenMargin + padding, screenMargin + padding, w - 2 * padding, h / 8);
  drawScreen();
}

public void drawScreen() {
  fill(0, 0, 0);
  textAlign(RIGHT, CENTER);
  text(String.join("", listName), 300, 80);
}

public void drawButtons()  {
  w = (width - totalMargin);
  h = (height - totalMargin);
  buttons = new GridSquare[rows][cols];
  float margin = 65;
  float calcMarginX = 0;
  float dimensions = 45;
  float totalWidth = margin + dimensions * (cols - 1);
  float idontevencareanymore = 130;

  
  for (int i = 0; i < rows; i++) {
    for (int j = 0; j < textToDisplay[i].length; j++) {
      calcMarginX = w - totalWidth;
      calcMarginX /= 2;
      calcMarginX += screenMargin;
      buttons[i][j] = new GridSquare(i * margin + calcMarginX, j * margin + idontevencareanymore, dimensions, dimensions);
    }
  }
  for (int i = 0; i < rows; i++) {
    for (int j = 0; j < textToDisplay[i].length; j++) {
      buttons[i][j].displayText(textToDisplay, i, j);
    }
  }
  
}

public static String doubleToString(double dble) {
return String.valueOf(dble);
}

public static float StringToFloat(String string) {
  return Float.parseFloat(string);
}

public static double StringToDouble(String string) {
return Double.parseDouble(string);
}

public String addition(ArrayList<String> arr) {
  
  ArrayList<String> ClickedNumbers = new ArrayList<String>();
  int plusIndex = arr.indexOf("+");
  System.out.println(plusIndex);
  for (int i = 0; i < plusIndex; i++) {
    ClickedNumbers.add(arr.get(i)); // Adds all the number strings before the plus sign to clicked numbers
  }
  double double1 = StringToDouble(String.join("", ClickedNumbers)); // Converts a joined array list of the numbers before the plus sign into a string
  System.out.println("double1: " + double1);
  
  ClickedNumbers.clear();
  int equalsIndex = arr.indexOf("=");
  
  for (int i = plusIndex + 1; i < equalsIndex; i++) {
    ClickedNumbers.add(arr.get(i));
  }
  double double2 = StringToDouble(String.join("", ClickedNumbers)); // Converts a joined array list of numbers after the plus sign into a string
  System.out.println("double2:" + double2);
  
  String total = doubleToString(double1 + double2);
  System.out.println(total);
  return total;
}
public String subtraction(ArrayList<String> arr) {
  ArrayList<String> ClickedNumbers = new ArrayList<String>();
  int minusIndex = arr.indexOf("-");
  System.out.println("minus index" + minusIndex);
  
  for (int i = 0; i < minusIndex; i++) {
    ClickedNumbers.add(arr.get(i)); // Adds all the number strings before the plus sign to clicked numbers
  }
  double double1 = StringToDouble(String.join("", ClickedNumbers)); // Converts a joined array list of the numbers before the plus sign into a string
  System.out.println("double1: " + double1);
  
  ClickedNumbers.clear();
  int equalsIndex = arr.indexOf("=");
  
  for (int i = minusIndex + 1; i < equalsIndex; i++) {
    ClickedNumbers.add(arr.get(i));
  }
  double double2 = StringToDouble(String.join("", ClickedNumbers)); // Converts a joined array list of numbers after the plus sign into a string
  System.out.println("double2:" + double2);
  
  String difference = doubleToString(double1 - double2);
  System.out.println("Difference: " + difference);
  return difference;
}

public String multiplication(ArrayList<String> arr) {
  ArrayList<String> ClickedNumbers = new ArrayList<String>();
  int timesIndex = arr.indexOf("*");
  System.out.println("Times index" + timesIndex);
  
  for (int i = 0; i < timesIndex; i++) {
    ClickedNumbers.add(arr.get(i)); // Adds all the number strings before the plus sign to clicked numbers
  }
  double double1 = StringToDouble(String.join("", ClickedNumbers)); // Converts a joined array list of the numbers before the plus sign into a string
  System.out.println("double1: " + double1);
  
  ClickedNumbers.clear();
  int equalsIndex = arr.indexOf("=");
  
  for (int i = timesIndex + 1; i < equalsIndex; i++) {
    ClickedNumbers.add(arr.get(i));
  }
  double double2 = StringToDouble(String.join("", ClickedNumbers)); // Converts a joined array list of numbers after the plus sign into a string
  System.out.println("double2:" + double2);
  
  String product = doubleToString(double1 * double2);
  System.out.println("Product: " + product);
  return product;
}

public String division(ArrayList<String> arr) {
  ArrayList<String> ClickedNumbers = new ArrayList<String>();
  int divideIndex = arr.indexOf("/");
  System.out.println("divide index" + divideIndex);
  
  for (int i = 0; i < divideIndex; i++) {
    ClickedNumbers.add(arr.get(i)); // Adds all the number strings before the plus sign to clicked numbers
  }
  double double1 = StringToDouble(String.join("", ClickedNumbers)); // Converts a joined array list of the numbers before the plus sign into a string
  System.out.println("double1: " + double1);
  
  ClickedNumbers.clear();
  int equalsIndex = arr.indexOf("=");
  
  for (int i = divideIndex + 1; i < equalsIndex; i++) {
    ClickedNumbers.add(arr.get(i));
  }
  double double2 = StringToDouble(String.join("", ClickedNumbers)); // Converts a joined array list of numbers after the plus sign into a string
  System.out.println("double2:" + double2);
  
  String quotient = doubleToString(double1 / double2);
  System.out.println("Quotient: " + quotient);
  return quotient;
}

public String moduloOperation(ArrayList<String> arr) {
  ArrayList<String> ClickedNumbers = new ArrayList<String>();
  int modulusIndex = arr.indexOf("%");
  System.out.println("Modulus index" + modulusIndex);
  
  for (int i = 0; i < modulusIndex; i++) {
    ClickedNumbers.add(arr.get(i)); // Adds all the number strings before the plus sign to clicked numbers
  }
  double double1 = StringToDouble(String.join("", ClickedNumbers)); // Converts a joined array list of the numbers before the plus sign into a string
  System.out.println("double1: " + double1);
  
  ClickedNumbers.clear();
  int equalsIndex = arr.indexOf("=");
  
  for (int i = modulusIndex + 1; i < equalsIndex; i++) {
    ClickedNumbers.add(arr.get(i));
  }
  double double2 = StringToDouble(String.join("", ClickedNumbers)); // Converts a joined array list of numbers after the plus sign into a string
  System.out.println("double2:" + double2);
  
  String modulusResult = doubleToString(double1 % double2);
  System.out.println("Modulus Result " + modulusResult);
  return modulusResult;
}

public String exponentOperation(ArrayList<String> arr) {
    ArrayList<String> ClickedNumbers = new ArrayList<String>();
    int carrotIndex = arr.indexOf("^");
    
    for (int i = 0; i < carrotIndex; i++) {
    ClickedNumbers.add(arr.get(i)); // Adds all the number strings before the plus sign to clicked numbers
  }
  float double1 = StringToFloat(String.join("", ClickedNumbers)); // Converts a joined array list of the numbers before the plus sign into a string
  System.out.println("double1: " + double1);
  
  ClickedNumbers.clear();
  int equalsIndex = arr.indexOf("=");
  
  for (int i = carrotIndex + 1; i < equalsIndex; i++) {
    ClickedNumbers.add(arr.get(i));
  }
  float double2 = StringToFloat(String.join("", ClickedNumbers)); // Converts a joined array list of numbers after the plus sign into a string
  System.out.println("double2:" + double2);
  
  String powerResult = doubleToString(pow(double1, double2));
  System.out.println("Power Result: " + powerResult);
  return powerResult;
}
  
  public class GridSquare{

    public float x;
    public float y;
    public float ws;
    public float hs;
    public String value;
      
    public GridSquare(float tempX, float tempY, float tempW, float tempH)  {   
        x = tempX;
        y = tempY;
        ws = tempW;
        hs = tempH; 
    }
    
    public Boolean onHover(float clickedX, float clickedY) {
      return clickedX > x && clickedX < x + ws && clickedY > y && clickedY < y + hs;
    }
    
    public void onClick(float clickedX, float clickedY)  { 
        boolean isEmpty = result.length() == 0;
        if (isEmpty && this.onHover(clickedX, clickedY)) {
          listName.add(value);
          System.out.println("Mouse Button Input: " + listName.toString());
        }
        else if (!isEmpty && this.onHover(clickedX, clickedY) && listName.size() <= 1) {
          listName.remove(0);
          listName.add(value);
          result = "";
        }
    }
      
    public void draw() {
      fill(0, 30, 240);
      rectMode(CORNER);
      rect(x, y, ws, hs);
    }
    
    public void displayText(String[][] text2Display, int i, int j) {
      float squarePadding = 20; // Space between each square
      this.draw();
      textSize(20);
      fill(255, 255, 255);
      textAlign(CENTER, CENTER);
      value = text2Display[i][j];
      text(value, x + squarePadding, y + squarePadding);
    }

    public void getCalcFunctionality() {
      String[] numberStr = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};
      Boolean pressedEquals = listName.contains("=");
      for (int l = 0; l < numberStr.length; l++) { // Looping through numbers array
        Boolean pressedNumber = listName.contains(numberStr[l]);
        if (pressedNumber && pressedEquals) {
          if (listName.contains("+")) {
            System.out.println("Adding Numbers...");
            listName.add(addition(listName));
            result = addition(listName);
          }
          else if (listName.contains("-")) {
            System.out.println("Subtracting Numbers");
            listName.add(subtraction(listName));
            result = subtraction(listName);
          }
          else if (listName.contains("*")) {
            System.out.println("Multiplying Numbers...");
            listName.add(multiplication(listName));
            result = multiplication(listName);
          }
          else if (listName.contains("/")) {
            System.out.println("Dividing Numbers...");
            listName.add(division(listName));
            result = division(listName);
          }
          else if (listName.contains("%")) {
            System.out.println("Modulufying Numbers...");
            listName.add(moduloOperation(listName));
            result = moduloOperation(listName);
          }
          else if (listName.contains("^")) {
            System.out.println("Powering numbers...");
            listName.add(exponentOperation(listName));
            result = exponentOperation(listName);
          }
        } 
      }
      if (listName.contains("C")) {
        listName.clear(); // Clears the "Screen" when C is clicked by clearing the array
      }
      else if(listName.contains("=")) {
        listName.clear(); 
        listName.add(result);
        drawScreen();
      }
    }
  }

  public void mouseReleased() {
    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < textToDisplay[i].length; j++) {
        buttons[i][j].onClick(mouseX, mouseY);
        buttons[i][j].getCalcFunctionality(); 
      }
    }
  }
