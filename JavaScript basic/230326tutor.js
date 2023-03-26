//1
/*
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
//https://www.freecodecamp.org/news/how-to-iterate-over-objects-in-javascript/
function sum(obj) {
    code
}

input : { a: 50 , b: 100 , c: 250 }
output : 400

//hint
const obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Logs:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
*/

function sum1(obj) {
    let sumobj = 0
   for (const prop in obj) {
     sumobj += obj[prop]
   
  }
    return sumobj
  }
  
  sum1({ a: 50 , b: 100 , c: 250 }) //400
  console.log(sum1({ a: 50 , b: 100 , c: 250 })) //400



//2

const arr = [2,3,4,8,12];
//powArr(arr); //output : [4,9,16,64,144]

let powArr = (x) => {
 let arrx = x.map(e=>e**2)
 return arrx
  
}

powArr(arr)
console.log(powArr(arr))

//อีกอัน
function powArr555(x) {
  for (let i = 0; i < x.length; i++) {
    x[i] *= x[i];
  }
  return x;
}

console.log(powArr555(arr)); // Output: [4, 9, 16, 64, 144]


//3
//อายุไม่น้อยกว่า 20
const array456 = [
  { name: 'Benji', age: 30 },
  { name: 'Nas', age: 20 },
  { name: 'Sayo', age: 22 },
  { name: 'Sapari', age: 16 },
  { name: 'Storm', age: 27 }
];

// [ { name: 'Benji', age: 30 },{ name: 'Sayo', age: 22 },{ name: 'Storm', age: 27 } ]

let more20 = array456.filter(e => {
  return e.age > 20
})
console.log(more20)

//ของพี่ปัน
// const newArr = []
// arr.foreach(element => {
//     if (element.age > 20) {
//         newArr.push(element)
//     }
// });


// function filter (arr) {
//     const newArr = []
//     arr.foreach(element => {
//         if (element.age > 20) {
//             newArr.push(element)
//         }
//     });
//     return newArr
// }

//4

// หา index ที่ id = 3
//https://bobbyhadz.com/blog/javascript-array-find-index-of-object-by-property#get-the-indexes-of-all-objects-in-an-array-that-match-a-condition
const tasks123 = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' },
  { id: 4, name: 'Football' }
];

// return 2
   
const index123456 = tasks123.findIndex(tasks => {
  return tasks.id === 3;
});

console.log(index123456)
tasks.findIndex(e => e.id === 3)

//พี่ปัน
let foundIndex   ;
tasks123.forEach((element, index) => {
    if(element.id === 3) {
        foundIndex = index //index ที่เราจะหา คือ index ที่ 2
    }
})
console.log(foundIndex) //2

//5

//เขียนฟังก์ชั้น หาผลรวมของเลขทุกตัวยกกำลังสองใน array

//input [2,4,3] //4+16+9
//output 29

let sumandtwo = (arr) => {
  let result = 0;
  arr.map(e=>{
    let temp = 0
    temp += e * e
    result += temp
  })
  return result
}

sumandtwo([2,4,3])

//////////////////////////////////////////
const squareSumC = (int) => {
  let total = 0
  int.forEach(e => total += e**2)
  return total
}
squareSumC([2,3,4])
//////////////////////////////////////// ตรงนี้ยังติด เดี๋ยวกลับมาอ่าน
//let input = [2,3,4]
//squareSumC(input)

const arrha = [2,3,4];
// const result487 =
//     arrha.reduce((ac,cvalue)=>{
//         console.log(ac${ac});
//         console.log(cv${cvalue});
//         return ac+cvalue**2;
//     },0)
    
//     console.log(result487)
/////////////////////////////////////////
// const korhok1 = arr => arr.reduce(((accu,curr)=> accu + curr ** 2),0)
const korhok = arr => arr.reduce((accu,curr)=> accu + Math.pow(curr, 2),0)

korhok([2,4,3]) //29


//////////////////////////////
let input123 = [2,4,3]

let outPut123 = input123.reduce(function (acc , cur){
  let sqrtSum = cur * cur
  return acc + sqrtSum
},0)

console.log(outPut123)








// 6.) ให้เติมคำว่า kendo,judo,basketball ต่อท้าย swimming ใน array
//how to insert string to array at specific index
//https://bobbyhadz.com/blog/javascript-insert-string-at-index
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf มีล้านค่า หาว่า biking อยุ่ไหน ใช้ idnexOf 
const sports = ['boxing', 'football', 'swimming', 'biking'];

// result = [ 'boxing', 'football', 'swimming', 'kendo', 'judo', 'basketball', 'biking' ]


sports.splice(3,0,'kendo', 'judo', 'basketball')
console.log(sports) //[ 'boxing', 'football', 'swimming', 'kendo', 'judo', 'basketball', 'biking' ]



//7

//เขียน function deleteTodo(n) ให้ n เท่ากับ id ที่จะลบใน array
let todos = [
  { id: 1, title: 'reading' , completed: false},
  { id: 2, title: 'workout' , completed: true},
  { id: 3, title: 'cooking' , completed: true},
  { id: 4, title: 'coding' , completed: false},
]

// output
// deleteTodo(2)
// [
//   { id: 1, title: 'reading' , completed: false},
//   { id: 3, title: 'cooking' , completed: true},
//   { id: 4, title: 'coding' , completed: false},
// ]

//hint1
//findIndex
//splice it out 1 item

////////ได้แล้วววววววววววววววววววววววว

// let deleteTodo = (n) => {
//   let index = todos.findIndex(e => e.id === n)
//   todos.splice(index,1)
//   return todos
// };


// console.log(deleteTodo(2))

//////////////////////////////////////////////

function deleteTodoB(n) {
  let temp = [...todos]
  temp = temp.filter(todo => todo.id !== n);
  return temp;
}
deleteTodoB(2)

////////////////////////////////////////////////////

const deleteTodoBB = (arr,id) => {
    let index = arr.findIndex(e => e.id === id) //id บรรทัดนี้เป็น arrgument ที่ pass เข้ามา
    //console.log(index)  //index 1
    const a = arr.splice(index,1)
    //console.log(a) //[ { id: 2, title: 'workout', completed: true } ] ถ้า log a ออกมา จะรู้ว่า ไอ a เนี่ยคือ ก้อน id2 จะเอาก้อนเนี้ยออก
    return arr;
}
console.log(deleteTodoBB(todos,2))

////////////////////////////////////////////////////

function deleteTodoG(n) {
  todos = todos.filter(todo => todo.id !== n);
  return todos;
}
deleteTodoG(2)

//////////////////////////////////////////////////////



//8





//9
//10
//11
//12
/*
Object

- 1.) จงเขียน function sum(obj) ที่มี key เป็นชื่อ employee และ value เป็นเงินเดือน โดยให้ function return ค่า เป็นผลรวมของเงินเดือนของ employee ทั้งหมด  //
    - Expected Output
        
        ```
        function sum(obj) {
        	---- code -----
        }
        
        input : { a: 50 , b: 100 , c: 250 }
        output : 400
        ```
        
    - Solution
        
        ```jsx
        const sum = obj => {
          let result = 0;
          for (let key in obj) {
            result += obj[key];
          }
          return result;
        }
        ```
        
- 2.) เขียน function รับ obj employees ให้หาผลรวมของเงินเดือน salary แล้ว return ค่าเป็นผลรวมของเงินเดือนของ employee ทั้งหมด
    - Expected Output
        
        ```jsx
        const employees = {
          Namwann: { salary: 1000, address: { district: 'Lad-Prao', province: 'Bangkok' } },
          Queen: { salary: 1500, address: { district: 'Hua-Hin', province: 'Prajuabkirakan' } },
          Anya: { salary: 800, address: { district: 'Maerim', province: 'Chiangmai' } },
          You: { salary: 2200, address: { district: 'Sriracha', province: 'Chonburi' } }
        };
        
        // output = 5500
        ```
        
    - Solution
        
        ```jsx
        const employees = {
          Namwann: { salary: 1000, address: { district: 'Lad-Prao', province: 'Bangkok' } },
          Queen: { salary: 1500, address: { district: 'Hua-Hin', province: 'Prajuabkirakan' } },
          Anya: { salary: 800, address: { district: 'Maerim', province: 'Chiangmai' } },
          You: { salary: 2200, address: { district: 'Sriracha', province: 'Chonburi' } }
        };
        
        const sumSalary = obj => {
          let result = 0;
          
          for (let key in employees) {
            result += employees[key].salary
          }
          
          return result;
        }
        
        sumSalary(employees)
        ```
        
    

Number

- 3.) เขียน function dice() ให้ return ค่าออกมาเป็นคะแนนของลูกเต๋า 1-6
    - Expected Output
        
        ```
        dice() // output 1-6
        ```
        
    - Hints
        
        `Math.random` `Math.floor`
        
    - Solution
        
        ```jsx
        const dice = () => 1 + Math.floor(Math.random()*6);
        ```
        
    

Array

- 4.) เขียน function ให้ return array ยกกำลังสอง //
    - Expected Output
        
        ```
        const arr = [2, 3, 4, 8, 12];
        powArr(arr); // [4, 9, 16, 64, 144]
        ```
        
    - Solution
        
        ```jsx
        // method 1
        const powArr = arr => arr.map(e => e**2)
        
        // method 2
        const powArr = arr => arr.map(e => Math.pow(e, 2))
        ```
        
- 5.) หา index ที่ id = 3 //
    - expected output
        
        ```jsx
        const tasks = [
          { id: 1, name: 'Fishing' },
          { id: 2, name: 'Shopping' },
          { id: 3, name: 'Swimming' },
          { id: 4, name: 'Football' }
        ];
        
        // return 2
        ```
        
    - solution
        
        ```jsx
        tasks.findIndex(e => e.id === 3)
        ```
        
- 6.) ให้เติมคำว่า kendo,judo,basketball ต่อท้าย swimming ใน array //
    - expected output
        
        ```jsx
        // ['boxing', 'football', 'swimming', 'biking'];
        
        // result = [ 'boxing', 'football', 'swimming', 'kendo', 'judo', 'basketball', 'biking' ]
        ```
        
    - solution
        
        ```jsx
        const sports = ['boxing', 'football', 'swimming', 'biking'];
        sports.splice(3,0,"kendo","judo","basketball")
        
        console.log(sports)
        ```
        
- 7.) return array ที่อายุไม่น้อยกว่า 20 //
    - expected output
        
        ```jsx
        const array = [
          { name: 'Benji', age: 30 },
          { name: 'Nas', age: 20 },
          { name: 'Sayo', age: 22 },
          { name: 'Sapari', age: 16 },
          { name: 'Storm', age: 27 }
        ];
        
        // [ { name: 'Benji', age: 30 },{ name: 'Sayo', age: 22 },{ name: 'Storm', age: 27 } ]
        ```
        
    - solution
        
        ```jsx
        array.filter(e => e.age > 20)
        ```
        
- 8.) เขียน function หาผลรวมของเลขทุกตัวยกกำลังสองใน array //
    - expected output
        
        ```jsx
        input [2,4,3]
        output 29
        ```
        
    - solution
        
        ```jsx
        const sqrtSum = arr => arr.reduce((acc, cur) => acc + Math.pow(cur,2),0)
        ```
        
- 9.) เขียน function deleteTodo(n) ให้ n เท่ากับ id ที่จะลบใน array //
    - expected output
        
        ```jsx
        const todos = [
          { id: 1, title: 'reading' , completed: false},
          { id: 2, title: 'workout' , completed: true},
          { id: 3, title: 'cooking' , completed: true},
          { id: 4, title: 'coding' , completed: false},
        ]
        
        // output
        deleteTodo(2)
        [
          { id: 1, title: 'reading' , completed: false},
          { id: 3, title: 'cooking' , completed: true},
          { id: 4, title: 'coding' , completed: false},
        ]
        ```
        
    - solution
        
        ```jsx
        const deleteTodo = (n) => {
          let idx = todos.findIndex(e => e.id === n)
          todos.splice(idx,1)
        }
        
        // -------------------------------------------
        function deleteTodo(n) {
          let temp = [...todos]
          temp = temp.filter(todo => todo.id !== n);
          return temp;
        }
        deleteTodo(2)
        
        //-------------------------------------------
        const deleteTodo = (arr, id) => {
            let index = arr.findIndex(e => e.id === id)
            const a = arr.splice(index,1)
            return arr;
        }
        console.log(deleteTodo(todos,2))
        ```
        

Exclusive

- 10.) เขียน function รับ obj ให้ log ค่าออกมาเป็น array ของ key และ value
    - Expected Output
        
        ```jsx
        const jsdLearners = { 
        	boom: { id: 53, age: 26, isSingle: "มีแมวแล้ว" },
        	bright: { id: 22, age: 25, isSingle: true },
        	tee: { id: 25, age: 26, isSingle: "ไม่บอกครับ" },
        	josave: { id: 16, age: 29, isSingle: false }
        }
        
        // output
        // 53_boom is 26 years old, status is "มีแมวแล้ว"
        // 22_bright is 22 years old, status is "โสดจ่ะ"
        // 25_tee is 26 years old, status is "ไม่บอกครับ"
        // 16_josave is 29 years old, status is "ไม่โสดจ่ะ"
        ```
        
    - Solution
        
        ```jsx
        const jsdLearners = { 
        	boom: { id: 53, age: 26, isSingle: "มีแมวแล้ว" },
        	bright: { id: 22, age: 25, isSingle: true },
        	tee: { id: 25, age: 26, isSingle: "ไม่บอกครับ" },
        	josave: { id: 16, age: 29, isSingle: true }
        }
        
        const jsdData = obj => {
          const checkSingle = (status) => status === true ? "โสดจ่ะ"   : status === false ? "ไม่โสดจ่ะ" : status 
          
          for (let [key, value] of Object.entries(obj)) {
            console.log(`${value.id}_${key} is ${value.age} years     old, status is ${checkSingle(value.isSingle)}`)
          }
        }
        
        jsdData(jsdLearners)
        ```
        
- 11.) เขียน function หาผลรวมใน array ที่เท่ากับ target ให้ return index ของ array นั้น

*/