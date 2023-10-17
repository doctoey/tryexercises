function reverse(str) {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }
  return reverse;
}


function isPrime(number) {
  let isPrime = true;
  if (number <= 1) {
    isPrime = false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}


