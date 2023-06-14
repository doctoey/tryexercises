class Human {
    name: string = ''
    lastname: string = ''
    age: number = 0

    sayHello() {
        return `Hello, my name is ${this.name} ${this.lastname} and I'm ${this.age} years old.`
    }
}

const user1: any = new Human()
user1.name = 'John'
user1.lastname = 'Doe'
user1.age = 25
console.log(user1.sayHello());
