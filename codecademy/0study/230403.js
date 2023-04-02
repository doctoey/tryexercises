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




 /*
The function makeGreeting() takes one string argument.

Write additional code to make makeGreeting() return a function.

The returned function should return a concatenation of the first string, a space, and the second string, such as “Hello World”.

You can uncomment the lines below the function to check your work.
 */
 function makeGreeting(string) {
    //Write your code here
      return function(secondString){ 
        return string + ' ' + secondString;
     }
    }
    let hello = makeGreeting('Hello');
    let helloWorld = hello('World');
    console.log(helloWorld);

//Currying with Arrow Functions
//Rewrite the function changeColor() with arrow expression syntax and assign it to the variable changeColorArrow.
function changeColor(color) {
    return function(obj) {
        obj.color = color;
    }
 }
 
 // write your code here
 let changeColorArrow = (color) => (obj) => {
   obj.color = color;
 }