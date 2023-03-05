//The .forEach() Method

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];


fruits.forEach(fruits => {
  console.log(`I want to eat a ${fruits}`)
});

//Output:
//I want to eat a mango
//I want to eat a papaya
//I want to eat a pineapple
//I want to eat a apple


//The .map() Method
//array map เอาค่าสมาชิกใน array มา map ค่า(เปลี่ยนแปลงค่า) แล้วก็สร้างค่าเป็น array ก้อนใหม่มาใช้งาน
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animals => {
  return animals[0]
})

console.log(secretMessage.join(''));
//ตัวแรกของHen ele llama leo .. มารวมกัน ได้ HelloWorld


//The .filter() Method
const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

const smallNumbers = bigNumbers.map(bigNumbers => {
  return bigNumbers/100
})

console.log(smallNumbers)
//[ 1, 2, 3, 4, 5 ]



const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
})
console.log(smallNumbers)
//[ 200, 3.14, 7, 13 ]

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})

console.log(longFavoriteWords)
//[ 'nostalgia', 'hyperbole', 'esoteric' ]

//The .findIndex() Method
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(e => {
  return e === 'elephant';
});
console.log(foundAnimal)
// 7

const startsWithS = animals.findIndex(animals => {
  if (animals[0] === 's'){
    return true;
  } else {
    return false;
  }
});
console.log(startsWithS)
//3

//อันนี่ที่เว็บเฉลย
// const startsWithS = animals.findIndex(animal => {
//   return animal[0] === 's' 
//   ? true 
//   : false;
// });


//The .reduce() Method
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator:', accumulator);
  console.log('The value of currentValue:', currentValue);
  return accumulator + currentValue;
  }, 10);
//Output:
//The value of accumulator: 10
//The value of currentValue: 1
//The value of accumulator: 11
//The value of currentValue: 3
//The value of accumulator: 14
//The value of currentValue: 5
//The value of accumulator: 19
//The value of currentValue: 7
console.log(newSum)
//26




