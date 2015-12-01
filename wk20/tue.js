var arr = ['a', 'b', 1, 2, 'a', 1, 'c', 1, 'b', 2];
// output => [['a', 'a'], ['b', 'b'], [2, 2]]

//outputArr = [];
//obj = {}
//loop thru arr
//check obj for i
//if no add a:1
//in yes a++
 

function findPairs(arr){
  var outputArr = [];
  var pairsObj ={};
  for(var i = 0; i < arr.length; i++){
    if(pairsObj[arr[i]]){
       pairsObj[arr[i]]++;
    }else{
      pairsObj[arr[i]] = 1;
    }
  } 
  console.log(pairsObj);
  
  for( var key in pairsObj){
    if(pairsObj[key] === 2){
      outputArr.push([key, key]);
    }
  }
  return outputArr
}

console.log(findPairs(arr));