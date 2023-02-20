
let a = document.getElementsByTagName('p');
console.log(a);

let b = document.getElementById('demo')
console.log(b);


let c = document.getElementsByTagName('p')
console.log(c);

function displaytext() {
    b.innerText="สอน JAVa เบื้องต้น" ;  //กดปุ้บ ตัวอักษรเปลี่ยนนนน
    b.innerHTML="<Storng>สอน JAVa เบื้องต้น</Storng>" ; // ใส่ฝั่ง html ได้แล้ว ถ้าใส่ strong ตรงฝั่ง text จะแสดงผลมาทั้งดุ้นเลย 
}

let x = 10;
let y = 20;
function displaytext() { 
    b.innerHTML="แสดงข้อมูลในตัวแปร = " + x + "และ ตัวแปร " + y; 
}

let xx = 10;
let yy = 20;
let d = document.getElementById('demoo');
console.log(d);
function displaytextt() {
    d.innerHTML=`แสดงข้อมูลตัวแปร x = ${xx} y= ${yy}` ;   // ` กด windows + ลูกน้ำวินึง
}

let e = document.querySelector('#myjs');   //ส่วนใหญ่จะใช้อ้างอิง clsss ถ้า id จะใช้ getElementById
console.log(e);


let aa = document.querySelector('#demo');
console.log(aa);

let aab = document.querySelector('p'); //เอาแท็ก p ตัวแรกมา
console.log(aab);

//ถ้าจะดึง แท็ก p มาทุกตัว 
const aac = document.querySelectorAll('p'); //เอาแท็ก p ทุกตัว
console.log(aac);


//let เปลี่ยนแปลงค่าได้ตลอด
//const ใช้เป็นมาตรฐานมากกว่า ส่วนใหญ่จะใช้เป็นตัวกำหนดการเข้าถึง id , class , tag