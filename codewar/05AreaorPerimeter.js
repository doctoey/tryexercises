// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function (l, w) {
  // Return your answer
  return l === w ? Math.pow(l, 2) : 2 * (l + w);
};

const areaOrPerimeter2 = function (l, w) {
  return l == w ? l * w : 2 * (l + w);
};

const areaOrPerimeter3 = function (l, w) {
  if (w == l) {
    return w * l;
  } else {
    return 2 * (w + l);
  }
};

// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(areaOrPerimeter(3,  3),  9);
//     assert.strictEqual(areaOrPerimeter(6, 10), 32);
//   });
// });
