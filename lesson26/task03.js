import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

async function getUsers() {
    const response = await fetch(USERS_URL);
    if (!response.ok) {
        throw new Error(`Users API error: ${response.status}`);
    }
    return response.json();
}

async function getTemperature(latitude, longitude) {
    const response = await axios.get(WEATHER_URL, {params: {latitude, longitude, current_weather: true}});
    return response.data.current_weather.temperature;
}

async function main() {
    try {
        const users = await getUsers();
        let hottestUser = null;
        let maxTemperature = -Infinity;
        for (const user of users) {
            const latitude = Number(user.address.geo.lat);
            const longitude = Number(user.address.geo.lng);
            if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
                console.warn(`Некорректные координаты: ${user.name}`);
                continue;
            }
            const temperature = await getTemperature(latitude, longitude);
            if (temperature > maxTemperature) {
                maxTemperature = temperature;
                hottestUser = user;
            }
        }
        if (!hottestUser) {
            console.log("Нет данных для сравнения");
            return;
        }
        console.log(`Имя: ${hottestUser.name}`);
        console.log(`Телефон: ${hottestUser.phone}`);
        console.log(`Температура: ${maxTemperature}°C`);
    } catch (error) {
        console.error("Ошибка:", error.message);
    }
}

main();