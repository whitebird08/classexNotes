// var obj = {}
// console.log(undefined + 1|| "HELLO WORLD")
// console.log(obj["A"] || "HELLO WORLD")


var data = [{name: "Andrew"}, {name: "Emily"}, {name: "Andreas"}, {name: "Andrew"}];

data.map(function(personObj) {
   return personObj.name;
}).filter(function(elem) {
  return elem.indexOf("A") > -1;
}).reduce(function(obj, val) {
    obj[val] = obj[val] + 1 || 1
    return obj
}, {});

