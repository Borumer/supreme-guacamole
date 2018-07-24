const isPasswordValid = input => {
  console.log(`Password: ${input}`);
  
  if(hasUpperCase(input) && hasLowerCase(input) && isLongEnough(input) && hasSpecialCharacters(input)) {
    console.log(`The password '${input}' is valid ✓`);
  }
  if (!hasUpperCase(input)) {
    console.log(`The password needs a capital letter. X`);
  }
  else {
    console.log(`The password has a capital letter. ✓`);
  }
  if (!hasLowerCase(input)) {
    console.log(`The password needs a lower case letter. X`);
  }
  else {
    console.log(`The password has a lower case letter. ✓`);
  }
  if (!isLongEnough(input)) {
    console.log(`The password isn't long enough. It needs at least 8 characters. X`);
  }
  else {
    console.log(`The password has at least 8 characters. ✓`)
  }
  if (!hasSpecialCharacter(input)) {
    console.log(`The password needs a special character. X`)
  }
  else {
    console.log(`The password contains a special character. ✓`)
  }
};

String.prototype.isLetter = function() {
  return this.length === 1 && this.match(/[a-z]/i);
}

function hasUpperCase(input) {
  for (let item of input) {
// Checks if any character is an uppercase letter
    if (item === item.toUpperCase() && item.isLetter()) {
      return true;
    }
  }
}

function hasLowerCase(input) {
  for (let item of input) {
 // Checks if any character is a lowercase letter
    if (item === item.toLowerCase() && item.isLetter()) { 
      return true;
    }
  }
}

function isLongEnough(input) {
  for (let item of input) {
    if (item.length >= 8) {
      return true;
    }
  }
}

function hasSpecialCharacter(input) {
  for (let item of input) {
    if (!item.isLetter()) {
      return true;
    }
  }
}

const passwordInput = "J#$%";

isPasswordValid(passwordInput);

