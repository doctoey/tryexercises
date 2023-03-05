let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

//step 1
//console.log(storyWords)

//step 2
console.log(storyWords.join(' '))

//step 3-4
let count = 0 ;
//แบบ arrow (ย่อ)
storyWords.forEach(word => count++)
//แบบเต็ม
//storyWords.forEach(function(word) {
//  count++;
//});
console.log(count) //181

//step 5-6 // Filter out unnecessary words
//แบบ arrow
storyWords = storyWords.filter(word => word !== unnecessaryWord);
//แบบเต็ม
//storyWords = storyWords.filter(function(word) {
//  return word !== unnecessaryWord;    หรือจะเขียนว่า 'literally' ก็ได้
//});
console.log(storyWords.join(' '))
let count2 = 0 ;
storyWords.forEach(word => count2++)
console.log(count2)
// literally หายไป 3คำ เหลือ 178 คำ

//step 7
storyWords.map(word => {
  if(word === misspelledWord){
    return "beautiful"
  } else {
    return word;
  }
})
console.log(storyWords.join(' '))

//step 8
const badWordIndex = storyWords.findIndex(word => word === badWord)
console.log(badWordIndex); //อยู่ตำแหน่งที่ 78

//step 9 เปลี่ยนคำ ในที่นี้ badWordIndex = badWord = freaking
storyWords[badWordIndex] = "really";
console.log(storyWords.join(' '));

//step 10
let lengthCheck = storyWords.every(word => {word.length <= 10});   //ถ้า <= 10 จะได้ false
console.log(lengthCheck);

let longWord = storyWords.find(word => word.length > 10);
//let longWord = storyWords.find(function(word) {
// return word.length > 10;
//});
console.log(longWord) //มีตัวนึง ที่อักษรยาวเกิน 10 คือ breathtaking

//step 11
story = story.replace("breathtaking", "stunning");

console.log(story); //เปลี่ยน breathtaking > stunning

/*Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" 
and it stretches all the way from Riverside Park in Manhattan 
to South Nyack, New Jersey. It's really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. 
I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. 
After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. 
The GW is a stunning 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, 
an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into
New York! At this point, you are very close to the end.*/
