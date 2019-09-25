// Local  storage array with global variabl (key,value)
let myStock = localStorage;
let tabIdButtonAchat= new Array();
tabIdButtonAchat= ["autoClick","multiply"]

myStock.setItem("score",0);
myStock.setItem("valClick",1);
myStock.setItem("0",100);
myStock.setItem("1",300);



//function who increment  the score of one
function incrementOne(){
		let score = parseInt(myStock.getItem("score"))
		let valClick = parseInt(myStock.getItem("valClick"));
		score = score + valClick;
		console.log(score)	
		target.innerHTML = score;
		myStock.setItem("score",score);

}


//function who multiplcate the score
function multiplication()
	{
		myStock.setItem("valClick",myStock.getItem("valClick")*2);
		buy(10);
	}


//function who automatically increment the score of "num" every 1000 ms
function autoClick()
	{
		buy(10)
		setInterval(function(){
			let score = parseInt(myStock.getItem("score"));
			let valClick = parseInt(myStock.getItem("valClick"));
			score = score + valClick;
			target.innerHTML = score;
			myStock.setItem("score",score);
		},1000);

	}

//function who decrement the score after a purchase
function buy(num)
	{
		myStock.setItem("score",parseInt(myStock.getItem("score"))-num)
		target.innerHTML = myStock.getItem("score")
	}

function check()
{
	setInterval(function(){
		for(let i=0 ; i< tabIdButtonAchat.length ;i++)
		{
			if(parseInt(myStock.getItem(i)) > parseInt(myStock.getItem("score")))
			{
				document.getElementById(tabIdButtonAchat[i]).setAttribute("class","btn btn-link disabled")
			}
			else
			{
				document.getElementById(tabIdButtonAchat[i]).setAttribute("class","btn")
			}
		}
	}
		,10)
}

check();



const gallery=[
	"assets/img/shittyH.png",
	"assets/img/shittyA.png",

]

let i = 0;
document.getElementById("run").addEventListener("click",() =>{
	incrementOne()
		
			i++;
			document.querySelector("img").setAttribute("src", gallery[i%gallery.length]);

	});

document.getElementById("multiply").addEventListener("click",() =>{
	multiplication()
	});

document.getElementById("autoClick").addEventListener("click",() =>{
	autoClick();
	});






