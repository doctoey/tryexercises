let a= 10 , b = 20

console.log("ผลบวก = " , 5+10);
console.log("ผลลบ = " , 5-10);
console.log("ผลคูณ = " , 5*10);
console.log("ผลหาร = " , 5/10);
console.log("ผลเศษ = " , 20%10); //หารลงตัว ได้เศษ 0
console.log("ผลเศษ = " , 20%9);

console.log("ผลหาร = " , a/b);

console.log("ยกกำลัง = " , 5**2);  //ยกกำลัง

//ตัวดำเนินการเปรียบเทียบ

let c = 15 , d = 10

console.log("เท่ากันหรือไม่ = " ,c == d);  // a = b บ่ มันแจ้งว่า false
console.log("ไม่เท่ากันใช่ไหม = " ,c != d);
console.log("มากกว่า หรือไม่ = " ,c > d);
console.log("น้อยกว่า หรือไม่= " ,c < d);
console.log("มากกว่าเท่ากับ หรือไม่= " ,c >= d);
console.log("น้อยกว่าเท่ากับ หรือไม่= " ,c <= d);

//ตัวดำเนินการทางตรรกศาสตร์
let check = false
console.log(!check); // ใส่ ! ด้านหน้า คือมันจะกลับค่ากัน จาก false เป็น true
console.log(check||!check); // เท็จ หรือ จริง เป็น จริง
console.log(!check&&!check); // จริง และ จริง เป็นจริง

//โปรแกรมตัดเกรด จะใช้ and เป็นส่วนใหญ่
// 70 - 80 => A
// 50 - 60 => B
// <49> => F

let score = 70;
score >=70 && score <=80
console.log(score >=70 && score <=80 , "A"); //จริง และ จริง เป็นจริง
console.log(score >=50 && score <=60 , "B")

//ตัวดำเนินการเพิ่มค่า-ลดค่า

let aa = 5 , bb = 10;

console.log("ค่าเริ่มต้น = " , aa);  //5
console.log("แบบ prefix เพิ่มค่า = " , ++aa);   //+1   //6
console.log("ค่าปัจจุบัน = " , aa);  // กลายเป็น 6

aa=5 // reset ไม่เอาค่าเดิมไม่งั้นมันจะใช้ตัวปัจจุบัน
console.log("ค่าเริ่มต้น = " , aa);    // กลับมาเป็น 5 ก่อน
console.log("แบบ postfix เพิ่มค่า = " , aa++);   //5 //ยังไม่เพิ่มเลย เอามาใช้บรรทัดต่อมาค่อยเพิ่ม
console.log("ค่าปัจจุบัน = " , aa);   //6


console.log("ค่าเริ่มต้น = " , bb); //10
console.log("แบบ prefix ลดค่า = " , --bb); //9
console.log("ค่าปัจจุบัน = " , bb); //9

bb = 10 //reset เหมือน aa
console.log("ค่าเริ่มต้น = " , bb); //10
console.log("แบบ postfix ลดค่า = " , bb--); //10
console.log("ค่าปัจจุบัน = " , bb);   //9


//compound assignment
//x+=y   x=x+y
//x-=y   x=x-y
//x*=y   x=x*y
//x/=y   x=x/y
//x%=y   x=x%y

let x=10 , y = 20 ;
console.log("ก่อน =" , x);
x+=y;
console.log("หลัง =" , x);      // x= 30
x-=y                          // ตอนนี้ x = 30 แล้ว สั่ง x-y
console.log("หลัง x-y =" , x);   // x=10 
x*=y                        // สั่ง x * y   10*20
console.log("หลัง x * y =" , x);  // x= 200
x/=y                       // 200/10
console.log("หลัง x / y =" , x); //  x=10
x%=y;
console.log("หลัง x % y =" , x);   // ได้เศษ 10



//ลำดับความสำคัญของตัวดำเนินการ
//1.5+8*9   77
//2.10-4+2   8
//3.10-(2+1) 7
//4.5*2-40/5 2
//5.7+8/2+25 36
console.log(5+8*9);
console.log(10-4+2);
console.log(10-(2+1));
console.log(5*2-40/5);
console.log(7+8/2+25);

