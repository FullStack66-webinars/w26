import {renderProducts, toggleProduct} from "./hw_add2.js";
import {createUI} from "./ui.js";

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



const {form, input, list,  categoryInput, filterAllButton,
    filterNeedButton,
    filterBoughtButton} = createUI(app);



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

function showAllProducts() {
    renderProducts(products, list);
}

filterAllButton.addEventListener(
    "click",
    showAllProducts
);

filterNeedButton.addEventListener(
    "click",
    showNeedProducts
);

function showNeedProducts() {
    const filteredProducts =
        products.filter(product => !product.bought);

    renderProducts(filteredProducts, list);
}

function showBoughtProducts() {
    const filteredProducts =
        products.filter(product => product.bought);

    renderProducts(filteredProducts, list);
}

filterBoughtButton.addEventListener(
    "click",
    showBoughtProducts
);

list.addEventListener("click", (event) => {
    const li = event.target.closest("li");
    if (!li || !list.contains(li)) {
        return

    }

    const id = Number(li.dataset.id);
    toggleProduct(products, id, list);
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















