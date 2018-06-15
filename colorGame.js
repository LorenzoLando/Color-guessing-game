//per prima cosa creiamo una lista di colori
var color = [

	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
	
];

//seleziono tutti gli square
var squares = document.querySelectorAll(".square");
//colore che si decide e la risposta giusta
var pickedColor = color[3];
//seleziono lo span che contiene la parte variabile di testo
var colorDispaly = document.getElementById("colorDispaly");
//parte variabile di testo e uguale al colore selezionato
colorDispaly.innerText = pickedColor;

//faccio un loop che assegni a ciascun  quadrato un colore diverso dall array
for(var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = color[i];
}