let userName = "Sam";
userName === "" ? console.log("Hello!") : console.log(`Hello, ${userName}!`);
const userQuestion = "Will it rain today?";
console.log(userQuestion);

// Computes a random number from 0 to 1(exclusive) and multiply it by 8, making it 0-8(exclusive), and rounds this value down to the nearest integer. It stores the final value in a variable.
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
switch (randomNumber) {
  case 0:
    eightBall = "That is absolutely certain";
    break;
  case 1:
    eightBall = "That is very probable";
    break;
  case 2:
    eightBall = "Maybe";
    break;
  case 3:
    eightBall = "Reply hazy, try another";
    break;
  case 4:
    eightBall = "My sources say 50-50";
    break;
  case 5:
    eightBall = "Predicting very unlikely";
    break;
  case 6:
    eightBall = "Signs pointing to no";
  case 7:
    eightBall = "It is impossible";
}
console.log(eightBall);