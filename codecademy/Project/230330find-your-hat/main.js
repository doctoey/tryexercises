const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let rowIndex = 0; //เก็บตำแหน่งปัจจุบันของผู้เล่น
let columnIndex = 0;
//let validateInput = 1;

class Field {
  constructor(fieldArray){
    this.field = fieldArray;
    this.fieldNumX = 8;
    this.fieldNumY = 10;
    this.start = {
        x:0,
        y:0
    }
    // this.start.x = 0
    // this.start.y = 0
    this.locationX = 0;
    this.locationY = 0;
  }

  print(){ //ไว้พิมพ์สถานะปัจจุบัน
    let fieldString = '';
    for(let i=0; i<this.field.length; i++){
        fieldString += this.field[i].join('');
        fieldString += '\n';
        console.clear() //เอาโค้ดจากเพื่อน ไม่ต้องขึ้นกระดานใหม่ทุกรอบ มันจะเด้งในกระดานเดิม
  }
  console.log(fieldString);
  }

  checkTile(row,col){ //ไว้เช็คว่าอยู่นอกกรอบมั้ย เจอหมวก เจอหลุมมั้ย
    if(typeof this.field[row] !== 'undefined' && typeof this.field[row][col] !== 'undefined'){ //ตรวจสอบว่าค่า row และ col ไม่เป็น undefined จะตรวจสอบค่าตำแหน่งปัจจุบัน
        if(this.field[row][col] === hat ){ //ถ้าค่าของช่อง คือหมวก คือเจอหมวกแล้ว 
            console.log('Congrats, you found your hat!');
            return 0;
        } else if (this.field[row][col] === hole ){ //เจอหลุม
            console.log('Sorry, you fell down a hole.');
            return 0;
        } else if (this.field[row][col] === fieldCharacter ) { //ถ้าค่าของช่องคือfieldCh ไม่เคยเดินช่องนี้ 
            this.field[row][col] = pathCharacter; //จะเปลี่ยนเป็น * คือเดินผ่านแล้ว
            return 1;
        } else {
            console.log('You have already stepped on this tile.'); //ถ้าเคยเดิน จะแจ้งว่าเคยเดินแล้วนะ เดินซ้ำ
            return 1;
        }
    } else { //ออกนอกกรอบ
        console.log('Out of bounds');
        return 0;
    }
}

    static generateField(width, height, /*numStartingLocations = 1*/ ){ //สร้าง field ด้วยความกว้าง + สูง ที่กำหนด
        //const PossibleChar = [hat, hole, fieldCharacter]
        //ไว้สุ่มอักขระในกระดาน ไม่ให้มีแต่ fieldCharacter
        const PossibleChar = [fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hat, hole]; //ไปถาม gpt มา มันบอกว่าเพิ่ม fieldCharacter จะเพิ่มโอกาศการเจอ fieldCharacter เพราะตอนแรก หลุมยุบยับ เลยถามมันว่าจะเพิ่มยังไง ทำให้เกมง่ายขึ้น
        let fieldArray = [];

        for(let i=0; i<height; i++){
            let temp = [];
            //fieldArray.push([]);
            
            for(let j=0; j<width; j++){
                //fieldArray[i].push(fieldCharacter);
                let randomIndex = Math.floor(Math.random() * PossibleChar.length); // 0-5
                //console.log(randomIndex)
                let chosenChar = PossibleChar[randomIndex] //ดึง PossibleChar มาสุ่ม index จาก randomindex
                //ตรวจตำแหน่งปัจจุบัน เป็นตำแหน่งเริ่มต้นหรือไม่ (0,0) ถ้าใช่ ให้เพิ่มลงใน pathCharacter ถ้าไม่ เพิ่มลงใน chosenChar ซึ่งตอนนี้ทำแต่ 0,0
                if(i === 0 && j === 0){
                temp.push(pathCharacter);
                } else {
                temp.push(chosenChar);
                }
            }
            fieldArray[i] = temp; //loop จบ 
        }

        // Generate all possible starting locations //สุ่มตำแหน่งเริ่มต้น ?
        // let startingLocations = [];
        // for(let i=0; i<height; i++){
        //     for(let j=0; j<width; j++){
        //   startingLocations.push([i, j]);
        //     }
        // }

        // let hatFound = false; //ไว้ตรวจว่ามีหมวกใน field มั้ย

        // for(let i=0; i<height; i++){ //วนลูปดูว่าเจอหมวกมั้ย
        //     for(let j=0; j<width; j++){
        //         if(fieldArray[i][j] === hat){
        //             hatFound = true;
        //             break;
        //         }
        //     }
    
        //     if(hatFound){
        //         break;
        //     }
        // }
        // if(!hatFound){ //ถ้าไม่เจอหมวก จะสุ่มแถว และ คอลั่ม
        //     let randomRow = Math.floor(Math.random() * height);
        //     let randomCol = Math.floor(Math.random() * width);
    
        //     fieldArray[randomRow][randomCol] = hat;
        // }
        return fieldArray;
    }
}

function playGame(){
    let myField = new Field(Field.generateField(8, 10));
    let validateInput = 1;
    /*while (validateInput === 1) {
        // Print current field
        myField.print();
    
        // Get user input
        let userInput = prompt('Which direction? (u=up, d=down, l=left, r=right): ');
    
        // Update rowIndex columnIndex 
        if (userInput === 'l') {
            columnIndex -= 1;
        } else if (userInput === 'r') {
            columnIndex += 1;
        } else if (userInput === 'u') {
            rowIndex -= 1;
        } else if (userInput === 'd') {
            rowIndex += 1;
        } else {
            console.log('Invalid input, closing game...');
            break;
        }
    
        // เช็คว่าชนะหรือแพ้
        let tile = myField.checkTile(rowIndex, columnIndex);
        if (tile === hole) {
            console.log('Sorry, you fell in a hole. Game over!');
            break;
        } else if (tile === hat) {
            console.log('Congratulations, you found the hat! You win!');
            break;
        }
    
        // ตำแหน่งที่อยู่ปัจจุบัน แทนด้วย *
        myField.field[rowIndex][columnIndex] === '*';
    }*/

    while(validateInput === 1){ //ยังไม่เจอหมวก ถ้าเจอหมวก validateInput === 0
    //print current field
    myField.print(); //พิมพ์สนามออกมาาาาา
    //get user input
    let userInput = prompt('Which direction? (u=up, d, l, r) : ')
    //add or subtract columnIndex if user input is left or right
    if (userInput === 'l') {
        columnIndex -= 1; //แนวนอน
        
    } else if (userInput === 'r') {
        columnIndex += 1;
        
    } else if (userInput === 'u') {
        rowIndex -= 1; //แนวตั้ง
        
    } else if (userInput === 'd') {
        rowIndex += 1;
        
    } else { //ถ้าไม่กด l r u d 
        console.log('Invalid input, close game ...');
        //continue;
    }
    validateInput = myField.checkTile(rowIndex,columnIndex);
    }
}

// function randomposition() {
//     this.start.x = Math.floor(Math.random() * (this.fieldNumX-1))
//     this.start.y = Math.floor(Math.random() * (this.fieldNumY-1))
//     this.locationX = this.start.x;
//     this.locationY = this.start.y;
//     this.field[this.start.x][this.start.y] = pathCharacter;
// }

function run (){
    playGame();
    //randomposition()
}

run();
// const myField = new Field((Field.generateField(8,10)))
// myField.print();