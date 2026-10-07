const API_URL =
    "https://jsonplaceholder.typicode.com/users";

function validateUser(user) {
    if (!user.name) {
        throw new Error("User name is missing");
    }

    if (!user.email) {
        throw new Error("User email is missing");
    }

    if (typeof user.id !== "number") {
        throw new Error("User id must be a number");
    }
}

axios
    .get(API_URL)
    .then((response) => {
        const users = response.data;

        // ⭐ Дополнительное задание
        users[0].email = null;

        users.forEach((user) => {
            try {
                validateUser(user);

                console.log(
                    `User is valid: ${user.name}`
                );
            } catch (error) {
                console.log(
                    `Validation error: ${error.message}`
                );
            }
        });
    })
    .catch(() => {
        console.log("API error");
    });