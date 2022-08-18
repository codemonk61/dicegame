//window.alert("hello")
var tom1 = new Audio("diceSound.mpeg");
     tom1.play();

var totalScore=document.getElementById("totalScore").innerText

var score1=document.getElementById("score1")
var sum1=0;

var score2=document.getElementById("score2")
var sum2=0;

// for player 1

function dice1(){
	tom1.play();

	var randomNumber1=Math.floor(Math.random() * 6) + 1;

	var randomImage1="dice"+randomNumber1+".png";

	var dice1=document.querySelectorAll("img")[0];

	dice1.setAttribute("src",randomImage1);

	dice1.classList.add("vibrate");
	
	 sum1=sum1+randomNumber1;
	 console.log(randomNumber1)
	score1.innerText=sum1;
   if(randomNumber1==1){
   	sum1=0;
   	score1.innerText=0;

   }
	if(sum1>=totalScore){
		document.getElementById("winner").innerText="Player1 wins"
		document.getElementsByClassName("playagain")[0].style.visibility = 'visible'
	}
	setTimeout(()=>{
dice1.classList.remove("vibrate");
},100 )

}

// for player 2

function dice2(){
	tom1.play();

	var randomNumber2=Math.floor(Math.random()*6)+1;

	var randomImage2="dice"+randomNumber2+".png";

	var dice2=document.querySelectorAll("img")[1];

	dice2.setAttribute("src",randomImage2);

    dice2.classList.add("vibrate");
	 sum2=sum2+randomNumber2;
	 console.log(randomNumber2)
	score2.innerText=sum2;

	if(randomNumber2==1){
   	sum2=0;
   	score2.innerText=0;

   }
	if(sum2>=totalScore){
		document.getElementById("winner").innerText="Player2 wins"
		document.getElementsByClassName("playagain")[0].style.visibility = 'visible'
	}

	setTimeout(()=>{
dice2.classList.remove("vibrate");
},100 )
}

