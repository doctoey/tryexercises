const getMonthInfo = require('./index');

describe('getMonthInfo Function', () => {
  test('Returns the full name and number of days for month 3 (March)', () => {
    const inputMonth = 3;
    const expectedOutput = ['March', 31];
    expect(getMonthInfo(inputMonth)).toEqual(expectedOutput);
  });

  test('Returns the full name and number of days for month 11 (November)', () => {
    const inputMonth = 11;
    const expectedOutput = ['November', 30];
    expect(getMonthInfo(inputMonth)).toEqual(expectedOutput);
  });

  test('Returns the full name and number of days for month 1 (January)', () => {
    const inputMonth = 1;
    const expectedOutput = ['January', 31];
    expect(getMonthInfo(inputMonth)).toEqual(expectedOutput);
  });

  test('Returns the full name and number of days for month 2 (February)', () => {
    const inputMonth = 2;
    const expectedOutput = ['February', 28];
    expect(getMonthInfo(inputMonth)).toEqual(expectedOutput);
  });

  test('Returns the full name and number of days for month 12 (December)', () => {
    const inputMonth = 12;
    const expectedOutput = ['December', 31];
    expect(getMonthInfo(inputMonth)).toEqual(expectedOutput);
  });

});