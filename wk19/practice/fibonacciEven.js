function evenFibNums(){
	var fibNums = []

	for(var i = 1; i < 33; i++){
		if(i <= 2) {
			fibNums.push(i)
		} 
		else {
			fibNums.push(fibNums[i-3] + fibNums[i-2])
		}
	}
	
	return fibNums.filter(function(n) {
		return n % 2 === 0
	})
}

console.log(evenFibNums())


function evenFibNums(){
	var fibNums = []

	for(var i = 1; i <= 2; i++){
		fibNums.push(i)
	}

	for(var i = 3; i < 33; i++){
		fibNums.push(fibNums[i-3] + fibNums[i-2])
	}
	
	return fibNums.filter(function(n) {
		return n % 2 === 0
	})
}

console.log(evenFibNums())