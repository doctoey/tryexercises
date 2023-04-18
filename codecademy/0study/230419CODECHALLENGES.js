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
  



  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





  const convertToBaby = arr => {
    const babyArray = [];
    for (let i = 0; i < arr.length; i++) {
          babyArray.push('baby ' + arr[i]);
    }
    return babyArray
}

/*
// As a function declaration:
function convertToBaby(arr) {
    const babyArray = [];
    for (let i = 0; i < arr.length; i++) {
          babyArray.push('baby ' + arr[i]);
    }
    return babyArray
}
*/ 

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 





  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop:
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop:
            // We needed to create a new variable!
            let j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 



  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

  const politelyDecline = (veg) => {
        console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
  }
  
  // Checkpoint 1 solutions:
  const declineEverything = arr => {
    arr.forEach(politelyDecline)
  }
  
  /*
  // As a function declaration:
  function declineEverything(arr) {
        arr.forEach(politelyDecline)
  }
  */
  
  
  // Checkpoint 2 solutions:
  // Using an anonymous function and string interpolation:
  const acceptEverything = arr => {
    arr.forEach(e => {
      console.log(`Ok, I guess I will eat some ${e}.`)
    })
  }
  
  /*
  // Using a named function and string concatenation:
  const grudginglyAccept = veg => {
        console.log('Ok, I guess I will eat some ' + veg + '.');
  }
  const acceptEverything = arr => {
        arr.forEach(grudginglyAccept)
  }
  
  // Using a loop:
  const acceptEverything = arr => {
   for(let i = 0; i<arr.length; i++){
      console.log(`Ok, I guess I will eat some ${arr[i]}.`)
   }
  }
  */



  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  const numbers = [2, 7, 9, 171, 52, 33, 14];

  const toSquare = num => num * num
  
  const squareNums = arr => arr.map(toSquare) 
  
  /*
  // Using an anonymous function:
  const squareNums = arr => arr.map(e => e * e)
  
  // As a function declaration plus using our named function:
  function squareNums(arr) {
      return arr.map(toSquare)
  }
  */



  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////