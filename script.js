function fibonacci(num) {
// your code here
	let f1=0, f2=1, sum=0;

	while(num>0){
		// console.log(f1 + " ");
		sum = f1+f2;
		f1 = f2;
		f2 = sum;
		num--;
	}
	console.log(f1);
}

// fibonacci(5);

module.exports = fibonacci;
