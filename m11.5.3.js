function func(num1) {
	return function(num2) {
		return num1 + num2;
	};
}

console.log(func(3)(4));
