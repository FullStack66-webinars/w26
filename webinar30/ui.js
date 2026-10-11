export function createUI(app) {
    const title = document.createElement("h1");
    title.textContent = "Список продуктов";

// Создаём панель режима
    const modePanel = document.createElement("section");
    modePanel.className = "mode-panel";

    const modeTitle = document.createElement("h2");
    const modeDescription = document.createElement("p");

    modePanel.append(modeTitle, modeDescription);

    app.append(title, modePanel);
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
    const createDraftButton = document.createElement("button");
    createDraftButton.type = "button";
    createDraftButton.textContent = "Создать черновик";

    const saveDraftButton = document.createElement("button");
    saveDraftButton.type = "button";
    saveDraftButton.textContent = "Сохранить изменения";

    const cancelDraftButton = document.createElement("button");
    cancelDraftButton.type = "button";
    cancelDraftButton.textContent = "Отменить изменения";
    // Контейнер кнопок черновика
    const actions = document.createElement("div");
    actions.className = "actions";

    actions.append(
        createDraftButton,
        saveDraftButton,
        cancelDraftButton
    );

// Сообщение пользователю
    const message = document.createElement("p");
    message.className = "message";

// Собираем интерфейс
    app.append(
        actions,
        form,
        message,
        filters,
        list
    );
    return {
        app,
        modeTitle,
        modeDescription,
        message,
        form,
        input,
        list,
        categoryInput,
        filterAllButton,
        filterNeedButton,
        filterBoughtButton,
        createDraftButton,
        saveDraftButton,
        cancelDraftButton
    };
}

export function renderProducts(productsToRender, list) {
    list.replaceChildren();
    if (productsToRender.length === 0) {
        const emptyItem = document.createElement("li");

        emptyItem.className = "empty";
        emptyItem.textContent = "Продукты не найдены";

        list.append(emptyItem);

        return;
    }

    productsToRender.forEach(product => {
        const li = document.createElement("li");

        li.dataset.id = product.id;

        li.textContent =
            `${product.name} — ${product.category}`;

        if (product.bought) {
            li.classList.add("bought");
        }
        const infoButton = document.createElement("button");
        infoButton.type = "button";
        infoButton.textContent = "Show information";
        li.append(infoButton);
        infoButton.addEventListener("click", (e) => {
            console.log("clicked");
            e.stopPropagation();
        })
        list.append(li);
    });
}

export function updateMode(ui, isDraft, activeFilter) {

    // Переключаем класс всего приложения
    ui.app.classList.toggle("draft-mode", isDraft);

    // Название режима
    ui.modeTitle.textContent = isDraft
        ? "Черновик"
        : "Основной список";

    // Описание режима
    ui.modeDescription.textContent = isDraft
        ? "Вы работаете с копией списка. Сохраните или отмените изменения."
        : "Вы работаете с основным списком продуктов.";

    // Кнопки черновика
    ui.createDraftButton.disabled = isDraft;

    ui.saveDraftButton.disabled = !isDraft;
    ui.cancelDraftButton.disabled = !isDraft;

    // Активный фильтр
    ui.filterAllButton.classList.toggle(
        "active",
        activeFilter === "all"
    );

    ui.filterNeedButton.classList.toggle(
        "active",
        activeFilter === "need"
    );

    ui.filterBoughtButton.classList.toggle(
        "active",
        activeFilter === "bought"
    );
}
