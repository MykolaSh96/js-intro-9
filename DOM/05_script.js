 const form = documentq.documentq('form');
const inputEl = document.querySelector('input');
const btnEl = document.querySelector('#btn');


btnEl.addEventListener('click', (event) =>{
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    console.log(event.target.value)
} )