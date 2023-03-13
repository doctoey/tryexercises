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


/*ex.51 Arrays
Write a function toArray that takes 2 values and returns these values in an array.

Example: toArray(5, 9) should return the array [5, 9].

*/

let toArray = (x, y) => {
return [x, y]
}

/*
toArray(1, 2) returns [ 1, 2 ].
toArray('Tom', 'Huck') returns [ 'Tom', 'Huck' ].
*/

/*ex.52 Get array elements
Write a function getFirstElement that takes an array and returns the first element of the array.

Example: getFirstElement([1, 2]) should return 1.

*/

let getFirstElement = (first) => {
return first[0]
}

/*
getFirstElement([1, 2]) returns 1.
getFirstElement(['Firefox', 'Chrome']) returns 'Firefox'.
*/

//ขาด 53 ยังไม่เข้าใจ

/*ex.54
Write a function getLastElement that takes an array and returns the last element of the array.

Example: getLastElement([1, 2]) should return 2.*/


let getLastElement = (array) => {
  let lastindex = array.length - 1 ;
  return array[lastindex]
}
/*
getLastElement([1, 2]) returns 2
getLastElement(['a', 'b', 'c']) returns 'c'
*/


/*ex.55 Sorting arrays
Write a function sort that takes an array filled with 3 numbers and returns these 3 numbers sorted in ascending order as an array.

Example: sort([2, 3, 1]) should return [1, 2, 3].

*/
let sort = (array) => {
  let sortindex = array.sort() ;
  return sortindex
}

/*sort([1, 2, 3]) returns [ 1, 2, 3 ].
sort([1, 3, 2]) returns [ 1, 2, 3 ].
sort([2, 1, 3]) returns [ 1, 2, 3 ].
sort([2, 3, 1]) returns [ 1, 2, 3 ].
sort([3, 1, 2]) returns [ 1, 2, 3 ].
sort([3, 2, 1]) returns [ 1, 2, 3 ].*/



/*ex.56 Array: shift() and push()
Write a function rotate that rotates the elements of an array. All elements should be moved one position to the left. The 0th element should be placed at the end of the array. The rotated array should be returned.

Example: rotate(['a', 'b', 'c']) should return ['b', 'c', 'a'].
*/

let rotate = (array) => {    //สมมุติ ['a','b','c']
  let first = array.shift();     //เหลือ ['b','c'] 
  //ต้องการ ['b','c','a'] ตอนนี้ a อยู่ใน first ก็ push ก็เข้า
  array.push(first);  //เอา 'a' กลับเข้าไปด้วย push , push จะต่อหลัง
  return array;
  
}

/*
rotate([1, 2]) returns [ 2, 1 ].
rotate(['a', 'b', 'c']) returns [ 'b', 'c', 'a' ].
rotate([1, 'b', 'c', 37]) returns [ 'b', 'c', 37, 1 ]
*/

/**ex.57 
 Write a function add that adds an element to the end of an array. However, the element should only be added if it is not already in the array.

Example: add([1, 2], 3) should return [1, 2, 3] and add([1, 2], 2) should return [1, 2].
 */

function add(arr, element) { // รับ arguments คือ arr และ element
  if (arr.indexOf(element) === -1) { // ใช้ method indexOf() ในการตรวจสอบว่า element มีอยู่ใน arr หรือไม่
    arr.push(element); // ถ้าไม่มีให้เพิ่ม element เข้าไปในตำแหน่งสุดท้ายของ arr ด้วย method push()
  }
  return arr; // คืนค่า Array ที่อัพเดทแล้ว ไม่ว่าจะเพิ่มหรือไม่ก็ตาม
}

/*
add(['J'], 'S') returns [ 'J', 'S' ].
add(['J'], 'J') returns [ 'J' ].
add([1, 2], 3) returns [ 1, 2, 3 ].
add([1, 2], 2) returns [ 1, 2 ]
*/