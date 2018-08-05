# About Rock Paper Scissors

The classic game of rock paper scissors is a game of 'luck' used for settling disputes and sometimes for fun. This folder contains rock paper scissors programmed through the console in both Java(Scanner, Random) and JavaScript(node.js)

![Diagram of rock paper scissors](https://upload.wikimedia.org/wikipedia/commons/6/67/Rock-paper-scissors.svg)
By Enzoklop - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=27958688

## RockPaperScissors.java
The computer asks the user which element
Depending on the element the user chose, a corresponding index is chosen
The computer generates a random index, and with that, a random element. Five if/else if/else in the control flow statement: rock and scissors, scissors and rock, tie, maximum index, and null if the user doesn't say one of the valid options

## RockPaperScissors.js
`getComputerChoice()` - The computer generates a random number, 0, 1, or 2 and based on the number a `switch` statement decides their game element. 
`getUserChoice(userInput)` - returns `userInput` if valid choice, otherwise logs error
`determineWinner(userChoice, computerChoice)` - Uses nested control flow statements to manually determine the winner for every combination (ties as one if statement); returns the winning element plus the win message or lose message;
`playGame()` - calls `determineWinner(getUserChoice, getComputerChoice);` Logs choices and result to console

Read more about rock paper scissors [here](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors)

