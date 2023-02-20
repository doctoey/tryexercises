let number1 = 1 , number2 = 2 , number3 = 3 , number4 = 4 , number5 = 5
console.log(number3) //รก เยอะ เลยต้องใช้ array

// วิธีสร้าง array วิธีที่ 1
let number = new Array(100,"200",300,400.99,500,600); //สมาชิกใน array เขียนปนกันได้ ทั้งตรรกศาสตร์ true false ตัวเลข ตัวอักษร
console.log(number); /*ตัวเลข 0 1 2 3 4 5 (ที่แสดงผลใน console chrome) เรียกว่า หมายเลขกำกับ (index)*/
console.log("ตัวแรก =" ,number[0]) //index เริ่มต้นที่เลข 0 หมายถึงสมาชิกตัวแรก
console.log(number[1])
console.log(number[3])
console.log(number[5])

// วิธีสร้าง array วิธีที่ 2
let color = ["สีแดง" , "สีส้ม" , "สีชมพู" , "สีดำ" , "สีขาว" , "สีเหลือง"];
color[3] = "สีฟ้า" // 3 ปกติต้องสีดำ แต่เปลี่ยน มันเลยแสดงผลสีฟ้า
console.log(color[0]);
console.log(color[3]);

let day = ["วันอาทิตย์" , "วันจันทร์" , "วันอังคาร"]
console.log(day)  //ไม่มีวงเล็บตัวเลข จะบอกหมดทุกค่าเบย