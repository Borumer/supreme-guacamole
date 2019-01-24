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
    console.log(`${this.name} educates ${this.numberOfStudents} students at the level ${this.level}.`.red)
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

module.exports = {School, PrimarySchool, HighSchool};

