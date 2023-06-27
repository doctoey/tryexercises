const { convert } = require("./index");

describe("", function () {
  test("1 should be หนึ่ง ", function () {
    const input = 1;
    const expected = "หนึ่ง";
    const result = convert(input);
    expect(expected).toEqual(result);
  });
});

describe("", function () {
  test("10 should be สิบ ", function () {
    const input = 10;
    const expected = "สิบ";
    const result = convert(input);
    expect(expected).toEqual(result);
  });
});

describe("", function () {
  test("11 should be สิบเอ็ด ", function () {
    const input = 11;
    const expected = "สิบเอ็ด";
    const result = convert(input);
    expect(expected).toEqual(result);
  });
});

describe("", function () {
  test("21 should be ยี่สิบเอ็ด ", function () {
    const input = 21;
    const expected = "ยี่สิบเอ็ด";
    const result = convert(input);
    expect(expected).toEqual(result);
  });
});

describe("", function () {
  test("141 should be หนึ่งร้อยสี่สิบเอ็ด ", function () {
    const input = 141;
    const expected = "หนึ่งร้อยสี่สิบเอ็ด";
    const result = convert(input);
    expect(expected).toEqual(result);
  });
});

describe("", function () {
  test("1000 should be หนึ่งพัน ", function () {
    const input = 1000;
    const expected = "หนึ่งพัน";
    const result = convert(input);
    expect(expected).toEqual(result);
  });
});
