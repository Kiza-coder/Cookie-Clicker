// Local  storage array with global variabl (key,value)
let myStock = localStorage;
myStock.setItem("score",0);
myStock.setItem("valClick",1);



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


function main()
	{
		setInterval(function(){
			document.getElementById("mult").disable = true;
			console.log(1151);
		},1000);
	}	
main()
 




document.getElementById("run").addEventListener("click",() =>{
	incrementOne()
	});

document.getElementById("mult").addEventListener("click",() =>{
	multiplication()
	});

document.getElementById("autoclick").addEventListener("click",() =>{
	autoClick();
	});






