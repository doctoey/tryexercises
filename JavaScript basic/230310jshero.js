/* ex.20
Write a function length that takes a string and returns the number of characters of the string.

Example: length('sun') should return 3.
*/
let length20 = (sun) => sun.length

// length20('sun') returns 3.
// length20('Hello world!') returns 12.
// length20('') returns 0.

/* ex.21
Write a function toCase that takes a string and returns that string in lowercase and uppercase with - as delimiter.

Example: toCase('Mthatha') should return 'mthatha-MTHATHA'.
*/
let toCase1578 = (text) => {
  return text.toLowerCase() + '-' + text.toUpperCase();
}

// toCase1578('Mthatha') returns 'mthatha-MTHATHA'.
// toCase1578('Johannesburg') returns 'johannesburg-JOHANNESBURG'.

/*ex.22
Write a function shortcut that takes two strings and returns the initial letters of theses strings.

Example: shortcut('Amnesty', 'International') should return 'AI'.
*/

function shortcut22(para1, para2) {
  return para1.charAt(0) + para2.charAt(0);
}
// shortcut22('Amnesty', 'International') returns 'AI'.
// shortcut22('Java', 'Script') returns 'JS'.

/*ex.23
Write a function firstChar, which returns the first character that is not a space when a string is passed.

Example: firstChar(' Rosa Parks ') should return 'R'.
*/
function firstChar23(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      return str[i];
    }
  }
  return null; // if string contains only spaces, return null
}

// firstChar23('Rosa') returns 'R'.
// firstChar23(' Louise') returns 'L'.
// firstChar23('  Parks') returns 'P'.

/* ex.27
Write a function normalize, that replaces '-' with '/' in a date string.

Example: normalize('20-05-2017') should return '20/05/2017'.

*/

function normalize(para) {
  return para.replace(/-/g, '/');
 
}

//normalize('20-05-2017') returns '20/05/2017'.
//normalize('8-11-1922') returns '8/11/1922'.

/*
/-/g เป็น regular expression ที่ใช้ในการค้นหาและแทนที่ข้อความใน JavaScript 
โดยจะค้นหาตัวอักษรหรือตัวอักษรที่ตรงกับตัวอักษรที่ระบุใน regular expression แล้วแทนที่ด้วยตัวอักษรอื่นตามที่ระบุ 
ในที่นี้ /-/g คือ regular expression ที่ใช้ค้นหาและแทนที่เครื่องหมายขีดกลาง (-) ใน dateStr ด้วยเครื่องหมายสแลช (/) 
ที่จะเปลี่ยนแปลงรูปแบบวันที่ในรูปแบบ dd-mm-yyyy เป็น dd/mm/yyyy ใช้ /g หลังจาก /- เพื่อระบุว่าต้องการค้นหาและแทนที่ทุกตัวอักษรที่ตรงกันใน dateStr ทั้งหมด 
ไม่ใช่แค่ตัวอักษรแรกที่พบ แต่ทุกตัวอักษรที่ตรงกันทั้งหมด
*/


/*ex.28 
Write a function add that takes two numbers and returns their sum.

Example: add(1, 2) should return 3.
*/
let add = (x, y) => x + y
add(1, 2) //3


/*ex.29
Which value does x have after execution of the following code?
let x = 3;
x++;          //4
x = x * 2;      //8
x--;    //7
*/

/* ex.30 Fahrenheit Write a function toFahrenheit that converts a temperature from Celsius to Fahrenheit.

Example: toFahrenheit(0) should return 32.
*/
let toFahrenheit = (x) => x*9/5+32


/* ex.31 Modulo
 Write a function onesDigit that takes a natural number and returns the ones digit of that number.

Example: onesDigit(2674) should return 4.
*/
function onesDigit(x) {
  return x % 10;
}

/* ex.32 Parentheses
Write a function mean that takes 2 numbers and returns their mean value.

Example: mean(1, 2) should return 1.5.
*/

let mean = (x, y) => (x+y)/2



/* ex.33 Math
Write a function hypotenuse that calculates the length of the hypotenuse of a right triangle. 
The length of the two legs is passed to the function. 
Tip: In a right triangle the Pythagorean theorem is valid. 
If a and b are the lengths of the two legs and c is the length of the hypotenuse, 
the following is true: a² + b² = c². Since 3² + 4² = 5² applies, hypotenuse(3, 4) should return 5.

*/

function hypotenuse(a, b) {
  let cSquare = Math.pow(a, 2) + Math.pow(b, 2);
  return Math.sqrt(cSquare);
}

/*ฟังก์ชันนี้ใช้สูตรพีธาโกรัส (Pythagoras's theorem)  c^2 = a^2 + b^2
ฟังก์ชัน hypotenuse จะรับพารามิเตอร์ a และ b เพื่อคำนวณหาความยาวของ (c) โดยกำหนดค่า c^2 ด้วยค่า a^2 บวก b^2 แล้วใช้ Math.sqrt() เพื่อหาค่ารากที่สองของ c^2 
*/


/*ex. 34 min and max 
Write a function midrange, that calculates the midrange of 3 numbers. The midrange is the mean of the smallest and largest number.

Example: midrange(3, 9, 1) should return (9+1)/2 = 5.
*/
function midrange(a, b, c) {
  let min = Math.min(a, b, c);
  let max = Math.max(a, b, c);
  return (min + max) / 2;
}


/*ex.35 Math.PI 
Write a function area that calculates the area of a circle. The function is given the radius of the circle.

Example: area(1) should return π and area(2) should return 4 * π.
*/

function area(radius) {
  return Math.PI * radius ** 2;
}
/*สูตรหาพื้นที่ของวงกลมคือ πr^2  (พายอาร์กำลังสอง) */



/* ex.36 Rounding
Write a function round100 that rounds a number to the nearest hundred.

Example: round100(1749) should return 1700 and round100(856.12) should return 900.
*/
function round100(num) {
  return Math.round(num/100)*100;
}
/*round100(49.999) returns 0.

round100(50) returns 100.

round100(349) returns 300.

round100(350) returns 400.*/
/*ฟังก์ชัน round100 ที่ให้มานั้นเป็นฟังก์ชันที่ใช้ในการปัดเลขให้เป็นหลักร้อย (round to nearest hundred) โดยมีจำนวนเต็มตัวเลขเป็นพารามิเตอร์ของฟังก์ชัน

สมการที่ใช้ในการคำนวณคือ Math.round(num/100)*100 ซึ่งจะทำการหารจำนวนที่รับเข้ามาด้วย 100 แล้วใช้ฟังก์ชัน Math.round() 
เพื่อปัดเศษขึ้นหรือลงให้เป็นจำนวนเต็มที่ใกล้เคียงที่สุดกับตัวเลขที่รับเข้ามา แล้วคูณด้วย 100 เพื่อให้ได้ผลลัพธ์เป็นหลักร้อยที่ใกล้เคียงที่สุดกับตัวเลขที่รับเข้ามา*/


/*ex.37 Random numbers 
Write a function dice that returns like a dice a random number between 1 and 6.
*/

let dice = () => {
 return Math.floor(Math.random()*6) + 1;
}

/*Math.random() และ Math.floor() เพื่อสุ่มเลขจำนวนเต็มและปัดเศษลงเป็นจำนวนเต็ม
โดยฟังก์ชัน Math.random() จะสุ่มเลขตั้งแต่ 0 ถึงน้อยกว่า 1 ซึ่งเราจะนำมาคูณด้วย 6 เพื่อให้ได้เลขตั้งแต่ 0 ถึงน้อยกว่า 6
จากนั้นเราจะใช้ Math.floor() เพื่อปัดเลขที่ได้ลงเป็นจำนวนเต็ม ซึ่งจะเป็นค่าที่อยู่ระหว่าง 0 ถึง 5 ซึ่งเป็นเลขที่เราต้องการ จากนั้นเราจะบวกด้วย 1 เพื่อให้ได้เลขตั้งแต่ 1 ถึง 6 ตามที่เราต้องการ
*/


/*ex.38 
Write a function add that takes a string with a summation task and returns its result as a number. 
Two natural numbers should be added. The summation task is a string of the form '102+17'.

Example: add('102+17') should return 119.*/

function add(x) {
  const [num1, num2] = x.split('+').map(Number);
  return num1 + num2;
}

add('112+112')   //224


/*ex.39 Boolean
Write a function nand that takes two Boolean values. If both values are true, 
the result should be false. In the other cases the return should be true.

I.e.: The call nand(true, true) should return false. 
The calls nand(true, false), nand(false, true) and nand(false, false) should return true.

*/

let nand = (x, y) => {
if (x === true && y === true) {
return false
} else {
return true
}
}
/*
nand(true, true) returns false.
nand(true, false) returns true.
nand(false, true) returns true.
nand(false, false) returns true.
*/


/*ex.40 NOR
Write a function nor that takes two Boolean values. If both values are false, the result should be true. In the other cases the return should be false.

I.e.: The call nor(false, false) should return true. The calls nor(true, false), nor(false, true) and nor(true, true) should return false.

*/

//สลับกับข้อข้างบนแหละ โกงเอา
let nor = (x, y) => {
if (x === false && y === false) {
return true
} else {
return false
}
}

/*
nor(false, false) returns true.
nor(false, true) returns false.
nor(true, false) returns false.
nor(true, true) returns false.
*/


/*ex.41 XOR
Write a function xor that takes two Boolean values. If both values are different, the result should be true. 
If both values are the same, the result should be false.

I.e.: The calls xor(true, false) and xor(false, true) should return true. 
The calls xor(true, true) and xor(false, false) should return false.

*/
let xor1 = (x, y) => {
  let b =  (x != y)
return b
} 

let xor2 = (x, y) => {
if (x != y) {
return true
} else {
return false
}
} 
/*
xor(true, true) returns false.
xor(false, false) returns false.
xor(true, false) returns true.
xor(false, true) returns true.
*/

/*ex.42 Strict equality
Write a function equals that checks two values for strict equality.

Example: equals(1, 1) should return true and equals(1, 2) should return false.

*/

let equals1 = (a, b) => {
  return a === b;
}

let equals2 = (a, b) => {
if (a === b){
return true
} else {
return false
}
}

/*
equals(1, 1) returns true.
equals(1, '1') returns false.
equals(1, 2) returns false.
equals('sun', 'sun') returns true.
equals('left', 'right') returns false.
*/


/*ex.43 Three identical values
Write a function equals that checks 3 values for strict equality. The function should only return true if all 3 values are equal.

Example: equals(1, 1, 1) should return true and equals(1, 2, 1) should return false.

*/

let equals3 = (a, b, c) => {
  return a === b && a === c;
}

let equals4 = (a, b, c) => {
if (a === b && a === c){
return true
} else {
return false
}
}

/*
equals(1, 1, 1) returns true.
equals('1', 1, 1) returns false.
equals(1, '1', 1) returns false.
equals(1, 1, '1') returns false.
equals('A', 'B', 'C') returns false.
*/


/*ex.44 Even numbers เลขคู่วววว
Write a function isEven that checks if a passed number is even. If the given number is even, true should be returned, otherwise false.

Example: isEven(2) should return true and isEven(3) should return false.
*/

let isEven = (num) => {
  return num % 2 === 0;
}

/*
isEven(0) returns true.
isEven(1) returns false.
isEven(2) returns true.
isEven(37) returns false.
isEven(208) returns true.
*/

/*
อธิบาย 
=
==
===
!=
!==

= ใช้สำหรับกำหนดค่า ไม่ใช่ตัวดำเนินการเปรียบเทียบ
== ใช้สำหรับเปรียบเทียบค่าระหว่างสองตัวแปร โดยไม่คำนึงถึงชนิดของข้อมูล (type coercion)
=== ใช้สำหรับเปรียบเทียบค่าระหว่างสองตัวแปร โดยใช้ชนิดของข้อมูล (type comparison) และค่าต้องเท่ากันทั้งค่าและชนิดของข้อมูล
!= ใช้สำหรับตรวจสอบว่าค่าสองค่าไม่เท่ากัน โดยไม่คำนึงถึงชนิดของข้อมูล
!== ใช้สำหรับตรวจสอบว่าค่าสองค่าไม่เท่ากัน โดยใช้ชนิดของข้อมูลและค่าต้องไม่เท่ากันทั้งค่าและชนิดของข้อมูล

ตัวอย่างการใช้งาน

var a = 5;
var b = "5";

// == ใช้การแปลงชนิดของข้อมูล (type coercion)
console.log(a == b);   // true
console.log(a == 5);   // true
console.log(a == "5"); // true

// === เปรียบเทียบค่าและชนิดของข้อมูล
console.log(a === b);   // false
console.log(a === 5);   // true
console.log(a === "5"); // false

// != ใช้การแปลงชนิดของข้อมูล (type coercion)
console.log(a != b);   // false
console.log(a != 6);   // true
console.log(a != "6"); // true

// !== เปรียบเทียบค่าและชนิดของข้อมูล
console.log(a !== b);   // true
console.log(a !== 5);   // false
console.log(a !== "5"); // true

*/

/*ex.45 Strict inequality
Write a function unequal that checks 3 values for strict inequality. The function should return true if all three parameters are strict unequal. Otherwise false.

Example: unequal(1, 2, 3) should return true and unequal(1, 1, 2) should return false.
*/

let unequal = (a, b, c) => {
  return a !== b && a !== c && b !== c;
}

let unequa2 = (a, b, c) => {
if (a !== b && a !== c && b !== c){
return true
} else {
return false
}
}

/*
unequal(1, 2, 3) returns true.
unequal(2, 1, 1) returns false.
unequal(1, 2, 1) returns false.
unequal(1, 1, 2) returns false.
unequal('rose', 'Rose', 'ROSE') returns true.
unequal('1', 1, true) returns true.
*/


/*ex.46 Compare numbers
Write a function isThreeDigit that checks if a number is greater than or equal to 100 and less than 1000.

Example: isThreeDigit(500) should return true and isThreeDigit(50) should return false.

*/

let isThreeDigit = (x) => {
return x >= 100 && x < 1000;
}

/*
isThreeDigit(100) returns true.
isThreeDigit(999) returns true.
isThreeDigit(99) returns false.
isThreeDigit(1000) returns false.
*/

/*ex.47 if
Write a function equals that checks two values for strict equality. If the two values are equal, the string 'EQUAL' should be returned. If they are unequal, you should get 'UNEQUAL'.

Example: equals(1, 1) should return 'EQUAL' and equals(1, 2) should return 'UNEQUAL'.

*/

let equals5 = (x, y) => {
  let result = 'UNEQUAL';
  if (x === y) {
    result = 'EQUAL';
  }
  return result;
}

let equals6 = (x, y) => {
if (x === y) {
return 'EQUAL'
} else {
return 'UNEQUAL'
}
}

/*
equals(1, 1) returns 'EQUAL'.
equals(1, 2) returns 'UNEQUAL'.
equals(1, '1') returns 'UNEQUAL'.
equals('JS', 'JS') returns 'EQUAL'.
equals('left', 'right') returns 'UNEQUAL'.
*/


/*ex.48 Two returns
Write a function repdigit that determines whether a two-digit decimal is a repdigit or not. If the decimal is a repdigit, 'Repdigit!' should be returned, otherwise 'No Repdigit!'.

Example: repdigit(22) should return 'Repdigit!' and repdigit(23) should return 'No Repdigit!'.

*/

function repdigit(num) {
  if (num < 10 || num > 99) {
    return 'No Repdigit!';
  }
  const digit1 = num % 10;
  const digit2 = Math.floor(num / 10);
  return digit1 === digit2 ? 'Repdigit!' : 'No Repdigit!';
}

/*
repdigit(11) returns 'Repdigit!'.
repdigit(55) returns 'Repdigit!'.
repdigit(99) returns 'Repdigit!'.
repdigit(10) returns 'No Repdigit!'.
repdigit(12) returns 'No Repdigit!'.
repdigit(98) returns 'No Repdigit!'.
*/
