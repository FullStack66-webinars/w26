export function renderProducts(productsToRender, list) {
    const items = [];

    productsToRender.forEach(product => {
        const li = document.createElement("li");

        li.textContent =
            `${product.name} — ${product.category}`;

        if (product.bought) {
            li.classList.add("bought");
        }

        items.push(li);
    });

    list.replaceChildren(...items);
}