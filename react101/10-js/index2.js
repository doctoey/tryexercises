//array
const drinks = ['Coke', 'Pepsi', 'Fanta']
const drinkRef = drinks

console.log(drinks); //[ 'Coke', 'Pepsi', 'Fanta' ]
console.log(drinks === drinkRef); //true

console.log(new Array('Coke', 'Pepsi', 'Fanta')); //[ 'Coke', 'Pepsi', 'Fanta' ]
console.log(Array('Coke', 'Pepsi', 'Fanta')); //[ 'Coke', 'Pepsi', 'Fanta' ]

console.log(drinks[0]); //Coke

drinks[0] = 'Sprite'
console.log(drinks[0]); //Sprite

const drinksWithPrice = [['Coke', 10], ['Pepsi', 20], ['Fanta', 30]]
drinks.push('Colaaaa')
console.log(drinks); //[ 'Sprite', 'Pepsi', 'Fanta', 'Colaaaa' ]
console.log(drinks.length); //4
console.log('Pepsiii', ...drinks); //Pepsiii Sprite Pepsi Fanta Colaaaa

console.log(drinks.findIndex((v) => v === 'Pepsi')); //1
console.log(drinks.indexOf('Pepsi')); //1

const drinksWithId = [
    { id: 1, name: 'Coke', price: 10 },
    { id: 2, name: 'Pepsi', price: 20 },
    { id: 3, name: 'Fanta', price: 30 },
]

const found = drinksWithId.find(function (value){
    if (value.name === 'Pepsi') {
        return true
    }
    return false
})

console.log(found);
console.log(drinksWithId.find((value) => {
    if (value.name === 'Pepsi') {
        return true
    }
    return false
}));

console.log(drinksWithId.find((value) => {
    return value.name === 'Pepsi'
})); //{ id: 2, name: 'Pepsi', price: 20 }
console.log(drinksWithId.find((value) => value.name === 'Pepsi')); //{ id: 2, name: 'Pepsi', price: 20 }

for (let i = 0; i < drinks.length; i++) {
    console.log(drinks[i]);
}

for (const element of drinks) {
    console.log(element);
}

drinks.forEach((value, index) => {
    console.log(value, index);
})

const items = [
    { id: 1, name: 'Coke', price: 10, promotion: true },
    { id: 2, name: 'Pepsi', price: 20, promotion: false },
    { id: 3, name: 'Fanta', price: 30, promotion: true },
]

const itemMap = items.map((item) => {
    return {
        id: item.id,
        description: item.id + ' ' + item.name + '(' + item.price + ')'
    }
})
console.log(itemMap);
console.table(itemMap);

const itemFilter = items.filter((item) => item.price > 10)
console.log(itemFilter);

const total = items.reduce((prev, next) => prev + next.price)
console.log(total);

//some
const isPromotion  = items.some((item) => item.promotion) // true
//every
const isPromotion2  = items.every((item) => item.promotion) // false มีอันใดอันนึงเป็น false ก็จะเป็น false, every ก็จะไม่ทำงาน

// console.log(item.find(item => item.id === 2));

//promise

const foo = () => {
    console.log('first');
}

const bar = () => {
    setTimeout(() => {
        console.log('second');
    }, 1000)
}

const baz = () => {
    console.log('third');
}

foo()
bar()
baz()
// first third second

// ✅fullfilled
// ❌pending
// ⏰rejected

const resolvePromise = Promist.resolve('hello')
resolvePromise.then((value) => {
    console.log(value);
})

const rejectPromise = Promise.reject('error')
rejectPromise.then((value) => {
    console.log('success', value);
}).catch((error) => {
    console.log('error', error);
})

const PromiseA = new Promise((resolve, reject) => {
    reject('World')
})
promiseA.then((value) => {
    console.log('success', value);
}).catch((error) => {
    console.log('error', error);
})

Promise.resolve(43)
    .then(v => v *2)
    .then(v => Promise.resolve(v * 1000))
    .then((v) => {
        console.log(v);
    }).catch((error) => {
        console.log('error', error);
    })

//async await
async function run() {
    const v = await Promise.resolve(43)
    console.log(v);
}
run()

//การบ้าน
//ให้ get data มา มา process แล้วเรียกต่อกัน
//then
// getData().then()
// function run() {
    // async / await
// }

