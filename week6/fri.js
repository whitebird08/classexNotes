// What is the decimal value of 1233215 in base 7?


// Write a function named rotateEvenIndices that take a String argument, 
// here are sample tests to illustrate the behavior:
function rotateEvenIndices(string){
  var output =[];
  for(var i=0; i<string.length; i+2){
    if (i%2 == 1) output += string[i]; 
    output += string[i+2 % string.length];
  }
  return output; 
}

// var string = 'foobar';
// var rotatedOnce = rotateEvenIndices(string);
// console.log(rotatedOnce);

// var rotatedTwice = rotateEvenIndices(rotatedOnce);
// console.log(rotatedTwice);


// Suppose you are given an array of integers. 
// Find the largest product of any pair of integers in the array. Some examples:
function greatestProductOfPairs(array){
var pairs = [];
  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array.length; j++){
      pairs.push(array[i] * array[j])
    }
  }
pairs.sort()
return pairs[i-1]
}
//   console.log(greatestProductOfPairs([2,3,4,-5,92,100])); // 9200
//   console.log(greatestProductOfPairs([-2,3,-4,-5,-92,-100])); // 9200
-------
jade/express stuff

http://stackoverflow.com/questions/28187290/how-rotate-html-table-using-jade-template-node-express-jade
http://stackoverflow.com/questions/5697863/dynamic-links-with-jade
--
app.get('/', function(req, res){
  res.render('index.jade', { title: 'index' });
});

app.get('/about', function(req, res){
  res.render('about.jade', { title: 'about' });
});
////
a(href='/') index

a(href='/about') about
--

