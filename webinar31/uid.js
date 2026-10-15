const book = {
    id: 1, // MUST HAVE!!!
    isbn: "2132141521",
    publisher: "CoolPublisher",
    author: "Author",
    title: "Name"
};

// VAR 1 - Array Index const books= [book0, book1, book2 ...]; - > book3, delete book1 Индекс массива не может быть ID

//VAR 2 Custom ID
let id = 0;
const books = [{id: 1, isbn: "213219991"},
    {id: 2, isbn: "2132141521"},{id: 3, isbn: "21321000"}];
id = 3;
function nextId(){
    id++
}

//Var 3 Date.now()

const products = [];

for (let i = 0; i < 1000000; i++){
    products.push({
        id: Date.now(),
        name: `Product ${i}`,
    });
}

const ids = products.map( p => p.id);
const uniqueIds = new Set(ids);

console.log(uniqueIds.size);
console.log(ids.length);

//Var 4 Math.random

function generateId(){
    return Math.random().toString(36).slice(2);
}

console.log(generateId());
console.log(generateId());
console.log(generateId());

//Modern solution

const realId = crypto.randomUUID();
console.log(realId);
//1  Generate UUID, 2 check UUID, 3 use it

//UUIDv1 - time & identification number, UUIDv3 - hash, UUIDv4 crypto.randomUUID();
// UUIDv7 timestamp + random data

// 100, 123, 256, 14, 12, 45, 321, 41, 21, 111
//1, 6, 13, 5, 3, 9, 6, 5, 3, 3