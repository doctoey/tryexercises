// Step 1
const input = 'a whale of a deal';
// Step  2
const vowels = ['a','e','i','o','u'];
// Step 3
let resultArray = [];
// Step 4
for (let inputIndex = 0; inputIndex < input.length; inputIndex++){
// Step 5 = console.log('i is ' + i);
// Step 6 - nested for loop
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++){
  // console.log('J is ' + j); // Step 7 - test code
// Step 8 - compare input letter to every letter in vowel array
    if (input[inputIndex] === vowels[vowelIndex]) {
      // Step 9 & 10 - Double 'e' & Double 'u'
      if (input[inputIndex] === 'e' || vowels[vowelIndex] === 'u') {
        resultArray.push(input[inputIndex],input[inputIndex])
      } else {
        resultArray.push(input[inputIndex])
      }
    }
  } 
}
// Step 11 & 12 - log results and join strings
console.log(resultArray.join('').toUpperCase())
// Test result to check output 
console.log('UUEEIEEAUUEE')
