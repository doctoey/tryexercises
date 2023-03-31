//map
//map การนำทางของใน array ออกมาทีละชิ้น แล้วไปผ่าน function ที่เป็น parameter ของ map

//const array = [1, 2, 3]
//syntax
//array.map(callbackfunction)    //ด้านในต้องใส่เป็น function


// function fu () {
// }
// array.map(fu)

//แบบนี้ไม่นิยมเขียน นิยมเขียนให้อยู่ในรูปของ arrow function 

//arrow function  คืออันนี้
// const arrow142 = (para) => {

// }

//array.map()

//ถ้าเขียน arrow ให้อยู่ในรูปของ callback function มักจะเขียนเป็นฟังก์ชั่นไม่มีชื่อ หรือ anonymous function จะตัด const arrow เหลือแต่ (para) => { }
//array.map((para) => {})


// const arrow = (param) => {
//     //ถ้ามีปีกกาแล้ว ฟังก์ชั่นนั้นต้อง return ค่า ต้องใช้ keyword return เสมอ
// }

//แต่ถ้าแบบนี้

// const arrow2 = (param) => //แบบนี้ไม่ต้องมี keyword return //ข้อจำกัด จะเขียนหลายบรรทัดไม่ได้

//ตัวอย่าง line 26
// const plus556 = (num1, num2) => {
//     return num1 + num2;
// }


//ตัวอย่าง line 32
// const plus2 = (num1, num2) => num1 + num2;


//anonymous function
//parameter ของ callback fn ของ map จะรับ param => คือของที่ออกมาจาก array ออกมาเหมือนวนลูบ ทีละชิ้น(ทีละ item, ทีละ element)
//ของที่ถูก loop ออกมา จะไปผ่าน callback function => สร้าง array ใหม่ เลยต้อง return ค่า

const array = [1, 2, 3]
// const newarray = array.map((element) => {
//     console.log(element)
//     return
// })
//1 2 3

const newarray = array.map((element) => {
    return 'a' + ' ' + element
})

console.log(newarray) //[ 'a 1', 'a 2', 'a 3' ]


let array5 = [1, 2, 3]
//forEach ไม่สร้าง array ใหม่
//เลยต้องมีตัวแปรมารับค่า ที่จะทำ ที่เราทำอันนี้คือ เอา array ใหม่มารับ
const NewArrayforEach = []
array5.forEach((ele) => {
    let result
    result = 'a' + ' ' + ele
    NewArrayforEach.push(result) 
})

console.log(NewArrayforEach) //[ 'a 1', 'a 2', 'a 3' ]