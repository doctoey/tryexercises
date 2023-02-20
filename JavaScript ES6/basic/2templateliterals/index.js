//template literals

//แบบเดิม
const name ="Cheewathun"
const last ="Lerttanapit"
const city ="Bangkok"

const all="Name = " + name +" Last = " + last +" City = " + city
console.log(all);
// จะตัดบรรทัด ใช้เครื่องหมาย \ backslash
const allnew="Name = " + name +"\
\nLast = " + last +"\
\nCity = " + city
console.log(allnew);

//แบบใหม่ 

const allname1=`Name = ${name} Last = ${last} City = ${city}`    //ลูกน้ำ
const allname2=`Name = ${name} 
Last = ${last} 
City = ${city}`    //ขึ้นบรรทัดใหม่ง่ายๆ ไม่ต้องใช้ \
console.log(allname1);
console.log(allname2);



//Destructuring object
//แบบเดิม
var person={
    name1:"toey",
    skill1:"slp eat kid"
}
var name1=person.name1
var skill2 = person.skill1
console.log(skill2);

console.log(`name = ${name1} skill ${skill2}`);

//แบบใหม่

var person1={
    name9:"toey",
    skill9:"slp eat kid"
}
let {name9,skill9} = person1
console.log(`name = ${name9} skill ${skill9}`);



