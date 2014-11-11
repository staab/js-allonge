var Car = (function (){
    function Car(){
        this.speed = 0;
    };

    Car.prototype.accelerate = function accelerate(name, value){
        var newValue = this[name] + value;

        if(newValue > this["max_" + name]){
            newValue = this["max_" + name];
        }

        this[name] = newValue;
    };
    Car.prototype.decelerate = function decelerate(name, value){
        var newValue = this[name] - value;
        
        if(newValue < 0){
            newValue = 0;
        }

        this[name] = newValue;
    };

    return Car;
})();

var Rocket = (function(){
    function Rocket(){
        this.altitude = 0;
    }

    Rocket.prototype = Car.prototype;

    return Rocket;
})();

var rocket = new Rocket();
rocket.max_altitude = Infinity;
console.log(rocket.altitude);
rocket.accelerate('altitude', 1000);
console.log(rocket.altitude);
rocket.accelerate('altitude', 1000);
console.log(rocket.altitude);
rocket.accelerate('altitude', 1000);
console.log(rocket.altitude);
rocket.accelerate('altitude', 1000);
console.log(rocket.altitude);
rocket.accelerate('altitude', 1000);
console.log(rocket.altitude);


var car = new Car();
car.max_speed = 85
console.log(car.speed);
car.accelerate('speed', 50);
console.log(car.speed);
car.accelerate('speed', 50);
console.log(car.speed);
car.accelerate('speed', 50);
console.log(car.speed);