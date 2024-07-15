// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function findSmallestInt1(args) {
  return Math.min(...args);
}

function findSmallestInt2(args) {
  let min = args[0];
  for (let i = 1; i < args.length; i++) {
    if (args[i] < min) {
      min = args[i];
    }
  }
  return min;
}

function findSmallestInt3(args) {
  return args.reduce(
    (min, current) => (current < min ? current : min),
    args[0]
  );
}

function findSmallestInt4(args) {
  return args.sort((a, b) => a - b)[0];
}

function findSmallestInt5(args) {
  let min = args[0];
  args.forEach((num) => {
    if (num < min) {
      min = num;
    }
  });
  return min;
}

function findSmallestInt6(args) {
  return Math.min.apply(null, args);
}

function findSmallestInt7(args) {
  return args.reduce((min, num) => Math.min(min, num), args[0]);
}

function findSmallestInt8(args) {
  return args.find((num) => args.every((otherNum) => num <= otherNum));
}
function findSmallestInt9(args) {
  let min = args[0];
  let i = 1;
  while (i < args.length) {
    if (args[i] < min) {
      min = args[i];
    }
    i++;
  }
  return min;
}

function findSmallestInt10(args) {
  if (args.length === 1) {
    return args[0];
  }
  const restMin = findSmallestInt10(args.slice(1));
  return args[0] < restMin ? args[0] : restMin;
}
