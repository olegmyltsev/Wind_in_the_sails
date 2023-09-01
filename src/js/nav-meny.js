const navItem = document.querySelectorAll('.nav-meny__item')

navItem.forEach(e => {
    e.addEventListener('click', (item)=>{
        navItem.forEach(e=>{
            e.classList.remove('nav-meny__item-active')
        })
        item.target.classList.toggle('nav-meny__item-active')
    })
});

