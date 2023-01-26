let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');


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
        select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('active');
    }

};
select();

const menuOpens = document.querySelectorAll('.menu__link');
if (menuOpens.length > 0) {
    for (let index = 0; index < menuOpens.length; index++) {
        const menuOpen = menuOpens[index];
        menuOpen.addEventListener('click', function (e) {
            menuOpen.parentElement.classList.toggle('_active');
        });
    }
}

// меню бургер 

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuIcon = document.querySelector('.menu__list-icon');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        menuIcon.classList.toggle('_active');
    });
};
const menuBodys = document.querySelector('.menu__body');
const menuIcons = document.querySelector('.menu__list-icon');
if (menuIcons) {
    menuIcons.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        menuIcons.classList.toggle('_active');
        menuBodys.classList.toggle('_active');
    });
};

// табы с галереи

var jsTriggers = document.querySelectorAll('.gallery__link');

jsTriggers.forEach(function (item, i) {
    item.addEventListener('click', function () {
        var tabName = this.dataset.tab,
            tabContent = document.querySelector('.js-tab-content[data-tab="' + tabName + '"]');

        document.querySelectorAll('.js-tab-content.active').forEach(function (item, i) {
            item.classList.remove('active');
        });

        document.querySelectorAll('.js-tab-trigger.active').forEach(function (item, i) {
            item.classList.remove('active');
        });

        tabContent.classList.add('active');
        this.classList.add('active');
    });
});

