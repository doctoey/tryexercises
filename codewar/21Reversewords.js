// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  let words = str.split(" "); // แบ่งข้อความเป็นคำๆ ด้วยช่องว่าง
  let reversedWords = []; // อาเรย์สำหรับเก็บคำที่กลับตัวอักษรแล้ว

  for (let word of words) {
    // ลูปผ่านแต่ละคำในอาเรย์
    let reversedWord = ""; // ตัวแปรสำหรับเก็บคำที่กลับตัวอักษรแล้ว
    for (let i = word.length - 1; i >= 0; i--) {
      // ลูปผ่านตัวอักษรของคำจากท้ายมาหน้า
      reversedWord += word[i]; // เพิ่มตัวอักษรที่กลับแล้วไปที่ reversedWord
    }
    reversedWords.push(reversedWord); // เก็บคำที่กลับตัวอักษรแล้วในอาเรย์
  }

  return reversedWords.join(" "); // รวมคำกลับมาเป็นข้อความด้วยช่องว่าง
}

function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

function reverseWords(str) {
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr.split(" ").reverse().join(" ");
}

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(
//       reverseWords("The quick brown fox jumps over the lazy dog."),
//       "ehT kciuq nworb xof spmuj revo eht yzal .god"
//     );
//     assert.strictEqual(reverseWords("apple"), "elppa");
//     assert.strictEqual(reverseWords("a b c d"), "a b c d");
//     assert.strictEqual(
//       reverseWords("double  spaced  words"),
//       "elbuod  decaps  sdrow"
//     );
//   });
// });
