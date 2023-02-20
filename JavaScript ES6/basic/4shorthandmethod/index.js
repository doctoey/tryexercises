//shorthand property method

// แบบเดิม

let name1 ="toeytoey"
let last1 ="cylitol"

let user1 = {
    name : name1,
    last : last1
}
console.log(user1);

//แบบใหม่ property shorthand
//กำหนดลงไปในขั้นตอนเดียวเลย
//เงื่อนไข ต้องตัวแปรกับชื่อproperty เหมือนกัน

let name2 ="toeytoey"
let last2 ="cylitol"
let age2 = 20

let user7 = {
    name2 , last2 , age2
}
console.log(user7);


function user(name,last,age){
    return{
        name:name,
        last:last,
        age:age
    }
}
console.log(user("tori","oreo","20"));

//แบบใหม่
function user41(name,last,age){
    return{
        name,
        last,            //มันเหมือนกัน เลยใช้ได้
        age
    }
}
console.log(user41("tori","oreo","20"));

