const navMeny = document.getElementById("navMeny"),
    navItems = document.getElementsByClassName("header__nav-item")

for (let index = 0; index < navItems.length; index++) {
    navItems[index].addEventListener("click", function(){

        for (let index = 0; index < navItems.length; index++) {
            navItems[index].classList.remove("header__nav-item_active")
        }
        this.classList.toggle("header__nav-item_active")
    })    
}

