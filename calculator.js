let input = document.querySelector('.input');

function insert (num) {
	if(input.textContent == 0){
		input.textContent = "";
		input.textContent += num;

	}else{
		input.textContent += num;
	}
	
}

function clean () {
	input.textContent ='';
	input.textContent = "0";

}

function back () {
	const val = input.textContent;
	input.textContent = val.slice(0,-1);
	if(input.textContent == 0){
		input.textContent = "0";
	}

}

function equal () {
	const val = input.textContent;
	if(val){
			input.textContent = eval(val);
	}
}

function percent () {
	const val = input.textContent;
	input.textContent = eval(val)/100;
	
}
const rad = document.querySelector('.rad');

rad.addEventListener('click',function(){
	this.classList.toggle('deg');
	if(this.className == 'item rad deg'){
		this.textContent='Deg';
		
	}else{
		this.textContent='Rad';
	}

})
function constant (name) {
	if(input.textContent == 0){
		input.textContent = "0";
	}
	if(name == "pi"){
		input.textContent += Math.PI.toFixed(8);
	}
	if(name == "e"){
		input.textContent += Math.E.toFixed(8);
	}
	
}

function operations (name) {
	const val = input.textContent;
	
	if(name == "sqrt"){
		input.textContent = Math.sqrt(eval(val));
	}
	if(name == "sqr"){
		input.textContent = Math.pow(eval(val), 2);
	}
	if(name == "^-1"){
		input.textContent = Math.pow(eval(val), -1);
	}
	if (name == "power"){
		input.textContent += "**";
	}
}

function countFactorial (n){
   return (n!=1)? n * countFactorial(n-1): 1;
}


function factorial(){
	input.textContent = countFactorial(+eval(input.textContent));
}

function log (name){
	if(name == 'lg'){
		input.textContent = Math.log10(eval(input.textContent)).toFixed(8);
	}
	if(name == 'ln'){
		input.textContent = Math.log(eval(input.textContent)).toFixed(8);
	}
}


function f (name){
	if(name == "sin"){	
			// degrees
		rad.className=='item rad deg'?
			input.textContent = parseFloat(Math.sin(eval(input.textContent)/180*Math.PI).
	  	   toFixed(5).toString())
		:
			// radian
			input.textContent = parseFloat(Math.sin(eval(input.textContent)).
		   toFixed(5).toString());	
	}
	if(name == "cos"){
		// degrees
		rad.className =='item rad deg'?
			input.textContent = parseFloat(Math.cos(eval(input.textContent)/180*Math.PI).
			toFixed(5).toString()):

		// radian
			input.textContent = parseFloat(Math.cos(eval(input.textContent)).
			toFixed(5).toString());
	}
	if(name == "tan"){
		// degrees
		rad.className =='item rad deg'?
			input.textContent = parseFloat(Math.tan(eval(input.textContent)/180*Math.PI).
			toFixed(5).toString()):
 
		// radian
			input.textContent = parseFloat(Math.tan(eval(input.textContent)).
			toFixed(5).toString());
	}
	if(name == "ctg"){
      // degrees
		rad.className =='item rad deg'?
			input.textContent = parseFloat(1/Math.tan(eval(input.textContent)/180*Math.PI).
			toFixed(5).toString()):

		// radian
			input.textContent = parseFloat(1/Math.tan(eval(input.textContent)).
			toFixed(5).toString());
	}
	if(name == "sinh"){
      // degrees
		
		input.textContent = Math.sinh(eval(input.textContent));
	}
	if(name == "conh"){
      // degrees
		input.textContent = Math.cosh(eval(input.textContent));
	}
	if(name == "tanh"){
      // degrees
		input.textContent = Math.tanh(eval(input.textContent));
	}
}
// function getRandomNum(max) {
// 	return Math.floor(Math.random() * max);
//  }
 
// function change(){
// 	return (this.event.target.textContent == 'Rad')? this.event.target.textContent = 'Deg': 'Rad';
	
// }






