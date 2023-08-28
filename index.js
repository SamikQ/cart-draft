document.querySelector('.show__cart').addEventListener('click', () => {
    const bucket = document.querySelector('.modal__cart');
    bucket.classList.remove('hidden');
});

document.querySelector('.modal__cart').addEventListener('click', () => {
    const bucket = document.querySelector('.modal__cart');
    bucket.classList.add('hidden');
});