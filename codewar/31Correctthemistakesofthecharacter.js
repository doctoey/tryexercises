// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string) {
  return string.replace(/5/g, "S")
                .replace(/0/g, "O")
                .replace(/1/g, "I");
}

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(correct("L0ND0N"), "LONDON");
//     assert.strictEqual(correct("DUBL1N"), "DUBLIN");
//     assert.strictEqual(correct("51NGAP0RE"), "SINGAPORE");
//     assert.strictEqual(correct("BUDAPE5T"), "BUDAPEST");
//     assert.strictEqual(correct("PAR15"), "PARIS");
//   });
// });
