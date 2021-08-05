import menuCardsTpl from './templates/card-template.hbs';
import menu from './menu.json';

const menuCardsList = document.querySelector('ul.js-menu');
const cardsMarkup = createCardsMarkup(menu);

menuCardsList.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsMarkup(menu) {
    return menuCardsTpl(menu);
};


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkbox = document.getElementById('theme-switch-toggle');
const body = document.querySelector('body');

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        body.classList.add('dark-theme');
        body.classList.replace('light-theme', 'dark-theme');
    } else {
body.classList.replace('dark-theme', 'light-theme');
    }
})

localStorage.setItem('checkbox', checkbox.checked);