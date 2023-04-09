function getMonthInfo(monthNumber) {
    
  // Your code here
  switch (monthNumber) {
    case 1:
      return ['January', 31];
    case 2:
      return ['February', 28];
    case 3:
      return ['March', 31];
    case 4:
      return ['April', 30];
    case 5:
      return ['May', 31];
    case 6:
      return ['June', 30];
    case 7:
      return ['July', 31];
    case 8:
      return ['August', 31];
    case 9:
      return ['September', 30];
    case 10:
      return ['October', 31];
    case 11:
      return ['November', 30];
    case 12:
      return ['December', 31];
    default:
      return 'Invalid month number'
  }
}

console.log(getMonthInfo(1))
console.log(getMonthInfo(2))
console.log(getMonthInfo(3)) //[ 'March', 31 ]
console.log(getMonthInfo(4))
console.log(getMonthInfo(5))
console.log(getMonthInfo(6))
console.log(getMonthInfo(7))
console.log(getMonthInfo(8))
console.log(getMonthInfo(9))
console.log(getMonthInfo(10))
console.log(getMonthInfo(11)) //[ 'November', 30 ]
console.log(getMonthInfo(12))
console.log(getMonthInfo(13)) //Invalid month number

module.exports = getMonthInfo;


// # getMonthInfo

// Write a function that takes a month number as input and returns an array containing the full name of the month and the number of days in that month. (number of days in Feb is 28)


// ```js
// Example 1:
// Input: 3
// Output: ['March', 31]

// Example 2:
// Input: 11
// Output: ['November', 30]
// ```