const countTrue = require('./index');

describe('countTrue Function', () => {
  test('Returns the number of true values in the array', () => {
    const inputArray = [true, false, false, true, false];
    const expectedOutput = 2;
    expect(countTrue(inputArray)).toBe(expectedOutput);
  });

  test('Handles an array with no true values', () => {
    const inputArray = [false, false, false, false];
    const expectedOutput = 0;
    expect(countTrue(inputArray)).toBe(expectedOutput);
  });

  test('Handles an empty array', () => {
    const inputArray = [];
    const expectedOutput = 0;
    expect(countTrue(inputArray)).toBe(expectedOutput);
  });

  test('Handles an array with only true values', () => {
    const inputArray = [true, true, true];
    const expectedOutput = 3;
    expect(countTrue(inputArray)).toBe(expectedOutput);
  });

  test('Handles an array with mixed true and false values', () => {
    const inputArray = [true, false, true, false, true];
    const expectedOutput = 3;
    expect(countTrue(inputArray)).toBe(expectedOutput);
  });
});