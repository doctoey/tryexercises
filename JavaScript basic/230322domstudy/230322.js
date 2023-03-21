let myDiv = document.getElementById('myDiv'); //แบบก่อน
console.log(myDiv);

let myDiv2 = document.querySelector('.myDiv2') //ได้เหมือนกัน ระวังต้องอ้างอิง # id , . class
console.log(myDiv2);

let myDiv3 = document.querySelector('div');  //ออกมาเป็นตัวแรก mydiv 1 < ใน html ไม่ใช่ใน js 
console.log(myDiv3);

let myDiv4 = document.querySelectorAll('div');  //ทุกตัว   //แนะนำใช้ querySelector
console.log(myDiv4);
myDiv4.forEach((element) => console.log(element))   // แสดงผลออกมา ทั้งหมดเลย ไม่อยู่ในก้อนแล้ว

let myDiv5 = document.getElementsByClassName('myDiv2');  // html collection ที่มี myDiv2 อยู่ด้านใน
console.log(myDiv5);

let myDiv6 = document.getElementsByTagName('div');  //html colloection  3 ตัว get div ทั้งหมด
console.log(myDiv6);
