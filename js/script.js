var swiper = new Swiper(".myswipper", {
    effect: "fade",
    grabCursor: false,
    allowTouchMove: false,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".gallery-slider__contain", {
    slidesPerView: 3,
    spaceBetween: 15,
    slidesPerGroup: 1,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    effect: 'slide',
    grabCursor: 'true',
    allowTouchMove: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        250: {
            slidesPerView: 1,
        },
        1410: {
            slidesPerView: 2,
        },
        2025: {
            slidesPerView: 3,
        },
    },
});
var swiper = new Swiper(".view__slider-own", {
    effect: "fade",
    grabCursor: 'true',
    allowTouchMove: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let selects = function () {
    let selectHeader = document.querySelectorAll('.select__headers');
    let selectItem = document.querySelectorAll('.select__items');


    selectHeader.forEach(function (item) {
        item.addEventListener('click', selectToggle)
    });
    selectItem.forEach(function (item) {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('active');
    }

    function selectChoose() {
        let text = this.innerText;
        selects = this.closest('.selects'),
            currentText = selects.querySelector('.select__currents');
        currentText.innerText = text;
        selects.classList.remove('active');
    }

};

selects();


