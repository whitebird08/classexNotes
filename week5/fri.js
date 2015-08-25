// Write a function named subtractString that takes a string of arithmetic involving addition and returns the proper value. 
// For example subtractString("10-20-30"); would return -40 (as a Number).



// Write a function named divideString that takes a string of arithmetic involving addition and returns the proper value. 
// For example divideString("10/20"); would return 0.5 (as a Number). 
// What is the edge case in division? Do not worry about covering it but please explain what it is.



// What are the two fundamental characteristics of Objects?
state & behavior

+ operator has different properties than - operator

-----

general knowledge / interview prep 
https://medium.com/humans-create-software/how-do-you-judge-a-javascript-programmer-by-only-5-questions-f2abdf7dfd4a
--------

Example of CRUD:

C - db.students.insert({firstName: "Best", lastName: "Student"});
R - db.students.findOne({firstName: "Best", lastName: "Student"}); [one]
  - db.students.find({firstName: "Best", lastName: "Student"}); [all]
U - db.students.findAndModify({
        query: { foo: "bar" },
        update: { score: 10 }
    })
  - db.students.update({"score": 10}, {$set: {foo: 'bar'}})
D - db.students.remove(
       {foo: 'bar'},
       {
         justOne: true
       }
    )

db.interesting_documents.aggregate([
    { $match: {company: "Schaden Group"}},
    { $group: {
      _id: "$company",
      totalPrice: {$sum: "$price"}
    }}
  ]).result
///////

var fs = require('fs')
 var http = require('http');

//Lets define a port we want to listen to
 const PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
response.end('It Works!! Path Hit: ' + request.url);
}
//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

