
async function getUsers(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    return response.json();
}

const users = await getUsers();
console.log(users);

const people = [];
for (const user of users) {
    let myObj={
        id: user.id,
        name: user.name,
        latitude: user?.address?.geo?.lat ?? 0,
        longitude: user?.address?.geo?.lng ?? 0
    };
    people.push(myObj);
}

console.log("===============PEOPLE=====================")
console.log(people); // Array of person objects   

/*
HW_26_TEXT
Используя два информационных ресурса (API) - https://jsonplaceholder.typicode.com/users и https://api.open-meteo.com/v1/forecast?latitude=44.49&longitude=20.27&current_weather=true
1. Получить список пользователей (users) с ресурса https://jsonplaceholder.typicode.com/users
2. Для каждого пользователя получить его географические координаты (latitude и longitude)   
3. Используя эти координаты, получить текущую погоду для каждого пользователя с ресурса https://api.open-meteo.com/v1/forecast?latitude=44.49&longitude=20.27&current_weather=true
4. Определить пользователя с самой высокой температурой и вывести его имя, телефон  
 и температуру в консоль.

 Решите задачу с использованием 
 5.fetch  
 6.axios (для одного из запросов).

*/
//let maxTemperature = -Infinity;

// people.sort((a,b) => {
//     b.temperature - a.temperature;
// })

const maxTemperature = Math.max(...people.map(p => p.temperature));

const hottest = people.find(p => p.temperature > maxTemperature);

const promises = users.map(async user => {
    const weather = await getWeather(...);
    return weather;
})

const results = await Promise.all(promises);

const allResults = await Promise.allSettled(promises);

//[{ status: "fulfilled", value:...}, {status: "rejected", reason:
