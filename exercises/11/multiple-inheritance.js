var assert = require("../assert");

function X(){}
X.prototype.a = 1

function Y(){}
X.prototype.b = 2


function Z(){}
Z.prototype = X.prototype;
Z.prototype.prototype = Y.prototype;

z = new Z();

assert(z.a === 1, "Instances of z inherit from X.prototype");
assert(z.b === 2, "Instances of z inherit from Y.prototype");

X.prototype.a = 3;
Y.prototype.b = 4;

assert(z.a === 3, "Instances of z inherit from a modified X.prototype");
assert(z.b === 4, "Instances of z inherit from a modified Y.prototype");

X.prototype.b = 5;

assert(z.b === 5, "Instances of z inherit from a value defined on Y.prototype when it is added to X.prototype from X.prototype rather than Y.prototype.");

Y.prototype.a = 6;

assert(z.a !== 6, "Instances of z do not inherit a value defined on Y if it is also defined on b.")