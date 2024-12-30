window.addEventListener('load', () => {
    renderPhoto();
});

async function getRandomPhoto() {
    const apiKey = 'O6x6z6zFx447ibvx5J7rXiriuwaCLNlRGJJM3qLwnGg';  //ключ, полученный при создании приложения в Unsplash(снимок экрана в папке unsplash)
    try {
        const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${apiKey}`
        );
        const photo = await response.json();
        return photo;
    } catch (error) {
        console.error('Ошибка при загрузке фотографий:', error);
        return {};
    }
}

async function renderPhoto() {
    const photo = await getRandomPhoto();            // обьект, полученный с помощью приложения Unsplash
    console.log(photo);
    if (photo) {
        const imageBox = document.querySelector('.image_box');
        const img = document.createElement('img');
        img.classList.add('image');

        img.src = photo.urls.small;         // передаем адрес картинки, small-качество изображения (full, raw и тд)
        img.alt = photo.alt_description;                // передаем описание картинки из обьекта photo
        imageBox.appendChild(img);

        const photographerName = document.querySelector('.image_photographer-name');
        photographerName.textContent = `${photo.user.name}`;         // передаем имя фотографа

        const imageLikesCounterSpan = document.querySelector('.image_likes-counter');
        imageLikesCounterSpan.textContent = `${photo.likes}`;        // передаем кол-во лайков
    }
}

const counterButton = document.querySelector('.image_likes-button');      // like

counterButton.addEventListener('click', function () {
    counterFunc();
});

function counterFunc() {
    const likesCounter = document.querySelector('.image_likes-counter');        //кол-во лайков
    const photographerName = document.querySelector('.image_photographer-name');
    const name = photographerName.textContent;
    const currentCounter = parseInt(likesCounter.textContent, 10);
    likesCounter.textContent = currentCounter + 1;
    counterButton.disabled = true;                                //дезактивация кнопки лайк после +1
    localStorage.setItem(`${name}`, JSON.stringify('лайкнул')); // записать в localStorage лайкнутого фотогр-фа
}

const btnNext = document.querySelector('.image_next');

btnNext.addEventListener('click', () => {
    const photographerName = document.querySelector('.image_photographer-name');
    const name = photographerName.textContent;
    Object.keys(localStorage).forEach((key) => {      //извлекаем все ключи из localStorage
        if (key === name) {                     //проверка на уже лайкнутого автора, дезактив.кнопку лайк
        counterButton.disabled = true;
        }
    });
    location.reload();                   // презагрузка страницы, получаем следующее изображение
});