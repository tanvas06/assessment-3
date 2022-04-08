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

favRitual.addEventListener(`click`, ritual)