// JavaScript input practice project

// add event listeners to both input buttons
document.getElementById("subName").addEventListener("click", greet);
document.getElementById("color").addEventListener("click", changeColor);

// create a Date variable with the current date and write that info to the document
let todaysDate = new Date();

todaysDate = todaysDate.toLocaleDateString();

document.getElementById("today").textContent = "Today's date is: " + todaysDate;

// definition of the greet() function
function greet() {
	// local variable to store the user input
	let input = document.getElementById("enterName").value;
	// output the input value onto the document
	document.getElementById("greeting").textContent = "Nice to meet you, " + input + ".";
}

// definition of the changeColor() function
function changeColor() {
	// local variables to store the user input
	let r = document.getElementById("red").value;
	let g = document.getElementById("green").value;
	let b = document.getElementById("blue").value;
	// remove the old backgroundImage gradient, otherwise solid colors still won't work
	document.getElementsByTagName("body")[0].style.backgroundImage = "none";
	document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}