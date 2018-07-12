package calculator;

import java.util.ArrayList;
import java.util.Arrays;

import processing.core.PApplet;


public class Calculator extends PApplet  {
	
	public static void main(String[] args) {
		main("calculator.Calculator");
	}
	
	float screenMargin = 40;
	float padding = 15;
	
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
    
	public String intToString(int integer) {
		return String.valueOf(integer);
	}
	public int StringToInt(String string) {
		return Integer.parseInt(string);
	}
	
	public String addition(ArrayList<String> arr) {
		
		//ArrayList<Integer> ClickedNumbers = new ArrayList<Integer>();
		for (int q = 0; q < arr.indexOf("+"); q++) {
	//		ClickedNumbers.add(arr.get(q));
		}
		int int1 = 1;
		int int2 = 2;
		String total = intToString(int1 + int2);
		return total;
	}
	public String subtraction(ArrayList<String> arr) {
		int int1 = 5;
		int int2 = 2;
		String difference = intToString(int1 - int2);
		return difference;
	}
	
	ArrayList<String> listName =  new ArrayList<String>();
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
        
        public void onClick(float clickedX, float clickedY)  { 
            if (clickedX > x && clickedX < x + ws && clickedY > y && clickedY < y + hs) {
            	listName.add(value);
            	System.out.println(listName.toString());
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
        
		public void getCalcFunctionality(int i) {    
			String[] numberStr = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};
			
			for (int l = 0; l < numberStr.length; l++) { // Looping through numbers array
				for(int o = 0; o < listName.size(); o++) {
					for (int p = 0; p < listName.size(); p++) {
						Boolean pressedEquals = listName.get(p).equals("=");
						Boolean pressedNumber = listName.get(i).equals(numberStr[l]);
						
						if (pressedNumber && listName.get(o).equals("+") && pressedEquals) {
							//System.out.println("Adding Numbers...");
							listName.add(addition(listName));
						}
						else if (pressedNumber && listName.get(o).equals("-") && pressedEquals) {
							System.out.println("Subtracting Numbers");
							//listName.add(difference(listName));
						}
					}
				}
			}

    		if (listName.get(i).equals("=")) { // See if the user clicked equals
    			listName.clear(); // Clears screen to just show result
       		}
    		else if (listName.get(i).equals("C")) {
    			listName.clear(); // Clears the "Screen" when C is clicked by clearing the array
    		}
       	}
    }

	public void mouseReleased() {
		for (int i = 0; i < rows; i++) {
			for (int j = 0; j < textToDisplay[i].length; j++) {
				buttons[i][j].onClick(mouseX, mouseY);
				for (int k = 0; k < listName.size(); k++) {
					buttons[i][j].getCalcFunctionality(k); 
				}
			}
		}
	}
	
}
