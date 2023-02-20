//อ้างอิง 
const menu = document.getElementById('menu');
const display = document.getElementById('display')
const button = document.getElementById('btn')
// event listerer
menu.addEventListener('change' , getmenu)  //เมื่อมีการเปลี่ยนตัวเลือกในเมนู จะให้ทำอะไร
button.addEventListener('click' , showwelcome)  //ไม่ต้อง onclick แล้ว

function getmenu() {
    display.innerText= menu.value;
    console.log(menu.value);
}

function showwelcome() {     
    alert("ยินดีที่จบคลิบ")
}