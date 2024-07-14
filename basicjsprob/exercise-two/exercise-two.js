// 2.1 เขียนฟังก์ชั่นรวมตัวเลขที่รับมา
// ตัวอย่าง
// input: 89 	process 8^1 + 9^2 		    ผล 89
// input: 123 process 1^1 + 2^2 + 3^3  	ผล 32
// input: 65 	process 6^1 + 5^2  		    ผล 31
// input: 321 process 3^1 + 2^2 + 1^3  	ผล 8

export function calculate(num) {
  let numStr = num.toString(); // แปลงตัวเลขเป็น string เพื่อให้สามารถเข้าถึงแต่ละหลักได้ง่าย
  let result = 0;

  for (let i = 0; i < numStr.length; i++) {
      let digit = parseInt(numStr[i]); // แปลงหลักที่ i เป็นตัวเลข
      let power = i + 1; // กำหนดค่า power เท่ากับ i + 1
      result += Math.pow(digit, power); // คำนวณและบวกผลลัพธ์
  }

  return result;
}