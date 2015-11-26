var insensitiveRemoveDupes = function(stringIn, stringDupesRemoved){
	var stringOut = '';

	// do some code to remove the dupes from stringIn
	var temp = [];

	for(var i = 0; i < stringIn.length; i++){
		var char = stringIn[i]		
		if(temp.indexOf(char) < 0) {
			temp.push(char)
		}
	}

	// set stringOut to temp
	stringOut = temp.join('')


	console.log('expect: ', stringOut, '   :: to equal: ', stringDupesRemoved);
	return stringOut === stringDupesRemoved;
}

var o = insensitiveRemoveDupes('AACBB', 'ACB');
console.log(o);