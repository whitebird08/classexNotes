// Given an array of integers, find the maximum value in the array.
function findMax(array){
  array.reduce(function(prev, curr){
    if(prev > curr) {
      return prev
    }else{
      return current
    }
  })
}

// Given an array of integers, find the maximum value in the array.
function findMax(array){

var mutateArray = array.slice
array.sort
return sortArray[-1]
}
// Explain what call is to a JavaScript beginner, 
// you may assume that they only know how to write and invoke simple functions and assign values to variables.
call is when you request a value

var f = function(param1){
  this.foo = param1;
};
var obj = {some:'object'}
f.call(obj, 'w');
console.log(obj)
  
    {foo:'w',
      some: 'object'
      }

// A group of miners in Colorado in the late 19th century 
// are working for a ruthless mining company. 
// The mining company dictates that each day the miners 
// should have exactly 30 minutes for lunch. On top of this, 
// the miners are not provided watches or time keeping devices 
// since the company owners believe they will just get destroyed
 // when the miners inevitably blow their arms off with dynamite 
 // or die in some other horrific mining accident. 
 // Instead, the miners are given two pieces of rope, but it is no ordinary rope, 
 // this rope has the special property that when burned it acts as a timer. 
 // Of the two pieces they are given, 
 // one piece of rope burns for 15 minutes and the other for 45 minutes. 
 // Although the rope acts as a timer, 
 // the rope is unpredictable in so much as it does not burn linearly with respect to length and time. 
 // Another way to think about this is that if you cut the 15 minute rope into thirds, 
 // each third would not burn for 5 minutes, it would instead burn for an indeterminate amount of time. 
 // How can the miners use a lighter and these ropes to make sure their lunch is only 30 minutes long?
 begin burning both ropes at the same time
 start lunch after burning the "15 minute rope",
 as soon as the "45 minute rope is gone" lunch is over.
//////
// // give two strings, write a function, maxsubstring, that returns the longest substring that occurs in both strings.
//  //hint:find the pattern first
//  ex:(maxSubstring('example', 'Texas')) //exa
//  ex:('maxsubstring('coding',)
//  function maxSubstring(string1, string2){
//  }
///////!!!!!!!!!!

if(baseCase){
  else{
    recurse
  }
}
////////!!!!!!!!
// recursion using factorial as an example

function factorial(n){
  if(n === 0) return 1;  
  return n * factorial(n-1);
}
////
find maxinteger in an array.

var a = [1,10,-50,20,45,6];

function maxInArray(array){
  var max= arguments[1];

  if(array.length==0)return max;  //base case //similar to condition in a for loop

  if(!max) max=array[0];

  else 
    currentMax = array[0] > max ? array[0] : max;

  return maxInArray(array.slice(1), max) //recursive step // like incrementer in a for loop
}

function maxInArray(array){
  var max = arguments[1] || array[0];
  if (array.length == 0) return max; //BASE CASE

  var newMax = max > array[0] ? max : array[0];
  return maxInArray(array.slice(1), newMax); //RECURSIVE STEP
}
//OR
function maxInArray(array){
  function go(array, max){
  var max = arguments[1] || array[0];
  if (array.length == 0) return max; //BASE CASE

  var newMax = max > array[0] ? max : array[0];
  return maxInArray(array.slice(1), newMax); //RECURSIVE STEP
  }
  return go(array, array[0]);
}
/*
    Recall that a recursive function is a function that calls itself (Eloquent JS).
    More formally, a recursive algorithm is an algorithm for which the solution to
    the problem is solved by solving progressive sub-problems, until a know, or
    "base" case is reached.

    The classical example of a recursive algorithm is computing the factorial. Recall
    from math class that the factorial of an Integer, n, is the product of all positive,
    Integer values less than or equal to n. For example,

      6! = 6*5*4*3*2*1

    Alternatively, we can view this computation as:

      6! = 6*5!

    recursively applying this, we would then have

      5! = 5*4!

    and so on, until we hit:

      1! = 1

    at which point the final value could be computed back up the chain (this is similar
    to our substitution principle). By construction, 0! = 1 (hint: could this be the
    base case?).

    Given this information about recursion, write a JavaScript function named `factorial`
    that takes an Integer argument (you do not need to check the argument) and
    recursively computes the factorial.
  */







