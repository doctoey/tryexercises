//ex.1
function calcAge(age) {
	return age * 365
}

/*
calcAge(65) ➞ 23725
calcAge(0) ➞ 0
calcAge(20) ➞ 7300
*/

//ex.2
function cubes(a) {
	return a ** 3
}

/*
cubes(3) ➞ 27
cubes(5) ➞ 125
cubes(10) ➞ 1000
*/

//ex.3
function printArray(number) {
  var newArray = [];

  for(var i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}
/*
printArray(1) ➞ [1]

printArray(3) ➞ [1, 2, 3]

printArray(6) ➞ [1, 2, 3, 4, 5, 6]
*/
/*
Test Passed: Value == '[1]'
Test Passed: Value == '[1, 2]'
Test Passed: Value == '[1, 2, 3]'
Test Passed: Value == '[1, 2, 3, 4]'
Test Passed: Value == '[1, 2, 3, 4, 5]'
Test Passed: Value == '[1, 2, 3, 4, 5, 6]'
Test Passed: Value == '[1, 2, 3, 4, 5, 6, 7]'
Test Passed: Value == '[1, 2, 3, 4, 5, 6, 7, 8]'
Test Passed: Value == '[1, 2, 3, 4, 5, 6, 7, 8, 9]'
Test Passed: Value == '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]'
*/
