/*ex.49 if...else
Write a function addWithSurcharge that adds two amounts with surcharge. 
For each amount less than or equal to 10, the surcharge is 1. 
For each amount greater than 10, the surcharge is 2.

Example: addWithSurcharge(5, 15) should return 23.*/

let addWithSurcharge1 = (x, y) => {
let surcharge = 0
  if (x <= 10) {
surcharge = surcharge +1
} else {
surcharge = surcharge +2
}
if (y <= 10) {
surcharge = surcharge +1
} else {
surcharge = surcharge +2
}
  return x + y + surcharge
}

let addWithSurcharge2 = (amount1, amount2) => {
  let surcharge1 = (amount1 <= 10) ? 1 : 2;
  let surcharge2 = (amount2 <= 10) ? 1 : 2;
  return amount1 + amount2 + surcharge1 + surcharge2;
}

/*addWithSurcharge(1, 1) returns 4.
addWithSurcharge(10, 10) returns 22.
addWithSurcharge(11, 10) returns 24.
addWithSurcharge(10, 11) returns 24.
addWithSurcharge(11, 11) returns 26.
addWithSurcharge(15, 27) returns 46.
*/

/*ex.50 else if
Write a function addWithSurcharge that adds two amounts with surcharge. 
For each amount less than or equal to 10, the surcharge is 1. 
For each amount greater than 10 and less than or equal to 20, 
the surcharge is 2. For each amount greater than 20, the surcharge is 3.

Example: addWithSurcharge(10, 30) should return 44.
*/

let addWithSurcharge3 = (amount1, amount2)  => {
  let surcharge1 = (amount1 <= 10) ? 1 : (amount1 <= 20) ? 2 : 3;
  let surcharge2 = (amount2 <= 10) ? 1 : (amount2 <= 20) ? 2 : 3;
  return amount1 + amount2 + surcharge1 + surcharge2;
}


let addWithSurcharge4 = (amount1, amount2)  => {
  let surcharge1, surcharge2;
  
  if (amount1 <= 10) {
    surcharge1 = 1;
  } else if (amount1 <= 20) {
    surcharge1 = 2;
  } else {
    surcharge1 = 3;
  }
  
  if (amount2 <= 10) {
    surcharge2 = 1;
  } else if (amount2 <= 20) {
    surcharge2 = 2;
  } else {
    surcharge2 = 3;
  }
  
  return amount1 + amount2 + surcharge1 + surcharge2;
}

/*
addWithSurcharge(1, 1) returns 4.
addWithSurcharge(10, 10) returns 22.
addWithSurcharge(11, 10) returns 24.
addWithSurcharge(10, 11) returns 24.
addWithSurcharge(11, 11) returns 26.
addWithSurcharge(10, 20) returns 33.
addWithSurcharge(20, 10) returns 33.
addWithSurcharge(10, 21) returns 35.
addWithSurcharge(21, 10) returns 35.
addWithSurcharge(11, 20) returns 35.
addWithSurcharge(20, 11) returns 35.
addWithSurcharge(11, 21) returns 37.
addWithSurcharge(21, 11) returns 37.
addWithSurcharge(20, 20) returns 44.
addWithSurcharge(21, 20) returns 46.
addWithSurcharge(20, 21) returns 46.
addWithSurcharge(21, 21) returns 48.
*/
/*if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}*/
