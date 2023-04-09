const numbersSum = require('./index');

describe('numbersSum Function', () => {
  test('Returns the sum of all numbers in the array', () => {
    const inputArray = [1, 2, "13", "4", "645"];
    const expectedOutput = 3;
    expect(numbersSum(inputArray)).toBe(expectedOutput);
  });

  test('Handles an array with no number elements', () => {
    const inputArray = [true, false, "123", "75"];
    const expectedOutput = 0;
    expect(numbersSum(inputArray)).toBe(expectedOutput);
  });

  test('Handles an array with numbers and other types', () => {
    const inputArray = [1, 2, 3, 4, 5, true];
    const expectedOutput = 15;
    expect(numbersSum(inputArray)).toBe(expectedOutput);
  });

  test('Handles an empty array', () => {
    const inputArray = [];
    const expectedOutput = 0;
    expect(numbersSum(inputArray)).toBe(expectedOutput);
  });

});