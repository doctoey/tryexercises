//map
//map การนำทางของใน array ออกมาทีละชิ้น แล้วไปผ่าน function ที่เป็น parameter ของ map

const array = [1, 2, 3]
//syntax
//array.map(callbackfunction)    //ด้านในต้องใส่เป็น function

/*
function fu () {
}
array.map(fu)
*/
//แบบนี้ไม่นิยมเขียน นิยมเขียนให้อยู่ในรูปของ arrow function 

//arrow function  คืออันนี้
const arrow = (para) => {

}

array.map()

//ถ้าเขียน arrow ให้อยู่ในรูปของ callback function มักจะเขียนเป็นฟังก์ชั่นไม่มีชื่อ หรือ anonymous function จะตัด const arrow เหลือแต่ (para) => { }
//array.map((para) => {})


const arrow = (param) => {
    //ถ้ามีปีกกาแล้ว ฟังก์ชั่นนั้นต้อง return ค่า ต้องใช้ keyword return เสมอ
}

//แต่ถ้าแบบนี้

const arrow2 = (param) => //แบบนี้ไม่ต้องมี keyword return //ข้อจำกัด จะเขียนหลายบรรทัดไม่ได้

//ตัวอย่าง line 26
const plus = (num1, num2) => {
    return num1 + num2;
}


//ตัวอย่าง line 32
const plus2 = (num1, num2) => num1 + num2;
