//rest parameter ใช้ ... เหมือน spread แต่ไม่จำกัดจำนวน เอาไปทำงานร่วมกับฟังก์ชั่น
summation = (x,y)=> {   //หาตัวเลขสองจำนวน
    return x+y
}
summation(50,100)
console.log(summation(50,100));
console.log(summation(540,1130));

summation = (x,y,z)=> {     //หาตัวเลขสามจำนวน
    return x+y+z
}
console.log(summation(50,100,14));

console.log(summation(50,100));  //แต่อันนี้ทำไมไม่ได้หละ? ก็เพราะตั้งชื่อฟังก์ชั่นซ้ำกัน ตอนแรกยังไม่ตั้ง x,y,z เลยยังหา sum ได้ พอตั้งแล้วมันเลยใช้แต่ xyz หาของ xy ไม่ได้ละ
//แก้โดยใช้ rest
//นิยามตัว parameter เข้ามากี่จำนวนก็ได้ โดยทำการระบุเป็น array ซะ (เป็นก้อนนนนน)

summation = (...numberArr)=> {    
    let total = 0
    for( let number of numberArr) total+=number      //คำสั่งนี้จะบอกว่า ดึงสมาชิกมาทีละตัว  0+50+100
    return total
}
console.log(summation(50,100));  //คราวนี้จะ sum กี่ตัว ได้ละ
console.log(summation(50,100,78,1));
console.log(summation(50,100,150,15,15,1548,15848,1));
console.log(summation(50,100,1));


//destructing (การสลายโครงสร้าง)
//การทำกับ array
//อันนี้คือวิธีการกำหนดค่า สมาชิกที่อยู่ใน array เก็บในตัวแปร

const color = ["เขียว","แดง","เหลือง"]  // อันนี้คือ array
// const green = color[0]  //ปกติต้องตั้งตัวแปรเองว่า green
// const red = color[1] 
// const yellow = color[2] 

//destructing //ซ้ายตัวแปร ขวา array   //สามบรรทัดบนไม่ต้องเขียนแล้ว เหมือนกัน
const [green,red,yellow] = color
//ถ้าต้องการเข้าถึงแต่เหลือง ไม่เอาเขียวแดง ทำไง
//อ้างอิงข้างบน const color = ["เขียว","แดง","เหลือง"]  เหลืองอยู่ลำดับที่ 3
// const [,,yellow] = color   //เขียนงี้ อ้างอิงลำดับเอา เว้นว่างอันที่ไม่เอา
// const [green,,yellow] = color //อันนี้ต้องการแต่เขียวเหลือง ไม่เอาแดง
console.log(green);
console.log(red);
console.log(yellow);


//แบบ object

const product = { 
    productName : "คอมพิวเตอร์",
    price:32999,
    stock:10
}

console.log(product);
//ต้องการทราบชื่อสินค้า + ราคา ทำไง

//แบบดั้งเดิม
// const productname = product.productName
// const price = product.price
// const stock = product.stock

// console.log(productname);
// console.log(price);
// console.log(stock);

//ถ้าเป็นแบบ destructing
//ซ้ายชื่อ property ขวา ตัวแปร // เช่น productName เก็บลงในตัวแปร n
const {productName:n,price:p,stock:s} = product //ถ้าชื่อตัวแปรกับชื่อ property เหมือนกัน เขียนแค่ตัวเดียวก็พอ // เช่น const {productName,price,stock} = product

console.log(product);

//default parameter
 
getDataCustomer=(customerName,customerAddress)=>{  //จริงๆไม่ต้องกำหนด if ก็ได้ ใส่lazada ตรงนี้ได้เลย customerAddress="ที่อยู่ lazada"
    if(!customerAddress){             //! ใส่ not ข้างหน้า คือ ถ้าไม่มีที่อยู่ใส่ ทำไง
        customerAddress ="ที่อยู่ lazada"              //ให้ที่อยู่เป็น default ไปเลย 
    }
    const address = `ชื่อลูกค่า : ${customerName}
    ที่อยู่ : ${customerAddress}`
    return address
}

getDataCustomer("เต้ยไม่รักโค้ดแล้ว","บ้านทรายทอง")
console.log(getDataCustomer("เต้ยไม่รักโค้ดแล้ว","บ้านทรายทอง"));
getDataCustomer("เต้ยจะทำdefaultparemeter")  //ไม่ใส่ที่อยู่ มันหาไม่เจอ underfined //เลยใส่เป็น lazada ซะ หาเจอละ
console.log(getDataCustomer("เต้ยจะทำdefaultparemeter"));