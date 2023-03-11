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
