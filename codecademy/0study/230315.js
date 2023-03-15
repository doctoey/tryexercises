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
