import {
    draftProducts,
    addProduct,
    cancelDraft,
    createDraft,
    saveDraft,
    toggleProduct
} from "./products.js";

import {
    createUI,
    renderProducts,
    updateMode
} from "./ui.js";
import {getCurrentProducts} from "./utils.js";

const app = document.querySelector("#app");

const ui = createUI(app);
const {
    form,
    input,
    list,
    categoryInput,
    message,
    filterAllButton,
    filterNeedButton,
    filterBoughtButton,
    createDraftButton,
    saveDraftButton,
    cancelDraftButton
} = ui;

let activeFilter = "all";

function render(){
    const currentProducts = getCurrentProducts();
    let visibleProducts = currentProducts;
    if (activeFilter === "need") {
        visibleProducts = currentProducts.filter(
            product => !product.bought
        )
    }
    if (activeFilter === "bought") {
        visibleProducts = currentProducts.filter(
            product => product.bought
        )
    }
    renderProducts(visibleProducts, list);
    updateMode(
        ui,
        draftProducts !== null,
        activeFilter
    );
}


filterAllButton.addEventListener(
    "click",
    () => {
        activeFilter = "all";
        render();
    }
);

filterNeedButton.addEventListener(
    "click",
    () => {
        activeFilter = "need";
        render();
    }
);


filterBoughtButton.addEventListener(
    "click",
    () => {
        activeFilter = "bought";
        render();
    }
);

list.addEventListener("click", (event) => {
    const li = event.target.closest("li[data-id]");
    if (!li || !list.contains(li)) {
        return

    }

    const id = Number(li.dataset.id);
    toggleProduct( id);
    render();
});



function handleSubmit(event) {
    event.preventDefault();

    const productName = input.value.trim();
    const category = categoryInput.value.trim();

    const added = addProduct(productName, category);

    if (!added) {
        message.textContent =
            "Заполните оба поля. Название продукта не должно повторяться.";

        return;
    }

    // Успешное добавление
    message.textContent = "";

    input.value = "";
    categoryInput.value = "";

    input.focus();

    render();
}


//addEventListener
form.addEventListener("submit", handleSubmit);

createDraftButton.addEventListener("click", () => {
    createDraft();
    message.textContent = "";
    render();
});

saveDraftButton.addEventListener("click", () => {
    saveDraft();
    message.textContent = "";
    render();
});

cancelDraftButton.addEventListener("click", () => {
    cancelDraft();
    message.textContent = "";
    render();
});
















