let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber)

const registeredEarly = false;
const runnerAge = 18;

if (runnerAge>18 && registeredEarly){
  raceNumber += 1000;
}


if (runnerAge>18 && registeredEarly) {
  console.log(`Runner:${raceNumber}: Your will race at 9:30`);
} else if (runnerAge>18 && !registeredEarly) {
  console.log(`Runner:${raceNumber}: Your will race at 11:00`);
} else if (runnerAge < 18) {
  console.log(`Runner:${raceNumber}: Your will race at 12:30`)
} else {
 console.log("see the registration desk")
}
