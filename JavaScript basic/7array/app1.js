let color = ["แดง" , "ขาว" , "ฟ้า" , "เหลือง"];

let count = color.length;   //ความยาว
console.log(count);

console.log("before ก่อนเรียงลำดับ =" , color);
let result = color.sort();   //เรียงลำดับสมาชิกใน array ใหม่ จากน้อยไปมาก และ พยัญชนะตามด้วยสระ
console.log("after หลังเรียงลำดับ =" , result);

let fruit = ["ส้ม" , "แอปเปิ้ล" , "มะม่วง" , "ทุเรียน" , "กล้วย" ]
console.log("before ก่อนเรียงลำดับ =" ,fruit);
// let resultt = friut.sort();
console.log("after หลังเรียงลำดับ =", fruit.sort() );  //เรียงแบบปกติ น้อยไปมาก (ก-ฮ)
console.log("after หลังเรียงลำดับกลับด้าน =", fruit.reverse() );

let first = fruit[0];
let last = fruit[fruit.length-1];    //สมาชิกทั้งหมด -1 ได้ตัวสุดท้าย
console.log(first);
console.log(last);

fruit.push("องุ่น")  //เพิ่มสมาชิก
console.log("after หลังเพิ่มสมาชิก =",fruit );       //ใช้ sort (เรียงลำดับ) กับตัวเลขไม่ได้ ไม่เรียงให้



//for loop

let colorr = ["แดง","น้ำเงิน","เหลือง","ส้ม","ม่วง","เขียว"]
let countt = colorr.length;

/*console.log(colorr[0]);
console.log(colorr[1]);
console.log(colorr[2]);
console.log(colorr[3]);
console.log(colorr[4]); */  //ปกติต้องเขียนแบบนี้ จะง่ายฟ่านี้มั้ยถ้าใช้ for loop เขียนครอบ
for (let i = 0 ; i < colorr.length ; i++){   // i เริ่มที่ 0  i=0 , i<6 , i++
    console.log(colorr[i]);
}
console.log(colorr.length);

for (let i = 0 ; i < colorr.length ; i++){  
    console.log("ลำดับที่ = ", (i+1) , "มีค่า ",colorr[i]);    // i เฉยๆอันนี้จะเริ่มต้นลำดับที่ 0 ถ้าอยากให้เริ่มลำดับที่ 1 ก็ (i+1)
}
colorr.push("ดำ");
 // หลังจากเพิ่มสีดำเข้าไป 
console.log(colorr);

for (let i = 0 ; i < colorr.length ; i++){  
    console.log("ลำดับที่ = ", (i+1) , "มีค่า ",colorr[i]);   
}



// for each

let coloor = ["แดง","เหลือง","เขียว","น้ำเงิน","ฟ้า","ส้ม","ม่วง","ดำ","น้ำตาล","ขาว",];
coloor.forEach(myData);

function myData(itemm) {
  console.log("สี",itemm);
}