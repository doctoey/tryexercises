//array map เอาค่าสมาชิกใน array มา map ค่า(เปลี่ยนแปลงค่า) แล้วก็สร้างค่าเป็น array ก้อนใหม่มาใช้งาน

const numbers = [10,20,30,40,50]   // อยากเอา 10*2  20*2
console.log(`number = ${numbers}`);
const result = numbers.map(e=>{    // หรือลดรูป numbers.map(e=>e*2) ก็ได้ มันคำสั่งเดียว
    const a = e*2
    return a
})
console.log(`result จากการ map ค่า array = ${result}`);  //[20,40,60,80,100]

//การทำงาน
//[10,20,30,40,50]
//[10x2,20x2,30x2,40x2,50x2]
//[20,40,60,80,100]


const data = ["ฝนตก","แดดออก","ฝนฟ้าคะนอง","หิมะตก","ลูกเห็บ","อากาศดี","หมอก"]

//มาเขียนร่วมกับจำนวนการทำซ้ำ

const resultw = data.map((e,i)=>{
    return `วันที่ ${i+1}, สภาพอากาศ ${e}`
})
console.log(resultw);

//ทำงานกับ array ที่เก็บข้อมูลเป็น object ได้ด้วย
const data2 = [
    {day:"1" ,weather :"ฝนตก",tem:27},     //property คือ day weather tem
    {day:"2" ,weather :"แดดออก",tem:30},
    {day:"3" ,weather :"ฝนฟ้าคะนอง",tem:12}
]
console.log(data2);

//อยากได้แต่สภาพอากาศ ก็ map ค่าเอา
const redada = data2.map(e=>{   //หรือ e=>e.weather
    return e.weather
})
console.log(redada);


//array filter การคัดกรองสมาชิกภายใน array ที่ผ่านเงื่อนไขที่เราได้กำหนดขึ้นมา

fdata = [10,20,30,40]  //เช่นต้องการตัวเลขที่มีค่ามากกว่า 20
//1.ต้องมีเงื่อนไข 2.ให้ทำอะไรต่อ   สมาชิกที่ส่งออกมาคือสมาชิกที่ผ่านการคัดกรองเรียบร้อยแล้ว(ผ่านเงื่อนไขที่เราระบุ)

const resultf = fdata.filter(e=>{   //fdata.filter(e=>e>20)
    return e>20
})
console.log(resultf);  //[ 30, 40 ]


const data888 = [
    {name:"เต้ย",salary:"27145",department:"โปรแกรมเมอร์"},
    {name:"ซายะ",salary:"20000",department:"ลูกจ๊อก"},
    {name:"อิจิโกะ",salary:"10000",department:"ลูกจ๊อก"},
    {name:"ซาซิเกะ",salary:"31474",department:"เจเนรอลเบ๊"},
    {name:"คามุย",salary:"8000",department:"คล"}
]           //อยากรู้ว่าพนักงานคนใด เงินเดือน 10000 หมื่นนึงเป็นต้นไป
const sala10k = data888.filter(e=>{   //e=>e.salary>10000
    return e.salary>10000
})           
console.log(sala10k); //แล้วพนักงานคนไหนเงินเดือนมากกว่าหมื่นนึง แล้วอยู่ฝ่ายลูกจ๊อกบ้าง

const lookjok = data888.filter(e=>e.salary>10000).filter(e=>e.department==="ลูกจ๊อก")
console.log(lookjok);  //เหลือแต่ซายะ



//array reduce การลดข้อมูลสมาชิกภายใน array ไม่ถึงกับลด มา reduce 

const datar = [10,20,30,40]

//map

const mapData = datar.map(e=>100)
console.log(mapData);   //กลายเป็น 100 ทั้งหมดด [100, 100, 100, 100]  //ได้ออกมาเท่ากับ array ต้นแบบ

//filter
const filterdata = datar.filter(e=>e>20)
console.log(filterdata); // [30, 40] //ได้ออกมาไม่เท่ากับ array ต้นแบบ ขึ้นกับ filter

//reduce ส่งข้อมูลภายใน array เข้าไปทำงาน ส่งผลลัพธ์สุดท้ายออกมาเป็นค่าแค่ค่าเดียว
//array.reduce((ค่าที่ถูกประมวลผล,element)=>{},ค่าเริ่มต้น)     // value = 0 เริ่มต้น
//เช่น อยากรู้ผลรวมของ datar 

const datare = datar.reduce((value,e)=>{   //value เริ่มต้น = 0 เพราะเรากำหนดอยุ่ที่บรรทัด 89 ไง
    const totalr = e+value
    return totalr
},0)
console.log(datare);   // ได้เท่ากับ 100



const ddatar = [10,20,30,40,10,15,248,488]
const ddatartotal = ddatar.reduce((value,e)=>e+value,0)
console.log(ddatartotal);



const cart = [
    {name:"กระเป๋า",price:500},
    {name:"หนังสือ",price:900},
    {name:"กล้องถ่ายรูป",price:5000}
]   //ต้องการรู้ว่า ซื้อสินค้า 3 ชิ้น ถ้าเอาราคามาหาผลรวม จะได้ยอดชำระเงินเท่าไหร่


const cartlast = cart.reduce((value,e)=>e.price+value,0)


// const cartlast = cart.reduce((value,e)=>{
//     const sumq = e.price+value
//     return sumq
// },0)
console.log(cartlast);
console.log(`ลูกค้าต้องชำระเงิน = ${cartlast} บาท`);