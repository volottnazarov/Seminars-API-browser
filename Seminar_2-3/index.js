const btnSaleEl = document.querySelector('.btn');

btnSaleEl.addEventListener('click', (e) => {
    if(e.isTrusted){
        const textBtn = e.target.textContent;
        e.target.style.backgroundColor = 'red';
        e.target.style.color = 'white';
        e.target.textContent = 'Товар добавлен в корзину';
        setTimeout(() => {
            e.target.style.backgroundColor = 'bisque';
            e.target.style.color = 'black';
            e.target.textContent = textBtn;
        }, 2000);
    }

});