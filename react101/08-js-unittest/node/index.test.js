const { add } = require('./index.js')
// ถ้า typescript จะเขียนแบบนี้
// import { add } from './index.js'
describe('', function () {
    test('1 + 2 should be 3', function () {
        // arr
        const num1 = 1
        const num2 = 2
        const expected = 3
        // act
        const result = add(num1, num2)

        // assert
        expect(expected).toEqual(result)
    })
})