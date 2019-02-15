const SchoolCatalogue = require('./SchoolCatalogue.js');
const LibraryCatalogue = require('./Library.js');
const colors = require('../../../node_modules/colors');

const historyOfEverything = new LibraryCatalogue.Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new LibraryCatalogue.Movie('Speed', 'Jan de Bont', 116)
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut.toString().red)
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating().red);

const lorraineHansbury = new SchoolCatalogue.PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or family member over the age of 16.');
lorraineHansbury.quickFacts();
console.log("Substitute teacher for the day: " + SchoolCatalogue.School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new SchoolCatalogue.HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Tennis', 'Volleyball', 'Track and Field'])
console.log(`Sports teams for ${alSmith.name} ${alSmith.level} school: ${alSmith.sportsTeams}`);

