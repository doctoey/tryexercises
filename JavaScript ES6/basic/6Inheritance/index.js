//การสืบทอดคุณสมบัติ

class Admin{       //คลาสแม๊
    constructor(name,age){
        console.log("Call Constructor");
    }
    isPermission(){
        console.log("Read Write DaTe From Datebase");
    }
}
// จะทำให้ class User ใช้ ของ admin ทำไง มาดู

class Usernew extends Admin {

    constructor(name,age){
        super()
        this.name=name
        this.age=age
    }
    SayHello(){
        console.log("Hello = " + this.name + " Age = " + this.age);
    }
}

let user4=new Usernew("Xylitol" , "18")
user4.SayHello()
user4.isPermission()