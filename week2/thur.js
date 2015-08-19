var tv = {
  currentChannel: null,
  on: false,
  turnOn: function () {
    this.on = true;
  }
  turnOff: function (){
    this.on = false;
  }
  // changeChannel: function (newChannel){
        //additional logic goes here
        this. currentChannel = newChannel
      return this.currentChannel;
  }
};

console.log(tv.changeChannel(100));  //100
console.log(tv.currentChannel); //100


var checkingAccount = {

  balance: 
  accountHolder:
  deposit: function(amount) {
    if(amount)return false;
    this.balance += amount;
      return true;

  }
}



/*
//not finished////
var laptop = {
  on: false,
    turnOn: function () {
      this.on = true;
      }
    turnOff: function (){
      this.off = false
    }
  
  asleep: false,
  
  daysSinceRestart: null

    function count(daysSinceRestart){
      if (count) == 0 {
        function resetCount(){
        return count = 0
        }
      
      }
    }
}

*/


var coffeeMug = {
  full: false,
  capacityInOz: 12,
  color: "orange"
  fill: function (){
          this.full = true;
          },
  empty: function (){
    this.full = false;
  }        
}























