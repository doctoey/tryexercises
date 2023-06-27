let x = 99; //number
console.log(x);

let y = "Hello World"; //string
console.log(y);

let z = true; //boolean
console.log(z);
console.log(1 == 1); //true
console.log(1 == '1'); //true
console.log(1 === '1'); //false

console.log(Boolean(true)); //true
console.log(!true); //false
console.log(!!true); //true
console.log(!!{}); //true
console.log(!![]); //true
console.log(!!''); //false
console.log(!!new Date()); //true
console.log(!!'0'); //true
console.log(!!42); //true
console.log(!!-42); //true
console.log(!!0); //false

console.log(!!Infinity); //true
// !true = false, !!true = true, !false = true, !!false = false
// !isValid = true, isValid = false
// !isDisabled = false, isDisabled = true

console.log(!!false); //false
console.log(!!null); //false
console.log(!!undefined); //false
console.log(!!NaN); //false // Not a Number
console.log(!!0); //false
console.log(!!''); //false

a = 10;
b = 'toey';

console.log(typeof a); //number
console.log(typeof b); //string

let n = null;
console.log(n); //null
console.log(typeof n); //object

//let b
// console.log(b); //undefined
// console.log(typeof b); //undefined

let c = { name: 'toey', age: 20 };
console.log(c); //{ name: 'toey', age: 20 }
console.log(typeof c); //object

let d = [1, 2, 3, 4, 5];
console.log(d); //[ 1, 2, 3, 4, 5 ]
console.log(typeof d); //object
