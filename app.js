import { Router } from './Router.js';

const router = new Router(document.body);

document.querySelector('button').addEventListener('click', () => {
    eval(document.querySelector('textarea').value);
});

// const url = new URL(window.location);
// window.location.href = window.location.origin + '/home';