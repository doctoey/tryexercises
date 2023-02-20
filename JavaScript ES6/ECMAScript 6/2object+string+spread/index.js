//object

//ตัวแปรเก้บข้อมูล
const username = "Cheewathun"
const age = 25
const address = "กรุงเทพมหานคร"

const customer2 = {
    customerName : username,   //ดึงมาจากข้างบน
    age:age,
    tel:01245 ,
    add:address
}
console.log(customer2);    

const customer = {                  //อันนี้คือเขียนแบบปกติ
    customerName : "เต้ยคุง",
    age:40,
    tel:01245,
    add:"กรุงเต้บ"
}
console.log(customer);

const customer3 = {                 
    customerName:"gml",
    agee:40,
    addresss:"ss",
    showData(){
        console.log("ข้อมูลลูกค้าชื่อว่า = "+this.customerName);
    }
}
customer3.showData()



//string 
//ใช้ `(alt+96)
//สามารถแทรกตัวแปรได้โดยใช้ $(ตัวแปร) ร่วมกับ `

//ขึ้นบรรทัดใหม่ไม่ได้ ทำไง
const stringaddress = "ชื่อลูกค้า : เด็กชายเต้ย ที่อยู่ 13456 ถนนหลุมบ่อ เขตตกสวรรค์ เบอร์ : 08078413456"
console.log(stringaddress);


let scustomer = "เด็กชายโกโก้"
tell = "0745343411"
//ทำงี้ไง   alt+96
const stringaddress2 = `ชื่อลูกค้า : ${scustomer}
ที่อยู่ 13456 ถนนหลุมบ่อ เขตตกสวรรค์ 
เบอร์ : 08078413456`

console.log(stringaddress2);


//spread operator

const newArr = [100,200,300]
const DATA = [10,20,...newArr]   //เพิ่ม ... ด้านหน้า คือการเพิ่มเข้าไป
console.log(newArr);
console.log(newArr.length);
console.log(DATA);
console.log(DATA.length);

const spreadn = [12,...DATA]
console.log(spreadn);
console.log(spreadn.length);

const colors = ["green","yellow","black"]
const allcolors = ["white","red",...colors]

const newcolors =["gray","orange"]

allcolors.push(...newcolors);   //มันเข้าไปทั้งก้อนเลย [ 'white', 'red', 'green', 'yellow', 'black', [ 'gray', 'orange' ] ] (รวม[]ด้วย)  แก้ง่ายๆใส่ ...ด้านหน้า
console.log(allcolors);