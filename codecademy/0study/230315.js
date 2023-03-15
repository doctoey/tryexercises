//Coding question
/*
Create a function colorMessage() that takes 2 string arguments, favoriteColor and shirtColor.

If the value of favoriteColor is the same as the value of shirtColor return the string 'The shirt is your favorite color!'.

If not, return the string 'That is a nice color.'

Feel free to test your code under the function definition.
*/

// Create function below
let colorMessage = (favoriteColor, shirtColor) => {
 if(favoriteColor === shirtColor){
   return 'The shirt is your favorite color!'
 } else {
   return 'That is a nice color.'
 }
}
colorMessage(blue,blue) //'The shirt is your favorite color!'



/*
Create a function isEven() that takes a number as its only parameter. The function should return true if the number is even and false if the number is odd.
*/

let isEven = (x) => {
 if (x % 2 === 0) {
   return true
 } else {
   return false
 }
}
isEven(2) //true
isEven(3) //false



/*
Create a function numberDigits() that takes the variable x as its only parameter.

If the variable x is between 0 and 9, return the string 'One digit: N', where N is the value of x. For example, numberDigits(5) would return:

'One digit: 5'
If the variable x is between 10 and 99, return the string 'Two digits: N', where N is the value of x. For example, numberDigits(12) would output:

'Two digits: 12'
Any other value of x, including negative numbers, return the string 'The number is: N', where N is the value of x. For example, numberDigits(-202) would output:

'The number is: -202'
*/

//เขียนเอง

let numberDigits1 = (x) => {
  if (x>=0 && x<=9){
    return `One digit: ${x}`
  } else if (x>=10 && x<=99){
    return `Two digit: ${x}`
  } else {
    return `The number is: ${x}`
  }
}

numberDigits1(9) //'One digit: 9'
numberDigits1(99) //'Two digit: 99'
numberDigits1(-202) //'The number is: -202'


//เฉลย 

const numberDigits = x => {
  let numString = '';
  if (x >= 0 && x <= 9){
    numString = 'One digit: ' + x;
  }else if (x >=10 && x <= 99){
    numString = 'Two digits: ' + x;
  }else {
    numString = 'The number is: ' + x;
  }

  return numString;
}
numberDigits(9) //'One digit: 9'
numberDigits(99) //'Two digits: 99'
numberDigits(-202) //'The number is: -202'

//ได้เหมือนกันแต่เฉลยบอกม่ายช่ายยย 
