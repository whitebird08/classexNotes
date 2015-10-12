Write a function that takes an acronym as an argument 
and returns a sentence that it could represent. 
Please make these appropriate...

Example:


// => April Building Caller District


function backronym(acronym){

    var finalSentence = [];
    var matchingWords = [matchingWords[0]];
  
    var wordlist = ['Apple', 'Auto', 'Box', 'Bike', 'Cardboard', 'Creative', 'Department', 'District'];
    var acro = acronym.split('');
    for(var i=0; i<acro.length; i++){
      for(var j=0; j<wordlist.length; j++){
        if(wordlist[j].charAt(0) === acro[i]){
          matchingWords.push(wordlist[j]);
        }   
      };
    finalSentence.push(matchingWords[1]); //Math.random() * (max - min) + min
    };
  return finalSentence.toString();
  //reset matching words array??
}

backronym('ABCD');

//can do just one word