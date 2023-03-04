const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val) ;
  if (checkA === checkB) {
  return func(val);
} else {
  return 'inconsistent results';
  }
}

console.log(checkConsistentOutput(addTwo, 10));    // 12




//รูปย่อ

//  const checkConsistentOutput = (func, val) => {
//  let checkA = val + 2;
//  let checkB = func(val);
//  return checkA === checkB 
//    ? func(val) 
//    : 'inconsistent results';  
//  }
