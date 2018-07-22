// Integers and Booleans for control flow
const registeredEarly = true;
const age = 28;
// Booleans and Strings based on above & each other for user-friendly console.log statements
const minRaceNum = isAdult && registeredEarly ? 1000 : 0;
const timeRegistered = registeredEarly ? "Early" : "Late";
const raceNumberRange = registeredEarly ? "1000-2000" : "0-999";
const raceNumber = Math.floor(Math.random() * 1000 + minRaceNum); // Generates random number between 0 and 999 if not adult that registered early, otherwise between 1000-2000

console.log(`You registered ${timeRegistered.toLowerCase()}. \nAge: ${age} \nAdult: ${isAdult} \nRace Number Range: ${raceNumberRange} \n`);

/*
* Adult
	* Early registrants have
		* A race number range of 1000-2000
		* A race time         of 9:30 AM
	* Late  registrants have
		* A race number range of 0-999
		* A race time         of 11:00 AM
* Minors
	* Early or Late have
		* A race number range of 0-999
		* A race time         of 12:30 PM
* 18 year olds see registration desk
*/

if (isAdult) {
	if (registeredEarly) {
  		console.log(`You will race at 9:30 AM. Your race number is ${raceNumber}.`);
	}
	else {
  		console.log(`You will race at 11:00 AM. Your race number is ${raceNumber}.`)
	}
}
else if (!isAdult) {
  console.log(`You will race at 12:30 PM. Your race number is ${raceNumber}.`)
}
else {
  console.log(`Because you are exactly 18, you must go to the registration desk for your time and number.`);
}

