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


/*
Explain how JavaScript uses the stack and heap to manage memory.

The stack is used for static storage, where the size of an object is known when the code is compiled. Since the size is known, 
a fixed amount of data is reserved for the object, and the stack remains ordered.

The heap provides dynamic memory allocation at runtime for data types that don’t have a fixed size, like objects and functions. 
These are reference values and we keep track of where to find them in the unstructured heap using a fixed-size reference in the stack.

Why this answer?
This solution explains how the stack uses static storage(https://static-assets.codecademy.com/Courses/Learn-JavaScript/Event-Loop-and-Concurrency/call-stack-applet/call-stack.html)
 while the heap uses an unstructured format for dynamic memory allocation.
*/

/*
Explain the differences between the two algorithms that JavaScript uses for garbage collection.

With the reference-counting algorithm, if a reference count for an object drops down to zero, there are no more references to the object in your program, 
so the JavaScript engine can destroy the object and garbage collect any memory it was using.

The Mark-and-Sweep algorithm, meanwhile, runs periodically and starts at the root of your code, the global object. From the root, 
it’ll “sweep” across your code to find and mark anything that is “reachable” by traversing across all of the variables.

After that process, any of the variables that are unmarked (and therefore were not reachable) will be garbage collected during the sweep phase.

Why this answer?
These are the primary algorithms used by browsers to clear memory. This answer explains how the reference-counting algorithm counts references in general 
and how it can result in the circular reference issue. 
It then explains how the Mark-and-Sweep algorithm has a stronger approach since it traverses nodes to see which are ‘reachable’ at any given point in time.
*/

/* Identify the memory issues in the code below and fix them.
function buildMassiveString() {
    massiveString = Array(1000).fill("STRING").join();
}
buildMassiveString();

let jin = {role: "vocalist"}
let suga = {role: "rapper"}
let jHope = {role: "rapper"}
let rm = {role: "lead and rapper"}
let jimin = {role: "vocalist"}
let v = {role: "vocalist"}
let jungkook = {role: "vocalist"}

rm.laughingBuddy = jin
suga.bestie = jHope
jungkook.partnerInCrime = v
v.bestie = jimin
v.partnerInCrime = jungkook

let bts = [jin, suga, jHope, rm, jimin, v, jungkook]

console.log(bts)
*/
//solution 
function buildMassiveString() {
    let massiveString = Array(1000).fill("STRING").join();
}
buildMassiveString();


let jin = {role: "vocalist"}
let suga = {role: "rapper"}
let jHope = {role: "rapper"}
let rm = {role: "lead and rapper"}
let jimin = {role: "vocalist"}
let v = {role: "vocalist"}
let jungkook = {role: "vocalist"}

rm.laughingBuddy = jin
suga.bestie = jHope
jungkook.partnerInCrime = "v"
v.bestie = jimin
v.partnerInCrime = "jungkook"

let bts = [jin, suga, jHope, rm, jimin, v, jungkook]

console.log(bts)


/*
pen the debugging-memory-01.html file in a new tab. (https://static-assets.codecademy.com/Courses/Learn-JavaScript/Memory-Management/debugging-assessment-files/debugging-memory-01.html)

The code here adds 1,001 elements to the page: 1 ‘parent’ element and 1,000 additional elements.

Initially, all of the child elements have position:relative positioning.

When you click the “Move elements” button, half of the elements are converted to have position: absolute. The other half are moved with a computed value for the left property.

This assessment requires a preparation task: Record a Performance profile and click the button at least 10 times to capture the performance metrics.

Based on what you’ve learned and information found using your browser’s Developer Tools, answer the following questions:

What warnings are you likely to encounter when running this code?
What type of design decisions can you make to avoid this type of result and improve performance?



Ans  - Several warnings will appear, Forced reflow is a likely performance bottleneck, Long task took x ms, and Handler took x ms.

The errors can be resolved by separating the calculation and application of the positioning using two separate for loops. 
The CSS can also be modified to use modern positioning, like flex instead of relative and absolute positioning.

The warnings that appear are due to the way the element positions are calculated and applied to the elements that move using window.getComputedStyle(), 
and slightly due to the elements that change back and forth from relative to absolute positioning. The changes are calculated and applied within the same for loop, 
which can be optimized by first calculating the changes, then applying the changes separately, because the operation is synchronous.


Why this response?
This is a good answer because it includes a list of the types of warnings that appear, an explanation of why those errors appear, 
and a discussion on how you could consider optimizing the code.
*/
