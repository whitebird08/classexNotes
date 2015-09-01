// Write a multiply function that multiplies two integers without using *.
solution1
function multiply(num1,num2) {
    if (num1 === 0 || num2 === 0) {
        return 0;
    }
    var sum = 0;
    for(var i = 0; i < num2; i++) {
        sum += num1;
    }
    return sum;
};
solution2
function multiply (numb, multiplier) { 

  if(multiplier == 0) return 0;
  
  if(multiplier > 0) return (numb + multiply(numb, multiplier -1));

};// doesn't work with negative nums
solution3
function multiplier(num1,num2){
    var output = 1/(1/num1/1/num2)
    console.log(output)
}
solution4
function multiply(arg1, arg2){
  return ((Math.pow((arg1 + arg2), 2))/4) - ((Math.pow((arg1 - arg2), 2))/4);
}


// Write a function named isPalindrome that takes a string and determines if it is a palindrome.
function palindrome(string){
  var newArray = [];
   if string === string.split('').reverse('').join('') //+ ????
} return true

// You are given an array with integers between 1 and 1,000,000,
 // but one integer is missing. Write a function that determines the missing value.
 function determineMissingVal(array){
  for(var i=0; i<array; i++)
  if(i + 1 !== i + 1){
    return (i + 1)
  }
 }