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

/* ex.66 Factorial
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

/* ex.67 Loops and arrays
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

let mean555444 = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length
}

// mean([0]) returns 0.
// mean([1, 2]) returns 1.5.
// mean([1, 2, 3]) returns 2.
// mean([-2, -4, 17, 34]) returns 11.25.

/* ex.68 while loop
Write a function spaces that takes a natural number n and returns a string of n spaces.

Example: spaces(1) should return ' '.
*/
function spaces(n) {
  return ' '.repeat(n);
}

function spaces555444343(n) {
  if (n < 0) {
    return '';
  }
  
  return ' '.repeat(n);
}

// spaces(0) returns ''.
// spaces(1) returns ' '.
// spaces(2) returns '  '.
// spaces(3) returns '   '.

/*
ex.69 do...while loop
Exercise
Write a function lcm that takes two natural numbers and calculates their least common multiple (lcm). The lcm of two natural numbers a und b is the smallest natural number that is divisible by a and b.
ครน.
Example: lcm(4, 6) should return 12.
*/

function lcm(a, b) {
  // Find the maximum of the two numbers
  let max = Math.max(a, b);

  // Start with the maximum as a potential LCM
  let lcm = max;

  // Keep incrementing the potential LCM until it is divisible by both a and b
  while (true) {
    if (lcm % a === 0 && lcm % b === 0) {
      // If the potential LCM is divisible by both a and b, it's the LCM
      return lcm;
    }
    // If not, increment the potential LCM and check again
    lcm += max;
  }
}

// lcm(1, 1) returns 1.
// lcm(1, 2) returns 2.
// lcm(2, 3) returns 6.
// lcm(3, 2) returns 6.
// lcm(4, 6) returns 12.
// lcm(5, 7) returns 35.
// lcm(6, 8) returns 24.
// lcm(10, 20) returns 20.
// lcm(20, 10) returns 20.
/*
lcm(5, 7) returns 35.
1. ตัวแรก ฟังก์ชันจะหาตัวเลขที่มากที่สุดระหว่างตัวเลขทั้งสอง ซึ่งในกรณีนี้คือ 7 ดังนั้น lcm จะเริ่มต้นที่ 7 เอง.
2. จากนั้นฟังก์ชันเข้าสู่ลูป while ที่วนลูปไปเรื่อย ๆ (while (true)) และตรวจสอบว่า lcm ปัจจุบันหารด้วยทั้ง 5 และ 7 ลงตัวหรือไม่โดยใช้ตัวหารเหลือ (%) 
ในกรณีนี้ lcm % a ตรวจสอบว่า 7 หารด้วย 5 ได้หรือไม่ ซึ่งในกรณีนี้ไม่ได้ ดังนั้นเงื่อนไขกลายเป็น false.
3. เนื่องจากเงื่อนไขเป็น false ฟังก์ชันจะเพิ่มค่า lcm อีก 7 ทำให้ lcm เป็น 14.
4. จากนั้นมันตรวจสอบอีกครั้งว่า lcm หารด้วยทั้ง 5 และ 7 หรือไม่ ตอนนี้ 14 % 5 ก็ยังไม่เท่ากับ 0 ดังนั้นเงื่อนไขยังคงเป็น false อีกครั้ง.
5. มันจะเพิ่มค่า lcm อีก 7 และตรวจสอบเงื่อนไขอีกครั้ง แต่ในที่นี้ลูปจะทำงานต่อไปเรื่อย ๆ เนื่องจากไม่มีค่าใดที่ทำให้ทั้งสองเงื่อนไขเป็น true นี่เป็นเพราะ 5 และ 7 เป็นจำนวนเฉพาะ 
และ LCM ของพวกเขาคือผลคูณของพวกเขาคือ 5 * 7 = 35 โดยที่ลูปไม่สามารถหาค่าใด ๆ ที่ทำให้ทั้งสองเงื่อนไขเป็น true ซึ่งทำให้ลูปทำงานต่อไปตลอดเวลาและฟังก์ชันไม่สามารถคืนผลลัพธ์ได้.
*/

function lcmWeb(a, b) {

  let theLCM = 0;
  let remainderA;
  let remainderB;

  do {

    theLCM++;
    remainderA = theLCM % a;
    remainderB = theLCM % b;

  } while (remainderA !== 0 || remainderB !== 0)

  return theLCM;
}

/* ex.70 gcd (greatest common divisor) หรม.
Write a function gcd that takes two natural numbers and calculates their gcd.
Example: gcd(6, 15) should return 3.
*/

let gcd1234567 = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
// gcd(1, 1) returns 1.
// gcd(1, 2) returns 1.
// gcd(2, 3) returns 1.
// gcd(2, 4) returns 2.
// gcd(6, 15) returns 3.
// gcd(12, 18) returns 6.
// gcd(18, 12) returns 6.
// gcd(15, 45) returns 15.
// gcd(45, 15) returns 15.

/*
gcd(6, 15) returns 3.

1.นำ a (6) หารด้วย b (15) และเก็บเศษไว้ใน b:
6 % 15 = 6

2.สลับค่า a และ b:
a = 15
b = 6

3.ทำซ้ำขั้นตอน 1 และ 2 จนกว่า b จะเป็น 0:
15 % 6 = 3
a = 6
b = 3

4.15 % 3 = 0

5.เมื่อ b เป็น 0, ค่า a ที่เหลือคือ GCD ของ 6 และ 15, ซึ่งในกรณีนี้คือ 3.
*/
/*
แบบคิดว่าไม่งง 1
1.เริ่มต้น gcd โดยรับค่า a และ b โดยในกรณีนี้ a คือ 6 และ b คือ 15.
2.เข้าสู่ while loop ซึ่งตรวจสอบว่า b ไม่เท่ากับ 0. ในขณะนี้, b มีค่าเป็น 15 ซึ่งไม่เท่ากับ 0 ดังนั้นโค้ดเข้าสู่ลูป.
3.ในแต่ละรอบของ loop:
สร้างตัวแปรชั่วคราว temp และกำหนดค่า temp ให้เท่ากับ b ซึ่งในขณะนี้ temp มีค่า 15.
คำนวณค่า b ใหม่โดยใช้เศษจากการหาร a ด้วย b ซึ่งคำนวณเป็น a % b ในกรณีนี้ 6 % 15 เท่ากับ 6. ดังนั้น, b จะกลายเป็น 6.
คำนวณค่า a ใหม่โดยกำหนด a เป็น temp ซึ่งคือค่าเดิมของ b ซึ่งเป็น 15.
4.ทำขั้นตอนที่ 3 ซ้ำไปเรื่อย ๆ จนกว่า b จะเป็น 0. การสลับค่า a และ b และคำนวณเศษต่อเนื่องไปจนกว่า b จะกลายเป็น 0 คือส่วนหนึ่งของวิธีการ Euclidean algorithm.
5.เมื่อ b เป็น 0, ค่า a ที่เหลือเป็น GCD ของ 6 และ 15.
6.สุดท้าย, ฟังก์ชัน gcd(6, 15) จะคืนค่า a ซึ่งในกรณีนี้เป็น 3.

รอบน่าจะไม่งง 2
1.ฟังก์ชัน gcd รับค่า a และ b เข้ามาเพื่อคำนวณ GCD ของทั้งสองเลข.
2.ใน while loop, โค้ดตรวจสอบว่า b ไม่เท่ากับ 0 ดังนั้นจะเข้าสู่วงรอบของ loop ซึ่งทำงานจนกว่า b จะเป็น 0.
3.ในแต่ละรอบของ loop, โค้ดทำการสร้างตัวแปรชั่วคราว temp และกำหนดค่า temp เป็น b ซึ่งเป็นการเก็บค่า b ไว้.
4.จากนั้น, โค้ดคำนวณค่า b ใหม่โดยใช้เศษจากการหาร a ด้วย b โดยใช้ a % b. นี่คือขั้นตอนหลักของ Euclidean algorithm.
5.หลังจากนั้น, โค้ดสลับค่า a และ b โดยกำหนด a เป็น temp ที่เก็บค่าเดิมของ b ไว้.
6.ทำขั้นตอน 3-5 ซ้ำไปเรื่อย ๆ จนกว่า b จะเป็น 0. เมื่อ b เป็น 0, ค่า a ที่เหลือเป็น GCD ของ a และ b.
7.สุดท้าย, ฟังก์ชันคืนค่า GCD ที่คำนวณได้.

รอบงงๆ 3
1.เริ่มต้นโดยรับค่า a และ b เข้ามาในฟังก์ชัน gcd.
2.เราใช้วงรอบ while เพื่อคำนวณ GCD ของ a และ b โดยที่เงื่อนไขของวงรอบคือ b !== 0 คือเราจะทำวงรอบไปเรื่อย ๆ จนกว่าค่า b จะเป็น 0.
3.ในแต่ละรอบของวงรอบ while, เราทำการสลับค่า a และ b โดยให้ b รับค่า a % b และ a รับค่า b ที่เราเก็บไว้ในตัวแปรชั่วคราว temp.
4.การทำการสลับค่า a และ b นี้เป็นการลดค่าของ b ลงไปเรื่อย ๆ จนกว่า b จะเป็น 0. เมื่อ b เป็น 0, a จะเป็น GCD ของ a และ b.
5.สุดท้าย, เมื่อวงรอบ while สิ้นสุด ฟังก์ชันจะคืนค่า a ที่เป็น GCD ของ a และ b กลับไป.
*/

function gcd345(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}



/* ex.71 break and continue
Write a function isPrime that checks whether a passed number is prime. In case of a prime number it should return true, otherwise false.
Example: isPrime(7) should return true and isPrime(8) should return false.
 */

let isPrime1 = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
          return false;
      }
  }
  return true;
}
let isPrime2 = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++)
      if (n % i === 0) return false;
  return true;
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  
  if (number <= 3) {
    return true;
  }
  
  // Check if the number is divisible by 2 or 3
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  
  // Start checking for prime from 5, using 6k +/- 1 rule
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }
  
  return true;
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  
  if (number <= 3) {
    return true;
  }
  
  // Check if the number is divisible by 2 or 3
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  
  // Start checking for prime from 5, using 6k +/- 1 rule
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }
  
  return true;
}

let isPrime555 = (num) => {

  if (num <= 1) {
    return false
  }

  let isPrime = true;

  for (let i = 2; i < num; i++) {

    if (num % i === 0) {
      isPrime = false
      break;
    }
  }

  return isPrime
}

// isPrime(1) returns false.
// isPrime(2) returns true.
// isPrime(3) returns true.
// isPrime(4) returns false.
// isPrime(11) returns true.
// isPrime(281) returns true.
// isPrime(351) returns false.

/* ex.72. Nested loops
Write a function sum that calculates the sum of all elements of a two-dimensional array.
Example: sum([[1, 2], [3]]) should return 6.
 */

function sum1(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    const innerArray = arr[i];
    for (let j = 0; j < innerArray.length; j++) {
      total += innerArray[j];
    }
  }
  return total;
}

let sum2 = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum = sum + arr[i][j];
    }
  }
  return sum
}

// sum([[1]]) returns 1.
// sum([[1, 2], [3]]) returns 6.
// sum([[1, 2, 3], [1, 2], [1, 2, 3, 4]]) returns 19.



/* ex.73. The arguments object
Write a function max that calculates the maximum of an arbitrary number of numbers.
Example: max(1, 2) should return 2 and max(2, 3, 1) should return 3.
*/

let max = (...para) => {
  return Math.max(...para);
}
//ใช้ rest parameter (...) เพื่อให้ฟังก์ชันรับค่าจำนวนไม่จำกัด

// max(1) returns 1.
// max(15, 2) returns 15.
// max(1, 15, 3) returns 15.
// max(-1, 0, 9, 8) returns 9.

/* ex.74. NaN
Write a function parseFirstInt that takes a string and returns the first integer present in the string. If the string does not contain an integer, you should get NaN.
Example: parseFirstInt('No. 10') should return 10 and parseFirstInt('Babylon') should return NaN.
*/

function parseFirstInt(str) {
  let result = '';
  for (let char of str) {
    if (!isNaN(char) || char === '-') {
      result += char;
    } else if (result) {
      break;
    }
  }
  return parseInt(result) || NaN;
}
// -?: ตัวอักษร - นำหน้าหรือไม่นำหน้าตัวเลข (ใช้ ? ในการบอกว่ามีหรือไม่มี - ก็ได้)
// \d+: ตัวเลข (0-9) ที่ปรากฏอย่างน้อยหนึ่งครั้งขึ้นไป (ใช้ + ในการบอกว่าตัวเลขมีอย่างน้อยหนึ่งตัวขึ้นไป)
function parseFirstInt(str) {
  const matches = str.match(/-?\d+/);
  return matches ? parseInt(matches[0]) : NaN;
}

function parseFirstInt(str) {
  const match = /-?\d+/.exec(str);
  return match ? parseInt(match[0]) : NaN;
}

function parseFirstInt(input) {

  let inputToParse = input;

  for (let i = 0; i < input.length; i++) {
    let firstInt = parseInt(inputToParse);
    if (!Number.isNaN(firstInt)) {
      return firstInt;
    }
    inputToParse = inputToParse.substr(1);
  }

  return NaN;
}

// parseFirstInt('No. 10') returns 10.
// parseFirstInt('18.12') returns 18.
// parseFirstInt('Li is 22 years old.') returns 22.
// parseFirstInt('sum: -120') returns -120.
// parseFirstInt('a string') returns NaN.

/* ex.75. String: split()
Write a function add that takes a string with a summation task and returns its result as a number. A finite number of natural numbers should be added. The summation task is a string of the form '1+19+...+281'.
Example: add('7+12+100') should return 119.
*/

let add = (str) => {
  let split = str.split('+');
  let sum = 0
  for (let i = 0 ; i < split.length ; i++ ) {
    sum = sum + parseInt(split[i])
  }
  return sum
}

// add('1+2') returns 3.
// add('12+5+1+10') returns 28.
// add('13+2+4+100+3') returns 122.
// add('50000+4000+300+20+1') returns 54321.


/* ex.76 Functions call functions
Write a function sum that takes an array of numbers and returns the sum of these numbers. 
Write a function mean that takes an array of numbers and returns the average of these numbers. 
The mean function should use the sum function.
*/

// Function to calculate the sum of an array of numbers
function sum7663(numbers) {
  let total = 0; // Initialize a variable to store the sum
  for (let i = 0; i < numbers.length; i++) { // Iterate through the array
    if (typeof numbers[i] === 'number') { // Check if the element is a number
      total += numbers[i]; // Add the number to the total sum
    }
  }
  return total; // Return the final sum
}

// Function to calculate the average of an array of numbers using the sum function
function mean7663(numbers) {
  if (numbers.length === 0) {
    return 0; // Return 0 for empty arrays to avoid division by zero
  }
  return sum7663(numbers) / numbers.length; // Call the sum function and divide by array length to get the average
}



let sum760 = (arr) => {
  let result = 0
  for(let i = 0; i<arr.length;i++){
    result += arr[i]
  }
    return result
  }
  
  
  let mean760 = (arr) => {
  let result = 0
  for(let i = 0; i<arr.length;i++){
    result += arr[i]
  }
    return result / arr.length
  }

  let sum0110 = (arr) => {
    let sum = 0
    for (let i = 0 ; i < arr.length ; i++){
      sum = sum + arr[i]
    }
    return sum
  }
  
  let mean0110 = (arr) => {
    return (sum0110(arr))/arr.length
  }

  // sum([0]) returns 0
  // sum([1, 2]) returns 3.
  // sum([1, 4, 10, 85]) returns 100.
  // sum([-2, -4, 17, 34]) returns 45.

  // mean([0]) returns 0.
  // mean([1, 2]) returns 1.5.
  // mean([1, 4, 10, 85]) returns 25.
  // mean([-2, -4, 17, 34]) returns 11.25.

  
/* ex.77 Recursion
Write a function reverse that reverses the order of the characters in a string. The function should be recursive.
Example: reverse('live') should return 'evil'.
*/

let reverse = (ele) => {
  let a = ele.toString().split('').reverse().join('')
  return a
 }

let reverse2 = (str) => {
  return str.split('').reverse().join('')
}

let reverse3 = (str) => {
  let reversed = '';
  for(let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

let reverse4 = (str) => {
  if (str === '') {
    return '';
  } else {
    return reverse4(str.substr(1)) + str.charAt(0);
  }
}

let reverse5 = (str) => {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

let reverse6 = (str) => {
  return Array.from(str).reverse().join('');
}
 
// reverse('abc')
// reverse('') returns ''.
// reverse('X') returns 'X'.
// reverse('az') returns 'za'.
// reverse('12345') returns '54321'.
// reverse('live') returns 'evil'.


/* ex.78. Roman numerals I
Write a function arabic that converts a Roman number (up to 1000) into an Arabic.

Example: arabic('CDLXXXIII') should return 483.
*/

function arabic(roman) {
  const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    if (i < roman.length - 1 && romanNumerals[roman[i]] < romanNumerals[roman[i + 1]]) {
      result = result - romanNumerals[roman[i]];
    } else {
      result = result + romanNumerals[roman[i]];
    }
  }

  return result;
}
