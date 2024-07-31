// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function (iterable) {
  let arr = [];
  let prev = "";
  for (let i = 0; i < iterable.length; i++) {
    let curr = iterable[i];
    if (curr !== prev) {
      arr.push(curr);
      prev = curr;
    }
  }
  return arr;
};

var uniqueInOrder = function (iterable) {
  let arr = [];
  let itsplit = typeof iterable === "string" ? iterable.split("") : iterable;
  let prev = "";
  for (let i = 0; i < itsplit.length; i++) {
    let curr = itsplit[i];
    if (curr !== prev) {
      arr.push(curr);
      prev = curr;
    }
  }
  return arr;
};

function uniqueInOrder(iterable) {
  let result = [];
  let last;

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== last) {
      result.push((last = iterable[i]));
    }
  }

  return result;
}

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.deepEqual(uniqueInOrder("AAAABBBCCDAABBB"), [
//       "A",
//       "B",
//       "C",
//       "D",
//       "A",
//       "B",
//     ]);
//   });
// });
