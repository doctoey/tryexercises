// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

var number = function (busStops) {
  // Good Luck!
  let total = 0;

  for (let i = 0; i < busStops.length; i++) {
    total += busStops[i][0];
    total -= busStops[i][1];
  }

  return total;
};

// number([[10,0],[3,5],[5,8]]),5) => เริ่มต้นที่ 10 คน และไม่มีคนลง จะเหลือ 10 คน  total = 0 + 10 - 0   , 0 แรกคือคนเริ่มต้น , 10 คือ คนขึ้น , 0 หลังคือคนลง
// และไปถึงป้ายถัดไป 3 คนขึ้น 5 คนลง จะเหลือ 8 คน total = 10 + 3 - 5 ตอนนี้เหลือ 8 คน , 10 คือ คนที่อยู่บนรถเดิม , 3 คือคนขึ้น , 5 คือคนลง
// และไปถึงป้ายถัดไป 5 คนขึ้น 8 คนลง จะเหลือ 5 คน total = 8 + 5 - 8 เหลือ 5 คน , 8 คือ คนที่อยู่บนรถเดิม , 5 คือคนขึ้น , 8 คือคนลง

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(
//       number([
//         [10, 0],
//         [3, 5],
//         [5, 8],
//       ]),
//       5
//     );
//     assert.strictEqual(
//       number([
//         [3, 0],
//         [9, 1],
//         [4, 10],
//         [12, 2],
//         [6, 1],
//         [7, 10],
//       ]),
//       17
//     );
//     assert.strictEqual(
//       number([
//         [3, 0],
//         [9, 1],
//         [4, 8],
//         [12, 2],
//         [6, 1],
//         [7, 8],
//       ]),
//       21
//     );
//     assert.strictEqual(number([[0, 0]]), 0);
//   });
// });
