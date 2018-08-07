let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.\n';

// Initalize constant arrays for iterating
const overusedWords = ['really', 'very', 'basically'];
const unnecessaryWords = ['extremely', 'literally', 'actually'];
// Define arrays that are created from modifying above
let storyWords = [];
let betterStoryWords = [];
let overusedWordIndexes = [];

// Convert 'story' string to array
storyWords = story.split(" ");

// Take out unnecessary words that are in unnecessaryWords array from storyWords array
betterStoryWords = storyWords.filter((storyWord, index) => !unnecessaryWords.includes(storyWord));

// Filter overused words into an array called overusedWordOccurences
let overusedWordOccurrences = betterStoryWords.filter((storyWord, index) => {
	const isOverusedWord = overusedWords.includes(storyWord);
	if (isOverusedWord) {
		// Push indexes of each element of overusedWordOccurences into another array
		overusedWordIndexes.push(index);
	}
	return isOverusedWord;
});

// Take out every other index
overusedWordOccurrences = overusedWordOccurrences.filter((overusedWord, index) => {
	overusedWord = overusedWord.toUpperCase();
	return index % 2;
});

overusedWordIndexes.filter((overusedWord, index) => overusedWordIndexes.splice(index, 1));

// Tells user how many times each overused word was used
overusedWords.forEach(function(overusedWord) {
	let timesUsed = this.reduce((lastResult, currentValue) => {
		return lastResult + (currentValue === overusedWord);
	}, 0);
	console.log(`You used '${overusedWord}' ${timesUsed} times.`);
}, betterStoryWords);

// Counts number of sentences total
let sentenceCount = betterStoryWords.reduce((lastResult, currentVal) => lastResult + (currentVal.includes(".") || currentVal.includes("!")), 0);

// Put remaining words back into array
for (let i = 0; i < overusedWordIndexes.length; i++) {
	betterStoryWords.splice(overusedWordIndexes[i] - i, 1);
}
let minimizedStoryWords = betterStoryWords;
// Finds most frequently used word
function findMostUsedWord(storyArr) {
	let words = []; // Stores all the different words
	let counts = []; // Stores the counts of each word in the story with the index corresponding to each word in words
	const punctuation = ['.', ',', '!', '?', '"']; // All punctuation that is removed so the words are counted accurately

	for (let i = 0; i < storyArr.length; i++) {
		let word = storyArr[i];
		for (let j = 0; j < punctuation.length; j++) {
			for (let k = 0; k < word.length; k++) {
				// If any of the characters in each string is a punctuation
				if(word[k] === punctuation[j]) {
					//console.log("This word is being popped: " + word); // Print the original word (with the punctuation)
					word = word.slice(0, k) + word.slice(k + 1); // Remove this punctuation by extracting the characterss before this + the characters after it
					//console.log(word); // Print the new word without the punctuation
				}
			}
		}
		word = word.toLowerCase();
		if (!words.includes(word)) {
			words.push(word);	
			counts.push(1);
		}
		else {
			counts[words.indexOf(word)]++;
		}
	}

	//console.log("Counts: " + counts);
	console.log(`Different Word Count: ${words.length}`);
	//console.log(`All Words: ${words}`); All the different words            

	const highestCount = Math.max.apply(null, counts); // Find the highest number in counts
	// Use the index of the highest number as the index to access the most frequent word
	const mostFrequentWord = words[counts.indexOf(highestCount)]; 
	
	return mostFrequentWord;
}

console.log(`The most used word is ${findMostUsedWord(minimizedStoryWords)}`);
const lintedStory = minimizedStoryWords.join(" ");
console.log(`Sentence Count: ${sentenceCount}`);
console.log(`Word Count: ${minimizedStoryWords.length}\n`);

console.log(`Linted Story: \n  ${lintedStory}`);
