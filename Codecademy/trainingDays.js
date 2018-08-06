const getRandEvent = () => {
  // The scope of `random` is within the function
const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
  let days = 0;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};
const logEvent = (event, name) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (days, name) => {
  console.log(`${name}'s time to train and prepare for the ${event} is: ${days} days. \n`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 
const name = 'Nala'; // 'name''s scope is global

logEvent(event, name);
logTime(days, name);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(event2, name2);
logTime(days2, name2);
