import menuCardsTpl from './templates/card-template.hbs';
import menu from './menu.json';

const menuCardsList = document.querySelector('ul.js-menu');
const cardsMarkup = createCardsMarkup(menu);

menuCardsList.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsMarkup(menu) {
    return menuCardsTpl(menu);
};

const checkbox = document.getElementById('theme-switch-toggle');
const body = document.querySelector('body');

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        body.classList.add('dark-theme');
        body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem("theme", "dark-theme");
    } else {
        body.classList.replace('dark-theme', 'light-theme');
         localStorage.setItem("theme", "light-theme");
    }
})

const currentTheme = localStorage.getItem("theme");

const changeTheme = () => {
    if (currentTheme !== null) {
        body.classList.add(currentTheme);
    } else {
        body.classList.add('light-theme');
    }
}
changeTheme();

const changeCheckbox = () => {
    if (currentTheme === 'dark-theme') {
 checkbox.checked = true;
    }
}
changeCheckbox();