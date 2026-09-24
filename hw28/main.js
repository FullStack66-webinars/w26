import {
        readFromJsonFile
} from "./fileService.js";

import {
        getUserByName
} from "./authService.js";

import {
        FRIDGE_FILE,
        USERS_FILE
} from "./config.js";

import {
        createBasePromptByRole,
        createPrompt
} from "./promptService.js";

import {
        askAi
} from "./aiService.js";


const form =
    document.getElementById(
        "searchForm"
    );

const userNameInput =
    document.getElementById(
        "userName"
    );

const dishTitleInput =
    document.getElementById(
        "dishTitle"
    );

const result =
    document.getElementById(
        "result"
    );


const errorModal =
    document.getElementById(
        "errorModal"
    );

const errorMessage =
    document.getElementById(
        "errorMessage"
    );

const closeModal =
    document.getElementById(
        "closeModal"
    );


function showError(message) {

        errorMessage.textContent =
            message;

        errorModal.showModal();
}


closeModal.addEventListener(
    "click",

    () => {
            errorModal.close();
    }
);


form.addEventListener(
    "submit",

    async event => {

            event.preventDefault();


            const userName =
                userNameInput
                    .value
                    .trim();

            const dishTitle =
                dishTitleInput
                    .value
                    .trim();


            try {

                    if (!userName) {

                            throw new Error(
                                "User name is required"
                            );
                    }


                    if (!dishTitle) {

                            throw new Error(
                                "Dish title is required"
                            );
                    }


                    const users =
                        await readFromJsonFile(
                            USERS_FILE
                        );


                    const authenticatedUser =
                        getUserByName(
                            users,
                            userName
                        );


                    if (!authenticatedUser) {

                            throw new Error(
                                "User not found"
                            );
                    }


                    const products =
                        await readFromJsonFile(
                            FRIDGE_FILE
                        );


                    const basePrompt =
                        createBasePromptByRole(
                            authenticatedUser
                        );


                    const prompt =
                        createPrompt(
                            basePrompt,
                            dishTitle,
                            products
                        );


                    console.log(
                        "PROMPT:",
                        prompt
                    );


                    result.textContent =
                        "Получаем ответ...";


                    const answer =
                        await askAi(
                            prompt
                        );


                    result.textContent =
                        answer;


            } catch (error) {

                    console.error(
                        "ERROR:",
                        error
                    );


                    result.textContent = "";


                    showError(
                        error.message
                    );
            }
    }
);