// Task
// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).
// You will need to figure out the rule of the series to complete this.

// Rules
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return "0.00".

// You will only be given Natural Numbers as arguments.

// Examples (Input --> Output)
// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function calculateSeriesSum(numTerms) {
  let sum = 0;
  let part = 1;
  for (let i = 0; i < numTerms; i++) {
    sum += 1 / part;
    part += 3;
  }

  return sum.toFixed(2);
}

function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }

  return s.toFixed(2);
}

function SeriesSum(n) {
  var sum = 0;
  for (var i = 0; i < n; i++) {
    sum += 1 / (3 * i + 1);
  }
  return sum.toFixed(2);
}

// const { assert } = require('chai');

// describe("Sample tests", () => {
//   it("n = 1", () => {
//     let actual = SeriesSum(1);
//     checkReturnValue(actual);
//     assert.strictEqual(actual,  "1.00", "n = 1")
//   });
//   it("n = 2", () => assert.strictEqual(SeriesSum(2),  "1.25", "n = 2"));
//   it("n = 3", () => assert.strictEqual(SeriesSum(3),  "1.39", "n = 3"));
//   it("n = 4", () => assert.strictEqual(SeriesSum(4),  "1.49", "n = 4"));
// });

// function checkReturnValue(actual) {
//   assert.isDefined(actual, "Your function did not return a value. Did you log it to console instead?");
// }
