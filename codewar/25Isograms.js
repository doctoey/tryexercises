// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
  // เปลี่ยนสตริงทั้งหมดให้เป็นตัวพิมพ์เล็ก
  let strlower = str.toLowerCase();
  // สร้างอาร์เรย์ที่ใช้เก็บอักขระที่เจอ
  let charac = [];

  for (let i = 0; i < strlower.length; i++) {
    // เก็บอักขระปัจจุบันในตัวแปร char
    let char = strlower[i];
    // ถ้าอักขระปัจจุบันมีอยู่ในอาร์เรย์ charac แล้ว
    if (charac.indexOf(char) !== -1) {
      // เพิ่มอักขระปัจจุบันลงในอาร์เรย์ charac
      charac.push(char);
      // คืนค่า false ทันทีเพราะพบอักขระซ้ำ
      return false;
    }
    // ถ้าอักขระปัจจุบันยังไม่มีอยู่ในอาร์เรย์ charac
    // เพิ่มอักขระปัจจุบันลงในอาร์เรย์ charac
    charac.push(char);
  }
  // ถ้าวนลูปจบและไม่มีอักขระซ้ำ ให้คืนค่า true
  return true;
}

function isIsogram(str) {
  // เปลี่ยนสตริงทั้งหมดให้เป็นตัวพิมพ์เล็ก
  let strlower = str.toLowerCase();
  // สร้างอาร์เรย์ที่ใช้เก็บอักขระที่เจอ
  let charac = [];

  for (let i = 0; i < strlower.length; i++) {
    // เก็บอักขระปัจจุบันในตัวแปร char
    let char = strlower[i];
    // ถ้าอักขระปัจจุบันไม่มีอยู่ในอาร์เรย์ charac
    if (charac.indexOf(char) === -1) {
      // เพิ่มอักขระปัจจุบันลงในอาร์เรย์ charac
      charac.push(char);
    } else {
      // ถ้าอักขระปัจจุบันมีอยู่ในอาร์เรย์ charac แล้ว
      // คืนค่า true เพราะพบอักขระซ้ำ
      return true;
    }
  }
  // ถ้าวนลูปจบและไม่มีอักขระซ้ำ ให้คืนค่า false
  return false;
}

function isIsogram(str) {
  str = str.toLowerCase();
  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(isIsogram("Dermatoglyphics"), true);
//     assert.strictEqual(isIsogram("isogram"), true);
//     assert.strictEqual(
//       isIsogram("aba"),
//       false,
//       "same chars may not be adjacent"
//     );
//     assert.strictEqual(
//       isIsogram("moOse"),
//       false,
//       "same chars may not be same case"
//     );
//     assert.strictEqual(isIsogram("isIsogram"), false);
//     assert.strictEqual(
//       isIsogram(""),
//       true,
//       "an empty string is a valid isogram"
//     );
//   });
// });
