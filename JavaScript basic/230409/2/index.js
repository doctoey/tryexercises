function getGrade(percentage) {

  // Your code here

  switch(true) {
    case percentage >= 80:
      return "A";
      break;
    case percentage >= 70 && percentage < 79:
      return "B";
      break;
        
    case percentage >= 60 && percentage < 69:
      return "C";
      break;
          
    case percentage >= 50 && percentage < 59:
      return "D";
      break;

    case percentage < 50:
      return "F";
      break;
    default: 
      return "Pls Enter Percentage"
  }
}


console.log(getGrade(49)) //F
console.log(getGrade(50)) //D
console.log(getGrade(60)) //C
console.log(getGrade(70)) //B
console.log(getGrade(81)) //A
console.log(getGrade("asd")) //Pls Enter Percentage
console.log(getGrade(75)) //B
console.log(getGrade(80)) //A
console.log(getGrade(45)) //F


module.exports = getGrade;


//# getGrade

// Write a function that takes a grade percentage as input and displays the corresponding letter grade.

// | Percentage | Grade |
// |------------|-------|
// | >= 80      | A     |
// | 70 - 79     | B     |
// | 60 - 69     | C     |
// | 50 - 59     | D     |
// | < 50        | F     |

// ```js
// example 1
// input: 75
// output: 'B'

// example 2
// input: 80
// output: 'A'

// example 3
// input: 45
// output: 'F'
// ```