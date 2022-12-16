const url = "http://localhost:8000/plan_db";

const ball = document.querySelector("div");
ball.setAttribute("style", "width:70px;height:70px;background-color:blue");
ball.setAttribute("draggable", "true");
ball.style.position = "absolute";
ball.style.zIndex = 1000;
document.body.append(ball);

let currentPositionX;
let currentPositionY;

ball.ondragstart = function (event) {
    currentPositionX = event.pageX;
    currentPositionY = event.pageY;
};

let balltop;
let ballleft;
ball.ondrag = function (event) {
    const pageX = event.pageX;
    const pageY = event.pageY;
    if (currentPositionX < pageX) {
        ball.style.left =
            pageX - ball.style.left.slice(0, -2) < 100
                ? ball.style.left
                : 100 + +ball.style.left.slice(0, -2) + "px";
    } else {
        ball.style.left =
            pageX - ball.style.left.slice(0, -2) > -100
                ? ball.style.left
                : -100 + +ball.style.left.slice(0, -2) + "px";
    }
    if (currentPositionY < pageY) {
        ball.style.top =
            pageY - ball.style.top.slice(0, -2) < 100
                ? ball.style.top
                : 100 + +ball.style.top.slice(0, -2) + "px";
    } else {
        ball.style.top =
            pageY - ball.style.top.slice(0, -2) > -100
                ? ball.style.top
                : -100 + +ball.style.top.slice(0, -2) + "px";
    }
    balltop = ball.style.top;
    ballleft = ball.style.left;
};

ball.ondragend = function () {
    ball.style.top = 100 + +balltop.slice(0, -2) + "px";
    ball.style.left = 100 + +ballleft.slice(0, -2) + "px";
};

//TODO
//При загрузке страницы нужно делать запрос в бд для получения ее содержимого и отрисовывать его в виде таблицы со столбцами,
//соответствующими параметрам плана. +У каждой культуры (в каждом ряду) есть две кнопки: редактировать и удалить
//(можно с англ. текстом или иконками), выполняющие соответствующие действия с бд. Отдельно есть кнопка добавления
//(также с текстом или иконкой) для добавления культуры. Она вызывает всплывающее окно с инпутами для каждого параметра, и кнопкой подтверждения
//Клик мимо окна вызывает его закрытие, клик по кнопке - добавление культуры в бд. Кнопки удаления, изменения, подтверждения обновляют страницу
//Есть кнопка НАЗАД, являющаяся ссылкой на "../settings". При отсутствии данных в бд отображаются только кнопки ДОБАВИТЬ, НАЗАД и какой-нибудь
//текст на англ, типа планов не найдено. Ниже - рабочие примеры взаимодействия с бд

//Получить массив доступных растений
// const result = await fetch(url);
// let cultureList = await result.json();

//Пример добавления растения
// const newPlan = {
//     culture: "Strawberry",
//     humidity: 70,
//     temperature: 20,
//     acidity: 6.5,
//     lightLevel: 4000,
// };
// await fetch(url, {
//     method: "POST",
//     body: JSON.stringify(newPlan),
//     headers: {
//         "Content-Type": "application/json",
//     },
// });

//Пример удаления растения
// await fetch(url+":culture", {
//     method: "DELETE",
//     body: JSON.stringify({ culture: "Tomatoes" }),
//     headers: {
//         "Content-Type": "application/json",
//     },
// });

//Пример изменения плана
// const newCulturePlan = {
//     culture: "Radish",
//     humidity: 70,
//     temperature: 20,
//     acidity: 6.5,
//     lightLevel: 4000,
// };
// await fetch(url + ":culture", {
//     method: "PUT",
//     body: JSON.stringify(newCulturePlan),
//     headers: {
//         "Content-Type": "application/json",
//     },
// });
