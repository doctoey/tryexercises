for (let i = 0; i < 5; i++) {
  console.log("WOW" + i);
}
console.log(""); // Add an empty line

let foods = ["Rice", "Pizza", "Sandwich"];

for (var item of foods) {
  console.log(item);
}
console.log(""); // Add an empty line

for (let index in foods) {
  console.log(foods[index]);
}
console.log(""); // Add an empty line

while (true) {
  console.log("Hello");
  break;
}

// do {
//   console.log("DOOO Hello");
// } while (true); // infinite loop
