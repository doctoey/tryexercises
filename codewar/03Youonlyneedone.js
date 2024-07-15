// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true;
    }
  }
  return false;
}

function check1(arr, val) {
  return arr.includes(val);
}

function check2(arr, val) {
  return arr.indexOf(val) !== -1;
}

function check3(arr, val) {
  return arr.some((element) => element === val);
}

function check4(arr, val) {
  return arr.find((element) => element === val) !== undefined;
}

function check5(arr, val) {
  return arr.filter((element) => element === val).length > 0;
}

function check6(arr, val) {
  return arr.reduce((found, element) => found || element === val, false);
}

function check7(arr, val) {
  let found = false;
  arr.forEach((element) => {
    if (element === val) {
      found = true;
    }
  });
  return found;
}

function check8(arr, val) {
  return new Set(arr).has(val);
}

function check9(arr, val) {
  return arr.findIndex((element) => element === val) !== -1;
}

function check10(arr, val) {
  for (const element of arr) {
    if (element === val) {
      return true;
    }
  }
  return false;
}
