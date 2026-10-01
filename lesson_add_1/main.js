const app = document.querySelector("#app");

function createUI(app) {
    const title = document.createElement("h1");
    title.textContent = "Список продуктов";
    app.append(title); //добавить в  DOM после элемента,  prepend - перед элементом
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.type = "text"; //НЕ ОБЯЗАТЕЛЬНО - ЭТО ДЕФОЛТНОЕ ЗНАЧЕНИЕ
    input.placeholder = "Введите продукт";
    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Добавить";
    form.append(input, button);
    const list = document.createElement("ul");
    app.append(form, list);
    return {form, input, list};
}



const {form, input, list} = createUI(app);
console.dir(input);

function handleSubmit(e) {
    e.preventDefault();
        const productName = input.value.trim();
        if (!productName) {
            return;
        }
    console.log(productName);
    const li = document.createElement("li");
    li.textContent = productName;
    list.append(li);
    input.value = "";
    input.focus();
}

//addEventListener
form.addEventListener("submit", handleSubmit);


















