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


/*ex.54 Array: length
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

/**ex.57 Array: indexOf()
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

/*ex.58 Array: concat()
Write a function concatUp that concatenate two arrays. The longer array should be appended to the shorter array. 
If both arrays are equally long, the second array should be appended to the first array.

Example: concatUp([1, 2], [3]) should return [3, 1, 2] and concatUp([5, 7], [6, 8]) should return [5, 7, 6, 8].

*/ 
function concatUp(firstArray, secondArray) {

  if (secondArray.length >= firstArray.length) {
    return firstArray.concat(secondArray);
  } else {
  return secondArray.concat(firstArray);
}
}

/*
ถ้า array2 ยาว >= array 1 return array แรกตามด้วย array ที่สอง 

แต่ถ้า array1 ยาว >= array 2 จะ return array ที่สองตามด้วย array แรก
*/

/** 
concatUp([5, 7], [6]) returns [ 6, 5, 7 ].
concatUp(['x'], ['a', 'b']) returns [ 'x', 'a', 'b' ].
concatUp([5, 7], [6, 8]) returns [ 5, 7, 6, 8 ].
 */


/*
/*
ex.59 Array: slice()
Write a function halve that copies the first half of an array. With an odd number of array elements, the middle element should belong to the first half.

Example: halve([1, 2, 3, 4]) should return [1, 2].
*/
function halve(arr){
  let halve = Math.ceil(arr.length /2) //ปัดขึ้น ถ้า math.floor ปัดลง
  let result = arr.slice(0,halve)
  return result
}

// halve([1, 2]) returns [ 1 ].
// halve([1, 2, 3]) returns [ 1, 2 ].
// halve([1, 2, 3, 4]) returns [ 1, 2 ].
// halve([1, 2, 3, 4, 5]) returns [ 1, 2, 3 ].

/* ex.60
Write a function list that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'. An empty array should return an empty string.

Example: list(['Huey', 'Dewey', 'Louie']) should return 'Huey, Dewey and Louie'.
*/

function list(words) {

  if (words.length === 0) {
    return '';
  }

  if (words.length === 1) {
    return words[0];
  }

  let wordsExLast = words.slice(0, words.length - 1);
  let lastWord = words[words.length - 1];
  return wordsExLast.join(', ') + ' and ' + lastWord;
}

// list([]) returns ''.
// list(['love']) returns 'love'.
// list(['Ernie', 'Bert']) returns 'Ernie and Bert'.
// list(['Huey', 'Dewey', 'Louie']) returns 'Huey, Dewey and Louie'.
// list(['C', 'C++', 'Python', 'PHP']) returns 'C, C++, Python and PHP'.

/*
61 ข้าม
*/

/*
ex.62 Comments
Write a function median that takes an array of ascending numbers and returns the median of that numbers.

Example: median([1, 2, 10]) should return 2 and median([1, 2, 10, 100]) should return 6.
*/

function median(arr) {
  const n = arr.length;
  const mid = Math.floor(n / 2);
  
  if (n % 2 === 0) { //ตรงกลางบวกกันหารสอง
    return (arr[mid - 1] + arr[mid]) / 2;
  } else { //arr.length เลขคี่ เอาตรงกลางเลย
    return arr[mid];
  }
}

// median([1]) returns 1.
// median([1, 2]) returns 1.5.
// median([1, 2, 10]) returns 2.
// median([1, 1, 2, 10, 100, 101]) returns 6.


/*
ex.63 undefined
Write a function hello having one parameter and returning 'Hello <parameter>!'. If hello is called without an argument, 'Hello world!' should be returned.

Example: hello('Nala') should return 'Hello Nala!'.
*/
function hello(name) {
  name = name || 'world';
  return `Hello ${name}!`;
}

/*
function hello(name = 'world') {
  return `Hello ${name}!`;
}
*/
// hello('Nala') returns 'Hello Nala!'.
// hello('Badu') returns 'Hello Badu!'.
// hello() returns 'Hello world!'.

/*
ex.64 null
Write a function cutComment that takes one line of JavaScript and returns a possible line comment trimmed. If the line contains no line comment, null should be returned. For simplicity, we assume that the code does not contain the comment characters within a string.

Example: cutCommt('let foo; // bar') should return 'bar'.
*/
function cutComment(line) {
  const index = line.indexOf('//'); // find the index of the first occurrence of "//"
  if (index === -1) { // if "//" is not found, return null
    return null;
  }
  const comment = line.substring(index + 2).trim(); // extract the comment and remove whitespace
  return comment;
}

// cutComment('let foo; // bar') returns 'bar'.
// cutComment('let n; // number') returns 'number'.
// cutComment('let i;') returns null.

/*
ex. 65. for loop
Write a function addTo that accepts a number as a parameter and adds all natural numbers smaller or equal than the parameter. The result is to be returned.

Example: addTo(3) should return 1+2+3 = 6.

*/

let addTo = (num) => {
let number = 0
for ( let i=0 ; i<=num ; i++){
number += i
}
return number
}

// addTo(0) returns 0.
// addTo(1) returns 1.
// addTo(2) returns 3.
// addTo(3) returns 6.
// addTo(9) returns 45.

/*
ex.66 Factorial
Write a function factorial that calculates the factorial of a positive integer.

Example: factorial(3) should return 6.

 For example, 3! = 1*2*3 = 6. By definition, 0! = 1.
*/

let factorial = (n) => {
let num = 1
for (let i=1 ; i <=n ; i++){
num = num * i
}
return num
}

// factorial(0) returns 1.
// factorial(1) returns 1.
// factorial(2) returns 2.
// factorial(3) returns 6.
// factorial(4) returns 24.
// factorial(9) returns 362880.

/*ex.67 Loops and arrays
Write a function mean that accepts an array filled with numbers and returns the arithmetic mean of those numbers.

Example: mean([1, 2, 3]) should return (1+2+3)/3 = 2.
*/

function mean799(arr) {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}

function mean997(arr) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum / arr.length;
}

// mean([0]) returns 0.
// mean([1, 2]) returns 1.5.
// mean([1, 2, 3]) returns 2.
// mean([-2, -4, 17, 34]) returns 11.25.

/*ex.68 while loop
Write a function spaces that takes a natural number n and returns a string of n spaces.

Example: spaces(1) should return ' '.
*/
function spaces(n) {
  return ' '.repeat(n);
}

// spaces(0) returns ''.
// spaces(1) returns ' '.
// spaces(2) returns '  '.
// spaces(3) returns '   '.