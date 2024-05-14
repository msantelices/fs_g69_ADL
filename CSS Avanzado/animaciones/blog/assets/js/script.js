const root = document.querySelector('#root')
const toggler = document.querySelector('#toggler')

toggler.addEventListener('click', ()=> {
    root.classList.toggle('open')
})