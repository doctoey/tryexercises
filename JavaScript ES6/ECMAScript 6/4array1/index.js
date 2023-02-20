//join
const data =[100,200,300]   //แปลงจาก array > string แล้วเก็บลงในตัวแปร
console.log(data);

const result = data.join("x")    //result เก็บผลที่เกิดจากการแปลง เป็น string //ความหมายของ "x" ก็คือ เปลี่ยนจากคอมม่า(,)ปกติ กลายเป็น x
console.log(result);
console.log(data);  //ถึงแม้จะใช้ join แล้ว โครงสร้างเดิมยังไม่เปลี่ยน ยังเป้น [ 100, 200, 300 ] array เดิม



//concat การต่อสมาชิกภายใน array (concatenation)

const data1 = [100,200,300]
const data2 = [400,500]

data1.concat(data2)  //เป็นการบอกว่า จะเอาdata 1 ต่อกับ data2
const alldata = data1.concat(data2)

console.log(alldata);

//เพิ่ม และ ลบ สมาชิกใน array
// push , pop , shift , unshift , splice , slice

// push เอาไปต่อท้าย

const pdata = [10,20,30]

pdata.push(500)   //ยัด 500 เข้าไปในก้อน
console.log(pdata); // [ 10, 20, 30, 500 ]
pdata.push(999)
console.log(pdata); // [ 10, 20, 30, 500, 999 ]
pdata.push(...[1001,1002])  //ยัดเข้าไปเป็น array ใช้ spread ได้ ... นั่นเอง ไม่งั้นจะเข้ามาเป็นก้อนเลย [ 10, 20, 30, 500, 999, [ 1001, 1002 ] ]
console.log(pdata);  //[10, 20, 30, 500, 999, 1001, 1002]


// pop เอาข้อมูลออก สมาชิกที่อยุ่ด้านหลังสุด

pdata.pop()
console.log(pdata);   //1002 หายไปแล้ว
pdata.pop()    //คำสั่งนี้ทำให้ 1001 หาย
pdata.pop()     ////คำสั่งนี้ทำให้ 999 หาย
console.log(pdata); 

//shift เอาสมาชิกตัวที่อยุ่ด้านหน้าออกไป
//อยากให้เอา เลข 10 ออกไป ทำไง (เลข10มันอยู่ด้านหน้า)

pdata.shift()
console.log(pdata);  //10 หายไปละ

// unshift เพิ่มสมาชิกไปด้านหน้า

pdata.unshift(999)
console.log(pdata);   // 999 มาอยู่ด้านหน้าแทน


//splice(ตำแหน่งที่จะลบ , จำนวนที่จะลบ ,(option ใส่ก็ได้ไม่ใส่ก็ได้) สมาชิกที่ต้องการแทรกเข้าไปในตำแหน่งที่ลบ) 

const spdata = [10,20,30,40,50]
spdata.splice([1],3)     //เลข index
console.log(spdata);    // จะเหลือแค่ [ 10, 50 ]

const spdata2 = [10,20,30,40,50]
spdata2.splice([1],1)
console.log(spdata2);   // [ 10, 30, 40, 50 ] ลบแค่ตำแหน่งตัว 20 1 ตัว

const spdata3 = [10,20,30,40,50]
spdata3.splice([1],3,999)
console.log(spdata3);   //[ 10, 999, 50 ]   add 999 เข้าไปก็ได้ด้วย



// slice(ตำแหน่งเริ่มต้น,ตำแหน่งสุดท้าย-1)  ดึงสมาชิกจาก array มาใช้งาน

const sldata = [100,200,300,400,500]  //ต้องการ 200 ,300
sldata.slice(1,3) // จะได้ ชิ้นที่ 1 คือ 200 กับชิ้นที่ 2 (ทำการ-1) 300
console.log(sldata);  // จะได้แบบเดิม slice จะไม่กระกบ array เดิม ไม่เหมือน splice

let lastdata = sldata.slice(1,3) // ต้องหาตัวแปรมารับตัวที่จะเอาออกมา
console.log(lastdata);  // จะได้ 200,300 ละ