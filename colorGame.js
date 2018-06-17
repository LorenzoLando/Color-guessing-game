var numSquares = 6;
//per prima cosa creiamo una lista di colori casuali tramite una funzione
//l`argomento della funione e il numero di colori casuali che vogliamo generare
var color = generateRandomColors(numSquares);
//seleziono tutti gli square
var squares = document.querySelectorAll(".square");
//colore che si decide e la risposta giusta scelto in maniera casuale
var pickedColor = pickColor();
//seleziono lo span che contiene la parte variabile di testo
var colorDisplay = document.getElementById("colorDisplay");
//span inside the header div that change base on the anwer
var messageDispaly = document.querySelector("#message");
//select the h1 to change the back color
var h1 = document.querySelector("h1");
//select the button reset
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	this.classList.add("selected");
	numSquares = 3;
	color = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//we want hide the bottom three divs in easy mode
	//assign new color to the divs 
	for(var i = 0; i < squares.length; i++) {
		//because color has 3 items i can use it as a boolean if its true change tha background color
		//so pressing the the easy botton it changes just the color of the three upper colors 
		if(color[i]) {
			squares[i].style.backgroundColor = color[i];
		} else {
			//make the bottom three div s disappear
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	this.classList.add("selected");
	numSquares = 6;
	color = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color[i];
		squares[i].style.display = "block";
	}

})


//code to reset tha game once you press on play again

resetButton.addEventListener("click", function(){
	//generate all new colors
	color  = generateRandomColors(numSquares);
	//pick a new random color from the array
	pickedColor = pickColor();
	//change colorDisplay to match pickColor
	colorDisplay.textContent = pickedColor;
	//change color for the sqare
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color[i];
	}
	h1.style.backgroundColor = "steelblue";
	       

})
//parte variabile di testo e uguale al colore selezionato 
colorDisplay.textContent = pickedColor;

//faccio un loop che assegni a ciascun  quadrato un colore diverso dall array
for(var i = 0; i < squares.length; i++) {
	//add initial color to squares
	squares[i].style.backgroundColor = color[i];

	//add event listener to squares
	squares[i].addEventListener("click", function(){
		//grab color from picked square
		var clickedColor = this.style.backgroundColor;
		//compare color to picked color
		if(clickedColor === pickedColor) {
			messageDispaly.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			colorChange(pickedColor);
			h1.style.backgroundColor = clickedColor;
			
		} else {
			//elimino i quadrati sbagliati se clicckati
			this.style.backgroundColor = " #232323";
			messageDispaly.textContent = "try again!";
			
		}
	});
}


function colorChange(color) {
	//change all colors to the given color
	 for(var i = 0; i < squares.length; i++) {
	 	squares[i].style.backgroundColor = color;
	 }
}

function pickColor() {
	var random = Math.floor(Math.random() * color.length);
	return color[random];
}

//function that generate random colors
//argument num is the number of colors that we want to generate
function generateRandomColors(num) {
	//make an array
	var arr = []
	//add num random color to the array

		//repeate num time
	for(var i = 0; i < num; i++) {
		//get random color and push into the array
		arr.push(randomColor());
	}
	//return the array
	return arr;
}

function randomColor() {
	//pick a red from 0 -255
		//to obtain a random number between 0 and 255 we need to mutiply by 256 instead doing * 255 + 1
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
} 