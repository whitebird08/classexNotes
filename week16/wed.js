function recursion(n){
  if (n === 1){
  console.log(n)
} else {
  console.log(n)
  n = n-1
  recursion(n)
} 
// return n
}
console.log(recursion(5))

// var arr = ['foo', 'bar', 'baz', 'buzz']
// function forLoop(arr){
//   var newArray = [];
//   for(var i=0; i<arr.length; i++){
//     newArray.push(arr[i])
//   }
// }
var arr = ['foo', 'bar', 'baz', 'buzz']
function findBazIndex(arr, x){
   console.log(x)
  if (arr[x] === 'baz'){
    return x
  } else {
    x += 1
    findBazIndex(arr,x)
  }
  return 'asdfasd'
}
console.log(findBazIndex(['foo', 'bar', 'baz', 'buzz'], 0))