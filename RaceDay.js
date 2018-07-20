// Integers and Booleans
let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 28;
// Strings based on Integers and Booleans
const timeRegistered = registeredEarly ? "Early" : "Late";
const isAdult = age < 18 ? false : age > 18 ? true : undefined;
const raceNumberRange = registeredEarly ? "1000-2000" : "0-999";

console.log(`You registered ${timeRegistered.toLowerCase()}. \nAge: ${age} \nAdult: ${isAdult} \nRace Number Range: ${raceNumberRange} \n`);

if (registeredEarly && age > 18) {
  raceNumber += 1000;
}
else if (!registeredEarly && age > 18) {
  console.log(`You will race at 11:00 AM. Your race number is ${raceNumber}.`)
}
else if (age < 18) {
  console.log(`You will race at 12:30 PM. Your race number is ${raceNumber}.`)
}
else {
  console.log(`Because you are exactly 18, you must go to the registration desk for your time and number.`);
}
if (raceNumber >= 1000) {
  console.log(`You will race at 9:30 AM. Your race number is ${raceNumber}.`);
}