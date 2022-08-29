export function productsLoad(data) {
    let out = '';
    for (let key in data) {
        out += `
        <div class="body-categories__item item-body">
            <div class="item-body__image">
                <img src="./img/${data[key].image}" alt="item">
            </div>
            <a href="item.html" class="item-body__title">${data[key].title}</a>
            <div class="item-body__subtitle">${data[key].subtitle}</div>
            <div class="item-body__price">${data[key].price}</div>
            <button class="item-body__buy" type="button">Заказать</button>
        </div>`
    }
    $('.body-categories__goods').html(out);
}

