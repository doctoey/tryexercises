function uniqueOddNumbers(numbers) {

  // Your code here
  let arrnum = numbers.filter((number) => {
    return number % 2 !== 0
  });

let uniqueArrnum = [...new Set(arrnum)];

return uniqueArrnum
}

// let arrnum = [1, 2, 3, 3, 4, 4, 5, 6, 6];
// let uniqueArrnum = [...new Set(arrnum)]; //Set เป็นโครงสร้างข้อมูลที่ไม่อนุญาตให้มีค่าที่ซ้ำกัน
// console.log(uniqueArrnum); // [1, 2, 3, 4, 5, 6]

console.log(uniqueOddNumbers([1, 2, 3, 4, 5, 5, 7, 7, 9, 10])) //[ 1, 3, 5, 7, 9 ]
console.log(uniqueOddNumbers([2, 4, 6, 7])) //[ 7 ]

module.exports = uniqueOddNumbers;


// # uniqueOddNumbers

// Write a function that takes an array of numbers as input and returns an array of unique odd numbers. (filter duplicate)

// ```js
// Example 1:
// Input: [1, 2, 3, 4, 5, 5, 7, 7, 9, 10]
// Output: [1, 3, 5, 7, 9]

// Example 2:
// Input: [2, 4, 6, 7]
// Output: [7]
// ```


function uniqueOddNumbers1(numbers) {
  let uniqueArrnum = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0 && !uniqueArrnum.includes(numbers[i])) {
      uniqueArrnum.push(numbers[i]);
    }
  }

  return uniqueArrnum;
}



function uniqueOddNumbers2(numbers) {
  let uniqueArrnum = numbers.reduce((acc, number) => {
    if (number % 2 !== 0 && !acc.includes(number)) {
      acc.push(number);
    }
    return acc;
  }, []);

  return uniqueArrnum;
}