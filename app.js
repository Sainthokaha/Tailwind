const hamburger = document.querySelector('#hamburger')
const menu = document.querySelector('#menu')
const hLink = document.querySelectorAll('#hLink')
const body = document.querySelector('body')

hamburger.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    hamburger.classList.toggle('bg-white')
})

hLink.array.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('hidden')
        hamburger.classList.toggle('bg-white')
    })
})

