const { convertToThaiText } = require('./index.js')

describe('convertToThaiText', function () {
    it('should convert numbers to Thai text correctly', function () {
        expect(convertToThaiText(1)).toBe('หนึ่ง');
        expect(convertToThaiText(10)).toBe('สิบ');
        expect(convertToThaiText(11)).toBe('สิบเอ็ด');
        expect(convertToThaiText(21)).toBe('ยี่สิบเอ็ด');
        expect(convertToThaiText(100)).toBe('หนึ่งร้อย');
        expect(convertToThaiText(1000)).toBe('หนึ่งพัน');

      });
})