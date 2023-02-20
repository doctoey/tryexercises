//การสร้างฟังก์ชั่น

// 1.ฟังก์ชั่นที่ไม่มีการรับส่งค่า
function print() {       //ฟังก์ชั่น ชื่อ()
    console.log("Hello World");
}
print();    //เป็นการเรียกชื่อ function


function message() {       //การนิยามมี ปีกกาเปิดปิด {}
    alert("แจ้งเตือน ง่วง");
}
function displayname() {
    document.write("Cheewathun");
}



function plusnumber(x) {
    console.log("เลขที่ส่งมาคือ" , x);   //ตัวแปร x คือพารามิเตอร์ สร้างไว้สำหรับรับค่า (ตัวแปรรับ)
}
plusnumber(5);   //เลข 5 จะถูกนิยามให้เก็บอยู่ในตัวแปร x
plusnumber(15);

let numberr = 200;   //ในส่วนของเลข 5 10 และ numberr เรียก อาร์กิวเมนต์ (ตัวแปรส่ง)
plusnumber(numberr);


// 2.ฟังก์ชั่นที่มีการรับค่าเข้ามาทำงาน

function fullname(fname , lname , city){
     console.log("ชื่อจริง =" , fname , "นามสกุล = " , lname , "จังหวัด" , city);
}
fullname("Cheewathun" , "Fhuz" , "กุงเต๊บ");
fullname("Cheewathun");   //ถ้าไม่ส่ง lname จะกลายเป็น undefined



function summation(x,y) {
    let total = x+y;
    console.log("ผลรวม",total);
}
summation(15,4);



//3.ฟังก์ชั่นที่มีการส่งค่าออกมา

function getip() {
    return "127.0.0.99"
}
let myIP = getip();
console.log("ไอพีของคอมเลา = " , myIP );



function getNUMBER() {
    return 100*100;
}
let TOTALL = getNUMBER()
console.log(TOTALL);



function getADDRESS() {
    return "bangkok";
}
let ADDRESS = getADDRESS()
console.log("ที่อยู่ของเลา = " ,ADDRESS);

//4.ฟังก์ชั่นที่มีการรับค่าเข้ามา และ ส่งค่าออกไป

function setsalary(salary) {
    let bonus = 1000; 
    return salary+bonus;
}
let AA = setsalary(15000);
AA-=500;
console.log("A เงินเดือนรวม =",AA);

let BB = setsalary(18000);
console.log("B เงินเดือนรวม =",BB);


function sumxxyy(xx,yy) {
    return xx+yy;
}
let summ = sumxxyy(50,100);
console.log("ผลรวม = " ,summ);


function getname(namee , cityy) {
    return namee+cityy
}
let namcit = getname("cheewathun" , "_bangkok")
console.log(namcit);


//ฟังก์ชั่นแบบกำหนดค่าเริ่มต้น

//เอามาจาก ข้อ 2 ข้างบน แก้นิดหน่อยให้ตัวแปรไม่ซ้ำ ขี้เกียจพิมพ์
function ffullname(ffname , llname="สุดปัง" , ccity="กรุงเทพ"){  //แบบเดิม ถ้าไม่ส่ง lname , ccity จะกลายเป็น undefined จะตั้ง ccity เป็นค่าเริ่มต้นเลย 
    console.log("ชื่อจริง =" , ffname , "นามสกุล = " , llname , "จังหวัด" , ccity);
}
ffullname("Cheewathun" , "Fhuz" , "กุงเต๊บ"); //ป้อนครบ
ffullname("Cheewathun2" , "LLfNAME");   //ขาด city
ffullname("Cheewathun3" );    // ขาด lname + city



//ขอบเขตตัวแปร

//เช่น let a = 100; 
//อันนี้คือ global variable ขอบเขตการทำงานคือบรรทัดแรก จนบรรทัดสุดท้ายในไฟล์

let G = 12345 //global
function display() {
    let H=50;  //local
    console.log("ตัวแปร G ในฟังก์ชั่น(local) = " , G);
    console.log("ค่าอื่นๆ H ในฟังก์ชั่น(local) = " , H);
}

let H=55; //อันนี้อยู่นอกฟังก์ชั่นละ 
console.log("G นอกฟังก์ชั่น =" ,G);

console.log("ในฟังก์ชั่นไม่แสดง ตั้งนอกถึงแสดง) =" ,H); //ไม่ได้ เพราะอยู่ใน function ใช้ข้างนอกไม่ได้ เรียก local
display();