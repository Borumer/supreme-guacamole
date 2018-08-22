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
  }
