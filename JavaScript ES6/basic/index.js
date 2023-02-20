//golbal variable var
//local -> block scope 
var price = 20;
var fruit = "มะม่วง"   //define

if(price==20){
    var fruit="ส้มโอ"   // มันทำการ redefine ใหม่ (update ค่าใหม่)
    console.log(fruit);
}
console.log(fruit);


let pricee = 20;        //พอเปลี่ยนเป็น let มันจะเปลี่ยนการแสดงผล
let fruitt = "มะม่วง"   

if(pricee==20){
    let fruitt="ส้มโอ"   
    console.log("in block" , fruitt);
}
console.log("out block" , fruitt);

const total =100;
console.log(total);   //const update ข้อมูลไม่ได้
const person = {name:"xhusz"};   //ใส่ปีกกาเอา
person.name="Cheewathun"   // แก้ได้แล้ว
console.log(person);

