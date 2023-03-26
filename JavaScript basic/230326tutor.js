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
//4
//5

// 6.) ให้เติมคำว่า kendo,judo,basketball ต่อท้าย swimming ใน array
//how to insert string to array at specific index
//https://bobbyhadz.com/blog/javascript-insert-string-at-index
const sports = ['boxing', 'football', 'swimming', 'biking'];

// result = [ 'boxing', 'football', 'swimming', 'kendo', 'judo', 'basketball', 'biking' ]


sports.splice(3,0,'kendo', 'judo', 'basketball')
console.log(sports) //[ 'boxing', 'football', 'swimming', 'kendo', 'judo', 'basketball', 'biking' ]
//7
//8
//9
//10
//11
//12