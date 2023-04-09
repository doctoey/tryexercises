// Import the ageClassification function from the index.js file
const ageClassification = require('./index');

// Describe the purpose of the test suite
describe('Age Classification Function', () => {
  // Individual test case
  test('Classifies an age of 15 as Minor', () => {
    const inputAge = 15;
    const expectedOutput = 'Minor';
    expect(ageClassification(inputAge)).toBe(expectedOutput);
  });

  // Another test case
  test('Classifies an age of 25 as Adult', () => {
    const inputAge = 25;
    const expectedOutput = 'Adult';
    expect(ageClassification(inputAge)).toBe(expectedOutput);
  });

  // Another test case
  test('Classifies an age of 70 as Senior', () => {
    const inputAge = 70;
    const expectedOutput = 'Senior';
    expect(ageClassification(inputAge)).toBe(expectedOutput);
  });
});