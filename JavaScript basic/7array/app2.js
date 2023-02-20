//  แปลง arry เป็น string
let color = ["แดง","เหลือง","เขียว","น้ำเงิน","ฟ้า","ส้ม","ม่วง","ดำ","น้ำตาล","ขาว",];

console.log(color.toString());
//หรือ 
let x=color.toString()
console.log(x);   //ได้เหมือนกัน แล้วแต่ถนัด

//แต่ถ้าไม่อยากได้ , จะใช้ .join("*") แทน  (อันนี้คือเครื่องหมายดอกจันแทน)
let xx=color.join(" ")  //อันนี้คือให้แสดงผล สเปซบาร์ธรรมดา
console.log(xx);

//color.pop();   เอาตัวสุดท้ายออก

let xy = color.pop();
console.log(xy);    
console.log(color);    // สีขาวหายปายแบ้ว
//แต่ถ้า 
let xyz = color.pop();
console.log(xyz);    //มันจะแสดงผลตัวสุดท้ายแทน ในที่นี้ขาวออกไป จะเหลือน้ำตาล


//การรวม array

let fruit = ["ส้ม","องุ่น","กล้วย","แอปเปิ้ล"]
let veget = ["ผักชี","ผัดกาด","ผักบุ้ง"]
let hardware = ["mouse","keyboard"]

let carts = fruit.concat(veget,hardware)   //คำสั่ง concat
console.log(carts);

//หรือ 
fruit=fruit.concat(veget);
console.log(fruit);   //fruit ใหม่ จะยาววววววเลย เพราะรวมแล้ว

//เรียงลำดับใน array
//ปกติ .sort()
//กับ .reverse()  แต่ตัวเลขไม่ได้

//เรียงลำดับตัวเลข

let num = [20,100,-100,5,-25,10];

numsort = num.sort(function(a,b){
    return a-b     // a คือ ค่าตัวเลขที่มีค่าลบจะถูกเรียงก่อน
});               // b คือ ค่าตัวเลขที่มีค่าบวกจะถูกเรียงหลัง
console.log(numsort);   //เรียงจากน้อยไปมาก

//แต่ถ้า

let numm = [20,100,-100,5,-25,10];
numsortt = numm.sort(function(a,b){
    return b-a       // b-a คือเรียงจากมากไปน้อย
});   
console.log(numsortt);


//JavaScript Object

let user = {             //let ชื่อวัตถุ = {propertyName:value}
    name : "toey" , 
    age:20 , 
    email:"cheewathun.l@gmail.com",
    study:"kmitl"
};

// การเข้าถึงแบบ object
console.log("รายละเอียดบุคคล" , user.name);   // วิธีแรก ใช้จุด
console.log("อายุ" , user.age);
console.log("สถาบัน" , user["study"]);  //ใส่ก้ามปูให้มัน (อันนี้วิธีที่ 2)

//การเข้าถึงแบบ array
let dog = ["bubu","money","jumpbo","dolla"]
console.log("หมาที่กวนตีน" , dog[0]);
console.log("หมาที่น่ารัก" , dog[1]);
console.log("หมาที่ตัวใหญ่" , dog[2]);

//ความแตกต่างระหว่าง array และ object
// array มี index เป็นตัวเลข , object กำหนดเป็นชื่อ
// array ใช้ [] ก้ามปู , ส่วน object ใช้ {} ปีกกา



let userr = {             //let ชื่อวัตถุ = {propertyName:value}
    namme : "toey" , 
    agge:20 , 
    emaail:"cheewathun.l@gmail.com",
    studdy:"kmitl",
    displayuserr:function(){
        return "รายละเอียดบุคคล" + this.namme + "อายุ" + this.agge;
    }
};

//เรียกใช้ method แต่จะไม่มีอะไรเกิดขึ้น
userr.displayuserr();
//ต้องรันผ่าน console.log
console.log(userr.displayuserr());


let product = {
    nname : "เมาส์",
    prrice: 1500,
    collor: "สีแสด",
    displayproduct:function(){
        return "ชื่อสินค้า" +" "+ this.nname + "ราคา " + this.prrice;
    },
    discount:function(){
        return this.prrice -1000;
    },
    getcolor:function(){
        return this.collor
    }
};
console.log(product.displayproduct());
product.discount();
console.log(product.discount());
console.log(product.getcolor());


//การยืนยันด้วย confirm คล้าย alert แต่อันนี้ต้องมีกด ok or cancel

function deletedata(){
     let resultt=confirm("หมาเน่า");
     console.log(resultt);   //กดตกลงได้ true ยกเลิกได้ false
     if(resultt){
        console.log("หมาน้อยหายเน่าแล้ว");   //ถ้าเป็นจริง จะตอบงี้
     }else{
        console.log("เน่าอยู่");   //เท็จตอบงี้
     }
}