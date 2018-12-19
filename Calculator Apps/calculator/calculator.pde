import java.util.ArrayList;
import java.util.Arrays;
import java.util.regex.*;

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
    "%", "\u221A", "x²", "1/x"
  },
  {
    "^", "C", "<-", "/"
  },
  {
    "7", "8", "9", "*",
  },
  {
    "4", "5", "6", "-",
  },
  {
    "1", "2", "3", "+",
  },
  {
    " ", "0", ".", "=",
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
Operation root = new Operation("Root", "\u221A");

public void settings() {
  size(400, 600);
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
  // Draw perimeter of calculator
  fill(125, 125, 125);
  rect(screenMargin, screenMargin, w, h);
  // Create screen 
  drawScreen(); 
}

public void drawScreen() {
  w = (width - totalMargin);
  h = (height - totalMargin);
  fill(255);
  rect(screenMargin + padding, screenMargin + padding, w - 2 * padding, h / 8); 
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
  float calcMarginY = 130;
  float dimensions = 45;
  float totalWidth = margin + dimensions * (cols - 1);

  for (int i = 0; i < rows; i++) {
    for (int j = 0; j < textToDisplay[i].length; j++) {
      calcMarginX = w - totalWidth;
      calcMarginX /= 2;
      calcMarginX += screenMargin;
      buttons[i][j] = new GridSquare(j * margin + calcMarginX, i * margin + calcMarginY, dimensions, dimensions);
      if (buttons[i][j].onHover(mouseX, mouseY)) {
        buttons[i][j].c = color(255, 210, 210, 100);
      } else {
        buttons[i][j].c = color(255, 255, 255);
      }
      buttons[i][j].displayText(textToDisplay, i, j);
    }
  }

}

public boolean validateExpression(String exp ) {
  // Reg Ex: - or + one or more numbers . one or more numbers operator same thing
  String regex = "^[-]?[0-9]*\\.?[0-9]+[\\/\\+\\-\\*\\%\\^\\\u221A][-+]?[0-9]*\\.?[0-9]+=$";
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
    else if (listName.contains("\u221A")) {
      processStatement = "Rooting Numbers...";
      result = root.calculate();
    }
    System.out.println(processStatement);
  }
  if (listName.contains("C")) {
    listName.clear(); // Clears the "Screen" when C is clicked by clearing the array
  }
  else if (listName.contains("=")) {
    listName.clear(); // Clears the "Screen" when = is clicked by clearing the array
    listName.add(result); // Show the result
    drawScreen();
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

