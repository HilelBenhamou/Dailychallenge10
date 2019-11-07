var number=parseInt(prompt("Put a starting number of bottles of beer !"));

var strings1=number+" bottles of beer on the wall"
var strings2=number+" bottles of beer";
var strings3="Take "+i+" down, pass it around";



for(var i=0; i<3; i++){
	var number=number-i;
	console.log(strings1=number+" bottles of beer on the wall");
	console.log(strings2=number +" bottles of beer");
	console.log(strings3="Take "+(i+1)+" down, pass it around");
}
