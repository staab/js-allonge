
var Car = (function(){
    function Car(){
        this.speed = 0;
    };

    Car.prototype.accelerate = function accelerate(value){
        var newSpeed = this.speed + value;

        if(newSpeed > this.getMaxSpeed()){
            newSpeed = this.getMaxSpeed();
        }

        this.speed = newSpeed;
    };
    Car.prototype.decelerate = function decelerate(value){
        var newSpeed = this.speed - value;
        
        if(newSpeed < 0){
            newSpeed = 0;
        }

        this.speed = newSpeed;
    };

    return Car;
})();

var car = new Car();
car.getMaxSpeed = function getMaxSpeed(){
    return 65;
};

var assert = require("../assert.js");
car.accelerate(30);
assert(car.speed === 30, "Accelerate succeeded.");
car.accelerate(40);
assert(car.speed === car.getMaxSpeed(), "Max speed applied on excessive acceleration.");
car.decelerate(20);
assert(car.speed === car.getMaxSpeed() - 20, "Decelerate succeeded.");
car.decelerate(car.getMaxSpeed());
assert(car.speed === 0, "Min speed of 0 applied on excessive deceleration.");