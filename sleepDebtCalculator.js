const calculateSleepDebt = () => {
  const actualSleep = getActualSleepHours();
  const idealSleep = getIdealSleepHours(10.5);
  let sleepDebt = idealSleep - actualSleep;
  
  console.log(`Actual Sleep Hours over the week: ${actualSleep} \nTotal Ideal Sleep Hours over the week: ${idealSleep}`);
  if (actualSleep === idealSleep) {
    console.log("Wow, you got the perfect amount of sleep!");
  }
  else if (actualSleep < idealSleep) {
    console.log(`You should get some rest. Your sleep debt is ${sleepDebt} hours.`);
  }
  else {
    sleepDebt /= -1;
    console.log(`You got ${sleepDebt} more hours of sleep than needed.`)
  }
};
function getSleepHours(day) {
  switch (day.toLowerCase()) {
    case "monday":
      return 12;
      break;
    case "tuesday":
      return 9;
      break;
    case "wednesday":
      return 10;
      break;
    case "thursday":
      return 9;
      break;
    case "friday":
      return 11;
      break;
    case "saturday":
      return 8;
      break;
    case "sunday":
      return 9;
      break;
    default:
      return 0;
      break;
  }
}
const getActualSleepHours = () => getSleepHours("Sunday") + getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday") + getSleepHours("Friday") + getSleepHours("Saturday");
function getIdealSleepHours(idealHours) {
  idealHours *= 7; // This is multiplied by the number of days of the timeframe 
  return idealHours;
}

calculateSleepDebt();