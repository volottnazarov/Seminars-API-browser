let countNum = 0;
const appBtnEl = document.querySelector('.append');
const removeBtnEl = document.querySelector('.remove');
const cloneBtnEl = document.querySelector('.clone');
const frameEl = document.querySelector('.content');

appBtnEl.addEventListener('click', () => {
    countNum += 1;
    const divEl = document.createElement('div');
    divEl.className = 'box';
    divEl.setAttribute('id', `${countNum}`);
    divEl.textContent = `Элемент ${countNum}`;
    frameEl.appendChild(divEl);
});

removeBtnEl.addEventListener('click', () => {
    if(countNum > 0){
        const boxEl = document.getElementById(`${countNum}`);
        boxEl.remove();
        countNum -= 1;
    }else{
        alert("Нет элементов для удаления!");
    }
});

cloneBtnEl.addEventListener('click', () => {
    if(countNum > 0){
        const boxEl = document.getElementById(`${countNum}`);
        let clone = boxEl.cloneNode(true);
        countNum += 1;
        clone.setAttribute('id', `${countNum}`);
        frameEl.appendChild(clone);
    }else{
        alert("Нет елементов для клонирования!");
    }
});
