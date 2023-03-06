// Write your code below
// Step 1
let cupsOfSugarNeeded = 3;
// Step 2
let SugarAdd = 0;

// Step 3
do {
  SugarAdd++;
  console.log(`Cups added: ${SugarAdd}`);            //Cups added: 1   Cups added: 2   Cups added: 3
} while (SugarAdd < cupsOfSugarNeeded);       //เติมน้ำตาล 



let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);



const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
 
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);
 
// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};
