let favColor = document.getElementById(`color`)
let favPlace = document.getElementById(`place`)
let favRitual = document.getElementById(`ritual`)

const color = event => {
	alert(`Hot Pink`)
}

favColor.addEventListener(`click`, color)


const place = event => {
	alert(`Anywhere as long as it's with you`)
}

favPlace.addEventListener(`click`, place)


const ritual = event => {
	alert(`The Summoning of MOLAG BAL`)
}

const imageChange = () =>{
    let image = document.getElementById(`meTheDuck`)
    image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhFOTNe-WeSmUcf9-58R8d68vyfoCUbciwQ&usqp=CAU'
    // let normalP = document.getElementById(`normal`)
    // let displaySetting = normalP.style.display;
    // if (displaySetting == `block`){
    //     normalP.style.display == 'none'
    
    // }
}



favRitual.addEventListener(`click`, imageChange)


favRitual.addEventListener(`click`, ritual)