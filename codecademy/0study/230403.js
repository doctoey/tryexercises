//Coding question
/*
Declare a variable named nestedFunction and set it equal to curriedMultiply() called with a number argument.

Declare a second variable, result and set it equal to nestedFunction() called with a number argument.

If you console.log() result, it should log a number.
*/
function curriedMultiply(a) {
    return function(b) {
        return a * b
    }
 }
 // Write your code here
 const nestedFunction = curriedMultiply(5);
 const result = nestedFunction(10); 
 
 console.log(result); //50