const cartWrapper = document.querySelector('.cart-wrapper');

//делаем прослушку на всем окне
window.addEventListener('click', function (event) {

    //клик по  кнопке добавитьв карзину
    if (event.target.hasAttribute('data-cart')) {

        //находим карточку с товаром внутри котрой был клик "добавить в корзину"
        const card = event.target.closest('.card');

        console.log(card);

        //собираем данные с этого товара и записываем их в единый объект productInfo

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInbox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,

        };

        console.log(productInfo);

        //собранные данные с карточки товара подставляем в шаблон, для вывода в карзину

        const cardItemHTML = `
        <div class="cart-item" data-id="${productInfo.id}">
            <div class="cart-item__top">
                <div class="cart-item__img">
                    <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${productInfo.title}</div>
                    <div class="cart-item__weight">${productInfo.itemsInbox} / ${productInfo.weight}</div>

                    <div class="cart-item__details">

                        <div class="items items--small counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter="">${productInfo.counter}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>

                        <div class="price">
                            <div class="price__currency">${productInfo.price}</div>
                        </div>

                    </div>

                </div>
            </div>
         </div>
        
        `;

        //отображаем товар в корзину

        cartWrapper.insertAdjacentHTML('beforeend', cardItemHTML);
    }
})