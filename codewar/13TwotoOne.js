// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  // รวม s1 และ s2 เข้าด้วยกัน
  let combinedString = s1 + s2;

  // ใช้ Set เพื่อลบตัวอักษรที่ซ้ำออก
  let uniqueChars = new Set(combinedString);

  // แปลง Set เป็น Array และเรียงตามลำดับ ASCII
  let sortedUniqueChars = Array.from(uniqueChars).sort();

  // รวมเป็น String และส่งคืน
  return sortedUniqueChars.join("");
}

const longest1 = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join("");
}

function longest2(s1, s2) {
  s3 = s1 + s2;
  s4 = s3.split("");
  s4 = s4.sort().filter(function (element, index, array) {
    return element !== array[index - 1];
    // .filter() ใช้สำหรับกรองตัวอักษรใน Array s4 โดยเราใช้ฟังก์ชัน callback ที่ส่งเข้าไปใน .filter() ซึ่งจะถูกเรียกสำหรับทุกตัวอักษรใน Array s4 ซึ่งจะถูกเก็บในพารามิเตอร์ element พร้อมด้วยดัชนี index ของตัวอักษรนั้นๆ และ Array ตั้งต้น array.
    // ในการกรอง เราใช้ return element !== array[index - 1]; เพื่อให้กรองออกเฉพาะตัวอักษรที่ไม่ซ้ำกัน 
    // โดยที่ส่วน array[index - 1] ที่ใช้ในเงื่อนไขการกรองคือ ตัวอักษรก่อนหน้า index ปัจจุบันในลำดับ Array นั้นๆ ซึ่งถูกเรียงลำดับ ดังนั้น เมื่อตัวอักษรถูกซ้ำกับตัวอักษรก่อนหน้า มันจะไม่ถูกเพิ่มเข้าไปใน Array ผลลัพธ์
  });
  return s4.join("");
}

function longest3(s1, s2) {
  let output = [];
  let combi = s1.concat(s2);
  let array = combi.split("").sort();

  for (let i = 0; i <= array.length; i++) {
    if (!output.includes(array[i])) {
      output.push(array[i]);
    }
  }
  return output.join("");
}

// const Test = require("@codewars/test-compat");

// describe("longest", function () {
//   it("Basic tests", function () {
//     Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty");
//     Test.assertEquals(
//       longest("loopingisfunbutdangerous", "lessdangerousthancoding"),
//       "abcdefghilnoprstu"
//     );
//     Test.assertEquals(
//       longest("inmanylanguages", "theresapairoffunctions"),
//       "acefghilmnoprstuy"
//     );
//   });
// });
