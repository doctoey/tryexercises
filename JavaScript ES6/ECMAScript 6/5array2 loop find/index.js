//การ Loop ข้อมูลใน array
//for Loop , ForEach , ForOf

//for Loop

const data = [10,20,30,40,50]

//เข้าถึงโดยไม่วนลูป
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);
console.log(data[3]);
console.log(data[4]);

//forloop ปกติ

for(let i = 0 ;i<data.length;i++){   //index = 0 ; index<data.length;index++
    if (data[i] >=30) break   // คำสั่งนี้คือ ถ้า data ช่องที่ i เนี่ย มันมากกว่า 30 ให้หยุด
    console.log(`ลำดับที่ ${i} = ${data[i]}`);
}


//ForEach   ใช้ break กับ continue ไม่ได้

data.forEach(e => {                                
    if (e >= 40)
    console.log("hello");  
    console.log(`สมาชิกใน Array Data = , ${e}`)      //element คือสมาชิกภายใน array data //หรือจะย่อเป็นตัว e ตัวเดียวก็ได้ /สมาชิกใน Array Data = , 10
});                                                                                                               // สมาชิกใน Array Data = , 20
                                                                                                                  //สมาชิกใน Array Data = , 30
                                                                                                                  //hello
                                                                                                                  //สมาชิกใน Array Data = , 40    //พอ 40 ปุ้บ จะมี hello มาด้วยข้างบน
                                                                                                                  //hello
                                                                                                                  //สมาชิกใน Array Data = , 50
const dataplus = [10,20,30,40,50]
let sum = 0
dataplus.forEach(e => {       //จะหาผลรวมแต่ละรอบ 
    sum+=e 
    console.log(`ผลรวม = ${sum}`);     
});


//ForOf เหมือนเอา forloop กับ foreach มารวมกัน   เขียน break กับ continue ได้
//ซ้าย คือ element ที่เราไปดึงมา //ขวา ชื่อ array
for ( const element of dataplus){        //จะทำการดึงเอาสมาชิกแต่ละตัวใน array มาใช้งาน
    if(element>=40) break      //เจอสมาชิกที่เลข 40 จะโดดออก เลยเหลือแค่ 10 20 30
    console.log(`สมาชิก Array dataplus = ${element}`);
}


//การค้นหาข้อมูลใน Array
//indexOf(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
//find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
//finIndex(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1

const colors =["แดง","เขียว","น้ำเงิน","ม่วง","ขาว","ดำ","ส้ม"]
console.log(colors);

colors.indexOf("แดง")
colors.indexOf("ขาว")
console.log(colors.indexOf("แดง"));   //ได้เลข index = 0 มา
console.log(colors.indexOf("ขาว"));   //ได้เลข index = 4 มา
console.log(colors.indexOf("น้ำตาล"));  //ไม่เจอ -1


const found = colors.find(element=>element==="ส้ม")    // === สามตัว ค้นทั้งค่า ทั้งชนิดข้อมูล
console.log(found);
console.log(colors.find(element=>element==="ขาว"));
console.log(colors.find(element=>element==="น้ำตาล"));   // undefined


colors.findIndex(element=>element==="ส้ม");
console.log(colors.findIndex(element=>element==="ส้ม"));  //ได้ค่า 6

