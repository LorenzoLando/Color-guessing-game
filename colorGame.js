var numSquares = 6;
//per prima cosa creiamo una lista di colori casuali tramite una funzione
//l`argomento della funione e il numero di colori casuali che vogliamo generare
var color = [];
//seleziono tutti gli square
var squares = document.querySelectorAll(".square");
//colore che si decide e la risposta giusta scelto in maniera casuale
var pickedColor;
//seleziono lo span che contiene la parte variabile di testo
var colorDisplay = document.getElementById("colorDisplay");
//span inside the header div that change base on the anwer
var messageDispaly = document.querySelector("#message");
//select the h1 to change the back color
var h1 = document.querySelector("h1");
//select the button reset
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode"); 


init();

function init() {

	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons() {
	//mode buttons event listeners
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//la funzione reset() al suo interno utilizza il parametro numsquare
			//questo if statement cambia il valore della variabile in base a quale tasto viene premuto
			
			if(this.textContent == "Easy") {
				numSquares = 3;
			} else {
				numSquares = 6;
			}

			reset();
		});
		}
	}

function setUpSquares() {
	//faccio un loop che assegni a ciascun  quadrato un colore diverso dall array
		for(var i = 0; i < squares.length; i++) {
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

	}




function reset(){
	//generate random colors dependig on the num square variable
	color  = generateRandomColors(numSquares);
	//pick a new random color from the array
	pickedColor = pickColor();
	//change colorDisplay to match pickColor
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Color";
	messageDispaly.textContent = "";
	//looping through all the squares updating their color
	for(var i = 0; i < squares.length; i++) {
		//if the color that we want to give to the square exist
		if(color[i]) {
			squares[i].style.display = "block";
			//change the color of the square
			squares[i].style.backgroundColor = color[i];
		//if the color of the square does not exist
		} else {
			squares[i].style.display = "none";

		}
		
	}
	//updating the background color of the h1 to the initial steelblue
	h1.style.backgroundColor = "steelblue";
}


//code to reset tha game once you press on play again

resetButton.addEventListener("click", function(){
	reset();	
})
//parte variabile di testo e uguale al colore selezionato 
colorDisplay.textContent = pickedColor;




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