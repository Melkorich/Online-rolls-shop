//пересчет общей стоимости товаров в корзине
function calcCartPriceAndDelivery() {

    const cartWrapper = document.querySelector('.cart-wrapper');
    const totalPriceEl = document.querySelector('.total-price');
    const cartItems = document.querySelectorAll('.cart-item');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');

    let totalPrice = 0;


    cartItems.forEach(function (item) {
        const amountEL = item.querySelector('[data-counter]');
        const priceEL = item.querySelector('.price__currency');

        const currentPrice = parseInt(amountEL.innerText) * parseInt(priceEL.innerText);

        totalPrice = totalPrice + currentPrice;
    });

    //отображаеми цену на страницу в корзине
    totalPriceEl.innerText = totalPrice;

    //скрываем или показываем блок со стоимость доставки
    if (totalPrice > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }

    //указываем стоимость доставки платно или бесплатнро
    if (totalPrice >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно'
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 руб.';
    }


}