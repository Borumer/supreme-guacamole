class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number') {
      this._numberOfStudents = newNumberOfStudents;
    }
    else {
      console.log('Invalid input: numberOfStudents must be set to a number');
    }
  }
  
  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the level ${this.level}.`)
  }
  static pickSubstituteTeacher(substituteTeachers) {
    const randInd = Math.round(Math.random() * (substituteTeachers.length - 1));
    return substituteTeachers[randInd];
  }
}

class PrimarySchool extends School{
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy
  }
  
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  
  get sportsTeams() {
    return this._sportsTeams;
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or family member over the age of 16.');
lorraineHansbury.quickFacts();
console.log("Substitute teacher for the day: " + School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Tennis', 'Volleyball', 'Track and Field'])
console.log(`Sports teams for ${alSmith.name} ${alSmith.level} school: ${alSmith.sportsTeams}`);