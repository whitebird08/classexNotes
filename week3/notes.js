var myBankAccount = {
  accountHolder: 'Instructor 1',
  checkingBalance : 100,
  savingsBalance : 200
  addToChecking : function(dollarAmount){
                  this.checkingBalance += dollarAmount;}                 
};



var firstHouse = {
  color: 'red',
  windows: false,
  paintHouse: function(newColor) {
    this.color = newColor;
  }
};

var secondHouse = {
  color: 'blue',
  windows: true,
  paintHouse: function(newColor) {
    this.color = newColor;
  }
};

var thirdHouse = {
  color: 'yellow',
  windows: true,
  paintHouse: function(newColor) {
    this.color = newColor;
  }
};

function House(color,windows){
  this.color = color;
  this.windows = windows;
  this.paintHouse = function(newColor){
                      console.log(this)
                    };
}

var vampHouse = new House ("green", false);
vampHouse.paintHouse("blurple")

var partyHouse = new House ("flourescent", true);
partyHouse.paintHouse("beige", false)

var paintHouse = function (newColor){
  this.color = newColor
};

var vampHouse = new House (false, "green");
console.log(vampHouse);
paintHouse.apply(vampHouse, ["blurple"]);
console.log(vampHouse);
/////////////////////////////////
//syntax  <function>.apply(object, [arg1, arg2, arg3])

  //What is this in Javascript?
  this is a feature that provides powerful access to objects in the current execution context.
  //Provide a code example that uses this in the context of a method which refers to its own properties.
  var myBankAccount = {
    accountHolder: 'Instructor 1',
    checkingBalance : 100,
    savingsBalance : 200
    addToChecking : function(dollarAmount){
                    this.checkingBalance += dollarAmount;}                 
  };

  //Provide a code example that uses this in the context of a constructor to set initial values for an instance.
  function House(color,windows){
    /* constructor*/ this.color = color;
                    this.windows = windows;
                    this.paintHouse = function(newColor){
                                        this.color = newColor
                                      };
                  }

  var vampHouse = new House ("green", false);
  vampHouse.paintHouse("blurple")

  var anotherHouse = new House ("blue", true);
///////////////////////////////////////////////////////








