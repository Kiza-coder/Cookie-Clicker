// Local  storage array with global variabl (key,value)
let myStock = sessionStorage;
let tabIdButtonAchat= new Array();
tabIdButtonAchat= ["autoClick","multiply"]

myStock.setItem("score",0);
myStock.setItem("valClick",1);
myStock.setItem("0",20);// autoClick
myStock.setItem("1",300);// Multi

//Function who change the title
function changeTitle()
{
	document.getElementsByTagName("title")[0].innerHTML= myStock.getItem("score")+"   shitty"
}
//function who increment  the score of one
function incrementOne(){
		let score = parseInt(myStock.getItem("score"))
		let valClick = parseInt(myStock.getItem("valClick"));
		score = score + valClick;
		
		target.innerHTML = score;
		myStock.setItem("score",score);

}
changeTitle();

//function who multiplcate the score
function multiplication()
	{
		myStock.setItem("valClick",myStock.getItem("valClick")*2);
		buy(myStock.getItem("1"))
	}


//function who automatically increment the score of "num" every 1000 ms
function autoClick()
	{
		buy(myStock.getItem("0"))
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
		changeTitle();
	}
	,100)

}
function bonus()
{
	let valActuel = parseInt(myStock.getItem("valClick"))
	let valBonus = valActuel * 2;

	parseInt(myStock.setItem("valClick", valBonus));
	setTimeout(function(){},5000);
	parseInt(myStock.setItem("valClick",valActuel ));
	
}





function shittyBySecond()
{
	let score = parseInt(myStock.getItem("score"))
	setInterval(function(){
		 let res = parseInt(myStock.getItem("score")) - score;
		 score = parseInt(myStock.getItem("score"));
		 if(res>0){
		 	 console.log(res)
		 }
	},1000);
}

function cow(){
	setInterval(function(){

			let cow = parseInt(myStock.getItem("valClick"));
			cow = cow * 5
			cow = cow + parseInt(myStock.getItem("score");
			target.innerHTML = cow;

	
	},1);
}


check();
shittyBySecond();



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

document.getElementById("bonus").addEventListener("click",() =>{
	bonus();
	});

document.getElementById("cow").addEventListener("click",() =>{
	cow();
	});









