console.log("============SPREAD=========");
 const extra = {
     email: "anna@gmail.com",
     id: 999
 };


const user = {
    id: 1,
    name: "Anna",
    ...extra
};

console.log(user.id);

const safeUser = {
    ...extra,
    id: 1,
    name: "Anna",
}

console.log(safeUser.id);

console.log("=============Array copy===========");

const users = [
    {name: "Anna", age: 23},
    {name: "David", age: 34},
];
const copiedUsers = [...users];
console.log(copiedUsers === users );

copiedUsers[0].name = "Ivan";
console.log(users[0].name);
console.log(users[0] === copiedUsers[0]);
copiedUsers.push({name: "Olga", age: 24});