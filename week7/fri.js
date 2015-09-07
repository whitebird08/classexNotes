// What is the difference between call and apply? Provide an example of each in your explanation.
function Novels (numPages, timePeriod, author) {
  this.numPages = numPages;
  this.timePeriod = timePeriod;
  this.author = author;
}

function MurakamiNovels (numPages, timePeriod) {
  Novels.apply(this, [numPages, timePeriod]);
  this.weird = true;
  this.author = "Murakami"
}

MurakamiNovels.prototype = Novels.prototype;
MurakamiNovels.prototype.constructor = MurakamiNovels;

var kafkaOnTheShore = new MurakamiNovels(532, "present")
console.log(kafkaOnTheShore)
// Write a function charCounts that when given a string, produces a map of character counts. Usage would look like:
// > console.log(charCounts("This is a string!!!"))
// { T: 1, h: 1, i: 3, s: 3, ' ': 3, a: 1, t: 1, r: 1, n: 1, g: 1, '!': 3 }

// > console.log(charCounts("!Data!Is~The*Coolest"))
// { '!': 2,
//   D: 1,
//   a: 2,
//   t: 2,
//   I: 1,
//   s: 2,
//   '~': 1,
//   T: 1,
//   h: 1,
//   e: 2,
//   '*': 1,
//   C: 1,
//   o: 2,
//   l: 1 }
function charCounts(string){
  var newArray =[]
  var obj = {}
  string.split('').sort()
  newArray.forEach(function(){
    newArray.forEach(function(){
      if([i] !=[j]){add new property to obj
      }else{[i] += 1}
      }
    })
    return obj
  })

}

  /////////////
  function reCharCounts(string,out){
    if(string.length == 0){
        return out
    }
    out[string[0]] == undefined ? out[string[0]] = 1 : out[string[0]] = out[string[0]] + 1
    return reCharCounts(string.slice(1), out)
}

reCharCounts("This is a string!!!",{})

//Refactor
function reCharCounts(string){    
    function go(string, out){
        if(string.length == 0){
            return out
        }

        out[string[0]] == undefined ? out[string[0]] = 1 : out[string[0]] = out[string[0]] + 1
        return go(string.slice(1), out)
    }
    return go(string,{})
}

// reCharCounts("This is a string!!!”)
// ///////
function charCounts(str) {
  return str.split('').reduce(function(obj, val){
    obj[val] = obj[val] + 1 || 1;
    return obj;
  }, {})
}

// Write constructors that make the following examples work:
// // 1. construct cows that can moo
// > var bessy = new Cow("Bessy", 10);
// > console.log(bessy.moo());
// moooooooo I'm Bessy moooooooo!!!!!!
// > var mooey = new Cow("Mooey", 2);
// > console.log(mooey.moo());
// moooooooo I'm Mooey moooooooo!!!!!!
// > var chewy = new Cow("Chewy", 1);
// > console.log(chewy.moo());
// moooooooo I'm Chewy moooooooo!!!!!!
// // 2. construct a farm full of cows, where all cows can be called on to moo in turn
// > var farm = new CowFarm([bessy, mooey, chewy]);
// > console.log(farm.mooInOrder());
// moooooooo I'm Bessy moooooooo!!!!!!
// moooooooo I'm Mooey moooooooo!!!!!!
// moooooooo I'm Chewy moooooooo!!!!!!
function CowFarm(names) {
  this.mooInOrder = function() {
    var result = names.map(function(name) {
      return name.moo();  
    });
    return result.join('\n');
  }
}

var farm = new CowFarm([bessy, mooey, chewy]);

console.log(farm.mooInOrder());
