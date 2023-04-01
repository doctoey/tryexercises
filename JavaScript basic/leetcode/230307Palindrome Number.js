/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let L2R = x.toString()
    let R2L = [...L2R.split('')].reverse().join('')       //... ข้างหน้าคือ spread operator 
    if (L2R === R2L){
        return true
    } else {
        return false
    }
};

/*
เช่น
//spread operator

const newArr = [100,200,300]
const DATA = [10,20,...newArr]   //เพิ่ม ... ด้านหน้า คือการเพิ่มเข้าไป

console.log(DATA); //[10, 20, 100, 200, 300]   

*/

/*
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/
