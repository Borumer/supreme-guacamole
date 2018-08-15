"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function countCharacter(inputString, inputCharacter) {
  var count = 0;
  var string = inputString.toLowerCase();
  var character = inputCharacter.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++;
    }
  }
  return count;
};

function capitalizeFirstCharacterOfWords(string) {
  var arr = string.split(" ");
  for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    arr[i] = word[0].toUpperCase() + word.substring(1);
  }
  return arr.join(" ");
};

function reverseWord(word) {
  return word.split("").reverse().join("");
};

function reverseAllWords(sentence) {
  var words = sentence.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = reverseWord(words[i]);
  }
  return words.join(" ");
};

function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};

function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
}

function encode(string) {
  var replacementObject = { "a": "@", "s": "$", "i": "!", "o": "0" };
  for (var key in replacementObject) {
    string = replaceAllOccurrences(string, key, replacementObject[key]);
  }
  return string;
};

function palindrome(str) {
  return str + " " + reverseWord(str);
};

function pigLatin(sentence, character) {
  return sentence.split(" ").join(character + " ");
}

function displayMessage() {
  console.log(countCharacter("What is the color of the sky?", "t"));
  console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(reverseWord("What is the color of the sky?"));
  console.log(reverseAllWords("What is the color of the sky?"));
  console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(encode("What is the color of the sky?"));
  console.log(palindrome("Today is a great day for golf."));
  console.log(pigLatin("Always have self-confidence and modesty", "ay"));
};

exports.countCharacter = countCharacter;
exports.capitalizeFirstCharacterOfWords = capitalizeFirstCharacterOfWords;
exports.reverseWord = reverseWord;
exports.reverseAllWords = reverseAllWords;
exports.replaceFirstOccurence = replaceFirstOccurence;
exports.encode = encode;
exports.palindrome = palindrome;
exports.pigLatin = pigLatin;
exports.displayMessage = displayMessage;