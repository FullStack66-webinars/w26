import {
    addProduct,
    cancelDraft,
    createDraft,
    saveDraft,
    toggleProduct
} from "./products.js";

import {createUI, renderProducts} from "./ui.js";
import {getCurrentProducts} from "./utils.js";

const app = document.querySelector("#app");

console.log(app);

const {form, input, list,  categoryInput, filterAllButton,
    filterNeedButton,
    filterBoughtButton,
    createDraftButton,
    saveDraftButton,
    cancelDraftButton} = createUI(app);

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
    const li = event.target.closest("li");
    if (!li || !list.contains(li)) {
        return

    }

    const id = Number(li.dataset.id);
    toggleProduct( id);
    render();
});


function handleSubmit(e) {
    e.preventDefault();
    const productName = input.value.trim();
    const category = categoryInput.value.trim();
    const added = addProduct(productName, category);
    if (!added) {
        console.log("Product was not added!");
    }
    input.value = "";
    input.focus();
    render();
}

//addEventListener
form.addEventListener("submit", handleSubmit);

createDraftButton.addEventListener(
    "click",
    () => {
        createDraft();
        render();
    }
);

saveDraftButton.addEventListener(
    "click",
    () => {
        saveDraft(list)
        render();
}
);

cancelDraftButton.addEventListener(
    "click",
    () => {
        cancelDraft(list);
        render();
    }
);

render();















