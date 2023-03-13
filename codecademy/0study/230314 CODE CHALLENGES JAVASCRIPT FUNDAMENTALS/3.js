// Write your function here:
let lifePhase = (age) => {
    switch (true) {
      case (age >= 0 && age <= 3):
        return 'baby';
      case (age >= 4 && age <= 12):
        return 'child';
      case (age >= 13 && age <= 19):
        return 'teen';
      case (age >= 20 && age <= 64):
        return 'adult';
      case (age >= 65 && age <= 140):
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
  