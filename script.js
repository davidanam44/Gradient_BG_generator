var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

// var randomNumber1 = Math.random();
// var randomNumber2 = Math.random();

// console.log(randomNumber1, randomNumber2)


// Explanation
// Math.random():
// Generates a random number between 0 and 1.
// Math.floor(Math.random() * 16777215):
// Scales the random number to a range of 0 to 16777215 (decimal for #FFFFFF).
// .toString(16):
// Converts the number to a hexadecimal string.
// .padStart(6, '0'):
// Ensures the string is always 6 characters long, adding leading zeros if necessary.
// Template String (#${}):
// Prepends # to format it as a valid hex color

function getRandowmHex(){
	
	var hex = Math.floor(Math.random() * 16777215).toString(16);// 16777215 is the maximum decimal value for #FFFFFF
	var ranHex =  `#${hex.padStart(6, '0')}`; // Ensures the hex string is always 6 characters long
	// console.log(ranHex);
	return ranHex;

}

function getRandomColors(){
	ranColor1 = getRandowmHex();
	ranColor2 = getRandowmHex();
	body.style.background = "linear-gradient(to right," +ranColor1+ "," +ranColor2 + ")";
	console.log(ranColor1, ranColor2);
}



// body.style.background = "red";
// console.log(body);
// console.log(css);
// console.log(color1);
// console.log(color2);

function setOriginalGradient(){
	body.style.background = "linear-gradient(to right, green ,red)";
	css.textContent = body.style.background + ";";

}

window.onload = function(){
			setOriginalGradient()	

		}
// document.addEventlistener("DOMContentLoaded", function(){
// 	body.style.background = "linear-gradient(to right, red ,yellow);"

// });

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

	css.textContent = body.style.background + ";";

}


// color1.addEventListener("input", function(){
// 	// console.log(color1.value);
// 	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
// })

button.addEventListener("click", getRandomColors);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);