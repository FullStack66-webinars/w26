export function createUI(app) {
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
    const filterAllButton = document.createElement("button");
    filterAllButton.type = "button";
    filterAllButton.textContent = "Все";

    const filterNeedButton = document.createElement("button");
    filterNeedButton.type = "button";
    filterNeedButton.textContent = "Нужно купить";

    const filterBoughtButton = document.createElement("button");
    filterBoughtButton.type = "button";
    filterBoughtButton.textContent = "Куплено";

    const filters = document.createElement("div");

    filters.append(
        filterAllButton,
        filterNeedButton,
        filterBoughtButton
    );

    form.append(input,  categoryInput, button);
    const list = document.createElement("ul");
    app.append(form, list, filters);
    return {form, input, list,  categoryInput,
        filterAllButton,
        filterNeedButton,
        filterBoughtButton
    };
}