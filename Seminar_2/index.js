const ulEl = document.querySelector('ul');

ulEl.addEventListener('mouseover', (e) => {
    if(e.target.tagName === 'A'){
        e.target.style.fontSize = '22px';
    }
});

ulEl.addEventListener('mouseout', (e) => {
    if(e.target.tagName === 'A'){
        e.target.style.fontSize = '20px';
    }
});

ulEl.addEventListener('click', (e) => {
    e.preventDefault();
    const activeEl = ulEl.querySelector('.active');
    if(activeEl){
        activeEl.classList.remove('active');
    }
    if(e.target.tagName === 'A'){
        e.target.classList.add('active');
    }
});
