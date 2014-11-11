var Car = (function (){
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

var Truck = (function(){
    function Truck(){
        Car.prototype.constructor.call(this);
        this.bedFilled = 0;
        this.bedCapacity = 500;
    };

    Truck.prototype = Car.prototype;

    Truck.prototype.fillBed = function fillBed(amount){
        var newAmount = this.bedFilled + amount;
        if(newAmount > this.bedCapacity){
            newAmount = this.bedCapacity;
        }
        this.bedFilled = newAmount;
    };
    Truck.prototype.removeFromBed = function fillBed(amount){
        var newAmount = this.bedFilled - amount;
        if(newAmount < 0){
            newAmount = 0;
        }
        this.bedFilled = newAmount;
    };

    return Truck;
})();

var truck = new Truck();
truck.getMaxSpeed = function getMaxSpeed(){
    return 55;
};

var assert = require("../assert.js");

truck.accelerate(30);
assert(truck.speed === 30, "Accelerate succeeded.");
truck.accelerate(40);
assert(truck.speed === truck.getMaxSpeed(), "Max speed applied on excessive acceleration.");
truck.decelerate(20);
assert(truck.speed === truck.getMaxSpeed() - 20, "Decelerate succeeded.");
truck.decelerate(truck.getMaxSpeed());
assert(truck.speed === 0, "Min speed of 0 applied on excessive deceleration.");

truck.fillBed(300);
assert(truck.bedFilled === 300, "FillBed succeeded.");
truck.fillBed(400);
assert(truck.bedFilled === truck.bedCapacity, "Max capacity applied on excessive bed filling.");
truck.removeFromBed(200);
assert(truck.bedFilled === truck.bedCapacity - 200, "Remove from bed succeeded.");
truck.removeFromBed(truck.bedCapacity);
assert(truck.bedFilled === 0, "Min capacity of 0 applied on excessive bed removal.");