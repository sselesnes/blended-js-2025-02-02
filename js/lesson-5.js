// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

const login = prompt("Логін");

//
// example 1
//
// let pass;
// if (login !== "Адмін") {
//   alert("Я вас не знаю");
// } else {
//   pass = prompt("Пароль");
// }
// if (pass === null || pass === "") {
//   alert("Скасовано");
// } else if (pass === "Я головний") {
//   alert("Добрий день!");
// } else {
//   alert("Невірний пароль!");
// }

//
// example 2
//
let pass;
let message = login === "Адмін"
  ? (pass = prompt("Пароль")) === null || pass === ""
    ? "Скасовано"
    : pass === "Я головний"
      ? "Добрий день!"
    : "Невірний пароль!"
  : "Я вас не знаю";

alert(message);