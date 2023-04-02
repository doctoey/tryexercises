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


 //Hoisting in JavaScript

 /* 
  Fill in the return statements so that foo() returns “I love Codecademy!” when it is called.

Add any string to the other return statement.
  */

var foo = function() {
    return "I love Codecademy!"
   };
    
  function foo() {
    return "anythinggggg! "
  }
  let phrase = foo();
  console.log(phrase); //I love Codecademy!


  /**
   Fill in the return statements so clickClack() returns “Moo!” when it is called.

Add any other string to the other return statement.
   */
function clickClack() {
    return "araaraaa..."
}
 
clickClack = function() {
    return "Moo!"
};
 
clickClack(); //Moo!



/**

console.log("I'm learning about");
 
for (let idx=0; idx < 999999999; idx++) {}
 
// The second console.log() statement is
// delayed by the for loop's execution
console.log("the Event Loop");

Q What happened when you ran the code? What did you notice about the timing of the execution of your console.log() statements?

A The code logged 2 lines to the console. The first line logged, then the for loop executed, and after some time, the last line logged to the console.
 */


/*
Q How is concurrency in JavaScript different from other programming languages?

A Usually when we think about concurrency in programming, it means that two or more procedures are executed at the same time on the same shared resources 
(e.g. threads, processes, CPU cores). JavaScript is single-threaded and can’t run that way, but we can emulate concurrency with the event loop. 
Code will always execute synchronously, but asynchronous code can be pushed to web APIs and directed back into the stack via the event queue and event loop.

*/

/*
Q Describe what role the heap and the stack play in the event loop.

A The heap and stack are the parts maintained by the JavaScript engine that run synchronously. 
The heap is a block of memory where we store objects or pointers to variables. 
JavaScript variables and objects that are currently in use are stored in the heap. 
The stack, or call stack, tracks what function is currently being run in your code.
*/

const shopForBeans = () => {
    return new Promise((resolve, reject) => {
      const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
      setTimeout(() => {
        let randomIndex = Math.floor(Math.random() * beanTypes.length);
        let beanType = beanTypes[randomIndex];
        console.log(`2. I bought ${beanType} beans because they were on sale.`);
        resolve(beanType);
      }, 1000);
    });
  }
   
  async function getBeans() {
    console.log(`1. Heading to the store to buy beans...`);
    let value = await shopForBeans();
    console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
  }
   
  getBeans();
  console.log("Describe what happens with this `console.log()` statement as well.");

//1. Heading to the store to buy beans...
// 2. I bought black beans because they were on sale.
// 3. Great! I'm making black beans for dinner tonight!