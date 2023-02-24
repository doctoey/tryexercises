let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(`before pop .lenght ${secretMessage.length}`)

secretMessage.pop() //เอาตัวสุดท้ายออก
console.log(`after pop .lenght ${secretMessage.length}`)

secretMessage.push('to','Program')
console.log(`after push .lenght ${secretMessage.length}`)

secretMessage[7] = 'right'
console.log(`after edit easily => right : ${secretMessage}`)

secretMessage.shift()
console.log(`after shift (เอาตัวแรกออก) : ${secretMessage}`)

secretMessage.unshift('Programming')
console.log(`after unshift (เพิ่มตัวแรก) : ${secretMessage}`)

secretMessage.splice(6,5,'know,') //array.splice(indexToStart, numberOfIndices, 'stringToAdd');
console.log(`after delete 5 ตัว and add  : ${secretMessage}`)

console.log(secretMessage.join(' ')) //รวมสตริงเข้าด้วยกัน แต่ถ้าใส่แค่ '' จะติดกัน เลยใส่ ' ' ลงไปด้วย สเปซบาร์ทีนึง
