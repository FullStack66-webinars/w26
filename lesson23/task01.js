let password="12345"; //NEVER!!!!!!!!!!!!!!!!!
let userPassword = "12345"; //NEVER!!!!!!!!!!!!!!!!!
if(password===userPassword){
    console.log("Пароль верный");
} else {
    console.log("Пароль неверный");
}

const apiKey = process.env.PASS1;
console.log(apiKey);

//node -e "console.log(process.env.GEMINI_API_KEY ? 'Ключ найден' : 'Ключ не найден')"
// [Environment]::SetEnvironmentVariable(
//   "GEMINI_API_KEY",
//   "ваш_настоящий_ключ",
//   "User"
// )