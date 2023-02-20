//null

let a = null;    //ค่าเริ่มต้นเป็น false

if (!a) {    //ใส่ !หน้า ให้มันเป็น true
    console.log("a ia null");
} else{
    console.log("a ia not null");
}


// undefined

let b;    //ไม่ตั้งอะไรเลย ได้ undefined
console.log(b);

// NaN

let c = 10+"ก"
console.log(c);
let d = 10-"ก"
console.log(d);
let e = 10*"ก"
console.log(e);
let f = 10/"ก"
console.log(f);