const getGrade = require('./index');

describe('getGrade Function', () => {
  test('Classifies a grade percentage of 75 as B', () => {
    const inputPercentage = 75;
    const expectedOutput = 'B';
    expect(getGrade(inputPercentage)).toBe(expectedOutput);
  });

  test('Classifies a grade percentage of 80 as A', () => {
    const inputPercentage = 80;
    const expectedOutput = 'A';
    expect(getGrade(inputPercentage)).toBe(expectedOutput);
  });

  test('Classifies a grade percentage of 45 as F', () => {
    const inputPercentage = 45;
    const expectedOutput = 'F';
    expect(getGrade(inputPercentage)).toBe(expectedOutput);
  });

  test('Classifies a grade percentage of 100 as A', () => {
    const inputPercentage = 100;
    const expectedOutput = 'A';
    expect(getGrade(inputPercentage)).toBe(expectedOutput);
  });

  test('Classifies a grade percentage of 0 as F', () => {
    const inputPercentage = 0;
    const expectedOutput = 'F';
    expect(getGrade(inputPercentage)).toBe(expectedOutput);
  });

  test('Classifies a grade percentage of 79 as B', () => {
    const inputPercentage = 79;
    const expectedOutput = 'B';
    expect(getGrade(inputPercentage)).toBe(expectedOutput);
  });

  test('Classifies a grade percentage of 60 as C', () => {
    const inputPercentage = 60;
    const expectedOutput = 'C';
    expect(getGrade(inputPercentage)).toBe(expectedOutput);
  });

  test('Classifies a grade percentage of 50 as D', () => {
    const inputPercentage = 50;
    const expectedOutput = 'D';
    expect(getGrade(inputPercentage)).toBe(expectedOutput);
  });
});