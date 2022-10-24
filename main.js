/*task#6*/
let a=2
let b=3
console.log("first number is "+a);
console.log("second number is "+b);
function squares(a,b){
	return a*a + b*b;
}
console.log(squares(2,3));

/*task#11*/
let c=11;
console.log("the given number is "+c);
function oddeven(c){
	d=c%2;
	if (d=0){
		console.log("the given number is even");
	}
	else{
		console.log("the given number is odd");
	}
}
console.log(oddeven(11));


/*task#14*/
let e=5;
let f=12;
let g=30;
console.log("the given two numbers are "+e,f,g);
if(e>f && e>g){
	console.log("the greatest number is "+e);
}
else if(f>e && f>g){
	console.log("the greatest number is "+f);
}
else{
	console.log("the greatest number is "+g)
};