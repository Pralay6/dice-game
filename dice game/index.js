// for first dice
var randomNumber1 = Math.floor(Math.random()*6)+1 //1-6

var randomImage = "images//dice"+randomNumber1+".png";//images//dice1-dice6

document.querySelectorAll("img")[0].setAttribute("src" , randomImage);//


// for second dice
var randomNumber2 = Math.floor(Math.random()*6)+1

var randomImage = "images//dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src" , randomImage);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins!"
}
else{
  document.querySelector("h1").innerHTML = "Draw!"

}
