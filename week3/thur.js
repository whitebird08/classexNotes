 // Use forEach to find the minimum value in an array

var total = 0;
var numbers = [2,5,3,4];

numbers.forEach(function(num){
  total += num;
});

console.log(total)

function minValue(){

}


array.forEach(function(element){
  var minValue = 0
  if(element < minValue){
    minValue = element
  }
  console.log(minValue)
})

// numbers.forEach(function(num){
//   debugger;
//   (min > num) ? min = num : null;
// })
// console.log(min)

[1,2,3].forEach(function(num){ num = 1
  debugger;
})
// explicit returns
var array = ['foo.jpg', 'foo.pdf', 'foo.somethingelse', 'baz.jpg']
array.filter(function(elem){
})

[1,2,3].filter(function(num))

// var array = ['foo.jpg', 'foo.pdf', 'foo.somethingelse', 'baz.jpg']

// array.filter(function(elem) {
    
// })
//////////
  function findJpg(elem){
  if (elem.indexOf('.jpg') > -1){
    return true;
  }}

var array = ['foo.jpg', 'foo.pdf', 'foo.somethingelse', 'baz.jpg'];
 array.filter(findJpg);

//////////
// Suppose you are given the following array; 
// var foxTypes = ['Red Fox', 'Arctic Fox', 'Fennec Fox', 'Kit Fox', 'Swift Fox'];. 
// Write a function named slowFoxes 
// which takes a list of foxTypes as a parameter 
// and returns an array of foxes which are not Swift Fox.



  function slowFoxes(foxTypes, elem){
    var notSwiftFox = [];
    if(foxTypes.indexOf('Swift Fox') != 'elem'){
      notSwiftFox.push(elem[]);
    }
    return notSwiftFox;
  }
var foxTypes = ['Red Fox', 'Arctic Fox', 'Fennec Fox', 'Kit Fox', 'Swift Fox'];
foxTypes.filter(slowFoxes);

// ```var foxTypes = ['Red Fox', 'Arctic Fox', 'Fennec Fox', 'Kit Fox', 'Swift Fox'];

// foxTypes.filter(function findfox(elem){
    // return elem !== "Swift Fox"; 
////////////////

//Suppose you are given the following array: var testScores = [100, 99, 92, 93, 48, 74, 64, 22, 46, 86]. 
// Write a function named passingScores which returns an array of scores over 70.

var testScores = [100, 99, 92, 93, 48, 74, 64, 22, 46, 86]

  testScores.filter(function passingScores(elem){
  return elem > 70;
  });
////////


testScores.map(function(num){
  return num * 2;
})

var foxTypes = ['Red Fox', 'Arctic Fox', 'Fennec Fox', 'Kit Fox', 'Swift Fox'];
foxTypes.map(function (elem){
  return "The " + elem
})

function titleize(string){
  return "The " + string;
}


foxTypes.map(titleize)

//////////
var people = [
    {name: "Mario", birthYear: 1960 },
    {name: "Luigi", birthYear: 1965 },
    {name: "Peach", birthYear: 1970 },
    {name: "Yoshi", birthYear: 1975 },
]

// Map all of the names
// ["Mario", "Luigi", "Peach", "Yoshi"]
// Map all of the birthYears
// [1960, 1965, 1970, 1975]
// Map all of the birthYears over 1965
// [1970, 1975]
// Map all of names for people who have birthYears before 1975
// ["Mario", "Luigi", "Peach"]

var people = [
    {name: "Mario", birthYear: 1960 },
    {name: "Luigi", birthYear: 1965 },
    {name: "Peach", birthYear: 1970 },
    {name: "Yoshi", birthYear: 1975 },
]
function allNames(object){
  return object.name;
}
people.map(allNames)

function allBirthYears(object){
  return object.birthYear;
}


people.map(function (object){
}).filter(function (allBirthYears){
return allBirthYears > 1965
}))

// Map all of the birthYears over 1965
// people.map(function(person) {
    // return person.birthYear;
// }).filter(function(birthYear) {
    // return birthYear > 1965
// });

/////////

nums.reduce(function(previous, current){
  previous = 1, current = 2
  return previous + current;
})

var lyrics = ['suffocation', 'no', 'breathing']
lyrics.reduce(function(previous,current){
return previous + current;
})






