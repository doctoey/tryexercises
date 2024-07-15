// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  return str.split("").reverse().join("");
}

const solution2 = (str) => str.split("").reverse().join("");

const solution3 = (s) => [...s].reverse().join("");

function solution4(s) {
  let o = "";
  for (let i = s.length - 1; i >= 0; i--) o += s[i];
  return o;
}

function solution5(str) {
  let n = "";
  for (let i of str) {
    n = i + n;
  }
  return n;
}
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(solution("world"), "dlrow");
//     assert.strictEqual(solution("hello"), "olleh");
//     assert.strictEqual(solution(""), "");
//     assert.strictEqual(solution("h"), "h");
//   });
// });
