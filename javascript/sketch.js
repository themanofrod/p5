const clearScreen = document.querySelector('#clearScreen');
const eraser = document.querySelector('#eraser');
const range = document.querySelector('#strokeWeight')
document.querySelector('#strokeWeightValue').innerHTML = range.value

function setup() {
	let width = window.innerWidth - 80; // Minus navigation width 
	createCanvas(width, window.innerHeight);
};

function draw() {

	if (mouseIsPressed === true ) {
		stroke(document.querySelector('#colorSelector').value);
		strokeWeight(document.querySelector('#strokeWeight').value);
		line(mouseX, mouseY, pmouseX, pmouseY);
	}

	clearScreen.addEventListener('click', () => {
		background(255);
	});

	eraser.addEventListener('click', () => {
		document.querySelector('#colorSelector').value = "#ffffff";
	});

	range.addEventListener('input', () => {
		document.querySelector('#strokeWeightValue').innerHTML = range.value;
	});
};

