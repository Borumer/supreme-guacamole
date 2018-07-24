// Sets the constant age of a human
const myAge = 3;
// Value of the early years of a human
let earlyYears = 2;
// Sets the first 2 years of a human in dog years
earlyYears *= 10.5;
// Sets the age of the human, excluding the early years
let laterYears = myAge - 2;
// Sets the years of a human after the early years in dog years
laterYears *= 4;
/*console.log(earlyYears, laterYears);*/

// Adds the dog years of a human's early and late years together
const myAgeInDogYears = earlyYears + laterYears;
// Stores the name of the user and makes all letters lower case
const myName = "Varun".toLowerCase();

// Prints the name and age in dog years of the user to the console
console.log(`My age (in human years) is ${myAge}.`);
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);