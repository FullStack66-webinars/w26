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

async function usersWithWeather(users) {
    return Promise.all(
        users.map(async user => {
            const latitude = Number(user.address.geo.lat);
            const longitude = Number(user.address.geo.lng);

            if (
                !Number.isFinite(latitude) ||
                !Number.isFinite(longitude)
            ) {
                console.warn(
                    `Некорректные координаты: ${user.name}`
                );

                return null;
            }

            try {
                const temperature = await getTemperature(
                    latitude,
                    longitude
                );

                return {
                    name: user.name,
                    phone: user.phone,
                    latitude,
                    longitude,
                    temperature
                };

            } catch (error) {
                console.warn(
                    `Не удалось получить погоду для ${user.name}`
                );

                return null;
            }
        })
    );
}

async function main() {
    try {
        const users = await getUsers();
        const usersWithTemp = await usersWithWeather(users);
        const validUsers = usersWithTemp.filter(
            user => user !== null
        );

        if (validUsers.length === 0) {
            console.log("Нет данных для сравнения");
            return;
        }
        const hottestUser = validUsers.reduce(
            (hottest, current) =>
                current.temperature > hottest.temperature
                    ? current
                    : hottest
        );

        console.log(`Имя: ${hottestUser.name}`);
        console.log(`Телефон: ${hottestUser.phone}`);
        console.log(
            `Температура: ${hottestUser.temperature}°C`
        );

    } catch (error) {
        console.error("Ошибка:", error.message);
    }
}


main();