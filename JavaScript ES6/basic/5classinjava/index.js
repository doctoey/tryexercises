//class in java

var user = {
    name:"toeytoeytoey",
    age:44,
    SayHi:function(){
        return "hello CAARD = "+this.name
    }
}
user.SayHi();
console.log(user.SayHi());

//แบบเดิม

function User(name,age){           //class นำหน้าด้วยตัวพิมพ์ใหญ่
    this.name=name
    this.age=age
}
//(class)   (ชื่อmethod) (ภายในmethodทำงานอะไร)
User.prototype.SayHi=function(){
    console.log("Hello CARDd =" + this.name + " Age =" , this.age);
}
var user1=new User("TOEY" , "41");
user1.SayHi()
console.log(user1);

//แบบใหม่ แบบสับ

// function User(name,age){          
//     this.name=name
//     this.age=age
// }

// User.prototype.SayHi=function(){
//     console.log("Hello CARDd =" + this.name + " Age =" , this.age);
// }
// var user1=new User("TOEY" , "20");
// user1.SayHi()
// console.log(user1);

class Usernew {

    constructor(name,age){
        this.name=name
        this.age=age
    }
    SayHello(){
        console.log("Hello = " + this.name + " Age = " + this.age);
    }
}
let user4=new Usernew("Xylitol" , "18")
var user5=new Usernew("TOEYnew" , "20");
console.log(user5);
console.log(user4);
