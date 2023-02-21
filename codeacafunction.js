function sayThanks(name) {
  console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}

sayThanks('Cole');


//Default Parameters
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList();


//Return
 function monitorCount(rows, columns){
   let cal = rows * columns;
   return cal;
 };
 const numOfMonitors = monitorCount(5, 4)
 console.log(numOfMonitors)


//Helper Functions
function multiplyByNineFifths(number) {
  return number * (9/5);
};
 
function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};
 
getFahrenheit(15); // Returns 59

//----------------------------------
function monitorCounts(rows, columns) {
  return rows * columns;
};

function costOfMonitors(rows, columns) {
  return monitorCounts(rows, columns) * 200 ; 
};

const totalCost = costOfMonitors(5,4)
console.log(totalCost)     //return 4000  5*4*200 ด้านบน


//Function Expressions
const plantNeedsWater = function(day) {
  if(day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
};

console.log(plantNeedsWater('Tuesday'))

//----------------------------
let x = function (num) { return num * num };
console.log(x(4));
// can be used as variable value for other variables
let y = x(3);
console.log(y);
