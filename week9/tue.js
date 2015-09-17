// Write a function translate that will return a version of the string that has been translated into "rövarspråket". 
// That is, double every consonant and place an occurrence of "o" in between. For example:

// // translate("this is fun") //=> "tothohisos isos fofunon

function translate(string){
  var output = [];
  var vowels = ['a','e','i','o','u'];
  var newArray = string.split;
  for(var i=0; i < newArray.length; i++){
    for(var j=0; j < vowels.length; j++){
      if([i] !== [j] && [i] !== ' '){
        output.splice(([i]+1),0,([i] + 'o' + [i]));
      } else {
        output.push([i]);
      }
    }
  }
  return output.join;
}

console.log(translate('this is fun'))
//.splice^^^^^^
// removes 0 elements from index 2, and inserts 'drum'
// var removed = myFish.splice(2, 0, 'drum');
// myFish is ['angel', 'clown', 'drum', 'mandarin', 'surgeon']
// removed is [], no elements removed

var isVowel = function(char) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) !== -1
};

function translate(string) {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        if (!isVowel(string[i]) && string[i] !== " ") {
            newString += string[i] + "o" + string[i];
        }
        else {
            newString += string[i];
        }
    }
    return newString;
}
console.log(translate('In order to understand recursion, one must first understand recursion.'));
```​
//////
​```function nonSenseRec(string){
    var vowels = ['a','e','i','o','u','A','E','I','O','U', " "],
        stringtest = string,
        output = '';
    
    function go(string){
        if(string.length == 0) return output;
        output += vowels.indexOf(string[0]) == -1 ?  string[0] + 'o' + string[0] : string[0];
        return go(string.slice(1))
    }
    return go(stringtest)
}

nonSenseRec('this is fun’)```​


