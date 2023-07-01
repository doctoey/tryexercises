const { convertToRoman } = require('./index.js')

describe('convertToRoman', function () {
    it('should convert numbers to Roman Number correctly', function () {
        expect(convertToRoman(1)).toBe('I');
        expect(convertToRoman(4)).toBe('IV');
        expect(convertToRoman(5)).toBe('V');
        expect(convertToRoman(9)).toBe('IX');
        expect(convertToRoman(10)).toBe('X');
        expect(convertToRoman(40)).toBe('XL');
        expect(convertToRoman(50)).toBe('L');
        expect(convertToRoman(90)).toBe('XC');
        expect(convertToRoman(100)).toBe('C');
        expect(convertToRoman(400)).toBe('CD');
        expect(convertToRoman(500)).toBe('D');
        expect(convertToRoman(900)).toBe('CM');
        expect(convertToRoman(1000)).toBe('M');
        expect(convertToRoman(4000)).toBe('MV');
        expect(convertToRoman(5000)).toBe('V');
        expect(convertToRoman(9000)).toBe('MX');
        expect(convertToRoman(10000)).toBe('X');
        expect(convertToRoman(40000)).toBe('XL');
        expect(convertToRoman(50000)).toBe('L');
        expect(convertToRoman(90000)).toBe('XC');
        expect(convertToRoman(100000)).toBe('C');
        expect(convertToRoman(400000)).toBe('CD');
        expect(convertToRoman(500000)).toBe('D');
        expect(convertToRoman(900000)).toBe('CM');
        expect(convertToRoman(1000000)).toBe('M');
        
      });
})