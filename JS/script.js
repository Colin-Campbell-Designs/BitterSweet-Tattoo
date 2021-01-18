
const nav = document.querySelector('nav');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('number');
const message = document.getElementById('message');
const inputs = document.getElementsByClassName('form__input');

const form = document.getElementById('form');


const backgroundFunction = window.addEventListener('scroll', () => {
    if(nav.clientTop !== 0){
        nav.classList.add('scroll')
    }
})



