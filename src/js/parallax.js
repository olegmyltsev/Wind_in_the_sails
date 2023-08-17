const sea = document.getElementById("sea"),sea1 = document.getElementById("sea1")

// window.addEventListener("scroll", function (event) {
//     let position =  window.scrollY
//     let positionSea = position/-20
//     sea.style.backgroundPositionY = `${positionSea}px`
// })
let position =  0
let bolean = true
setInterval(()=>{

    if (position < 0){
        bolean = false
    }
    if (position >= 100){
        bolean = true
    }
    if (bolean == true){
        position--
    }else{position++}
    sea.style.backgroundPositionX = `${-position}px`
    console.log(bolean);
},50)
let position1 =  0
let bolean1 = true
setInterval(()=>{

    if (position1 < 0){
        bolean1 = false
    }
    if (position1 >= 100){
        bolean1 = true
    }
    if (bolean1 == true){
        position1--
    }else{position1++}
    sea1.style.backgroundPositionX = `${-position1}px`
    console.log(bolean1);
},100)
