

document.getElementById("start").addEventListener('click',()=>{

	var tom1 = new Audio("diceSound.mpeg");
     tom1.play();

     setTimeout(()=>{
     	var randomNumber1=Math.floor(Math.random() * 6) + 1;

var randomImage1="dice"+randomNumber1+".png";
var dice1=document.querySelectorAll("img")[0];

dice1.setAttribute("src",randomImage1);

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImage2="dice"+randomNumber2+".png";

var dice2=document.querySelectorAll("img")[1];

dice1.classList.add("vibrate");

dice2.classList.add("vibrate");


dice2.setAttribute("src",randomImage2);



if(randomNumber1 > randomNumber2)
{
	document.querySelector("h1").innerHTML="Player1 Win&#9873;";
	 
}
else if(randomNumber2 >randomNumber1)
{
	document.querySelector("h1").innerHTML="Player2 Win&#9873;";
	
}
else
{
	document.querySelector("h1").innerHTML="Draw!";
	
	}

	setTimeout(()=>{
dice1.classList.remove("vibrate");
dice2.classList.remove("vibrate");
},100 )
},100)


})

	