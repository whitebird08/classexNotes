
function Person(first_name, last_name, age, is_married){
	typeof first_name !== 'string' ? console.log ("first name not valid type") : this.first_name = first_name;
	typeof last_name !== 'string' ? console.log (" last name not valid type") : this.last_name = last_name;
	typeof age !== 'number' ? console.log ("age not valid type") : this.age = age;
	typeof is_married !== 'boolean' ? console.log ("not valid type") : this.is_married = is_married;
}



var bob = new Person('bob', 'bird', 64, true);
console.log(bob)

var sally = new Person('sally', 'wally', 42, false);
console.log(sally.age)

Person.prototype.ruMarried = function(){
	return this.is_married ? "Yes, I am." : "No, I am not."
}

console.log(bob.ruMarried())



var badPerson = new Person(23432,3234,'too cool','whatttttt');
console.log(badPerson)

