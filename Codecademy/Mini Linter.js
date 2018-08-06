let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.\n';

// Initalize constant arrays for iterating
const overusedWords = ['really', 'very', 'basically'];
const unnecessaryWords = ['extremely', 'literally', 'actually'];
// Define arrays that are created from modifying above
let storyWords = [];
let betterStoryWords = [];

// Convert 'story' string to array
storyWords = story.split(" ");

// Take out unnecessary words that are in unnecessaryWords array from storyWords array
// Take out every other overusedword occurence
betterStoryWords = storyWords.filter((storyWord, index) => !unnecessaryWords.includes(storyWord));

// Tells user how many times each overused word was used
overusedWords.forEach(function(overusedWord, index, array) {
	let timesUsed = this.reduce((lastResult, currentValue) => {
		return lastResult + (currentValue === overusedWord);
	}, 0);
	console.log(`You used '${overusedWord}' ${timesUsed} times. \n Removing '${overusedWord}' every other time it appears...`);
	var index = this.indexOf(overusedWord);
	if (index > -1 && index % 2 === 0) {
		this.splice(index, 1);
	}
}, betterStoryWords);

// Counts number of sentences total
let sentenceCount = betterStoryWords.reduce((lastResult, currentVal) => lastResult + (currentVal.includes(".") || currentVal.includes("!")), 0);
console.log(`Sentence Count: ${sentenceCount}`);
console.log(`Word Count: ${storyWords.length}\n`);

console.log(`Linted Story: \n  ${betterStoryWords.join(" ")}`);
