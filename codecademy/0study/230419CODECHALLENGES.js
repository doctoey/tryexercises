const reverseArray = (arr) => {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};
/*
// Alternate solutions:

// Using the .unshift() method
const reverseArray = arr => {
    let reversed = [];
    for (let i = 0; i < arr.length; i++) {
        reversed.unshift(arr[i]);
    }
    return reversed
}

// As a function declaration:
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
}
*/

const sentence = ["sense.", "make", "all", "will", "This"];

console.log(reverseArray(sentence));






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




const greetAliens = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      console.log(
        "Oh powerful " + arr[i] + ", we humans offer our unconditional surrender!"
      );
    }
  };
  
  /*
  // Alternate solutions:
  
  // Using string interpolation
  const greetAliens = arr
  for (let i = 0; i<arr.length; i++){
      console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
  }
  
  // As a function declaration:
  function greetAliens(arr) {
  for (let i = 0; i<arr.length; i++){
      console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
  }
  }
  
  */
  
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  
  greetAliens(aliens);
  