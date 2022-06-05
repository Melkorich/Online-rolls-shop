//делаем прослушку на всем окне

window.addEventListener('click', function (event) {

    //объявляем перемунную для счетчика
    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        //находим обертку счетчика, где плюс и минус
        const counterWrapper = event.target.closest('.counter-wrapper');

        //находим див с числом
        counter = counterWrapper.querySelector('[data-counter]');
    }

    //прибавляем на 1
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    };

    if (event.target.dataset.action === 'minus') {

        //уменьшаем до 1
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;

        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            //проверка на товар который находится в корзине {
            event.target.closest('.cart-item').remove();

            //отображение статуса корзины
            toggleCardStatus();
            //пересчет общей стоимости товаров в корзине
            calcCartPriceAndDelivery();
        }
    }

    //ПРОВЕРЯЕМ КЛИК НА + ИЛИ - ВНУТРИ КОРЗИНЫ
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        calcCartPriceAndDelivery();
    }
});