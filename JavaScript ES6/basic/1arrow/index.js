function sorwor(a,b){
    return a+b
}

let result=sorwor(200,50);
console.log(result);   // ยาวปายยย อยากได้สั้นๆ


// ใส่เครื่องหมายปีกกาเปิดปิดใน arrow function เพื่อใส่คำสั่งต่างๆ แต่ถ้า ไม่มีคำสั่งต่างๆ ใช้ลดรูป const sorworr=(a,b)=>a+b เอาปีกกาออกได้เลย
//รูปแบบแรก มีปีกกา กรณีคำสั่งมากกว่า 1 และหรือ มีการ return ค่า                 
const sorworr=(a,b)=>{             
    console.log("Processing...")    
    return a+b
}
let resultt=sorworr(200,50);
console.log(resultt);          //เอาคำว่าฟังก์ชั่นออกไป สั้นแล้ว (ตรงไหนวะพ่อ)

//ชื่อ   พารามิเตอร์         เอาพามิเตอร์มากำหนดลงไปเป็นก้อน object
const student = name => ({name:name,age:10})   //arrow ถ้าใส่ปีกกา ต้องใส่ วงเล็บด้วย มันจะ return เป็นก้อนในปีกกาให้เลย
let resullt = student("Cheewathun")
console.log(resullt);


//Default Parameter 

const addUser = (name , last , city="เขียง" ) =>{  //city="เขียง" คือการกำหนด default ถ้าไม่กรอกมันจะลงให้เลย จะได้ไม่ undefined
    return name + last +" city = "+city
}
console.log(addUser("เต้ย","ไม่รักแล้วเยอะชิบหาย","กรุงเทพมหาเวร"));   // อันนี้กรณีที่ส่งค่าครบ ถ้าไม่ครบหละ??
console.log(addUser("เต้ย","ไม่รักแล้วเยอะชิบหาย"))  // มันก็จะ undefined(ไม่ได้นิยาม) ต้องกำหนด default มันจะกรอกให้เองถ้าเว้น



// Rest Operator เป็นการเข้าถึง parameter ของฟังก์ชั่น แต่ว่ารับค่าตามจำนวนที่ระบุ

const addUserr = (name , last , ... city) =>{  // ... จุดสามจุด คือ rest operator จะทำให้รันเจอ กรุงเทพ เชียงใหม่
    return name +" " + last +" "+city
}
console.log(addUserr("เต้ยเอง","นามกุล","กรุงเทพ","เชียงใหม่")); //ถ้ามีกรณีอยู่หลายจังหวัด เพิ่มเชียงใหม่ไป แต่รันแล้วเจอแต่กรุงเทพ ต้องใช้ rest operator สัญลักษณ์คือ จุดสามจุด (...)


const addMessage = (first ,... message) => {
        return message.map(m=>first+message);  //ฟังก์ชั่น map
}
console.log(addMessage("Hello" , "JS" , "React"));



const addNumber = (... number)=>{
    return number.reduce((first,current)=>{
            return first+current
    })
}

console.log(addNumber(1,2,3,4,5,6,7,8,9,10));  //ไม่จำกัดการรับค่า ค่าที่ส่งมารวมกันออกมาเป็นค่าเดียว



//Spread Operator จุดสามจุดเหมือนกัน ใช้ในการกระจายสมาชิก
//เขียนแบบ array
let fruit=['มะม่วง','ส้ม',]

let newfruit=[...fruit,'กล้วย','องุ่น']   //มันคือการใส่ของใน fruit มาใน newfruit กระจายลงมานั่นเอง
console.log(fruit);    //มีสมาชิก 2 ตัว
console.log(newfruit); //มีสมาชิก 4 ตัว
let food = [...newfruit , "ส้มตำ"]
console.log(food);    // มี 5 ตัวละ 

//เขียนแบบ object
let product ={name:"ทุเรียน",price:200}
console.log(product);
let newproduct ={...product,catalog:"ผลไม้"}
console.log(newproduct);
let newprice ={...newproduct,price:350}   //อัพเดทราคา
console.log(newprice);        