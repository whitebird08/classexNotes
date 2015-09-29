// implement a function which takes two parameters, both of which are arrays, and zips them together. 
// ie: The arguments are [1,2,3], and [4,5,6], and after zipping the two arrays, you return [1,4,2,5,3,6].
function zipArrays(arr1, arr2){
    newArray =[];
    
    for(var i=0; i<arr1.length; i++){
      newArray.push(arr1[i])   
      newArray.push(arr2[i])  
    }
    
  return newArray
}
console.log(zipArrays([1,2,3],[4,5,6]))

// Query strings are often used to pass data from one "page" to another, through the URL.
 // The query string is a list of key-value pairs at the end of a URL. 
 // The query string always starts with a ?, and the key-value pairs are separated by &'s. 
 // Take a look at the following examples:

// http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA

// http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week

// Write a function called parseQueryString which takes a URL string as an argument 
// and returns a Javascript object containing the key-value pairs from the query string. For example:

// parseQueryString("http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA")

// //=> {find_desc: "tacos", find_loc: "San+FranciscoCA"}

// parseQueryString("http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week")

// //=> {q: "dogs", sort: "top", t: "week"}

//plan

function parseQueryString(urlString){
  for(var=([i]==='?'); i<urlString.length; i++)
  if urlString=''string.split('_')
  if (string.split('&')
  return {}
}