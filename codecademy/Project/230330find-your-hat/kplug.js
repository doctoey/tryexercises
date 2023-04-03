// import prompt-sync
const prompt = require('prompt-sync')({ sigint: true });
// import clear-screen
const clear = require('clear-screen');

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// Create Field
class Field {
  // Call new class field have constructor mode (Easy, Nomal, Hard)
  constructor() {
    // Field X count
    this.fieldNumX = 8;
    // Field Y count
    this.fieldNumY = 10;
    // Field type array [[*,*,*,*],[*,*,*,*]]
    this.field = [];
    // Your position start.
    this.start = {
      x: 0,
      y: 0
    }
    // Hat position start.
    this.hat = {
      x: 0,
      y: 0
    }
    // Your position now.
    this.locationX = 0;
    this.locationY = 0;
    // Now playing
    this.playing = false;
  }
  // Run Project
  runGame() {
    // Call function generateField
    this.generateField();
    // Call function positionHoles
    this.positionHoles();
    // Call function positionStart
    this.positionStart();
    // Call function positionHat
    this.positionHat();

    // Keep playing (true)
    this.playing = true;

    // While case playing = true
    while (this.playing) {
      try {
        // Call Function print
        this.print();
        // Call function positionMove
        this.positionMove();
        // If function isInArea return false
        if (!this.isInArea()) {
          console.log('You Fall out of Area!');
          this.playing = false;
          // If function isHole return true
        } else if (this.isHole()) {
          console.log('You falling in hole!');
          this.playing = false;
          // If function isHole return true
        } else if (this.isHat()) {
          console.log('Wow you can find your hat.');
          this.playing = false;
        }
        // Set location index x,y now = pathCharacter(*)
        // field[y][x]
        this.field[this.locationY][this.locationX] = pathCharacter;
      } catch (err) {

      }
    }
  }
  // Create Blank Field
  generateField() {
    // Set field Y = fieldNumY - 1
    for (let i = 0; i < this.fieldNumY; i++) {
      // array push [] fieldNumY 10 round
      this.field.push([]);
      // Set field X = fieldNumX - 1
      for (let numX = 0; numX < this.fieldNumX; numX++) {
        // array push fieldCharacter(░) 8 round
        this.field[i].push(fieldCharacter);
      }
    }
  }
  // Set position Start
  positionStart() {
    // Random position index field x and set into start = { x: ? }
    this.start.x = Math.floor(Math.random() * (this.fieldNumX - 1));
    // Random position index field y and set into start = { y: ? }
    this.start.y = Math.floor(Math.random() * (this.fieldNumY - 1));
    // Check position start === hat or not
    if(this.field[this.start.y][this.start.x] === hat){
      // Random position index field x and set into start = { x: ? }
      this.start.x = Math.floor(Math.random() * (this.fieldNumX - 1));
      // Random position index field y and set into start = { y: ? }
      this.start.y = Math.floor(Math.random() * (this.fieldNumY - 1));
    // Check position start === hole or not
    }else if(this.field[this.start.y][this.start.x] === hole){
      // Random position index field x and set into start = { x: ? }
      this.start.x = Math.floor(Math.random() * (this.fieldNumX - 1));
      // Random position index field y and set into start = { y: ? }
      this.start.y = Math.floor(Math.random() * (this.fieldNumY - 1));
    }
    // Set location x now locationX = start.x
    this.locationX = this.start.x;
    // Set location y now locationX = start.y
    this.locationY = this.start.y;
    // Resign data in array field[y][x] = pathCharacter(*)
    this.field[this.start.y][this.start.x] = pathCharacter;
  }
  // Set position hat
  positionHat() {
      // Random position index field x and set into hat = { x: ? }
      this.hat.x = Math.floor(Math.random() * (this.fieldNumX - 1));
      // Random position index field y and set into hat = { y: ? }
      this.hat.y = Math.floor(Math.random() * (this.fieldNumY - 1));
    // Check position hat === hole or not
    if(this.field[this.hat.y][this.hat.x] === hole){
      // Random position index field x and set into hat = { x: ? }
      this.hat.x = Math.floor(Math.random() * (this.fieldNumX - 1));
      // Random position index field y and set into hat = { y: ? }
      this.hat.y = Math.floor(Math.random() * (this.fieldNumY - 1));
    // Check position hat === start or not
    }else if(this.field[this.hat.y][this.hat.x] === pathCharacter) {
      // Random position index field x and set into hat = { x: ? }
      this.hat.x = Math.floor(Math.random() * (this.fieldNumX - 1));
      // Random position index field y and set into hat = { y: ? }
      this.hat.y = Math.floor(Math.random() * (this.fieldNumY - 1));
    }
    // Resign data in array field[y][x] = hat(^)
    this.field[this.hat.y][this.hat.x] = hat;
  }
  // Set position holed
  positionHoles() {
    // Set random holes between 1 to fieldNumY
    const numHoles = Math.floor(Math.random() * (this.fieldNumY + 3)) + 1;
    // Loop when i <= numHoles
    for (let i = 0; i <= numHoles; i++) {
      // Variable holePosition x = 0, y = 0
      let holePosition = {
        x: 0,
        y: 0
      };
      // Loop ending for holePosition x == fieldNumX and holePosition y == fieldNumY
      do {
        // Random number 0 - index fieldNumX - 1
        holePosition.x = Math.floor(Math.random() * (this.fieldNumX - 1));
        // Random number 0 - index fieldNumY - 1
        holePosition.y = Math.floor(Math.random() * (this.fieldNumY - 1));
      } while (holePosition.x === this.fieldNumX && holePosition.y === this.fieldNumY);
      // Set field[y][x] = hole(O)
      this.field[holePosition.y][holePosition.x] = hole;
    }
  }
  // Function move your position
  positionMove() {
    // Show input by prompt text Move(w,a,s,d): ? and toUpperCase
    const input = prompt('Move(w,a,s,d): ').toUpperCase();
    // Switch case input
    switch (input) {
      // Case input = w
      case 'W':
        // Set location Y now - 1
        this.locationY -= 1;
        break;
      // Case input = a
      case 'A':
        // Set location X now - 1
        this.locationX -= 1;
        break;
      // Case input = s
      case 'S':
        // Set location Y now + 1
        this.locationY += 1;
        break;
      // Case input = d
      case 'D':
        // Set location X now + 1
        this.locationX += 1;
        break;
      // Case other
      default:
        // Call function positionMove and input again
        this.positionMove();
        break;
    }
  }
  // Promise For End game
  // You stay in area or not return true, false
  isInArea() {
    return (
      this.locationY >= 0
      && this.locationX >= 0
      && this.locationY < this.field.length
      && this.locationX < this.field[0].length
    );
  }
  // Your position now have a hat or not return true, false
  isHat() {
    return this.field[this.locationY][this.locationX] === hat;
  }
  // Your position now have a hole or not return true, false
  isHole() {
    return this.field[this.locationY][this.locationX] === hole;
  }
  // Function print map
  print() {
    // clear for create map no without refresh
    clear();
    // Loop map from field into fields
    this.field.forEach(fields => {
      // Log fields and join by ''
      console.log(fields.join(''));
    });
  }
}
// Invoke Class Field into playGame
const playGame = new Field();
// Call variable playGame function runGame
playGame.runGame();