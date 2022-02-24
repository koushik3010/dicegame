var diceArray = [1, 2, 3, 4, 5, 6];

var randomDice = Math.floor(Math.random()*6) ;

var randomDice2 = Math.floor(Math.random()*6);

var diceImgArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];


document.querySelector(".img1").setAttribute("src" , diceImgArray[randomDice]);
document.querySelector(".img2").setAttribute("src" , diceImgArray[randomDice2]);

if (randomDice > randomDice2) {
  document.querySelector("h2").innerHTML = "Player 1 wins.";
}
else if (randomDice == randomDice2) {
  document.querySelector("h2").innerHTML = "It's a draw.";
}

else {
  document.querySelector("h2").innerHTML = "Player 2 wins.";
}
