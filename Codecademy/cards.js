const cards = ["Diamond", "Spade", "Club", "Heart"];
let currentCard = "Heart";
let flips = 1;
while (currentCard !== "Spade") {
  console.log(currentCard);
  const randomNumber = Math.round(Math.random() * 4);
  
  currentCard = cards[randomNumber];

  flips++;
}
console.log(currentCard, "\nI got a spade!");
console.log("Flips: " + (flips));