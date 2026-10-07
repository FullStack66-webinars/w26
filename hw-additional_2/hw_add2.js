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

export function toggleProduct(products, id, list) {
    const product = products.find(
        product => product.id === id
    );

    if (!product) {
        return;
    }

    product.bought = !product.bought;

    renderProducts(products, list);
}