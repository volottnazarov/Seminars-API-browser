const oneEl = document.querySelector('.image-1');              // начальный эл-т при загрузке страницы
const demoEl = document.querySelector('.demo__image');
const btnNextEl = document.querySelector('.btn-next');         // кнопка NEXT
const rightHoverEl = document.querySelector('.btn-right');     // кнопка наведения следующий слайд
const leftHoverEl = document.querySelector('.btn-left');       // кнопка наведения предидущий слайд
const btnPrevEl = document.querySelector('.btn-back');         // кнопка BACK
const prevControlEl = document.querySelector('.preview__control');
const prevControlPanelEl = document.querySelector('.preview__control-panel');

let imgScore = 1;

window.addEventListener('load', () => {
    demoEl.classList.add('active__image-1');
    oneEl.classList.add('active');
});

btnNextEl.addEventListener('click', (e) => {
    imgScore += 1;
    if(imgScore <= 5){
        demoEl.classList.add(`active__image-${imgScore}`);
        demoEl.classList.remove(`active__image-${imgScore - 1}`);
        let nextImgEl = document.querySelector(`.image-${imgScore}`);
        let prevImgEl = document.querySelector(`.image-${imgScore - 1}`);
        nextImgEl.classList.add('active');
        prevImgEl.classList.remove('active');
    }else{
        imgScore = 1;
        demoEl.classList.add(`active__image-${imgScore}`);
        demoEl.classList.remove(`active__image-${imgScore + 4}`);
        let nextImgEl = document.querySelector(`.image-${imgScore}`);
        let prevImgEl = document.querySelector(`.image-${imgScore + 4}`);
        nextImgEl.classList.add('active');
        prevImgEl.classList.remove('active');
    }

});

btnPrevEl.addEventListener('click', (e) => {
    imgScore -= 1;
    if(imgScore >= 1){
        demoEl.classList.add(`active__image-${imgScore}`);
        demoEl.classList.remove(`active__image-${imgScore + 1}`);
        let backImgEl = document.querySelector(`.image-${imgScore}`);
        let prevImgEl = document.querySelector(`.image-${imgScore + 1}`);
        backImgEl.classList.add('active');
        prevImgEl.classList.remove('active');
    }else{
        imgScore = 5;
        demoEl.classList.add(`active__image-${imgScore}`);
        demoEl.classList.remove(`active__image-${imgScore - 4}`);
        let backImgEl = document.querySelector(`.image-${imgScore}`);
        let prevImgEl = document.querySelector(`.image-${imgScore - 4}`);
        backImgEl.classList.add('active');
        prevImgEl.classList.remove('active');
    }
});

prevControlPanelEl.addEventListener('mouseover', (e) => {
    if(e.target === rightHoverEl){
        imgScore += 1;
        if(imgScore <= 5){
            demoEl.classList.add(`active__image-${imgScore}`);
            demoEl.classList.remove(`active__image-${imgScore - 1}`);
            let nextImgEl = document.querySelector(`.image-${imgScore}`);
            let prevImgEl = document.querySelector(`.image-${imgScore - 1}`);
            nextImgEl.classList.add('active');
            prevImgEl.classList.remove('active');
        }else{
            imgScore = 1;
            demoEl.classList.add(`active__image-${imgScore}`);
            demoEl.classList.remove(`active__image-${imgScore + 4}`);
            let nextImgEl = document.querySelector(`.image-${imgScore}`);
            let prevImgEl = document.querySelector(`.image-${imgScore + 4}`);
            nextImgEl.classList.add('active');
            prevImgEl.classList.remove('active');
        }
    }
    if(e.target === leftHoverEl){
        imgScore -= 1;
    if(imgScore >= 1){
        demoEl.classList.add(`active__image-${imgScore}`);
        demoEl.classList.remove(`active__image-${imgScore + 1}`);
        let backImgEl = document.querySelector(`.image-${imgScore}`);
        let prevImgEl = document.querySelector(`.image-${imgScore + 1}`);
        backImgEl.classList.add('active');
        prevImgEl.classList.remove('active');
    }else{
        imgScore = 5;
        demoEl.classList.add(`active__image-${imgScore}`);
        demoEl.classList.remove(`active__image-${imgScore - 4}`);
        let backImgEl = document.querySelector(`.image-${imgScore}`);
        let prevImgEl = document.querySelector(`.image-${imgScore - 4}`);
        backImgEl.classList.add('active');
        prevImgEl.classList.remove('active');
    }
    }
});








