const box=document.getElementById('box');
let status;

function addDarkmode(){                 //เพิ่มสไตล์
    box.classList.add('darkmode');
}

function remDarkmode(){                 //ลบสไตล์
    box.classList.remove('darkmode');
}

function swiDarkmode(){                 //สลับสไตล์
    box.classList.toggle('darkmode');
    status = box.classList.contains('darkmode');
    console.log(status);                    //    กดแล้วจะได้ true //สั่งปิด ได้เป็น false
    if(status){
        box.style.color="yellow";   //ถ้าจริง เปลี่ยนตัวอักษรเป็นเหลือง เท็จเป็นแดง
    }else{
        box.style.color="red";
    }
}

function welcome(){                  //เมื่อทำการโหลดเว็บ จะเด้ง alert จากฟังก์ชั่น onload
    // alert("ยินดีด้วย จะจบคลิปแล้ว")
}

function hightlight(obj){
    obj.style.background="blue"
}
function unhightlight(obj){
    obj.style.background="black"
}

function getmenu(){
    const menu = document.getElementById('menu');
    const display = document.getElementById('display')
    console.log(menu.value.toUpperCase());    //touppercase ทำให้แสดงผลเป็นตัวพิมพ์ใหญ่
    display.innerText = menu.value
}

function hightlightm(obj){
    obj.style.background = "orange"
}

function hightlighto(obj){
    obj.style.background = "transparent"
}