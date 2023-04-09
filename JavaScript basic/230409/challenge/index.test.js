const uncensor = require('./index');

describe('uncensor Function', () => {
  test('Returns the original uncensored string', () => {
    const censoredString = "Wh*r* d*d my v*w*ls g*?";
    const vowels = "eeioeo";
    const expectedOutput = "Where did my vowels go?";
    expect(uncensor(censoredString, vowels)).toBe(expectedOutput);
  });

  test('Returns the original string when no vowels are given', () => {
    const censoredString = "abcd";
    const vowels = "";
    const expectedOutput = "abcd";
    expect(uncensor(censoredString, vowels)).toBe(expectedOutput);
  });

  test('Returns the original uncensored string when all vowels are given', () => {
    const censoredString = "*PP*RC*S*";
    const vowels = "UEAE";
    const expectedOutput = "UPPERCASE";
    expect(uncensor(censoredString, vowels)).toBe(expectedOutput);
  });

  test('Handles an empty censored string', () => {
    const censoredString = "";
    const vowels = "aeiou";
    const expectedOutput = "";
    expect(uncensor(censoredString, vowels)).toBe(expectedOutput);
  });

  test('Handles an empty vowel string', () => {
    const censoredString = "hello";
    const vowels = "";
    const expectedOutput = "hello";
    expect(uncensor(censoredString, vowels)).toBe(expectedOutput);
  });
});