const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')
const asideEl = document.querySelector('aside')
const themeToggle = document.querySelector('.theme-toggle')


// open sidebar
menuBtn.addEventListener('click', () => {
    asideEl.style.display = 'block'
})
// close sidebar
closeBtn.addEventListener('click', () => {
    asideEl.style.display = 'none'
})

// change theme
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')

    themeToggle.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggle.querySelector('span:nth-child(2)').classList.toggle('active')
})

