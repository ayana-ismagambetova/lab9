/*task1*/
let a=2
let b=3
console.log("first number is "+a);
console.log("second number is "+b);
function squares(a,b){
	return a*a + b*b;
}
console.log(squares(2,3));

/*task2*/
let c=11;
console.log("the given number is "+c);
function oddeven(c){
	d=c%2;
	if (d=0){
		console.log("the given number is even")
	}
	else{
		console.log("the given number is odd")
	}
}
console.log(oddeven(11));


/*task3*/
let e=5;
let f=12;
console.log("the given two numbers are "+e,f);
if(e>f){
	console.log("the greatest number is "+e)
	}
else{
	console.log("the greatest number is "+f)
}