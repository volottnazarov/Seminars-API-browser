﻿// Определение текущего размера окна браузера:
// Написать функцию, которая будет выводить текущюю ширину и высоту
// окна браузера при его изменении

window.onresize = () => {
    console.log(`Ширина: ${window.innerWidth}px, Высота: ${window.innerHeight}px`);
};

//============================================================================================================

// Подтверждение закрытия страницы:
// Создать всплывающее или диалоговое окно, которое появляется при попытке
// закрыть вкладку браузера и спрашивает пользователя уверен ли он в своем
// решении ее закрыть

// window.onbeforeunload = (event) => {
//     event.preventDefault();
// };

//============================================================================================================

// Управление историей переходов:
// Использовать обьект history для управления историей переходов на странице.
// Создать кнопки "Вперед" и "Назад" для перемещения по истории

document.querySelector('.back-button').onclick = () => {
    history.back();
};

document.querySelector('.next-button').onclick = () => {
    history.forward();
};