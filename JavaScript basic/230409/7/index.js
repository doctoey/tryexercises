function countTrue(arr) {

  // Your code here
  let sum = 0
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === true) {
      sum += arr[i]
    } else if (arr[i] === false) {
      sum += arr[i]
    } else {
      sum = 0
    }
    } 
  return sum
  }
  
console.log(countTrue([true, true, true, true, true])) //5

console.log(countTrue([true, false, false, true, false])) //2
console.log(countTrue([false, false, false, false]))//0
console.log(countTrue([]))//0
  
  module.exports = countTrue;
//   # countTrue

// Create a function which returns the number of true values there are in an array.

// ```js
// Examples:

// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

// ```
// Notes:
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).