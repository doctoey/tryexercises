//1
// Write your function here:
let canIVote = (age) => {
    if (age >= 18){
      return true
    }
    return false
  }
  
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
  // console.log(canIVote(19)) // Should print true
  
  // We encourage you to add more function calls of your own to test your code!
  console.log(canIVote(18)) //true
  console.log(canIVote(17)) //false



//2
//agreeOrDisagree()  
  // Write your function here:
let agreeOrDisagree = (a, b) => {
  if (a === b) {
    return 'You agree!'
  }
   return 'You disagree!'
 }
 
 
 
 
 
 // Uncomment the line below when you're ready to try out your function
 // console.log(agreeOrDisagree("yep", "yep")) 
 // Should print 'You agree!'
 
 // We encourage you to add more function call of your own to test your code!
 
 console.log(agreeOrDisagree(1,1))  //You agree!



 //3
 //lifePhase()
 // Write your function here:
let lifePhase = (age) => {
  switch (true) {
    case (age >= 0 && age <= 3) :
      return 'baby';
    case (age >= 4 && age <= 12) :
      return 'child';
    case (age >= 13 && age <= 19) :
      return 'teen';
    case (age >= 20 && age <= 64) :
      return 'adult';
    case (age >= 65 && age <= 140) :
      return 'senior citizen';
    default:
      return 'This is not a valid age';
  }
}




// Uncomment the line below when you're ready to try out your function
// console.log(lifePhase(5)) //should print 'child'

// We encourage you to add more function calls of your own to test your code!

console.log(lifePhase(3)) //baby
console.log(lifePhase(5)) //child
console.log(lifePhase(13)) //teen
console.log(lifePhase(20)) //adult
console.log(lifePhase(65)) //senior citizen
console.log(lifePhase(141)) //This is not a valid age
console.log(lifePhase(0)) //baby



//4
//finalGrade()
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
console.log(finalGrade(70, 62, 41))
console.log(finalGrade(80, 72, 83))
// We encourage you to add more function calls of your own to test your code!



//5
//reportingForDuty()
// Write your function here:
let reportingForDuty = (rank, lastName) => {
  return `${rank} ${lastName} reporting for duty!`
  
  }
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(reportingForDuty('Private', 'Fido')) // Should return 'Private Fido reporting for duty!'
  
  // We encourage you to add more function calls of your own to test your code!



  //6
  //
  //Fix The Broken Code
const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    let die1 = Math.floor(Math.random() * 6 + 1)
    let die2 = Math.floor(Math.random() * 6 + 1)
    return die1 + die2
}
console.log(rollTheDice())


//calculateWeight()
// Write your function here:
let calculateWeight = (earthWeight, planet) => {

  switch(planet){
    case 'Mercury':
    weight = earthWeight * 0.378;
    break;
    case 'Venus':
    weight = earthWeight * 0.907;
    break;
    case 'Mars':
    weight = earthWeight * 0.377;
    break;
    case 'Jupiter':
    weight = earthWeight * 2.36;
    break;
    case 'Saturn':
    weight = earthWeight * 0.916;
    break;
    default:
    weight = 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
  }
   return weight;
  }
  
  console.log(calculateWeight(100,'Mercury'))
  
  
  // Uncomment the line below when you're ready to try out your function
  // console.log(calculateWeight(100, 'Jupiter')) // Should print 236
  
  // We encourage you to add more function calls of your own to test your code!