var assert = require('../assert.js');

Palindrome = (function(){
    function Palindrome(){
        var self = this;

        if(!(self instanceof Palindrome)){
            self = new Palindrome();
        }

        self.items = [];
        self.center = null;

        return self;
    };

    Object.defineProperty(Palindrome.prototype, 'value', {
        get: function(){
            var value = this.items;
            if(this.center){
                value.push(this.center);
            }
            return value.concat(this.items.slice().reverse());
        },
        set: function(value){
            // If there is an even number of items, we can just split in half.
            if(value.length % 2 === 0){
                this.center = null;
                this.items = value.slice(0, value.length/2);
            }
            // If there is an odd number, we have to take out the center
            else {
                this.center = value[(value.length - 1)/2];
                this.items = value.slice(0, (value.length - 1)/2);
            }
        }
    });

    return Palindrome;
})();

function PalindromeIterator(palindrome){
    var index = -1;
    return function(){
        index ++
        return palindrome.value[index];
    }
}

function arrayEqual(a1, a2){
    return JSON.stringify(a1) === JSON.stringify(a2);
};

function testPalindrome(p){
    p.value = "aba".split('');
    assert(arrayEqual(p.items, ["a"]), "Items correct on odd length palindrome.");
    assert(p.center === "b", "Center correct on odd length palindrome.");

    p.value = "abba".split('');
    assert(arrayEqual(p.items, ["a", "b"]), "Items correct on even length palindrome.");
    assert(p.center === null, "Center correct on even length palindrome.");
}

// Make sure it's new agnostic
testPalindrome(new Palindrome());
testPalindrome(Palindrome());

var palindrome = new Palindrome();
palindrome.value = "abbccdccbba".split('');
iterator = new PalindromeIterator(palindrome);
console.log(iterator());
console.log(iterator());
console.log(iterator());
console.log(iterator());
console.log(iterator());
console.log(iterator());