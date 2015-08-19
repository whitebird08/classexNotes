function manualSlice(input, slicePoint){
  var array = [];
  for(var i=0; i<input.length; i++){
    if([i]<=slicePoint){
      array.push[i]
    }
  }
  return array
}

function manualSlice(input, startSlice, endSlice){
  var array = [];

    for(var i=0; i<input.length; i++)

    if (char > startSlice && char < endSlice) {
      array.push(char)
    }
   return array
}
//The concat() method returns a new array comprised of 
//the array on which it is called joined with the array(s) 
//and/or value(s) provided as arguments.


function concatFun(originalArray, additionalArray){
  var newArray = originalArray
  for(var i=0; i<additionalArray.length; i++){
    originalArray.push(additionalArray[i])      
  }  
  return newArray
}

/*
var original = ['a','b','c'];
var new1 = 'd';
console.log(original.concat(new1));
// ['a','b','c','d']

console.log(original); // unmodified

var new2 = ['e'];
console.log(original.concat(new2));
// ['a','b','c','e']

var new3 = [['f'], 'g'];
console.log(original.concat(new3));
// ['a','b','c',['f'],'g']

var new4 = {thing: "awesome"}
console.log(original.concat(new4));
// [ 'a', 'b', 'c', { thing: 'awesome' } ]

*/
//////////////////////
function include(array, element){
  var result = false   ///initialize then change with if statement
  for(var i=0; i<array.length; i++){
    if(element === array[i])
      result = true 
  } 
  return result
}

the function begins a loop 
checks to see if position 0 char is equal to element
if it is equal then set result to true
  if not, go to position 1 and compare if position 1 char is equal to element
    if 

/////////////////////////////

toString(['hello','there'])
toString([1,2,3,4,5])

  function stringify(array){
    return array.join()
  }

//What is an Array?
In computer science, an array type is a data type 
that is meant to describe a collection of elements (values or variables), 
each selected by one or more indices (identifying keys) that can be computed at run time by the program. 

//How does JavaScript implement arrays?
JS implements arrays as indexed collections of values.
The JavaScript Array global object is a constructor for arrays, which are high-level, list-like objects.

//Provide examples for three Array methods that can be found in the standard library. 
//In the comments for each example explain what the standard library method does.

Array.prototype.slice()
      //Extracts a section of an array and returns a new array.
ex:   var newArray = array.slice(1,3)

Array.prototype.toString()
//The toString() method returns a string representing the specified array and its elements.
ex:   var newString = toString(['hello','there'])

Array.prototype.concat()
//The concat() method returns a new array comprised of the array on which it is called joined with the array(s) 
//and/or value(s) provided as arguments.
ex:   var newArray = originalArray.concat(additionalArray)





