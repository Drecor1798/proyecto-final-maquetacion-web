const menu = document.querySelector('#menu-icon')
const navList = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navList.classList.toggle('open')
}


const sr = ScrollReveal({
    distance: '65px',
    duration: 2000,
    delay: 450,
    reset: true
})

sr.reveal('.hero-text', { delay: 200, origin: 'top' })
sr.reveal('.hero-img', { delay: 450, origin: 'top' })
sr.reveal('.icons', { delay: 500, origin: 'left' })
sr.reveal('.scroll-down', { delay: 450, origin: 'right' })
sr.reveal('.skills', { delay: 450, origin: 'right' })
sr.reveal('.tabla', { delay: 450, origin: 'right' })

// JavaScript para agregar clase 'sticky' cuando se hace scroll
window.onscroll = function() { toggleStickyHeader() };

function toggleStickyHeader() {
    var header = document.getElementById("header");

    // Si la página ha sido desplazada más de 50px, se agrega la clase 'sticky'
    if (window.pageYOffset > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}