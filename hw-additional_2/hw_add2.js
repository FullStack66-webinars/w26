export const products = [
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

export let draftProducts = null;

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

export function getCurrentProducts() {
    return draftProducts ?? products;
}

export function createDraft(list) {
    draftProducts = structuredClone(products);

    renderProducts(
        draftProducts,
        list
    );
}

export function saveDraft(list) {
    if (!draftProducts) {
        return;
    }

    products.splice(
        0,
        products.length,
        ...draftProducts
    );

    draftProducts = null;

    renderProducts(
        products,
        list
    );
}
export function cancelDraft(list) {
    if (!draftProducts) {
        return;
    }

    draftProducts = null;

    renderProducts(
        products,
        list
    );
}