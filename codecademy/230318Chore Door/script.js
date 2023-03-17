// Access HTML elements
//step 2-3
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
//step 4
let startButton = document.getElementById('start');

let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

// Define game logic to check doors, progress game, end game, and choose a random chore door
//step 5-6
let isClicked = (door) =>{
  if( door.src === closedDoorPath) {
    return true;
  } else {
    return false;
  }
}

//step 7
let isBot = (door) => {
  if (door.src === botDoorPath) {
    return true
  } else {
    return false
  }
}

//step 8-9
let gameOver = (status) => {
  if(status === 'win') {
    startButton.innerHTML = 'You win! Play again?' 
  } else {
    startButton.innerHTML = 'Game over! Play again?'
  }
  currentlyPlaying = false; //step10
}

//step 11
let playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0 ) { //step 12
    gameOver('win')
  } else if (isBot(door)) { //step 13
    gameOver();
  }
}

//step14
let randomChoreDoorGenerator = () => {
 let choreDoor = Math.floor(Math.random() * numClosedDoors)
 if (choreDoor === 0) { //step15
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
 } else if (choreDoor === 1) { //step16
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
 } else if (choreDoor === 2) { //step17
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
 }
}

doorImage1.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

doorImage2.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
}

// Start a game round
//step18
 let startRound = () => {
   doorImage1.src = closedDoorPath;
   doorImage2.src = closedDoorPath;
   doorImage3.src = closedDoorPath;
   numClosedDoors = 3; //step19
   currentlyPlaying = true;
   startButton.innerHTML = 'Good Luck!';
   randomChoreDoorGenerator();
 }

 startRound()
