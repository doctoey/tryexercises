function calculateTax(income) {

  // your code here
  if (income <= 150000) {
    return income * 0;
  } else if ( income >= 150001 && income <= 300000) {
    return income * 0.05;
  } else if  ( income >= 300001 && income <= 500000) {
    return income * 0.1;
  } else if ( income >= 500000 ) {
    return income * 0.15
  } else {
    return 'ivalid incomeeeee'
  }
}

console.log(calculateTax(150000)) //0
console.log(calculateTax(220000)) //11000
console.log(calculateTax(700000)) //105000

console.log(calculateTax(500000)) //50000
console.log(calculateTax(500001)) //75000.15

console.log(calculateTax('aaa')) //ivalid incomeeeee



module.exports = calculateTax;

// # calculateTax

// Write a function that calculates the tax payable based on a user's income, taking the income as input.

// | Income Range       | Tax Rate |
// |--------------------|----------|
// | >= 500,000         | 15%      |
// | 300,001 - 500,000  | 10%      |
// | 150,001 - 300,000  | 5%       |
// | <= 150,000         | No tax   |

// ```js
// Example 1:
// Input: 150000
// Output: 0

// Example 2:
// Input: 220000
// Output: 11000

// Example 3:
// Input: 700000
// Output: 105000
// ```