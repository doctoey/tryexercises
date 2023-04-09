const uniqueOddNumbers = require('./index');

describe('uniqueOddNumbers Function', () => {
  test('Returns unique odd numbers from the given array', () => {
    const inputArray = [1, 2, 3, 4, 5, 5, 7, 7, 9, 10];
    const expectedOutput = [1, 3, 5, 7, 9];
    expect(uniqueOddNumbers(inputArray)).toEqual(expectedOutput);
  });

  test('Returns an empty array when no odd numbers are present', () => {
    const inputArray = [2, 4, 6, 8, 10];
    const expectedOutput = [];
    expect(uniqueOddNumbers(inputArray)).toEqual(expectedOutput);
  });

  test('Handles an array with all duplicate odd numbers', () => {
    const inputArray = [3, 3, 5, 5, 7, 7];
    const expectedOutput = [3, 5, 7];
    expect(uniqueOddNumbers(inputArray)).toEqual(expectedOutput);
  });

  test('Handles an array with negative numbers', () => {
    const inputArray = [-1, -1, 1, 2, 3, 4, -3, 5, 5, 7, 7, 9, 10];
    const expectedOutput = [-1, 1, 3, -3, 5, 7, 9];
    expect(uniqueOddNumbers(inputArray)).toEqual(expectedOutput);
  });
});