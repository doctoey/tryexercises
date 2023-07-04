const a: number = 1;
console.log(a);

let b: string = "hello";
console.log(b);

class Person {
  constructor(public name: string) {}
}

const user = new Person("ODDDDDDDD");
console.log(user);

let myName: any = "toeyyyy";
myName = 20;
console.log(myName);

let myAge: unknown = 99;
myAge = "999";
console.log(myAge);

// if () {}
// else {}

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// do {

// } while (condition) {

// }

// for (const iterator of object) {

// }

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }

function add(n1: number, n2: number): void {
  console.log(n1 + n2);
}
add(1, 2);

function printResult(num: number): void {
  console.log(num);
}

// printResult(add(1,2))

let add1: (a1: number, a2: number) => number = (
  a1: number,
  a2: number
): number => a1 + a2;
printResult(add1(1, 2));

// function add2(n1:number, n2:number): number {}
// function add3(n1:string, n2:number): number {}
// function add4(n1:string, n2:string): number {}

const user2: { name: string; age: number } = {
  name: "toey",
  age: 20,
};
console.log(user2);

const { name: name1, age } = user2;
console.log(name1, age);

type User = {
  name: string;
  age: number;
};

type UserWithEmail = User & { email: string };

function addEmail1(user: User): { name: string; age: number; email: string } {
  return {
    name: user.name,
    age: user.age,
    email: "mailja",
  };
}

function addEmail2(user: User): UserWithEmail {
  return {
    name: user.name,
    age: user.age,
    email: "mailja",
  };
}

const user3 = addEmail2(user2);
// user3.email = '1111'

//Array
// const hobbies: Array<string> = ['sport', 'cooking']
const hobbies: string[] = ["sport", "cooking"];

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
console.log(...hobbies);

type Profile<T> = {
  name: string;
  age: number;
  profile: T;
};

const profile1: Profile<string> = {
  name: "toey",
  age: 20,
  profile: "hello",
};

// const profile2: Profile<string> = {
//     name: 'toey',
//     age: 20,
//     profile: 2
// }
// const profile3: Profile<string> = {
//     name: 'toey',
//     age: 20,
//     profile: {
//         name: 'toey',
//         age: 20
//     }
// }

// hobbies.push()
// hobbies.map()

//tuple
let role: [number, string] = [1142, "superadmin"];
console.log(role);
console.log(role[0]);
console.log(role[1]);

let httpStatus: [number, string][] = [
  [200, "ok"],
  [400, "not found"],
  [500, "server error"],
  [401, "unauthorized"],
  [403, "forbidden"],
];
console.log(httpStatus);

interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  calculateArea(): number {
    return this.width * this.height;
    throw new Error("Method not implemented.");
  }
}

const rectangle = new Rectangle(10, 20);
console.log(rectangle.calculateArea());

class Circle implements Shape {
  constructor(private radius: number) {}
  calculateArea(): number {
    return this.radius * this.radius * Math.PI;
    throw new Error("Method not implemented.");
  }
}

const circle = new Circle(10);
console.log(circle.calculateArea());

class Pair<A, B> {
  constructor(public a: A, public b: B) {}

  getFirst(): A {
    return this.a;
  }

  getSecond(): B {
    return this.b;
  }
}

// const pair = new Pair() < console.log();

const pair: Pair<number, string> = new Pair<number, string>(200, "OK");
console.log(pair.getFirst());
console.log(pair.getSecond());
