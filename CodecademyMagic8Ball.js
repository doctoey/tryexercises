let userName = "";
userName='jane'
? console.log(`Hello, ${userName}!`) 
: console.log('Hello!');

const userQuestion = 'Magic Eight Ball'
console.log(userQuestion)

const randomnum = Math.floor(Math.random() * 8);
console.log(randomnum)
let eightBall = randomnum;

switch (eightBall) {
  case 0:
    eightBall = 'It is certain'
    break;
  case 1:
    eightBall = 'It is decidedly so'
    break;
  case 2:
    eightBall = 'Reply hazy try again'
    break;
  case 3:
   eightBall = 'Cannot predict now'
    break;
  case 4:
    eightBall = 'Do not count on it'
    break;
  case 5:
    eightBall = 'My sources say no'
    break;
  case 6:
    eightBall = 'Outlook not so good'
    break;
  case 7:
    eightBall = 'Signs point to yes'
    break;
}

console.log(`The eight ball answered:
 ${eightBall}+${randomnum}`);

console.log(eightBall);
