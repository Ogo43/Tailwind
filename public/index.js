const menu = document.querySelector('#menu');
const option = document.querySelector('#option');

menu.addEventListener('click', () => {
    if(option.classList.contains('hidden')) {
        option.classList.remove('hidden');
    } else {
        option.classList.add('hidden');
    }
})