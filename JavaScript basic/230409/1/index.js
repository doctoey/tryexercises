function ageClassification(age) {

    // Your code here
    if(age <=18) {
        return "Minor"
    } else if(age > 18 && age < 65 ) {
        return "Adult"
    } else {
        return "Senior"
    }

}
module.exports = ageClassification

console.log(ageClassification(18)) //Minor
console.log(ageClassification(28)) //Adult
console.log(ageClassification(65)) //Senior
console.log(ageClassification(66)) //Senior
console.log(ageClassification(999)) //Senior




//**ageClassification**

// Write a function that takes the user's age as input and return a message indicating whether they are a minor, an adult, or a senior citizen.

// | Age Range      | Category |
// |----------------|----------|
// | age <= 18      | Minor    |
// | 18 < age < 65  | Adult    |
// | age >= 65      | Senior   |

//   ```js
//   example 1
//   input: 25
//   output: 'Adult'

//   example 2
//   input: 70
//   output: 'Senior'
//   ```
// ---


