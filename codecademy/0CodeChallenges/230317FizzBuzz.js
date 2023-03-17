/*
Write a fizzbuzz() function that takes in a number, n, and returns an array of the numbers from 1 to n. 
For multiples of three, use "Fizz" instead of the number, and for the multiples of five, use "Buzz".
For numbers that are multiples of both three and five, use "FizzBuzz" (capitalization matters).

For example, fizzbuzz(16) should return [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16].
*/

function fizzbuzz(n) {
  // Write your code here
  let ans = [];
  for (let i = 1 ; i <= n ; i++){
    if( i % 3 === 0 && i % 5 !== 0){
      ans.push('Fizz')
    } else if (i % 5 === 0 && i % 3 !== 0) {
       ans.push('Buzz')
    } else if ( i % 3 === 0 && i % 5 === 0) {
       ans.push('FizzBuzz')
    } else {
      ans.push(i)
    }
  }
  return ans;
}


console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(15));
