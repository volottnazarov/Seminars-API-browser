const btnOpenEl = document.querySelector('.btnOpen');

const modWindowEl = document.querySelector('.modWindow');

const btnCloseEl = modWindowEl.querySelector('.btnClose');

btnOpenEl.addEventListener('click', () => {
    modWindowEl.classList.add('active');
});

btnCloseEl.addEventListener('click', () => {
    modWindowEl.classList.remove('active');
});
