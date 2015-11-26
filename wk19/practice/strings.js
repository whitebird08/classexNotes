//f takes string


function reverseString(string){
	var newArray = [];
	var array = string.split('')
	for(var i = 1; i <= array.length; i++){
		newArray.push(array[array.length - i])
	}
	return newArray.join('')
	 
}

console.log(reverseString('Fabio'))