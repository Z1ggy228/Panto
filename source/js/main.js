const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint')

// Клик по кнопкам с подсказками
for (let btn of infoBtns) {
    btn.addEventListener('click', showHint);
}

function showHint(e) {
    e.stopPropagation();
    this.parentNode.querySelector('.info-hint').classList.toggle('none')
}

// Закрываем подсказки при клике по всему документу
document.addEventListener('click', closeHints)

function closeHints() {
    for (let hint of infoHints) {
        hint.classList.add('none')
    }
}

// Запрещаем всплытие события клика наверх при клике на подсказки
for (let hint of infoHints) {
    hint.addEventListener('click', (e) => e.stopPropagation());
}


// Slider / Swiper
const swiper = new Swiper('.swiper', {

    loop: true,
    freeMode: true,

    slidesPerView: 4,
    spaceBetween: 42,

    // breakpoints: {
    //     640: {
    //       slidesPerView: 2,
    //       spaceBetween: 20,
    //     },
    //     768: {
    //       slidesPerView: 4,
    //       spaceBetween: 40,
    //     },
    //     1024: {
    //       slidesPerView: 5,
    //       spaceBetween: 50,
    //     },
    //   },

    // Navigation arrows
    navigation: {
        nextEl: '#sliderNext',
        prevEl: '#sliderPrev',
    },
});


// Tabs
const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]')

for (let btn of tabsBtns) {
    console.log(btn);

    btn.addEventListener('click', function () {

        // Убираем активные классы у всех кнопок
        for (let btn of tabsBtns) {
            btn.classList.remove('tab-controls__btn--active');
        }


        // Добавляем активный класс к текущей кнопке
        this.classList.add('tab-controls__btn--active');


        // Отобразить нужные товары и скрыть не нужные
        for (let product of tabsProducts) {

            // Проверка на отображение всех слайдов
            if (this.dataset.tab == 'all') {
                product.classList.remove('none');
            }
            else {
                if (product.dataset.tabValue === this.dataset.tab) {
                    product.classList.remove('none');
                }
                else {
                    product.classList.add('none');
                }
            }



        }

        // Update swipe
        swiper.update()

    })
}