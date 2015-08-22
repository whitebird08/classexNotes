// Write a function named addString that takes a string of arithmetic involving addition 
// and returns the proper value. For example addString("10+20+30"); would return 60 (as a Number).
function addString(string){
return string.split('+').map(Number).reduce(function(prev,curr){
  return prev + curr
},0)
}
addString("10+20+30")
//or refactor to...
function addString(string){
return string.split('+').reduce(function(prev,curr){
  return prev + Number(curr)
},0)
}
addString("10+20+30")
// Write a function named multiplyString that takes a string of arithmetic involving addition 
// and returns the proper value. For example multiplyString("10*20*30"); would return 6000 (as a Number).
function multiplyString(){
  return 
}

// Is it possible to do an inplace swap in a String in JavaScript? How about an Array? Why?
parseInt("10+20+30",)




https://github.com/gSchool/node-query-string-parsing
slice(1)


