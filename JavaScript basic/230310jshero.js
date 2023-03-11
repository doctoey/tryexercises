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
