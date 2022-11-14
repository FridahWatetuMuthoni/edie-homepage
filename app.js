function navigation() { 
    const open = document.getElementById('open')
    const nav_bar = document.getElementById('navbar')

    open.addEventListener('click', () => {
        nav_bar.style.display="flex"
    })

    nav_bar.addEventListener('click', () => {
        nav_bar.style.display="none"
    })
}

document.addEventListener('DOMContentLoaded',navigation)