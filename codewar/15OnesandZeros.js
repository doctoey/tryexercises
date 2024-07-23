// DESCRIPTION:
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

function binaryArrayToNumber(arr) {
  // เข้าร่วมอาร์เรย์เป็นสตริงและแปลงเป็นเลขฐาน 2
  return parseInt(arr.join(""), 2);
}

// ตัวอย่างการทดสอบ
console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); // 2
console.log(binaryArrayToNumber([0, 1, 0, 1])); // 5
console.log(binaryArrayToNumber([1, 0, 0, 1])); // 9
console.log(binaryArrayToNumber([0, 1, 1, 0])); // 6
console.log(binaryArrayToNumber([1, 1, 1, 1])); // 15
console.log(binaryArrayToNumber([1, 0, 1, 1])); // 11

function binaryArrayToNumber(arr) {
  return arr.reduce((acc, curr) => acc * 2 + curr, 0);
}

function binaryArrayToNumber(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result * 2 + arr[i];
  }
  return result;
}

const { assert } = require("chai");

describe("Ones and Zeros", () => {
  it("Example tests", () => {
    assert.strictEqual(
      binaryArrayToNumber([0, 0, 0, 1]),
      1,
      "binaryArrayToNumber([0, 0, 0, 1])"
    );
    assert.strictEqual(
      binaryArrayToNumber([0, 0, 1, 0]),
      2,
      "binaryArrayToNumber([0, 0, 1, 0])"
    );
    assert.strictEqual(
      binaryArrayToNumber([1, 1, 1, 1]),
      15,
      "binaryArrayToNumber([1, 1, 1, 1])"
    );
    assert.strictEqual(
      binaryArrayToNumber([0, 1, 1, 0]),
      6,
      "binaryArrayToNumber([0, 1, 1, 0])"
    );
  });
});
