const manuClassAddContainer= document.querySelector('.container')
const crossMark = document.querySelector('.cross-mark')
const manuImg = document.querySelector('.hamberger-manu')
const navBar = document.querySelector('.nav-bar')


manuImg.addEventListener('click', (e)=> {
  e.stopPropagation()  
manuClassAddContainer.classList.add('show-manu')
})
crossMark.addEventListener('click', ()=> {
manuClassAddContainer.classList.remove('show-manu')
})
document.addEventListener('click', ()=> {
manuClassAddContainer.classList.remove('show-manu')
})
navBar.addEventListener('click', (e)=> {
    e.stopPropagation()
})

