// WOW библиотека
new WOW().init();

// Скрипт для модального окна корзины страницы ресторана
const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal () {
    modal.classList.toggle('modal--active')
}