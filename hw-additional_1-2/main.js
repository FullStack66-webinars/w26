const app = document.querySelector("#app");

import { createUI } from "./ui.js";

const productsFromList = [
  "Milk", "MILK", "Potato", "Cucumber", "BUTTER", "Butter", "BUTTER", "Butter", ""
]
const products =[];

import { createUI } from "./ui.js";

const app = document.querySelector("#app");

const {
    form,
    input,
    list,
    addFromListButton,
    dishForm,
    dishInput,
    missingProductsList
} = createUI(app);


function normalizeProductName(productName) {
    return productName.trim().toLowerCase();
}

function hasProduct(productName) {
    const normalizedName = normalizeProductName(productName);
    return products.some(product => normalizeProductName(product) === normalizedName)
}

function addProduct(productName) {
    const cleanName = productName.trim();
    if (!cleanName || hasProduct(cleanName)) {
        return
    }
    products.push(productName);
    const li = document.createElement("li");
    li.textContent = productName;
    list.append(li);
}


function handleAddProductFromList() {
    const uniqueProducts = [...new Set(productsFromList)];
    console.log("Before for Each", uniqueProducts);
    //new Set === Новый Set, [...new Set(productsFromList)] => новый массив
    productsFromList.forEach(addProduct);
    console.log(uniqueProducts);
}

addFromListButton.addEventListener("click", handleAddProductFromList);

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
    addProduct(productName);
    input.value = "";
    input.focus();
}

//addEventListener
form.addEventListener("submit", handleSubmit);















