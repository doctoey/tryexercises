// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function doubleChar(str) {
  // แยกสตริงเป็นอาร์เรย์ของตัวอักษร
  let strspli = str.split("");
  // สร้างอาร์เรย์ว่างเพื่อเก็บผลลัพธ์
  let blankarr = [];

  // วนลูปผ่านอาร์เรย์แต่ละตัวอักษร
  for (let i = 0; i < strspli.length; i++) {
    // ดันตัวอักษรซ้ำสองครั้งลงในอาร์เรย์ผลลัพธ์
    blankarr.push(strspli[i] + strspli[i]);
  }

  // รวมอาร์เรย์เป็นสตริงและส่งคืนผลลัพธ์
  return blankarr.join("");
}

const doubleChar = (str) =>
  str
    .split("")
    .map((c) => c + c)
    .join("");

function doubleChar(str) {
  var word = "";
  for (var i = 0; i < str.length; i++) {
    word = word + str[i] + str[i];
  }
  return word;
}

function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1");
}

function doubleChar(str) {
  return str
    .split("")
    .map(function (c) {
      return c + c;
    })
    .join("");
}

// const Test = require("@codewars/test-compat");

// describe("doubleChar", function () {
//   it("works for some examples", function () {
//     Test.assertEquals(doubleChar("abcd"), "aabbccdd");
//     Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
//     Test.assertEquals(doubleChar("1337"), "11333377");
//     Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
//     Test.assertEquals(doubleChar("123456"), "112233445566");
//     Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
//   });
// });
