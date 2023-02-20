let name;  //สร้างตัวแปร แต่ไม่มีการกำหนดค่า  
name = "fhuz_"; //กำหนดข้อความลงไปเก็บในตัวแปร name
let age= 1000;   //ตัวเลข ไม่ต้องใส่ฟันหนู , ข้อความต้องใส่

// let name = "Fhuz_" , age = 1000;
let Name; //พิมพ์ใหญ่พิมพ์เล็ก มีผลหมด
Name = "NAMEFHUZ_"

console.log(name);
document.write(name);
console.log("อายุ = ", age);

console.log(Name) //พิมพ์ใหญ่พิมพ์เล็ก มีผลหมด

let _for = "เต้ยชอบนอน"
console.log("before = " , _for);
_for = "แต่ไม่ได้นอน"
console.log("after =" , _for)

const vat = 0.07; //อันนี้คือค่าคงที่
console.log("before = " , vat);
// vat = 0.08; //อันนี้คือลองเปลี่ยนค่าคงที่ของบรรทัด 20 ดู มันฟ้อง error
console.log("after =" , vat); //ค่าคงที่เปลี่ยนค่าบ่ได้ error ไม่มีการแสดง after

let money = 500+500; //number (integer(จำนวนเต็มไม่มีทศนิยม))
console.log(typeof(money)); //ใส่ typeof เพื่อเช็คว่ามันคืออะไร มันแจ้งว่า number ถ้าตัวอักษรก็ string

let price = 99.99; //number (float(ตัวเลขที่มีจุดทศนิยม))
console.log(price);

let message = 'fhuz_'
console.log(typeof(message)); //ตัวอักษรแจ้งเป็น string

let NAme = "FHUz"
console.log(NAme)

let checkName = false;
console.log(checkName)

let checkProduct = true;
console.log(checkProduct)
console.log(typeof(checkProduct)) //boolean ค่าทางตรรกศาสตร์

let Age = "20"; //number แต่ใส่ "" จะกลายเป็น string
console.log(typeof(Age))

let AGE = "20.15";
console.log(typeof(AGE));
// จะแปลงตัว string อันนี้ให้เป็นตัวเลขจำนวนเต็ม
let AG = parseInt("20.15");
console.log(AG);
console.log(typeof(AG)); //ใส่ parse ปุ๊บ มันจะบอกว่าเป็น number

let AGs = parseFloat("20.15");
console.log(AGs); //parseFloat มันทำให้แสดงทศนิยม

let AGr = +"20.17"; //ใส่เครื่องหมาย + ด้านหน้า string มันจะแปลงให้เป็น number
console.log(typeof(AGr));
console.log(AGr);
console.log(AGr+150.1);

let PP = 41;
console.log(typeof(PP)); //อันนี้มันแสดงว่าเป้น number (ยังไม่ได้ใส่ "")
let PPr = 41+"";        //พอใส่ +""  มันก็จะบอกว่าเป็น string
console.log(typeof(PPr));
let PPt = 41.99.toString(); //.toString() แปลงตัวเลขให้เป็นข้อความ
console.log(typeof(PPt));