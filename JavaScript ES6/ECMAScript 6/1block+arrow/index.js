//block scope

//การเขียนแบบเดิม

var x=10
if (x==10){
    var y = 500
    console.log("y ใน if = "+y);
}
console.log("y นอก if = " + y);   //เอามาดูข้างนอก y ใน if ก็ออกมา var เลยไม่ใช้แล้ว ใช้ let แทน
    
if (x==10) {
    let y = 478
    console.log("y ใน if แบบ let =" + y); 
}
console.log("y นอก if แบบ let =" + y);   // มันจะแจ้งว่า y เป็น 500 เพราะ var ข้างบนมันมองเป็น global variable

const a = 50
console.log(a); // แต่ถ้าลอง
// let a = 50 // จะไม่ได้ เพราะให้ a เป็น const แล้ว

//arrow fucnction

//แบบเดิม
function fullname(fname,lname){
    return fname+lname
}
console.log(fullname("Cheewathun","Lerttanapit"));

//ลดรู๊ป
fullname=(fname,lname)=>fname+lname

console.log(fullname("Cheewathun","Xylitol"));

setAge =(age)=>"อายุ วันโน = "+age
console.log(setAge(15));