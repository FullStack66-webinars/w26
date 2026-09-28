// document - объект DOM

//document.getElementById(), document.querySelector(), document.createElement() ... -методы DOM API
//const app = document.getElementById('app');
const app = document.querySelector("#app");
console.log(app);
console.dir(app);
// const x = document.getElementById('x');
// console.log(x); //NULL
// console.dir(x); //NULL
//console.log(app === app1);// TRUE!!!!
// const li = document.createElement("li");
// li.textContent = "Молоко";
// app.append(li);

//
// const li = document.createElement("li");
// li.textContent = "Молоко";
// app.appendChild(li) // добавить ОДИН УЗЕЛ в конец объекта app в DOM,

function createUI(app) {
    const title = document.createElement("h1");
    title.textContent = "Список продуктов";
    app.append(title); //добавить в  DOM после элемента,  prepend - перед элементом
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.type = "text"; //НЕ ОБЯЗАТЕЛЬНО - ЭТО ДЕФОЛТНОЕ ЗНАЧЕНИЕ
    input.placeholder = "Введите продукт";
    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Добавить";
    form.append(input, button);
    const list = document.createElement("ul");
    app.append(form, list);
    return {form, input, list};
}

// const ui = createUI(app);// {form, input, list}
// const obj = {a,b,c};
// obj.a = 10;
// obj.b = 20;
// obj.c = 30;
// const {a,b,c} = obj;

const {form, input, list} = createUI(app);
console.dir(input);

//addEventListener
form.addEventListener("submit", function ()
{console.log("Форма отправлена");});


















