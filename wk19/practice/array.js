var arr = [1,2,3,5,2,1,4,5,2,1,6,1,7,2,2,2];

//find most most commonly occuring number in the array

function findLargest(arr){
	var greatest = 0;
	var value = 0;
	var obj = {};

	for(var i = 0; i < arr.length; i++){
		if(obj[arr[i]]){
			obj[arr[i]]++
		} else {
			obj[arr[i]] = 1
		}
	}
	console.log(obj)
	for(var e in obj){
		if(obj[e] > value){
			greatest = e
			value = obj[e]
		}
	}
	console.log(greatest + ' is the most common')
}
findLargest(arr)
