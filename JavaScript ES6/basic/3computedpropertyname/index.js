//computed property name

        //key:value
let food1={name:"Cake ส้ม" ,price:"200"}
let food2={'name':"Cake กาแฟ",'price':700}

console.log(food1);
console.log(food2);

let user={
    ['user'+1*10]:"toey",
    ['user'+2*30]:"fhuz"         //บวกลบคูณหารได้ แต่ต้องใส่ ' ' ในก้อนก่อนบวกลบ
}
console.log(user);



let food15="Cake"
let food={
    [food15]:"Cake มะพร้าว",price:"499"       //ยัดตัวแปร ลงใน property ที่อยู่ใน object
}
console.log(food);


let xiao="กะเพรา"
let menu={
    [xiao]:xiao+"หมูกรอบ" , [xiao + "ไข่ดาว"]:"หมูสับ" , [xiao + "จานที่" + 15]:"ไก่"
}
console.log(menu);

console.log(xiao+'ไข่ดาว');  //เป้นการดึงค่า property มาเก็บลงในตัวแปร




let nam ="fruit"
let mmm ={            //fruitmix
    [nam]:nam+" ส้ม" , [nam+"mix"]:"ผลส้ม"
}
let {fruit,fruitmix}=mmm ;
console.log(fruit);
console.log(fruitmix);
console.log(mmm);

//shorthand property method
//แบบเดิม






