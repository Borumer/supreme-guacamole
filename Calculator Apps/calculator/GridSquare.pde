public class GridSquare{

    public float x;
    public float y;
    public float ws;
    public float hs;
    public String value;
    public color c = color(255, 255, 255);
      
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
      boolean isEmpty = result.length() == 0; // If the user is still putting in the expression
      // If a grid square is clicked
      if (this.onHover(clickedX, clickedY)) { 
        if (isEmpty) { 
          listName.add(value); // Push the result to the screen (listName)
          System.out.println("Mouse Button Input: " + listName.toString()); // Show the array of mouse button input
        } else if (!isEmpty && listName.size() <= 1) { // If the user starts a new expression without pressing C then reset all the variables and add the first character to the screen and listName arrayList
          listName.remove(0); 
          listName.add(value); 
          result = "";
        }
      }
    }
      
    public void draw() {
      fill(c);
      rectMode(CORNER);
      rect(x, y, ws, hs);
    }
    
    public void displayText(String[][] text2Display, int i, int j) {
      float squarePadding = 20; // Space between each square
      this.draw();
      textSize(20);
      fill(0);
      textAlign(CENTER, CENTER);
      value = text2Display[i][j];
      text(value, x + squarePadding, y + squarePadding);
    }
  }
