// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return "WOW";
  }
}

// const { assert } = require("chai");

// describe("Basic tests", () => {
//   it("Tests", () => {
//     assert.strictEqual(basicOp("+", 4, 7), 11, "4 + 7 = 11");
//     assert.strictEqual(basicOp("-", 15, 18), -3, "15 - 18 = -3");
//     assert.strictEqual(basicOp("*", 5, 5), 25, "5 * 5 = 25");
//     assert.strictEqual(basicOp("/", 49, 7), 7, "49 / 7 = 7");
//   });
// });
