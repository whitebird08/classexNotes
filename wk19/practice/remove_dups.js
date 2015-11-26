function RemoveDuplicates(string){
	this.string = string
}

RemoveDuplicates.prototype.insensitiveRemoveDupes = function(){
	var array = [];
	
	for(var i = 0; i < this.string.length; i++){
		var upper = this.string[i].toUpperCase();
		var lower = this.string[i].toLowerCase();
		if(array.indexOf(upper) === -1 && array.indexOf(lower) === -1){
			array.push(this.string[i])
		}
	}
	return array.join('')
}

RemoveDuplicates.prototype.removeDupes = function(){
	var array = [];
	for (var i = 0; i < this.string.length; i++){
		if(array.indexOf(this.string[i]) === -1){
			array.push(this.string[i])
		}
	}
	return array.join('')
}

module.exports = RemoveDuplicates