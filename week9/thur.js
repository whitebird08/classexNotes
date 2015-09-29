// given an array of test scores [ 68, 74, 99, 45, 83, 95 ] 
// and the scale: F is less than 60, D is 60 to 69, C is 70 to 79, B is 80 to 89, A is 90 to 100.

// Write a function that returns an array:

// convertToGrade(arr); // => [ D, C, A, F, B, A ]
var arr = [ 68, 74, 99, 45, 83, 95 ] 
function convertToGrade(arr){
  var grades = [];
  for (var i=0; i<arr.length; i++){
    if (arr[i] < 60 && arr[i] === 0){ 
      grades.push('F')
    } else if (arr[i] >= 60 && arr[i] <= 69 ){
      grades.push('D')
    } else if (arr[i] >= 70 && arr[i] <= 79 ){
      grades.push('C')
    } else if (arr[i] >= 80 && arr[i] <= 89 ){
      grades.push('B')
    } else if (arr[i] >= 90 && arr[i] <= 100 ){
      grades.push('A')
    }
    
  }
return grades
}
convertToGrade(arr)
//almost
// console.log(convertToGrade(arr)); 

///
function convertToGrade(arrayOfTestScores){
  var output = [];
  for (var i = 0; i < arrayOfTestScores.length; i++) {
    var grade = arrayOfTestScores[i];
    if(grade < 60){
      output.push('F');
    } else if (grade >= 60 && grade <= 70){
      output.push('D');
    } else if (grade > 70 && grade <=80){
      output.push('C');
    } else if (grade > 80 && grade <= 90){
      output.push('B');
    } else {
      output.push('A');
    }
  }
  return output;
}
console.log(convertToGrade([ 68, 74, 99, 45, 83, 95 ]));

//
function convertToGradeObjectForIn(arr){
  var output = [];
  var letterGrades = {
    "A": 90,
    "B": 80,
    "C": 70,
    "D": 60,
    "F": 0
  }
  for (prop in letterGrades){
    for (var i = 0; i < arr.length; i++){
      if (arr[i] >= letterGrades[prop]){
        output.push(prop)
      }
    }
  }
  return output;
}
///
scoresObject = {
    "A": [100, 90],
    "B": [89, 80],
    "C": [79, 70],
    "D": [69, 60],
    "F": [59, 0]
}

function scoresToGrades(scores) {
    return scores.map(function(elem) {
        for (prop in scoresObject) {
            if (elem <= scoresObject[prop][0] && elem >= scoresObject[prop][1]) {
                return prop;
            }
        }
    })    
}


// ajax

$.ajax({
  method: "POST",
  url: "some.php",
  data: { name: "John", location: "Boston" }
})
  .done(function( msg ) {
    alert( "Data Saved: " + msg );
  });
// Retrieve the latest version of an HTML page.

$.ajax({
  url: "test.html",
  cache: false
})
  .done(function( html ) {
    $( "#results" ).append( html );
  });
// Send an xml document as data to the server. 
// By setting the processData option to false, the automatic conversion of data to strings is prevented.

var xmlDocument = [create xml document];
var xmlRequest = $.ajax({
  url: "page.php",
  processData: false,
  data: xmlDocument
});
 
// xmlRequest.done( handleResponse );
// Send an id as data to the server, save some data to the server, and notify the user once it's complete. 
// If the request fails, alert the user.

var menuId = $( "ul.nav" ).first().attr( "id" );
var request = $.ajax({
  url: "script.php",
  method: "POST",
  data: { id : menuId },
  dataType: "html"
});
 
request.done(function( msg ) {
  $( "#log" ).html( msg );
});
 
request.fail(function( jqXHR, textStatus ) {
  alert( "Request failed: " + textStatus );
});

// Load and execute a JavaScript file.

$.ajax({
  method: "GET",
  url: "test.js",
  dataType: "script"
});

////////
// express CRUD
//index--new--create--show--edit--update--delete

//make a link
a(href="/students/new") add a new student

//make a new.jade file


var express = require('express');
var router = express.Router();

// GET /students ('index') is already there
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//build a GET route ('new')
router.get('/students/new', function(req, res, next){
  res.render('new'); //{objects for all but new }
})

// build POST /students ('create')
router.post('/students')

// build GET /students/:id/edit
router.get('students/:id/edit')

//build POST /students/:id
router.post('students/:id')

//build POST /students/:id/remove
router.post('students/:id/remove')


