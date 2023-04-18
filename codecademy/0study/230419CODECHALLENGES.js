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

const sentence1 = ["sense.", "make", "all", "will", "This"];

console.log(reverseArray(sentence1));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

const aliens1 = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens1);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const convertToBaby = (arr) => {
  const babyArray = [];
  for (let i = 0; i < arr.length; i++) {
    babyArray.push("baby " + arr[i]);
  }
  return babyArray;
};

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

const animals2 = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

console.log(convertToBaby(animals2));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const numbers123 = [5, 3, 9, 30];

const smallestPowerOfTwo = (arr) => {
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
  return results;
};

console.log(smallestPowerOfTwo(numbers123));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const veggies = ["broccoli", "spinach", "cauliflower", "broccoflower"];

const politelyDecline = (veg) => {
  console.log("No " + veg + " please. I will have pizza with extra cheese.");
};

// Checkpoint 1 solutions:
const declineEverything = (arr) => {
  arr.forEach(politelyDecline);
};

/*
  // As a function declaration:
  function declineEverything(arr) {
        arr.forEach(politelyDecline)
  }
  */

// Checkpoint 2 solutions:
// Using an anonymous function and string interpolation:
const acceptEverything = (arr) => {
  arr.forEach((e) => {
    console.log(`Ok, I guess I will eat some ${e}.`);
  });
};

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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = (num) => num * num;

const squareNums = (arr) => arr.map(toSquare);

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

const shoutGreetings = (arr) => arr.map((word) => word.toUpperCase() + "!");

/*
// As a function declaration AND using a loop:
function shoutGreetings(arr) {
    let shoutArray = []
    for(let i = 0; i<arr.length; i++){
        shoutArray.push(arr[i].toUpperCase() + '!')
    }
    return shoutArray
}
*/
const greetings777 = ["hello", "hi", "heya", "oi", "hey", "yo"];

console.log(shoutGreetings(greetings777));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const sortYears = (arr) => arr.sort((x, y) => y - x);

/*
  // As a function declaration AND using a named function:
  function sortYears(arr) {
        const checkYears = (year1, year2) => year2 - year1
        return arr.sort(checkYears)
  }
  */

const years999 = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

console.log(sortYears(years999));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const justCoolStuff = (firstArray, secondArray) =>
  firstArray.filter((item) => secondArray.includes(item));

/*
  // As a function declaration AND using named function w/ a loop:
  function justCoolStuff(firstArray, secondArray) {
        function isInSecondArray(item){
              for(let i = 0; i<secondArray.length; i++){
                    if (secondArray[i] === item){
                          return true
                    }
              }
              return false 
        }
        return firstArray.filter(isInSecondArray)
  }
  */

const coolStuff = [
  "gameboys",
  "skateboards",
  "backwards hats",
  "fruit-by-the-foot",
  "pogs",
  "my room",
  "temporary tattoos",
];

const myStuff = [
  "rules",
  "fruit-by-the-foot",
  "wedgies",
  "sweaters",
  "skateboards",
  "family-night",
  "my room",
  "braces",
  "the information superhighway",
];

console.log(justCoolStuff(myStuff, coolStuff));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const isTheDinnerVegan = (arr) => arr.every((food) => food.source === "plant");

/*
  // Alternate solution:
  // Using a function declaration, loop, and helper function:
  function isTheDinnerVegan(arr) {
        const isVegan = (food) => {
              if (food.source === 'plant') {
                    return true;
              }
              return false;
        }
        for(let i = 0; i<arr.length; i++){
              if (!isVegan(arr[i])){
                    return false 
              }
        }
        return true
  }
  */

const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
  { name: "dessert twinkies", source: "unknown" },
];

console.log(isTheDinnerVegan(dinner));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const speciesArray = [
  { speciesName: "shark", numTeeth: 50 },
  { speciesName: "dog", numTeeth: 42 },
  { speciesName: "alligator", numTeeth: 80 },
  { speciesName: "human", numTeeth: 32 },
];

const sortSpeciesByTeeth = (arr) =>
  arr.sort(
    (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth
  );

/*
  // As a function declaration AND using a named function:
  function sortSpeciesByTeeth(arr) {
        const compareTeeth = (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth
        return arr.sort(compareTeeth)
  }
  */

console.log(sortSpeciesByTeeth(speciesArray));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const findMyKeys = (arr) => arr.findIndex((item) => item === "keys");

/*
  // Alternate solution:
  // As a function declaration using a loop:
  function findMyKeys(arr) {
        let index = -1;
        for (let i = 0; i < arr.length; i++) {
              if (arr[i] === 'keys') {
                    index = i
                    break
              }
        }
        return index
  }
  */
const randomStuff = [
  "credit card",
  "screwdriver",
  "receipt",
  "gum",
  "keys",
  "used gum",
  "plastic spoon",
];

console.log(findMyKeys(randomStuff));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Final solution:
const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    set name(newName) {
      this._name = newName;
    },
    get breed() {
      return this._breed;
    },
    set breed(newBreed) {
      this._breed = newBreed;
    },
    get weight() {
      return this._weight;
    },
    set weight(newWeight) {
      this._weight = newWeight;
    },
    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      this._weight++;
    },
  };
};

/*
// Solution to checkpoint 1:
const dogFactory = (name, breed, weight) => {
      return {
            name: name,
            breed: breed,
            weight: weight
      }
}

// Solution to checkpoint 2:
const dogFactory = (name, breed, weight) => {
      return {
            _name: name,
            _breed: breed,
            _weight: weight,
            get name() {
                  return this._name;
            },
            set name(newName) {
                  this._name = newName;
            },
            get breed() {
                  return this._breed;
            },
            set breed(newBreed) {
                  this._breed = newBreed;
            },
            get weight() {
                  return this._weight;
            },
            set weight(newWeight) {
                  this._weight = newWeight;
            }
      }
}

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
