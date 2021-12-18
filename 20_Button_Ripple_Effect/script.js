const butttons = document.querySelectorAll('.ripple')

butttons.forEach(button => {
    button.addEventListener('click', function (e) { 
        // can't use arrown function with append child so must use function word
        // give co ordinates of the x and y number on the button
        const x = e.clientX
        const y = e.clientY

        //where does the button start on x, y
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)
// removes circles from the button
        setTimeout(() => circle.remove(), 500)

    })

})