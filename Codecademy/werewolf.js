const foggyNight = true;
const moonPhase = "mostly full";
let werewolfStatus = "";
if(foggyNight) {

  switch(moonPhase) {
    case "full":
      werewolfStatus = "Howwlllll!";
      break;
    case "mostly full":
    case "waxing gibbous":
    case "wanning gibbous":
      werewolfStatus = "Arms and Legs getting hairer";
    	break;
    case "half covered":
    case "first quarter":
    case "third quarter":
      werewolfStatus = "Strength, speed, and vision improved";
      break;
    case "mostly new":
    case "wanning crescent":
    case "waxing crescent":
    werewolfStatus = "Back on two feet";
      break;
    case "new":
      werewolfStatus = "I swear I am not a werewolf";
      break;
    default:
      werewolfStatus = "invalid moon phase"
      break;
  }
}

foggyNight ? console.log("Foggy Night") : console.log("Not a foggy night");
console.log(`The moon phase is ${moonPhase}`)
console.log(werewolfStatus);