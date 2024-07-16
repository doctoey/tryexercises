// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function (humanYears) {
  // Your code here!
  let catYears = 0;
  let dogYears = 0;

  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  } else if (humanYears === 2) {
    catYears = 24;
    dogYears = 24;
  } else {
    catYears = 24 + (humanYears - 2) * 4;
    dogYears = 24 + (humanYears - 2) * 5;
  }

  return [humanYears, catYears, dogYears];
};

function calculateAges1(humanYears) {
  let catYears = 0;
  let dogYears = 0;

  for (let year = 1; year <= humanYears; year++) {
    if (year === 1) {
      catYears += 15;
      dogYears += 15;
    } else if (year === 2) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    }
  }

  return [humanYears, catYears, dogYears];
}

function calculateAges2(humanYears) {
  function calculateCatYears(humanYears) {
    if (humanYears === 1) return 15;
    if (humanYears === 2) return 15 + 9;
    return 15 + 9 + (humanYears - 2) * 4;
  }

  function calculateDogYears(humanYears) {
    if (humanYears === 1) return 15;
    if (humanYears === 2) return 15 + 9;
    return 15 + 9 + (humanYears - 2) * 5;
  }

  let catYears = calculateCatYears(humanYears);
  let dogYears = calculateDogYears(humanYears);

  return [humanYears, catYears, dogYears];
}

function calculateAges3(humanYears) {
  let catYears =
    humanYears === 1
      ? 15
      : humanYears === 2
      ? 15 + 9
      : 15 + 9 + (humanYears - 2) * 4;
  let dogYears =
    humanYears === 1
      ? 15
      : humanYears === 2
      ? 15 + 9
      : 15 + 9 + (humanYears - 2) * 5;

  return [humanYears, catYears, dogYears];
}

// const Test = require("@codewars/test-compat");

// describe("Example Tests", function () {
//   it("one", function () {
//     Test.assertSimilar(humanYearsCatYearsDogYears(1), [1, 15, 15]);
//   });

//   it("two", function () {
//     Test.assertSimilar(humanYearsCatYearsDogYears(2), [2, 24, 24]);
//   });

//   it("ten", function () {
//     Test.assertSimilar(humanYearsCatYearsDogYears(10), [10, 56, 64]);
//   });
// });
