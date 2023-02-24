//.push()  เพิ่มสมาชิกไปต่อท้าย
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('itemadd1','itemadd2')
console.log(chores)

//.pop() เอาสมาชิกสุดท้ายออก
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();
console.log(chores)


//.shift() เอาสมาชิกด้านหน้าออก
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift()    //เอาสมาชิกด้านหน้าออก ในที่นี้ orange juice
console.log(groceryList) //add สมาชิกเข้าไปด้านหน้า

//.unshift() เพิ่มสมาชิกไปด้านหน้า
groceryList.unshift('popcorn')
console.log(groceryList) // add popcorn ไปข้างหน้า

//slice ex1   
const sldata = [100,200,300,400,500]  //ต้องการ 200 ,300
sldata.slice(1,3) // จะได้ ชิ้นที่ 1 คือ 200 กับชิ้นที่ 2 (ทำการ+1) 300
console.log(sldata);  // จะยังเป็นอันเดิมอยู่ว ไม่แก้ array 
// ต้องหาตัวแปรมารับตัวที่จะเอาออกมา
let lastdata = sldata.slice(1,3)
console.log(lastdata);  // จะได้ 200,300 ละ

//slice ex2 ของ codecademy
console.log(groceryList.slice(1, 4)); // เอาตัวที่จะเอาตัวแรก , ตัวที่จะเอาตัวสุดท้าย +1 (first,end+1)

console.log(groceryList); //[ 'bananas', 'coffee beans', 'brown rice' ]

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

//splice(ตำแหน่งที่จะลบ , จำนวนที่จะลบ ,(option ใส่ก็ได้ไม่ใส่ก็ได้) สมาชิกที่ต้องการแทรกเข้าไปในตำแหน่งที่ลบ) 

const spdata = [10,20,30,40,50]
spdata.splice([1],3)     //เลข index
console.log(spdata);    // จะเหลือแค่ [ 10, 50 ]

const spdata2 = [10,20,30,40,50]
spdata2.splice([1],1)
console.log(spdata2);   // [ 10, 30, 40, 50 ] ลบแค่ตำแหน่งตัว 20 1 ตัว

const spdata3 = [10,20,30,40,50]
spdata3.splice([1],3,999)
console.log(spdata3);   //[ 10, 999, 50 ]   add 999 เข้าไปก็ได้ด้วย


//Arrays and Functions

const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
  arr[3] = "MUTATED";
}
changeArr(concept);
console.log(concept); //[ 'arrays', 'can', 'be', 'MUTATED' ]

function removeElement(newArr) {
  newArr.pop();   //ลบตัวสุดท้ายตัวนึง [ 'arrays', 'can', 'be']
}
removeElement(concept); //call function ลบตัวสุดท้ายตัวนึง 
console.log(concept); //[ 'arrays', 'can', 'be' ]

console.log(removeElement(concept));//call function เลยลบตัวสุดท้ายอีกตัวนึง 
console.log(concept);
