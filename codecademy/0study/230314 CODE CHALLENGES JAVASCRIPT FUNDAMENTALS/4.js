// Write your function here:

/*เขียนผิดดดดด ต้องมี 3 para
let finalGrade = (pt) => {
switch(true){
case (pt >= 0 && pt <= 59) :
return 'F';
case (pt >= 60 && pt <= 69) :
return 'D';
case (pt >= 70 && pt <= 79) :
return 'C';
case (pt >= 80 && pt <= 89) :
return 'B';
case (pt >= 90 && pt <= 100) :
return 'A';
case (pt < 0 && pt > 100) :
return 'You have entered an invalid grade.';
}
}

console.log(finalGrade(90))
*/

function finalGrade(grade1, grade2, grade3) {

    if (grade1 < 0 || grade1 > 100 || grade2 < 0 || grade2 > 100 || grade3 < 0 || grade3 > 100) {
      return 'You have entered an invalid grade.';
    }
  
  let average = (grade1 + grade2 + grade3) / 3;
  
    if (average >= 90 && average <= 100) {
      return 'A';
    } else if (average >= 80 && average <= 89) {
      return 'B';
    } else if (average >= 70 && average <= 79) {
      return 'C';
    } else if (average >= 60 && average <= 69) {
      return 'D';
    } else {
      return 'F';
    }
  }
  
    // Check if any grade is less than 0 or greater than 100
  
  // Uncomment the line below when you're ready to try out your function
  // console.log(finalGrade(99, 92, 95)) // Should print 'A'
  console.log(finalGrade(99, 92, 95))
  console.log(finalGrade(70, 62, 95))
  console.log(finalGrade(80, 72, 83))
  // We encourage you to add more function calls of your own to test your code!