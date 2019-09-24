let myStock = sessionStorage;
myStock.setItem(1,1);
console.log(myStock.getItem(1));




function coockieClick(num)
{
	let score = document.getElementById("target")
	switch(num){
		case 1: score.value ++;
				if(score.value >100){
					myStock.setItem(1,2)
				}
				break;
		case 2: score.value +2;
				if(score.value >150){
					myStock.setItem(1,3)
				}
				break;
		default: 
	}
}



document.getElementById("run").addEventListener("click",() =>{
	coockieClick(myStock.getItem(1));
});





window.addEventListener("load", ()=> {
    	document.getElementById("target").innerHTML =  myStock.getItem(1);
     });
