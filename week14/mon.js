// Create an electric car that can go 100 miles per charge.

// You'll need to charge the car to go anywhere.

// When you drive the miles you have left should go down.

// When your miles left are gone you'll need to charge the car again.

// Every 400 mile an error in the software occurs.
var milesTraveled;
var electric car;  //can go 100 mpc
var charge; // increaseMiles / decreaseMiles
var milesLeft; //decrease
var milesPerCharge;
var drive;
var message;
var mileage;


if (milesLeft = 0) prompt 'charge car again'
if (miles === 400) throw error

describe('charge', function(){
  beforeEach(function(){
    electricCar = new ElectricCar('milesLeft', milesPerCharge, milesTraveled)
  })
})

describe('charge', function(){
  it('should go 100 milesPerCharge', function(){
    expect(electricCar.milesTraveled(100)).toEqual('true');
  })
})

describe('charge', function(){
  it('should go anywhere', function(){
    expect(electricCar.milesLeft(0).toEqual('false'));
  })
})

describe('charge', function(){
  it('should reduce miles when you drive');
  expect(electricCar.drive(true).toEqual(electricCar.decreaseMiles(true)))
})

describe('charge', function(){
  it('should need new charge when miles are gone');
  expect(electricCar.milesLeft(0).toEqual(electricCar.message('please charge again')))

describe('charge', function(){
  it('should need new charge when miles are gone');
  expect(electricCar.milage(400).toEqual(electricCar.message('error')))

})




describe()

////////////////////////
var Car = require('../car');

describe('Car', function() {
  it("charges the car", function() {
    var car = new Car();
    expect(car.battery).toEqual(0);

    car.charge(5);
    expect(car.battery).toEqual(10);

    car.charge(6);
    expect(car.battery).toEqual(22);
  });

  it("uses battery when driving", function() {
    var car = new Car();
    car.charge(10);
    expect(car.battery).toEqual(20);

    car.drive(10);
    expect(car.battery).toEqual(10);
  });

  it("can run out of battery life", function() {
    var car = new Car(10);
    car.charge(10);
    expect(car.battery).toEqual(20);
    car.drive(20);
    expect(car.battery).toEqual(0);

    expect(car.drive(10)).toEqual('Out of battery.')
  });

  it("has a bug in the software", function() {
    var car = new Car(420);
    expect(car.drive(400)).toEqual('EE GOO KUR GURT');
    expect(car.battery).toEqual(0);
  });

  it("increments the odometer when driving", function() {
    var car = new Car(10);
    expect(car.odometer()).toEqual(0);
    car.drive(50);
    expect(car.odometer()).toEqual(50);
    car.drive(25);
    expect(car.odometer()).toEqual(75);
  });
});


