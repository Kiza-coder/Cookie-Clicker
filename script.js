// Local  storage array with global variabl (key,value)
let myStock = localStorage;
myStock.setItem("score",0);



//function who increment  the score of one
function incrementOne(){
		let score = parseInt(myStock.getItem("score"))
		score ++;
		console.log(score)	
		target.innerHTML = score;
		myStock.setItem("score",score)
}


//function who multiplcate the score
function multiplication(num)
	{
		let score = myStock.getItem("score")
		score = score * num
		target.innerHTML = score;
		myStock.setItem("score",score)
	}


//function who automatically increment the score of "num" every 1000 ms
function autoClick(num)
	{
		console.log(myStock.getItem("score"))
		setInterval(function(){
			let score = parseInt(myStock.getItem("score"));
			score =parseInt(score+num);
			target.innerHTML = score;
			myStock.setItem("score",score);
		},1000);
	}

//function who decrement the score after a purchase
function buy()
	{

	}	
	



document.getElementById("run-2").addEventListener("click",() =>{
	autoClick(1);
});


document.getElementById("run").addEventListener("click",() =>{
	incrementOne()
	});






