import {draftProducts, products} from "./main.js";

export function renderProducts(productsToRender, list) {
    list.replaceChildren();

    productsToRender.forEach(product => {
        const li = document.createElement("li");

        li.dataset.id = product.id;

        li.textContent =
            `${product.name} — ${product.category}`;

        if (product.bought) {
            li.classList.add("bought");
        }

        list.append(li);
    });
}

export function toggleProduct( id, list) {
    const actualProducts = getCurrentProducts();
    const product = actualProducts.find(
        product => product.id === id
    );

    if (!product) {
        return;
    }

    product.bought = !product.bought;

    renderProducts(actualProducts, list);
}

function getCurrentProducts() {
    return draftProducts ?? products;
}

export function createDraft() {
    draftProducts = structuredClone(products);
    renderProducts(draftProducts);
}

export function saveDraft() {
    if (!draftProducts) {
        return;
    }

    products.splice(
        0,
        products.length,
        ...draftProducts
    );

    draftProducts = null;

    renderProducts(products);
}
export function cancelDraft() {
    if (!draftProducts) {
        return;
    }

    draftProducts = null;

    renderProducts(products);
}