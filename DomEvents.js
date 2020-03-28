
var _ = require('lodash');
//console.log(_);

var arrayFood = ['apple','banana','carrot','githeri','orange'];
console.log(_.without(arrayFood,'githeri'))

var input =document.getElementById("userinput");
var button =document.getElementById("enter");
var ul  =document.querySelector("ul");


button.addEventListener("click",function(){
	if(input.value.length > 0){
		var li =document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";

	}
	
})