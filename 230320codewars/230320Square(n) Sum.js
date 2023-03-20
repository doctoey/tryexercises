/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
1²+2²+2²=9

*/


function squareSum(numbers){
 let result = 0
 numbers.forEach(ele => {
   let temp = 0
   temp += ele * ele
   result += temp
   
   /*
   let temp = 0
   temp = ele.Math.sqrt() + arr[i]
   result += temp
   return result*/
 })
  return result
}
