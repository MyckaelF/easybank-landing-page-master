const menuHamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const header = document.querySelector('.header')

menuHamburger.onclick = () => {
    menu.classList.toggle('active')
    header.classList.toggle('active')
}