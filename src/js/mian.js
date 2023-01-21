const header = document.querySelector('.header');
window.onscroll = function() {myFunction()};

function myFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
   header.classList.add('header_active');
} else {
   header.classList.remove('header_active');
}
}


//
const burger = document.querySelector('.header__wrapp-burger');
const nav = document.querySelector('.header__nav');
burger.onclick = function() {burgerMenu()};

function burgerMenu(){
    burger.classList.toggle("change");
    nav.classList.toggle("header__nav-active");
}
