const textAll = document.querySelectorAll('p')   //มี 3 ก้อน 0 Helloworld , 1 Javascript , 2 xylitol
console.log(textAll[0]);
console.log(textAll[1].innerHTML); //ถ้าไม่อยากได้ tag p ใส่ innerHTML
console.log(textAll[2]);


// สร้าง li(ลูก) ใน tag ul (แม่)
const menu = document.getElementById('menu');

let count = 1;

function addItem(){
    const item1 = document.createElement('li');  //สร้าง li
    const item2 = document.createElement('li');
    const item3 = document.createElement('li');
    const item4 = document.createElement('li');
    item1.innerText = "อาหารกินเล่น"+(count++) ;
    item2.innerText = "อาหารหลัก"+(count++) ;
    item3.innerText = "จานซุป"+(count++) ;
    item4.innerText = "ของหวาน"+(count++) ;
    menu.appendChild(item1); //ยัดเข้าไป
    menu.appendChild(item2);
    menu.appendChild(item3);
    menu.appendChild(item4);
}


//วิธีลบ element

const menudelete = document.getElementById('menudelete')

const item = document.getElementById('item-3') //สมมุติว่าอยากลบ item-3  

//menudelete.removeChild(item)   // C หายไปล๊าว
//หรือ จะควบคุมการลบผ่านฟังก์ชั่น

function deleteITEM(){
    menudelete.removeChild(item)
}

//การแทนที่ element
//อยากแทนที่ B เป็น X

const replaceEle = document.getElementById('menureplace');
const itemB = document.getElementById('item-6')

const itemre = document.createElement('li');
itemre.innerText = "X";


// replaceEle.replaceChild(itemre , itemB);

function replaceITEM(){
    replaceEle.replaceChild(itemre , itemB);
}