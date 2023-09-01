let body = document.querySelector('body')

window.addEventListener('scroll', ()=>{
    body.style.backgroundPositionY = `-${(1000-window.screen.availHeight)/body.offsetHeight*scrollY}px`
})