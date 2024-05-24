let burgerMenu = document.querySelector('.burger-wrapper')
let burgerButton = document.querySelector('.burger-menu')
let burgerLine = document.querySelectorAll('.burger-menu-line')

let first_pic = document.querySelector('.first-pic-galary')
let second_pic = document.querySelector('.second-pic-galary')
let third_pic = document.querySelector('.third-pic-galary')
let changeButtons = document.querySelectorAll('.change-galary')

function toggleBurger() {
    burgerMenu.classList.toggle('hide')
    for (i in burgerLine) {
        i.style.transform = 'rotate(-44.76deg)'
    }
}

function swap_galary1() {
    changeButtons[0].classList.add('active')
    changeButtons[1].classList.remove('active')
    changeButtons[2].classList.remove('active')
}

function swap_galary2() {
    changeButtons[0].classList.remove('active')
    changeButtons[1].classList.add('active')
    changeButtons[2].classList.remove('active')
}

function swap_galary3() {
    changeButtons[2].classList.add('active')
    changeButtons[0].classList.remove('active')
    changeButtons[1].classList.remove('active')
}

changeButtons[0].addEventListener('click', swap_galary1)
changeButtons[1].addEventListener('click', swap_galary2)
changeButtons[2].addEventListener('click', swap_galary3)
burgerButton.addEventListener('click', toggleBurger)