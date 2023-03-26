//1
/*
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
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
//3
//4
//5
//6
//7
//8
//9
//10
//11
//12