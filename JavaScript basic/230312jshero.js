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
