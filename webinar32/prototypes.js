const products = ["Milk", "Eggs"];
products.push("Meat");
console.log(products);

console.log(Object.hasOwn(products, "push"));
console.log(Object.hasOwn(Array.prototype, "push"));

console.log(Object.getPrototypeOf(products) === Array.prototype);

//Chain of prototypes products -> Array.prototype -> Object.prototype -> null

const animal = {
    eats: true,
    sleep(){
        console.log("The animal is sleeping");
    }
};

const dog = Object.create(animal);
dog.name = "Rex";
console.log(dog.name);
console.log(dog.eats);
dog.sleep();
console.log(Object.hasOwn(dog, "name"));
console.log(Object.hasOwn(dog, "eats"));
console.log(Object.hasOwn(dog, "sleep"));
console.log(Object.getPrototypeOf(dog) === animal);
animal.eats = false;
console.log(dog.eats);
dog.eats = true;
console.log(dog.eats);
console.log(Object.hasOwn(dog, "eats"));
console.log(animal.eats);
console.log(dog);
console.log(animal);