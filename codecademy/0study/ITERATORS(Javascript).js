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



const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

const smallNumbers = bigNumbers.map(bigNumbers => {
  return bigNumbers/100
})

console.log(smallNumbers)
//[ 1, 2, 3, 4, 5 ]
