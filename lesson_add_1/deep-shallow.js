
//Var1
const productsFromList = [
    "Milk", "Potato", "Cucumber", "Butter", "BUTTER"
]

const p1 = productsFromList; //ссылка на тот же массив
console.log(p1===productsFromList);
const p2 = [...productsFromList];
console.log(p2===productsFromList);

//Var 2
const productsFromListObj = [{
    name: "Milk",
    inFridge: true,
    inRecipe: false
},
    {
        name:  "Potato",
        inFridge: true,
        inRecipe: true
    },
    {
        name: "Cucumber",
        inFridge: false,
        inRecipe: false
    },
    {
        name: "Butter",
        inFridge: true,
        inRecipe: true
    }
]

const p2Obj = [...productsFromListObj];
console.log(p2Obj);

p2Obj[0].inFridge = false;
console.log(productsFromListObj)

//Var 3

const productsMap= new Map();
productsMap.set("Milk",{
    name: "Milk",
    inFridge: true,
    inRecipe: false
} )
// [{numb}, str, numb,{{},{},{}}]
//Бери элемент - если примитив - копируй и бери следующий, если нет - проваливайся внутрь
