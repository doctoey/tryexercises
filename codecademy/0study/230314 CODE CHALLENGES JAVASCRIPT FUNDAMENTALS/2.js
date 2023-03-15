//truthyOrFalsy()
let truthyOrFalsy = (value) =>{
 if(value){
   return true
 } 
   return false
}
truthyOrFalsy(0) //true
console.log(truthyOrFalsy()) //false


//numImaginaryFriends()
let numImaginaryFriends = (person) => {
 return Math.ceil(person * 0.25) // ปัดขึ้นเป็นเลขจำนวนเต็ม
}
console.log(numImaginaryFriends(20))  //5
console.log(numImaginaryFriends(10)) //3 (2.5 rounded up!)


console.log(Math.ceil(.95));
// Expected output: 1
console.log(Math.ceil(4));
// Expected output: 4
console.log(Math.ceil(7.004));
// Expected output: 8
console.log(Math.ceil(-7.004));
// Expected output: -7
