var myName: string = "toey";
console.log(myName); //toey
console.log(typeof myName); //string

var money: number = 0;
console.log(money); //0
console.log(typeof money); //number

console.log(null === undefined); //false
console.log(null == undefined); //true
console.log(null === null); //true

const app_name = "My App";
function sayHello() {
  if (true) {
    var myNickName: string = "jaja";
    var myMoney: number;
    var canVote: boolean;
    var i;
    console.log(myNickName);
  }

  console.log(app_name);
}

sayHello();

const myArray: number[] = [1, 2, 3];
const myArray2: any[] = [1, 2, 3, "Hello"];

console.log(myArray2);
console.log(myArray2[0]);
console.log(myArray2.pop());
console.log(myArray2.pop());
console.log(myArray2.pop());
console.log(myArray2);
console.log(myArray2.push("ODDS"));
console.log(myArray2);

let employee: [number, string] = [1, "cheewathun"];
console.log(employee);
let employee2: [number, string, boolean] = [2, "cheewathun2", true];
console.log(employee2);

let employee3: [number, string, boolean][] = [
  [3, "cheewathun3", true],
  [4, "cheewathun4", true],
];
console.log(employee3[0]);
console.log(employee3);

employee3.push([5, "cheewathun5", true]);
console.log(employee3);

enum WorkStatus {
  Task = 1,
  Working,
  Done,
}

console.log(WorkStatus.Task);
console.log(WorkStatus.Done);
