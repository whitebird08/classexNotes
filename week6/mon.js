//mon

// Answer each of the following questions:

// What are the two fundamental characteristics of Objects?
State & Behavior

// What are the benefits of using a constructor vs Object.create?

// Given two arrays of Numbers, return an array containing elements common to both arrays, for example:
  var test1 = [1,2,3,4,5];
   var test2 = [3,4,7,8,9];


  
function match(array1, array2){
  var newArray = [];
  for(var i=0; i<array1.length; i++){
   for(var j=0; j<array2.length; j++)
    if([i] == [j]){
      newArray.push[i]}
      
  }
  return newArray
}
//if (array1.indexOf.array2 == array1[i])

match([1,2,3,4,5],[3,4,7,8,9]);

i


//   console.log(intersection(test1, test2)); // [3,4]

//   var test3 = [];
//   console.log(intersection(test1, test3)); // []
//   console.log(intersection(test2, test3)); // []
// Given a string, determine if all of the characters in the string are unique or not. This function, allCharsUnique should return a Boolean value.
function allCharsUnique(x){
  string.indexOf(x) = false
  return true
}

string.indexOf(lastIndexOf) = 
-------------

//modeling-data

#2 - Diagram => Code

Business.prototype.nameAndSlogan = function (first_argument) {
  return this.name + ' (' + this.slogan + ')'
};

var Address = function (street, cityStateZip) {
  this.street = street
  this.cityStateZip = cityStateZip
}

var acme = new Business("Acme", "All the chemicals you need!")
acme.address = new Address("15 Main", "New York, NY 10012")

// NOTE: not all "attributes" from a Class Diagram need to be sent into the constructor.  Some can be set later.

// Also note that a Business can only have 1 address, not many.

var Student = function (firstName, lastName, dateOfBirth) {
  this.firstName = firstName
  this.lastName = lastName
  this.dateOfBirth = dateOfBirth
  this.books = []
}

Student.prototype.age = function () {
  // calculate age here...
}

var Book = function (title, price) {
  this.title = title
  this.price = price
}

var joe = new Student('Joe', 'Jo', '12/12/1973')
joe.books.push(new Book('Cracking the Coding Interview', 12.99))

// The class name (Student) is at the top
// The attributes (first_name, last_name, date_of_birth) are in the middle
// The methods (age) are at the bottom

var Deck = function () {
  this.cards = []
}

Deck.prototype.addCard = function (card) {
  this.cards.push(card)
};

var Card = function (suit, cardNumber) {
  this.suit = suit
  this.cardNumber = cardNumber
  this.faceUp = false
}

Card.prototype.flip = function () {
  this.faceUp = !this.faceUp
};

-----
// Write a function named find which takes an array and an element as parameters, 
// and returns the element if it exists in array, otherwise it returns null. 
// Do not use Array.prototype.indexOf in your implementation.

function find(array, element) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === element) return element;
  }
  return null;
}

console.log(find([1,2,3,4], 3)); // 3
console.log(find([1,2,3],0)); // null
---

// Write a function named sumBy which takes an array of Objects, each of which has totalPrice and department properties.
//  The function should return an Object containing the sum of totalPrice by department. Here is sample usage:

// var data = [
//   {department: 'Food', totalPrice: 10},
//   {department: 'Food', totalPrice: 14},
//   {department: 'Not Food', totalPrice: 2},
//   {department: 'Not Food', totalPrice: 682}
// ];
// console.log(sumBy(data));
// { Food: 24, 'Not Food' : 684 }

function sumBy(array) {
  var output = {}, currentVal;

  for (var i = 0; i < array.length; i++) {
    currentVal = output[array[i].department] || 0;
    output[array[i].department] = currentVal + array[i].totalPrice;
  }

  return output;
}

var data = [
  {department: 'Food', totalPrice: 10},
  {department: 'Food', totalPrice: 14},
  {department: 'Not Food', totalPrice: 2},
  {department: 'Not Food', totalPrice: 682}
];

console.log(sumBy(data)); // { Food: 24, 'Not Food' : 684 }

---
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
1.


// Write a query to find every document in the products collection.
db.collection.find({products})
// Write a query to find out how many products belong to the company "Schoen-Emard".
db.products.find({company: "Schoen-Emard"})
// Write a query to find all products that belong to the company "Schoen-Emard" in the "Games, Health & Home" department.
db.products.aggregate([ 
  { $match: {company: "Schoen-Emard"}},
  { $match: {department: "Games, Health & Home"}}
  ])
// Write a query to find all products that belong to the company "Schoen-Emard" in the "Games, Health & Home" department with a price over $90.00.
db.products.find(
  { company: 'Schoen-Emard',
    department: "Games, Health & Home",
    price:{$gt: 90.00} 
  }
  )
// Write a query to find all products that belong to either company of "Schaden Group" and "Fay, Ryan and Deckow", 
  // but only returnsn the product itself, not the company, department or price.
db.products.aggregate([
  {$match: {$or: [{company: "Schaden Group"}, {company:"Fay, Ryan and Deckow"}]}},
 { $project: {_id:0, product: 1}}
])
// Use the aggregation pipeline to return all products that belong to the company "Kub-Hansen".
db.products.aggregate(
  [ { $match : { company : "Kub-Hansen" } } ]
  );
// Use the aggregation pipeline to return all products with a price greater than $10.00 and less than $60.00.
db.products.aggregate(
  [{ $match: { price : { $gt : 10.00, $lt : 60.00 } } }]
  );
// Use the aggregation pipeline to return a count of the number of products with a price greater than $10.00 and less than $60.00.
db.products.aggregate( [
                      { $match: { price : { $gt : 10.00, $lt : 60.00 } } },
                       {$group: {_id: null, count: {$sum: 1 } } }
                      ] );

// Use the aggregation pipeline to compute the sum of all products sold by the company "Kub-Hansen"?
db.products.aggregate( [
                      { $match: { company : "Kub-Hansen" }},
                       {$group: {
                        _id: "$company", 
                        totalPrice: {$sum: "$price" } } }
                      ] );
// You will need to write a query or use the aggregation pipeline to answer each of their demands.



db.products.aggregate([
    { $match: {company: "Schoen-Emard"}},
    { $group: {
      _id: "$company",
      totalPrice: {$sum: "$price"}
    }}
  ])










