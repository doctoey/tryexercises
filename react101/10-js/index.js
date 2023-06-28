// condition

let condition = true;
if (condition) {
  console.log("condition is true");
} else {
    console.log("condition is false");
    }

const numb = 1
if (numb % 3 === 0) {
    console.log("fizz");
} else if (numb % 5 === 0) {
    console.log("buzz");
} else {
    console.log(`${numb}`);
}

// ternary operator <condition> ? <true> : <false>
const result = numb % 3 === 0 ? true : false; // short if
console.log(result);

switch (true) {
    case numb % 3 === 0:
        console.log("fizz");
        break;
    case numb % 5 === 0:
        console.log("buzz");
        break;
    default:
        console.log(`${numb}`);
        break;
}

console.log(1 || '');
console.log(1 && '');
console.log(null || '');
console.log(undefined && '');

//number
console.log('=======number=========');
console.log(1);
console.log(1.1);
console.log(1.1e4); // 1.10000 1.1แล้ว 0 อีก 4 ตัว , e4 => 0000 (10^4)
console.log(1.1e-4); //0.00011
console.log(100_000_000_000_000);
const a = 100_000_000_000_000;

console.log(Number(1)); //1
console.log(Number('1.1')); //1.1 
console.log(Number('1.1e4')); //11000
console.log(Number('11px')); //NaN


// avoid
// console.log(new Number(1));
// console.log(new Number('1.1'));
// console.log(new Number('11px'));

console.log(parseFloat('1.11000')); //1.11
console.log(parseInt('1.11000')); //1
console.log(parseInt('11px')); //11
console.log(parseInt('11', 2)); //3
console.log(parseInt('11', 10)); //11

console.log(isNaN('11px'))  //true
console.log(isNaN('11')) //false
console.log(isNaN('1.1')) //false
console.log(typeof 1); //number
console.log(typeof 1.1); //number

console.log(1.1 instanceof Number); //false
console.log(1 instanceof Number); //false
console.log(Number(1) instanceof Number); //false
console.log(new Number(1.1) instanceof Number); //true
console.log(new Number(1) instanceof Number); //true

console.log(1.111.toFixed(2)); //1.11
console.log(1.111.toPrecision(5)); //1.1110

//string
console.log('=======string=========');

console.log('Hello');
const str = 'Pizzzzza';
console.log(str.length); //7
console.log(str[0]); //P
console.log(str + '!'); //Pizzzzza!
console.log(`
    //
    .
    //
`)

console.log(str.toLowerCase()); //pizzzzza
console.log(str.toUpperCase()); //PIZZZZZA

console.log(str.includes('i')); //true
console.log(str.indexOf('z')); //2
console.log(str.replace('zz','ss')); //Pisszza
console.log(str.replace(/zz/,'ss')); //Pisszzza
console.log(str.slice(1,3)); //iz
console.log(str.split('z')); //[ 'Pi', '', '', '', 'a' ]
console.log(str.startsWith('P')); //true
console.log(str.startsWith('p')); //false
console.log(' 45 54 5555  '.trim()); //45 54 5550

console.log(typeof str); //string
console.log(str instanceof String); //false
console.log(new String(str) instanceof String); //true

//boolean
console.log('=======boolean=========');
console.log(true); //true
console.log(false); //false
console.log(true, false); //true false
console.log(!!true); //true
console.log(!true); //false
console.log(Boolean(true)); //true

console.log(typeof true); //boolean
console.log(true instanceof Boolean); //false
console.log(new Boolean(true) instanceof Boolean); //true


//function
console.log('=======function=========');

function makeCar() {
    console.log('make car ...');
}
makeCar(); //make car ...

const makeCarExpression = function makeCar() {
    console.log('make car ...');
}

makeCarExpression(); //make car ...
console.log(makeCarExpression); //[Function: makeCar]
console.log(makeCarExpression.name); //makeCar

const makeCarArrow = () => {
    console.log('make car arrow...');
}
makeCarArrow(); //make car arrow...

const makeCarArrowShort = () => console.log('make car arrow short...');
makeCarArrowShort(); //make car arrow short...

console.log(typeof makeCar); //function
console.log(typeof makeCarExpression); //function
console.log(typeof makeCarArrow); //function
console.log(typeof makeCarArrowShort); //function

function makeCarWithColor(color) {
    console.log(`make car with color ${color} ...`);
}
makeCarWithColor('red'); //make car with color red ...

function makeCarWithColorDefault(color = 'red') {
    console.log(`make car with color ${color} ...`);
}
makeCarWithColorDefault(); //make car with color red ...

function makeCarWithParams(name) {
    console.log('make carr ' + name + ' ...');
}
makeCarWithParams('BMW'); //make carr BMW ...

function makeCarPrice() {
    console.log(arguments, Array.isArray(arguments)); 
}
makeCarPrice('BMW', 1000000); //[Arguments] { '0': 'BMW', '1': 1000000 } false

function makeCarPriceWithRest(...params){
    console.log(params);
}
makeCarPriceWithRest(1) //[ 1 ]

function makeCarPartID(id) {
    const localID = 'L' + id
    return function (name) {
        return `${localID}___${name}`
    }
}

const carPartID = makeCarPartID('1234')
console.log(carPartID('AAAA')); //L1234___AAAA

const otherCarPartID = makeCarPartID('5678')
console.log(otherCarPartID('BBBB')); //L5678___BBBB

(function () {
    console.log('IIFE');
})(); //IIFE // เรียกได้เบยยย

(function (name) {
    console.log('aaa ' + name);
})('TOEY'); //aaa TOEY

console.log(carPartID.bind('aaaaaa')); 

const carPartId2 = makeCarPartID.call(this, 1234)
//.bind -> function attach to return new function
//.call -> pass arguments
//.apply -> pass arguments, makeCarPartID.apply(this, [1234])
console.log(carPartId2('AAAA')); //L1234___AAAA

//object
console.log('=======object=========');

const drink = {
    name: 'Coke',
    price: {
        sale:9,
        origin: 18
    },
    getPriceIncludeVat: function () {
        return this.price.sale * 1.07
    }

}

console.log(drink); //{ name: 'Coke', price: { sale: 9, origin: 18 } }
console.log(drink.name); //Coke
console.log(drink.price.sale); //9
console.log(drink.getPriceIncludeVat()); //9.63
console.log(drink['name']); //Coke
console.log(drink['price']['sale']); //9

console.log({...drink}); //{ name: 'Coke', price: { sale: 9, origin: 18 } }
console.log({...drink, a:99}); //{ name: 'Coke', price: { sale: 9, origin: 18 }, a: 99 }

console.log(Object.entries(drink)); //[ [ 'name', 'Coke' ], [ 'price', { sale: 9, origin: 18 } ] ]
for (const key in drink) {
    console.log(key, drink[key]);
}

console.log(typeof drink); //object

//array
//promise

//typescript
// -> use
// React

//การบ้าน
// convert number to roman 1000 -> 1_000_000
// 1 -> I
// 2 -> II
// 3 -> III
// 4 -> IV
// 5 -> V
// ไม่ใช้ library ใดๆ
// 
