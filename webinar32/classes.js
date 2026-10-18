// function constructor
function User(name, age) {
    this.name = name;
    this.age = age;
}

const anna = new User("Anna", 23);
const david = new User("David", 32);
console.log(anna);
console.log(david);
const user = new User("Ivan", 23);
console.log(user);

User.prototype.sayHello = function () {
    console.log(`Hello World! My name is ${this.name}`);
}

anna.sayHello();
david.sayHello();
//Chain prototypes david -> User.prototype -> Object.prototype

//Classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello World! My name is ${this.name}`);
    }
}

const person = new Person("Ivan", 23);
const person2 = new Person("Vanya", 34);
person.sayHello();
person2.sayHello();

console.log(Object.hasOwn(person2, "name"));
console.log(Object.hasOwn(Person.prototype, "sayHello"));