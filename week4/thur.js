function Bike(color) {
    this.color = color;
    this.pedal = true;
    //this.stopPedaling = function () {
    //    this.pedal = false
    //}
}

Bike.prototype.stopPedaling = function () {
    this.pedal = false
};

var bike1 = new Bike();
var bike2 = new Bike();

console.log(bike1.stopPedaling === bike2.stopPedaling);

prototype vs constructor

prototype is in 1 place

method on instance => multiple places
  method is baked into constructor

