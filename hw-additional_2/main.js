import {renderProducts} from "./hw_add2.js";

const app = document.querySelector("#app");

const products = [
    {
        id: 1,
        name: "Молоко",
        category: "Молочные продукты",
        bought: false
    },
    {
        id: 2,
        name: "Хлеб",
        category: "Выпечка",
        bought: true
    },
    {
        id: 3,
        name: "Сыр",
        category: "Молочные продукты",
        bought: false
    },
    {
        id: 4,
        name: "Яблоки",
        category: "Фрукты",
        bought: false
    }
];

function createUI(app) {
    const title = document.createElement("h1");
    title.textContent = "Список продуктов";
    app.append(title); //добавить в  DOM после элемента,  prepend - перед элементом
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.type = "text"; //НЕ ОБЯЗАТЕЛЬНО - ЭТО ДЕФОЛТНОЕ ЗНАЧЕНИЕ
    input.placeholder = "Введите продукт";
    const categoryInput = document.createElement("input");
    categoryInput.type = "text";
    categoryInput.placeholder = "Категория";
    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Добавить";


    form.append(input,  categoryInput, button);
    const list = document.createElement("ul");
    app.append(form, list);
    return {form, input, list,  categoryInput};
}

const {form, input, list,  categoryInput, addFromListButton} = createUI(app);



function normalizeProductName(productName) {
    return productName.trim().toLowerCase();
}

function hasProduct(productName) {
    const normalizedName = normalizeProductName(productName);
    return products.some(product => normalizeProductName(product.name) === normalizedName)
}

function addProduct(name, category) {
    const cleanName = name.trim();
    const cleanCategory = category.trim();

    if (
        !cleanName ||
        !cleanCategory ||
        hasProduct(cleanName)
    ) {
        return;
    }

    const newProduct = {
        id: Date.now(),
        name: cleanName,
        category: cleanCategory,
        bought: false
    };

    products.push(newProduct);

    renderProducts(products, list);
}



list.addEventListener("click", (event) => {
    const li = event.target.closest("li");
    if (!li || !list.contains(li)) {
        return

    }
    event.target.classList.toggle("bought");
});


function handleSubmit(e) {
    e.preventDefault();
    const productName = input.value.trim();
    const category = categoryInput.value.trim();
    addProduct(productName, category);
    input.value = "";
    input.focus();
}

//addEventListener
form.addEventListener("submit", handleSubmit);



renderProducts(products, list);














