import { fizzbuzz } from './simple-test.ts';
import { fizzbuzz2 } from './simple-test.ts';
// // simple-test.test.ts
// import { fizzbuzz } from './simple-test.ts';

// describe('fizzbuzz', () => {
//     it('should return an array of FizzBuzz results', () => {
//         const totalNumber = 15;
//         const result = fizzbuzz(totalNumber);
//         const expectedResult = [
//             "", "", "Fizz", "", "Buzz", "Fizz", "", "", "Fizz", "Buzz",
//             "", "Fizz", "", "", "FizzBuzz"
//         ];
//         expect(result).toEqual(expectedResult);
//     })
// })

describe('fizzbuzz', () => {
    it('should be fizz', () => {
        const divider = 3;
        const result = fizzbuzz(divider);
        expect(result).toEqual("Fizz");
    });

    it('should be buzz', () => {
        const divider = 5;
        const result = fizzbuzz(divider);
        expect(result).toEqual("Buzz");
    });

    it('should be fizzbuzz', () => {
        const divider = 15;
        const result = fizzbuzz(divider);
        expect(result).toEqual("FizzBuzz");
    });

});

describe('fizzbuzz2', () => {
    it('should be fizz', () => {
        jest.spyOn(console, 'log');
        fizzbuzz2();
        expect(console.log).toHaveBeenCalledWith("Fizz");
    });

    it('should be buzz', () => {
        jest.spyOn(console, 'log');
        fizzbuzz2();
        expect(console.log).toHaveBeenCalledWith("Buzz");
    });

    it('should be fizzbuzz', () => {
        jest.spyOn(console, 'log');
        fizzbuzz2();
        expect(console.log).toHaveBeenCalledWith("FizzBuzz");
    });
});

