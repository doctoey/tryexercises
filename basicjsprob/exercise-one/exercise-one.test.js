import {
  remove1,
  remove2,
  remove3,
  remove4,
  remove5,
  remove6,
  remove7,
  remove8,
  remove9,
  remove10,
  remove11,
} from "./exercise-one.js";

describe("remove function", () => {
  const testCases = [
    { input: "Hi!", expected: "Hi" },
    { input: "Hi!!!", expected: "Hi!!" },
    { input: "!Hi", expected: "!Hi" },
    { input: "!Hi!", expected: "!Hi" },
    { input: "Hi! Hi!", expected: "Hi! Hi" },
    { input: "Hi", expected: "Hi" },
  ];

  const functions = [
    remove1,
    remove2,
    remove3,
    remove4,
    remove5,
    remove6,
    remove7,
    remove8,
    remove9,
    remove10,
    remove11,
  ];

  functions.forEach((removeFn, index) => {
    describe(`remove${index + 1}`, () => {
      testCases.forEach(({ input, expected }) => {
        it(`should remove the last '!' from '${input}' correctly`, () => {
          expect(removeFn(input)).toBe(expected);
        });
      });
    });
  });
});
