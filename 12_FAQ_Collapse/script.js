const toggles = document.querySelectorAll('.faq-toggle')
// adds and removes active class
toggles.forEach( toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})