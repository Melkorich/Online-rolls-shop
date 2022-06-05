//Находим основные элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

//отслеживаем клик на кнопку минус, удаляем кол-во до  1
btnMinus.addEventListener('click', function () {
    if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
    } else {
        return
    }

})

//отслеживаем клик по кнопке пдюс, увеличиваем на 1
btnPlus.addEventListener('click', function () {
    counter.innerText = ++counter.innerText;
})