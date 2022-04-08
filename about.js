console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`Form Submitted!`);
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let photo = document.getElementById(`sexyDuck`)

const photoMessage = event => {
	alert(`You look so cute right now!`)
}

photo.addEventListener(`mouseover`, photoMessage)