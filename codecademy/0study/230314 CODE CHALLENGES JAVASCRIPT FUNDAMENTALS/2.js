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
 return Math.ceil(person * 0.25)
}
console.log(numImaginaryFriends(20))  //5
console.log(numImaginaryFriends(10)) //3 (2.5 rounded up!)
