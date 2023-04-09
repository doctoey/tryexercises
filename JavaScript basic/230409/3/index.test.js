const calculateTax = require('./index');

describe('calculateTax Function', () => {
  test('Calculates tax for an income of 150000 as 0', () => {
    const inputIncome = 150000;
    const expectedOutput = 0;
    expect(calculateTax(inputIncome)).toBe(expectedOutput);
  });

  test('Calculates tax for an income of 220000 as 11000', () => {
    const inputIncome = 220000;
    const expectedOutput = 11000;
    expect(calculateTax(inputIncome)).toBe(expectedOutput);
  });

  test('Calculates tax for an income of 700000 as 105000', () => {
    const inputIncome = 700000;
    const expectedOutput = 105000;
    expect(calculateTax(inputIncome)).toBe(expectedOutput);
  });

  test('Calculates tax for an income of 0 as 0', () => {
    const inputIncome = 0;
    const expectedOutput = 0;
    expect(calculateTax(inputIncome)).toBe(expectedOutput);
  });
  
  test('Calculates tax for an income of 500000 as 50000', () => {
    const inputIncome = 500000;
    const expectedOutput = 50000;
    expect(calculateTax(inputIncome)).toBe(expectedOutput);
  });
  
  test('Calculates tax for an income of 150001 as 7500.05', () => {
    const inputIncome = 150001;
    const expectedOutput = 7500.05;
    expect(calculateTax(inputIncome)).toBe(expectedOutput);
  });
});