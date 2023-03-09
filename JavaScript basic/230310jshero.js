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

