var Pipe = (function(){
    function Pipe(){
        // Magix - return the callable as the pipe. Set its prototype to the 
        // prototype of pipe so that the constructor stuff makes sense. After
        // that, set Pipe's prototype to Function's prototype to get the
        // callable functionality.
        function callable(value){
            callable.functions.map(function(fn, index){
                value = fn.call(callable.obj, value);
            });
            return value;
        };
        callable.__proto__ = Pipe.prototype;

        callable.obj = void 0;
        callable.functions = [];

        return callable;
    };

    Pipe.prototype = Function.prototype;

    Pipe.prototype.setObject = function setObject(obj){
        this.obj = obj;
        return this;
    };
    Pipe.prototype.prepend = function prepend(fn){
        this.functions.unshift(fn);
        return this;
    };
    Pipe.prototype.append = function append(fn){
        this.functions.push(fn);
        return this;
    };
    Pipe.prototype.insert = function insert(index, fn){
        this.functions.splice(index, 0, fn);
        return this;
    };

    return Pipe;
})();

var assert = require("../assert.js"),

// Actual order:
// ((((value - 2) + 10) + 2) * 2)
var pipe = new Pipe();
pipe.append(function(v){ return v + 2; });
pipe.append(function(v){ return v * 2; });
pipe.prepend(function(v){ return v - 2; });
pipe.insert(1, function(v){ return v + 10; });
assert(pipe(3) === 26, "Piping 3 returned 26.");
assert(pipe(-3) === 14, "Piping -3 returned 14.");
assert(pipe(-20) === -20, "Piping -20 returned 26.");