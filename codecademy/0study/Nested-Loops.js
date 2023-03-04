// Write your code below
const bobsFollowers = ["ลา", "สี", "อะ", "ไร"];

const tinasFollowers = ["ลา", "สี", "เขียว"];

const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

// Print the results
console.log("Bob's followers: " + bobsFollowers);
console.log("Tina's followers: " + tinasFollowers);
console.log("Mutual followers: " + mutualFollowers);

//Bob's followers: ลา,สี,อะ,ไร
//Tina's followers: ลา,สี,เขียว
//Mutual followers: ลา,สี
