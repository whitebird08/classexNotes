// fs.readFile('foo.js', + '.reverse', data, function(err, data){
//   if (err) throw err;
  
//   fs.writeFile('foo.js', + '.copy', data. function(err){
//     if (err) throw err;  
//     console.log('file sucessfully reversed and copied');
//   })
// });

// --------



var fs = require("fs");

fs.readFileSync('foo.txt', function(err, data){
  str=data.toString();
})
fs.writeFileSync('foo.txt' + '.copy' , str);

str = fs.readFileSync

// Write a function named reverse that takes a string argument and returns the string reversed. 
// The string provided as the argument should not be modified.

var string = 'abcd'
function reverse(string){
  var output = [];
  for (var i = 0, length = string.length; i <= length; i++)
    output.push(string.charAt(length - i));
  return output.join('');
}
// Write a function named reverse that takes a string argument and returns the string reversed, 
// but this time the string argument should be modified.

 

// What is a closure? Provide an example.
the binding of the value of the free variable to its parents

function(parent){
  var parent;
  function(){
    var fv = parent
  }
}