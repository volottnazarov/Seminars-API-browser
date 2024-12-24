const lessonData = JSON.parse(lessons);
console.log(lessonData);

let score = 0;

const lessonsEl = document.querySelector('.frame__lessons');

lessonData.forEach(elem => {
    score += 1;
    const lessonEl = document.createElement('div');
    lessonEl.classList.add('frame__lessons-lesson');
    lessonEl.setAttribute('id', score);

    const h2El = document.createElement('h2');
    h2El.classList.add('lesson-name');
    h2El.textContent = elem.nameLesson;
    lessonEl.appendChild(h2El);

    const pTimeEl = document.createElement('p');
    pTimeEl.classList.add('lesson-start');
    pTimeEl.textContent = `Начало : ${elem.startTime}`;
    lessonEl.appendChild(pTimeEl);

    const pMaxAmountEl = document.createElement('p');
    pMaxAmountEl.classList.add('lesson-maxAmount');
    pMaxAmountEl.textContent = `Лимит студентов : ${elem.maxAmount}`;
    lessonEl.appendChild(pMaxAmountEl);

    const pTotal = document.createElement('p');
    pTotal.classList.add(`lesson-total-${score}`);
    pTotal.textContent = `Записались : ${elem.totalAmount}`;
    lessonEl.appendChild(pTotal);

    const buttonEl = document.createElement('button');
    buttonEl.classList.add(`lesson-btn-${score}`);
    buttonEl.classList.add('lesson-btn');
    buttonEl.textContent = 'Записаться';
    lessonEl.appendChild(buttonEl);

    lessonsEl.appendChild(lessonEl);
});

const buttonHistEl = document.querySelector('.lesson-btn-1');
let histScore = 0;
buttonHistEl.addEventListener('click', () => {
    if(histScore < 15){
        histScore += 1;
        const maxAmount = document.querySelector('.lesson-total-1');
        maxAmount.textContent = `Записались ${histScore}`;
    }else{
        buttonHistEl.textContent = 'Мест нет';
    }
});

const buttonPhisicEl = document.querySelector('.lesson-btn-2');
let phisScore = 0;
buttonPhisicEl.addEventListener('click', () => {
    if(phisScore < 12){
        phisScore += 1;
        const totalEl = document.querySelector('.lesson-total-2');
        totalEl.textContent = `Записались ${phisScore}`;
    }else{
        buttonPhisicEl.textContent = 'Мест нет';
    }
});




