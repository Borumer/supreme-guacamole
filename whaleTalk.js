var input = "You are so awesome";
var vowels = ["a", "e", "i", "o", "u"];
var resultArray = [];
for (var i = 0; i < input.length; i++) {
  switch (input[i]) {
    case "e":
      resultArray.push(input[i]);
      break;
    case "u":
     resultArray.push(input[i]);
      break;
  }
  for (var j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}

console.log("Original Sentece:", input);
console.log("Whale Talk Translation: " + resultArray.join('').toUpperCase());

