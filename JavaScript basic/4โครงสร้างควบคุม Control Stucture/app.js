

// คำสั่งเงื่อนไขเดียว

age = 15;

let result = (age == 15) //  true / false
if(age == 15){
    //คำสั่งให้ทำอะไร
    console.log("คำนำหน้าเป็น นาย / นางสาว");
}
if(age >= 15){
    console.log("คำนำหน้าเป็น นาย / นางสาว");
}

let balance = 1200;
let withDraw = 1500;
if(withDraw<=balance){
    //เมื่อเงื่อนไขเป็นจริง
    console.log("ดำเนินการถอนเงิน = " , withDraw)
    balance = balance - withDraw
    console.log("ยอดคงเหลือ = " , balance);
}else{
    //เมื่อเงือนไขเป็นเท็จ
    console.log("ยอดเงินของคุณไม่พอ" );   //ถอนเงินเกิน ยอดไม่พอ
}


// ข้อควรระวัง การใช้ if มันจะเช็คเงื่อนไข ทุกๆ ตัว แม้เงื่อนไขแรกเป็นจริงแล้ว

let score = 70;

/*
มากกว่า 40 => D
มากกว่า 50 => C
มากกว่า 60 => B
มากกว่า 70 => A
*/

if(score>70){
    console.log("เกรด A");
}
if(score>60){
    console.log("เกรด B");
}
if(score>50){
    console.log("เกรด C");
}
if(score>40){
    console.log("เกรด D");
}

// ต้องใช้ รูปแบบคำสั่งหลายเงื่อนไขแทน

if(score>70){
    console.log("เกรด A");
}
else if(score>60){
    console.log("เกรด B");
}
else if(score>50){                   //พอทำแบบนี้ จะแสดงเกรดเดียว ไม่เหมือนเมื่อกี้ที่แสดงทุกเกรด 
    console.log("เกรด C");            //เจออันไหนที่ใช่แล้ว มันจะหยุดแสดงผลเลย
}else 
{(score>40)
    console.log("เกรด D");   
}


// if else แบบลดรูป (Teanary Operator)


let scor = 40; //เต็ม 100 คะแนน // score นั่นแหละ เปลี่ยนรูปแบบ ขี้เกียจขึ้นไฟล์ใหม่

// if (scor>50) {
//     pass = "ผ่านจ้า"
// }else{
//     pass = "กาก ไม่ผ่าน"
// }

// ข้างบนปกติ อันนี้คือรูปย่อ
pass = scor>50 ? "ผ่านจ้า"  : "กาก ไม่ผ่าน"      //แบบย่อ ถ้าเป็นจริง เขียนท้าย ?   ถ้าเป็นเท็จ เขียนท้าย :
console.log(pass);



//การเขียนเงื่อนไขซ้อนกัน (if ซ้อน if)

let agee = 16;

if (agee<=15) {
    if (agee==15) {
        console.log("มอสาม");
    }else if(agee==14){
        console.log("มอสอง");
    }else if(agee==13){
        console.log("มอหนึ่ง");
    }else{
        console.log("ประถมจ๊ะเด็กชะมัด");      //ถ้าอายุไม่ใช่ 15 14 13 จะเป็นประถมนั่นเอง
    }
}else{
    console.log("มอปลาย / ปอตรี");   //คือมากกว่า 15 ตามเงื่อนไขแรกทีลิมิต เลยใส่คำสั่งเพิ่มเผื่อไว้
}

//switch case vs if case
//จะเช็คว่าเปิดหรือปิดไฟ

let status =0; // ปิดไฟ // 1 เปิดไฟ

// let light;
// if (status==0) {
//     light="ปิดไฟ";
// }else if (status==1) {
//     light="เปิดไฟ";
// }else{
//     light="ไม่พบข้อมูล";                //เขียนแบบปกติ
// }

switch (status) {
    case 0 : light = "ปิดไฟ";
        break;
    case 1 : light = "เปิดไฟ";
        break;
    default: light = "ไม่พบข้อมูล";     // default คือ นอกเหนือจากสองเคสนั้น
        break;                          //เขียนแบบ switch
}

console.log(light);







let month =1;
switch (month) {
    case 1 : NAME = "มกราคม";
        break;
    case 2 : NAME = "กุมภากุมใจ";
        break;
    default: NAME = "ไม่พบข้อมูล";     
        break;                          
}
console.log(NAME);


// โปรแกรมหาเลขคู่ เลขคี่

let x=50;
if (x%2 == 0) {     //ถ้า x หาร 2 ได้เศษ 0
    console.log("เลขคู่");
}else{
    console.log("เลขคี่");
}



//โปรแกรมเปรียบเทียบตัวเลข

let miu = 50 , yui = 100;
if (miu>yui) {
    console.log("miu น่ารักที่สุด");
}else if(miu<yui){
    console.log("yui น่ารักที่สุด");
}else{
    console.log("สองคนนี้น่ารักเหมือนกัน");   //ถ้าตัวเลข miu = yui = 100
}

//loop

let count = 1;

while (count<=3) {
    //ถ้าเงื่อนไขเป้นจริง ให้ทำอะไร
    console.log("Hello Stupid");
    count++;                 //ถ้าไม่กำหนดอันนี้ จะเป็น infinity loop
}

//loop while เราไม่ต้องประกาศตัวแปรมานับจำนวนรอบก็ได้ เมื่อเงื่อนไขเป็นจริงก็จะทำซ้ำคำสั่งด้านใน ไม่รู้จำนวนรอบก็ได้
//loop for ต้องประกาศตัวแปร เพื่อควบคุมว่าจะทำซ้ำกี่รอบ ต้องรู้จำนวนรอบที่ชัดเจน



let countt = 1;

while (countt<=3) {
    //ถ้าเงื่อนไขเป้นจริง ให้ทำอะไร
    console.log("ผลิตสินค้าชิ้นที่" , countt);
    if (countt==3) {
        break;
    }countt++;           
}



for (let clound = 1; clound<=5;clound++) {
    console.log("HELLOOOOO");
}

/*
clound = 1 */

let aoi = 1; 
do{
    console.log(aoi);
    aoi++;                 //อันนี้คือคำสั่งเพิ่มทีละ 1
}while(aoi<=5){
    ;    //จะทำคำสั่งของ do หนึ่งรอบก่อน แล้วก็มาเช็คเงื่อนไข while ถ้าเป้นจริงก็กลับไปทำ do ซ้ำ ถ้าไม่จริงก็หยุด
}

let cccc=1;
while (true) {
    if (cccc==30) break
    cccc++;
    console.log(cccc);    //ในส่วนของ loop while ตราบเท่าที่เงื่อนไขจริง ในที่นี้ก็บอกว่าจริงเลย (true)
}                           // ก็จะทำซ้ำคำสั่งไปเรื่อยๆ จน 30 แล้วเบรก


//ความต่างระหว่าง break กับ continue

for (let toey = 1; toey<=10;toey++) {
    if (toey==5)break;             //หยุดทำซ้ำ
    console.log(toey);
}
console.log("จบกัน");

for (let toeyy = 1; toeyy<=10;toeyy++) {
    if (toeyy==5)continue;    //continue คือการกระโดดข้ามรอบนั้น  //ถ้าตัวแปร toey มีค่าเท่ากับ 5 ปุ้บ ก็จะกระโดดข้ามไป
    console.log(toeyy);        //แต่กลับไปทำซ้ำในรอบใหม่ 
}                               // จะได้ค่า 1 2 3 4 6 7 8 9 10 จบการทำงาน
console.log("จบกานทำงาน");