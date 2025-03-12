const setup = () => {

	let sliders = document.getElementsByClassName("slider");

	for(let i = 0; i < sliders.length; i++){
		sliders[i].addEventListener("input", update);
		sliders[i].addEventListener("change", update);
	}
};

const update = () => {
	let redSlider = document.getElementById("sldRed");
	let valuered = redSlider.value;
	let greenSlider = document.getElementById("sldGreen");
	let valuegreen = greenSlider.value;
	let blueSlider = document.getElementById("sldBlue");
	let valueblue = blueSlider.value;

	document.getElementById("lblRed").innerHTML = valuered;
	document.getElementById("lblGreen").innerHTML = valuegreen;
	document.getElementById("lblBlue").innerHTML = valueblue;

	let swatch = document.getElementById("swatch");
	swatch.style.backgroundColor = "rgb("+valuered+","+valuegreen+","+valueblue+")";
};

window.addEventListener("load", setup);