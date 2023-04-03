const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field){
        this._field = field;
        this.currentX = 0;
        this.currentY = 0;
        this.selectWay = '';
        this.charY=[];
        this.charX=[];
        this.mode = '';
    }

    modeSelection(){
        this.mode = prompt(`Which MAP TYPE do you want to select
Type 1 to select default map
Type 2 to select random map
`)

        switch(this.mode){
            case '1':
                this.printCurrentMap();
                break;
            case '2':
                this.randomMap();
                break;
            default:
                console.log("Please type Again in CORRECT format");
                this.modeSelection();
        }

    }

    printCurrentMap(){
        let map = [];
        for(let i = 0; i < this._field.length; i++){
            map += '\n'
            for(let j = 0; j < this._field[i].length;j++){
                map+=(this._field[i][j])
            }
        }
        console.log(map);
        this.selectWay = prompt(`Which way do you want to go\nPlease Type only u,d,r,l:`);
        switch(this.selectWay){
            case 'u':
                this.goUp();
                break;
            case 'd':
                this.goDown();
                break;
            case 'l':
                this.goLeft();
                break;
            case 'r':
                this.goRight();
                break;
            default:
                console.log("Please type Again in CORRECT format");
                this.printCurrentMap();
        }
    }

    findCurrentChar(char){
        let x = [];
        let y = [];
        for(let i = 0; i < this._field.length; i++){
            for(let j = 0; j < this._field[i].length;j++){
                // console.log(`i = ${i}, j = ${j}`)
                if(this._field[i][j] === char){
                    x.push(i);
                    y.push(j);
                    }
                }
            }
        this.charX = x;
        this.charY = y;
    }

    goUp(){
        console.log(`\nGo Up`);
        this.currentX--;
        this.gameLogicCheck();
        this._field[this.currentX][this.currentY] = '*';
        this.printCurrentMap();
    }
    goDown(){
        //it's gonna be in format of [i][j] 
        // i === แนวนอน === x
        // j === แนวตั้ง  === y
        //ถ้าเดินลงล่าง ต้องเพิ่มแนวนอน1ตัว -> i+1
        console.log(`\nGo Down`);
        this.currentX++;
        this.gameLogicCheck();
        this._field[this.currentX][this.currentY] = '*';
        this.printCurrentMap();
    }
    goLeft(){
        //it's gonna be in format of [i][j] 
        // i === แนวนอน === x
        // j === แนวตั้ง  === y
        //ถ้าเดินไปซ้าย ต้องเพิ่มแนวนอน1ตัว -> i+1
        console.log(`\nGo Left`);
        this.currentY--;
        this.gameLogicCheck();
        this._field[this.currentX][this.currentY] = '*';
        this.printCurrentMap();
    }
    goRight(){
        console.log(`\nGo Right`);
        this.currentY++;
        this.gameLogicCheck();
        this._field[this.currentX][this.currentY] = '*';
        this.printCurrentMap();
    }

    gameLogicCheck(){
        //กำหนดค่ากว้างสุดในตัวแปร x,y 
        let x = this._field.length - 1;
        let y = this._field[0].length - 1;
        // เช็คตกแมพ
        if(this.currentX>x || this.currentY>y ||this.currentY<0 || this.currentX<0){
            console.log(`You are out of the map ,lol`)
            return this.endGame();
        //เช็คตกหลุม
        } else if(this._field[this.currentX][this.currentY] === 'O'){
            console.log(`You've fall into the HOLE ,lol`);
            return this.endGame();
        //เช็คชนะ
        } else if(this._field[this.currentX][this.currentY] === '^'){
            console.log(`Congratulations ! , You've reached your hat`);
            return this.endGame();
        } else {
            console.log(`Nicely done,Go on!`);
        }
    }

    randomMap(){
        console.log('ALL INPUT MUST BE A NUMBER , Column and Row should be more 3 or more')
        let x  = parseInt(prompt(`Please enter how long of column axis:`))
        let y  = parseInt(prompt(`Please enter how long of row axis:`))
        let hole  = parseInt(prompt(`Please enter how much of hole you wish to in percentage(1-100):`))
        if(isNaN(x) || isNaN(y)||isNaN(hole)||x<3||y<3){
            console.log(`You've entered in WRONG FORMAT , please try again`)
            return this.randomMap();
        }
        x = Math.ceil(x);
        y = Math.ceil(y);
        hole = Math.ceil(hole);
        
        //ได้ค่ากว้างที่สุดของแมปมา === x,y 
        //ใส่ที่ว่างกับข้อมูลลงไปในแมป
        // let i = 0;
        // let j = 0;
        this._field = [...Array(y)].map(e => Array(x).fill('░'));
        //add star character
        this._field[0][0] = '*';
        //add holes
        let totalHole = (x*y)/100*hole;
        totalHole = Math.ceil(totalHole);
        for(let k = 0; k < totalHole; k++){
            const i = Math.floor(Math.random() * this._field.length);
            const j = Math.floor(Math.random() * this._field[0].length);
            if(this._field[i][j] !== 'O' && this._field[i][j] !== '*'){
                this._field[i][j] = 'O';                
            } else {
                k--;
            }
        }
        //add hat to random position
        
        this.findCurrentChar('░')
        //find where empty locate 
        let randomHat = Math.floor(Math.random()*this.charX.length);
        this._field[this.charX[randomHat]][this.charY[randomHat]] = '^';
        this.randomStart();
        this.printCurrentMap();
    }

    endGame(){
        console.log(`End Game!,Please run the file again if you want to play`)
        process.exit();
    }

    randomStart(){
        let starRandom = prompt(`Are you want to start at upper-left or random place?
Type : Yes -> to random place
Type : Anything or whatever if you want to start at upper-left
`);
        if(starRandom.toLowerCase() === 'yes'){
            this._field[0][0] = '░';
            this.findCurrentChar('░');
            //find where empty locate 
            let randomStar = Math.floor(Math.random()*this.charX.length);
            this._field[this.charX[randomStar]][this.charY[randomStar]] = '*';
            this.printCurrentMap();
            this.currentX = this.charX[randomStar];
            this.currentY = this.charY[randomStar];
        } else {
            this.printCurrentMap();
        }
    }
}


const myField = new Field([
    ['*', '░', '░', '░'],
    ['░', 'O', '░', '░'],
    ['░', '^', '░', 'O']
  ]);
  
console.log(`u is up\nd is down\nr is right\nl is left`)
myField.modeSelection();

// Have the character start on a random location that’s not the upper-left corner. -> Done

// Create a “hard mode” where one or more holes are added after certain turns.

// Improve your game’s graphics and interactivity in the terminal. 
//There are many helpful packages to assist with this, and you can really get creative with how you approach terminal games.

// Create a field validator to ensure that the field generated by 
//Field.generateField() can actually be solved. This might be pretty difficult! You’ll essentially be creating a version of a maze solver.