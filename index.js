//alert("js entered")

//Imported Attributes
var source1 = document.querySelectorAll("img")[0];
var source2 = document.querySelectorAll("img")[1];

//Local Attributes
var P1Number = Math.floor(Math.random() * 5) + 1;
var P2Number = Math.floor(Math.random() * 5) + 1;

var DiceImage1 = "images/dice" + P1Number + ".png";
var DiceImage2 = "images/dice" + P2Number + ".png";


//Changing Imported Attributes
source1.setAttribute("src", DiceImage1);
source2.setAttribute("src", DiceImage2);

//Logic
if (P1Number > P2Number) {
    document.querySelector("h1").innerHTML = "<< Player 1 wins!   ";
}
else if (P2Number > P1Number) {
    document.querySelector("h1").innerHTML = "   Player 2 wins! >>";
}
else {
    document.querySelector("h1").innerHTML = "Stalemate!";
}
