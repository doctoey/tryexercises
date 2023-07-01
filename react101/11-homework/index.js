function convertToRoman(num) {
    const romanNumerals = [
        { value: 1000000, numeral: 'M' },
        { value: 900000, numeral: 'CM' },
        { value: 500000, numeral: 'D' },
        { value: 400000, numeral: 'CD' },
        { value: 100000, numeral: 'C' },
        { value: 90000, numeral: 'XC' },
        { value: 50000, numeral: 'L' },
        { value: 40000, numeral: 'XL' },
        { value: 10000, numeral: 'X' },
        { value: 9000, numeral: 'MX' },
        { value: 5000, numeral: 'V' },
        { value: 4000, numeral: 'MV' },
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
      ];
  
    let result = '';
  
    for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= romanNumerals[i].value) {
        result += romanNumerals[i].numeral;
        num -= romanNumerals[i].value;
      }
    }
  
    return result;
  }

  module.exports = {
    convertToRoman
  };