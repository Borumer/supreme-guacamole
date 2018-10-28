import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.ArrayList; 
import java.util.Arrays; 
import java.util.regex.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class calculator extends PApplet {





public String result = "";
public String processStatement = "";
float screenMargin = 40;
float padding = 15;
public static ArrayList < String > listName = new ArrayList < String > ();
float w = 0;
float h = 0;

float totalMargin = 2 * screenMargin;

String[][] textToDisplay = new String[][] {
  {
    "1",
    "4",
    "7",
    ".",
    "C"
  },
  {
    "2",
    "5",
    "8",
    "0",
    "^"
  },
  {
    "3",
    "6",
    "9",
    "",
    "%"
  },
  {
    "*",
    "+",
    "-",
    "/",
    "="
  }
};
int rows = textToDisplay.length;
int cols = textToDisplay[2].length;

GridSquare[][] buttons;
Operation addition = new Operation("Plus", "+");
Operation subtraction = new Operation("Subtract", "-");
Operation multiplication = new Operation("Multiply", "*");
Operation division = new Operation("Divide", "/");
Operation modulus = new Operation("Modulo", "%");
Operation exponential = new Operation("Expound", "^");

public void settings() {
  size(400, 500);
}

public void setup() {
  background(255, 255, 255);
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

public void drawButtons() {
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

public boolean validateExpression(String exp ) {
  // Reg Ex: - or + one or more numbers . oe or more numbers operator same thing
  String regex = "^[-]?[0-9]*\\.?[0-9]+[\\/\\+\\-\\*\\%\\^][-+]?[0-9]*\\.?[0-9]+=$";
  Pattern pattern = Pattern.compile( regex );
  Matcher matcher = pattern.matcher( exp.trim() );
  return matcher.find();
}

public void getCalcFunctionality() {
  boolean isValidated = validateExpression(String.join("", listName));
  if (isValidated) {
    if (listName.contains("+")) {
      processStatement = "Adding Numbers...";
      result = addition.calculate();
    }
    else if (listName.contains("-")) {
      processStatement = "Subtracting Numbers...";
      result = subtraction.calculate();
    }
    else if (listName.contains("*")) {
      processStatement = "Multiplying Numbers...";
      result = multiplication.calculate();
    }
    else if (listName.contains("/")) {
      processStatement = "Dividing Numbers...";
      result = division.calculate();
    }
    else if (listName.contains("%")) {
      processStatement = "Modulufying Numbers...";
      result = modulus.calculate();
    }
    else if (listName.contains("^")) {
      processStatement = "Expounding numbers...";
      result = exponential.calculate();
    }
  }
  if (listName.contains("C")) {
    listName.clear(); // Clears the "Screen" when C is clicked by clearing the array
  }
  else if (listName.contains("=")) {
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

public void keyTyped() {
  String key1 = Character.toString(key);
  for (int i = 0; i < textToDisplay.length; i++) {
    if (Arrays.asList(textToDisplay[i]).contains(key1)) {
      listName.add(key1);
    }
  }
  final boolean bool = key == ENTER || key == RETURN;
  if (bool) listName.add("=");
  getCalcFunctionality();
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
      if (this.onHover(clickedX, clickedY)) {
        if (isEmpty) {
          listName.add(value);
          System.out.println("Mouse Button Input: " + listName.toString());
        }
        else if (!isEmpty && listName.size() <= 1) {
          listName.remove(0);
          listName.add(value);
          result = "";
        }
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
  }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "calculator" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
