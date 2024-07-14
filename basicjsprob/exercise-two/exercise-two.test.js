import { calculate } from "./exercise-two";

describe("calculate function", () => {
  it("result!", () => {
    expect(calculate(89)).toBe(89);
    expect(calculate(123)).toBe(32);
    expect(calculate(65)).toBe(31);
    expect(calculate(321)).toBe(8);
  });
});
