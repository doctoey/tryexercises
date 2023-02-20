// const a=document.querySelector('#demo'); //อ้างอิงผ่าน id
//หรือ
const titleElm=document.getElementById('title')
const contentElm=document.querySelector('.content'); //อ้างอิงผ่าน class
const allElme=document.querySelectorAll('p'); //อ้างอิงผ่าน tag

const box =document.querySelector('.daytrade');    //class daytrade ให้เรียกเป็น box


function displaytext(){    //อันนี้ที่ให้กดปุ่มแล้วถึงเปลี่ยน
    titleElm.style.color = "orange";
    titleElm.style.backgroundColor = "yellow";  //ระวังตัวใหญ่ตัวเล็ก
    titleElm.style.fontSize = "60px" ;

    contentElm.setAttribute('class' , 'toey' )  //ตรง class content เปลี่ยนชื่อคลาสเป้น toey
}
function lightmode(){
    box.setAttribute('class' , 'light');
}

function darkmode(){
    box.setAttribute('class' , 'dark');    //เปลี่ยนคลาสใหม่ จาก light เป็น dark แล้วไปหาที่ mystyle2
    // box.style.color = "yellowgreen" 
    // box.style.backgroundColor = "black" //ถ้าไม่ใช้ mystyle ก็จะทำแบบนี้ได้
}