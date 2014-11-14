function C(list){
    this.numbers = list;
}

function mixinSum(constructor){
    constructor.prototype.sum = function(){
        var sum = 0, i;
        for(i = 0; i < this.numbers.length; i++){
            sum += this.numbers[i];
        }
        return sum;
    }
}

mixinSum(C);

c = new C([1, 2, 3]);
console.log(c.sum());

function C(list){
    this.numbers = list;
}

function SumDecorator(Constructor){
    function Decorated(list){
        Constructor.apply(this, arguments);
    };
    Decorated.prototype = new Constructor();
    Decorated.prototype.sum = function(){
        var sum = 0, i;
        for(i = 0; i < this.numbers.length; i++){
            sum += this.numbers[i];
        }
        return sum;
    }

    return Decorated;
}

var D = SumDecorator(C);

d = new D([1, 2, 3]);
console.log(d.sum());

c = new C([1, 2, 3]);
console.log(c.sum());