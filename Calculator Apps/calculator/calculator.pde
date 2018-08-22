import java.util.ArrayList;
import java.util.Arrays;

public String result = "";
public String processStatement = "";
float screenMargin = 40;
float padding = 15;
ArrayList<String> listName = new ArrayList<String>();
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
Operation addition = new Operation(listName, "Plus", "+");
Operation subtraction = new Operation(listName, "Subtract", "-");
Operation multiplication = new Operation(listName, "Multiply", "*");
Operation division = new Operation(listName, "Divide", "/");
Operation modulus = new Operation(listName,  "Modulo", "%");
Operation exponential = new Operation(listName, "Expound", "^");

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
      buttons[i][j].displayText(textToDisplay, i, j);
    }
  }
  
}

public void getCalcFunctionality() {
      String[] numberStr = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};
      Boolean pressedEquals = listName.contains("=");

      for(String number : numberStr) {
        Boolean pressedNumber = listName.contains(number);
        if (pressedNumber && pressedEquals) {
          if (listName.contains("+")) {
            processStatement = "Adding Numbers...";
            listName.add(addition.calculate());
            result = addition.calculate();
          }
          else if (listName.contains("-")) {
            processStatement = "Subtracting Numbers...";
            listName.add(subtraction.calculate());
            result = subtraction.calculate();
          }
          else if (listName.contains("*")) {
            processStatement = "Multiplying Numbers...";
            listName.add(multiplication.calculate());
            result = multiplication.calculate();
          }
          else if (listName.contains("/")) {
            processStatement = "Dividing Numbers...";
            listName.add(division.calculate());
            result = division.calculate();
          }
          else if (listName.contains("%")) {
            processStatement = "Modulufying Numbers...";
            listName.add(modulus.calculate());
            result = modulus.calculate();
          }
          else if (listName.contains("^")) {
            processStatement = "Powering numbers...";
            listName.add(exponential.calculate());
            result = exponential.calculate();
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
      if (processStatement != "") System.out.println(processStatement);
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
  
public void mouseReleased() {
    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
        buttons[i][j].onClick(mouseX, mouseY);
      }
    }
    getCalcFunctionality(); 
  }
